/* =========================================================
  REWORK BLOG — blog.js
  Dependency-free. Runs alongside js/main.js.
  Modules: reading progress, TOC auto-build + scrollspy,
  category filter on /blog/ listing.
  ========================================================= */
(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Reading progress (article pages) ---------- */
  const progressBar = $('#reading-progress');
  if (progressBar) {
    const setP = p => progressBar.style.transform = `scaleX(${p})`;
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);
    if (window.innerHeight === document.documentElement.scrollHeight) setP(0);
    else onScroll();
  }

  /* ---------- TOC: auto-build from article headings ---------- */
  const tocWrap = $('#toc');
  const prose = $('.prose');
  if (tocWrap && prose) {
    const headings = $$('h2', prose);
    if (headings.length) {
      headings.forEach((h, i) => {
        if (!h.id) h.id = 'sekcja-' + (i + 1);
      });
      const ol = document.createElement('ol');
      headings.forEach(h => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        ol.appendChild(li);
      });
      const title = document.createElement('p');
      title.className = 'toc__title';
      title.textContent = 'Spis treści';
      tocWrap.appendChild(title);
      tocWrap.appendChild(ol);

      /* Scrollspy */
      if ('IntersectionObserver' in window) {
        const links = $$('a', tocWrap);
        const spy = new IntersectionObserver(entries => {
          entries.forEach(en => {
            if (!en.isIntersecting) return;
            links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
          });
        }, { rootMargin: '-15% 0px -70% 0px' });
        headings.forEach(h => spy.observe(h));
      }
    }
  }

  /* ---------- Category filter (blog listing) ---------- */
  const filters = $('.filters');
  const posts = $$('.post');
  if (filters && posts.length) {
    const btns = $$('button', filters);
    const counts = {};
    posts.forEach(p => {
      (p.dataset.cats || '').split(' ').filter(Boolean).forEach(c => { counts[c] = (counts[c] || 0) + 1; });
    });
    btns.forEach(b => {
      const c = b.dataset.filter || 'wszystkie';
      if (c !== 'wszystkie' && counts[c]) {
        const badge = document.createElement('b');
        badge.textContent = counts[c];
        b.appendChild(badge);
      }
    });
    const empty = $('.posts-empty');

    const apply = value => {
      let shown = 0;
      posts.forEach(p => {
        const show = value === 'wszystkie' || (p.dataset.cats || '').split(' ').includes(value);
        p.hidden = !show;
        if (show) shown++;
      });
      btns.forEach(b => b.classList.toggle('is-active', b.dataset.filter === value));
      if (empty) empty.style.display = shown ? 'none' : 'block';
      const grid = $('.posts');
      if (grid) grid.classList.toggle('is-filtered', value !== 'wszystkie');
    };

    const readHash = () => {
      const v = location.hash.slice(1).replace(/^cat-/, '');
      if (btns.some(b => b.dataset.filter === v)) apply(v);
    };
    btns.forEach(b => b.addEventListener('click', () => {
      apply(b.dataset.filter);
      history.replaceState(null, '', b.dataset.filter === 'wszystkie' ? ' ' : '#' + b.dataset.filter);
    }));
    window.addEventListener('hashchange', readHash);
    readHash();
  }

  /* ---------- Lazy-optimised iframes (if any are ever added) ---------- */
  const iframes = $$('iframe[data-src]');
  iframes.forEach(f => (f.src = f.dataset.src, f.removeAttribute('data-src')));

  /* ---------- Gentle reveal for continuing content ---------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    $$('.stagger').forEach(el => io.observe(el));
  }
})();