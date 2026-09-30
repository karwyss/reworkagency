/* =========================================================
  REWORK — main.js
   Lightweight, dependency-free. ~7 KB.
   ========================================================= */
(() => {
  'use strict';

  /* ---------- CONFIG ----------
     Formularz działa bez backendu. Masz 3 opcje:
     1) FORM_ENDPOINT = ''  → tryb "mailto": po walidacji otwiera się klient poczty
        z gotową wiadomością i pokazuje się success state.
     2) Wklej endpoint z Formspree / Web3Forms / Getform / Basin, np.
        'https://formspree.io/f/xxxxxxx'  → wysyłka przez fetch (JSON), bez serwera po Twojej stronie.
     3) Własny backend (PHP/Node) przyjmujący JSON.
  */
  const FORM_ENDPOINT = 'a622411b-37c7-45ca-ba03-9e9901b87e90';
  const CONTACT_EMAIL = 'karwys08@gmail.com';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Navbar ---------- */
  const nav = $('.nav');
  const burger = $('.burger');
  const menu = $('#menu');

  const onScrollNav = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
  window.addEventListener('load', onScrollNav);
  window.addEventListener('scroll', onScrollNav, { passive: true });

  const closeMenu = () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Otwórz menu');
    document.body.classList.remove('is-locked');
  };
  const openMenu = () => {
    nav.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Zamknij menu');
    document.body.classList.add('is-locked');
  };
  burger.addEventListener('click', () => (nav.classList.contains('is-open') ? closeMenu() : openMenu()));
  $$('a', menu).forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.matchMedia('(min-width: 981px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

  /* ---------- Active nav link ---------- */
  const navLinks = $$('.nav__menu a[href^="#"]');
  const sections = navLinks.map(a => $(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => spy.observe(s));
    const heroEl = $('.hero');
    if (heroEl) new IntersectionObserver(([en]) => {
      if (en.isIntersecting) navLinks.forEach(a => a.classList.remove('is-active'));
    }, { rootMargin: '-40% 0px -55% 0px' }).observe(heroEl);
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$('.reveal, .flow');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Card spotlight (mouse position → CSS vars) ---------- */
  if (finePointer) {
    $$('.card--spot').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  }

  /* ---------- Hero parallax (subtle) ---------- */
  const stage = $('.stage');
  if (stage && !reduceMotion && !(window.innerWidth < 768)) {
    const layers = $$('[data-depth]', stage);
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null, scrollY0 = 0;
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      layers.forEach(l => {
        const d = +l.dataset.depth / 100;
        const sy = scrollY0 * d * -0.35;
        l.style.setProperty('--px', (cx * d * 18).toFixed(2) + 'px');
        l.style.setProperty('--py', (cy * d * 18 + sy).toFixed(2) + 'px');
      });
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) raf = requestAnimationFrame(tick);
      else raf = null;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    if (finePointer) {
      const hero = $('.hero');
      hero.addEventListener('pointermove', e => {
        const r = hero.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
        kick();
      });
      hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; kick(); });
    }
    const desktop = window.matchMedia('(min-width: 981px)');
    window.addEventListener('scroll', () => {
      if (!desktop.matches) return;
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      scrollY0 = y;
      kick();
    }, { passive: true });
  }

  /* ---------- Process timeline progress ---------- */
  const timeline = $('#timeline');
  const progress = $('#timeline-progress');
  if (timeline && progress && window.innerWidth >= 768) {
    const steps = $$('.step', timeline);
    const update = () => {
      const r = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.62 - r.top) / r.height));
      progress.style.setProperty('--p', (p * 100).toFixed(2) + '%');
      steps.forEach(s => {
        const sr = s.getBoundingClientRect();
        s.classList.toggle('is-passed', sr.top + sr.height * 0.5 < vh * 0.62);
      });
    };
    window.addEventListener('load', update);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* ---------- Stats counter (only when a real number is present) ---------- */
  const counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        const raw = en.target.textContent.trim().replace(/\s/g, '');
        const target = parseFloat(raw.replace(',', '.'));
        if (!isFinite(target) || reduceMotion) return;
        const dur = 1400, t0 = performance.now();
        const ease = t => 1 - Math.pow(1 - t, 3);
        const frame = now => {
          const t = Math.min(1, (now - t0) / dur);
          en.target.textContent = Math.round(target * ease(t)).toString();
          if (t < 1) requestAnimationFrame(frame); else en.target.textContent = raw;
        };
        requestAnimationFrame(frame);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  }

  /* ---------- FAQ accordion (animated open/close for <details>, single-open) ---------- */
  const accs = $$('.acc');
  const closeAcc = d => new Promise(res => {
    if (!d.open) return res();
    const panel = $('.acc__panel', d);
    d.classList.add('is-closing');
    let done = false;
    const finish = () => { if (done) return; done = true; d.open = false; d.classList.remove('is-closing'); panel.removeEventListener('transitionend', finish); res(); };
    panel.addEventListener('transitionend', finish);
    setTimeout(finish, 600);
  });
  const openAcc = d => {
    d.classList.add('is-closing');          // start collapsed (0fr)
    d.open = true;
    requestAnimationFrame(() => requestAnimationFrame(() => d.classList.remove('is-closing'))); // → 1fr
  };
  accs.forEach(d => {
    $('summary', d).addEventListener('click', e => {
      e.preventDefault();
      if (reduceMotion) { const willOpen = !d.open; accs.forEach(o => { o.open = false; }); d.open = willOpen; return; }
      if (d.open) { closeAcc(d); return; }
      accs.filter(o => o !== d && o.open).forEach(closeAcc);
      openAcc(d);
    });
  });

  /* ---------- Sticky mobile CTA ---------- */
  const sticky = $('#sticky-cta');
  const hero = $('.hero');
  const contact = $('#kontakt');
  if (sticky && hero && contact && 'IntersectionObserver' in window) {
    let heroOut = false, contactIn = false;
    const apply = () => {
      const show = heroOut && !contactIn && !nav.classList.contains('is-open');
      sticky.classList.toggle('is-visible', show);
      sticky.setAttribute('aria-hidden', String(!show));
      $('a', sticky).tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(([en]) => { heroOut = !en.isIntersecting; apply(); }, { threshold: 0.15 }).observe(hero);
    new IntersectionObserver(([en]) => { contactIn = en.isIntersecting; apply(); }, { threshold: 0.05 }).observe(contact);
    burger.addEventListener('click', apply);
  }

  /* ---------- Pre-select service from CTA links ---------- */
  const serviceSelect = $('#f-service');
  $$('[data-pick]').forEach(a => a.addEventListener('click', () => {
    if (!serviceSelect) return;
    const want = a.dataset.pick;
    [...serviceSelect.options].forEach(o => { if (o.text === want) serviceSelect.value = o.value || o.text; });
    serviceSelect.closest('.field')?.classList.remove('is-invalid');
  }));

  /* ---------- Contact form ---------- */
  const form = $('#contact-form');
  if (form) {
    const alertBox = $('.form__alert', form);
    const submitBtn = $('.form__submit', form);
    const success = $('#form-success');
    const again = $('#form-again');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRe = /^[+\d][\d\s\-()]{6,}$/;

    const setErr = (el, msg) => {
      const field = el.closest('.field');
      if (!field) return;
      const out = $('.field__err', field);
      field.classList.toggle('is-invalid', !!msg);
      if (out) out.textContent = msg || '';
      if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
    };

    const validators = {
      name: v => v.trim().length < 2 ? 'Podaj swoje imię.' : '',
      email: v => !v.trim() ? 'Podaj adres email.' : (!emailRe.test(v.trim()) ? 'Ten adres email wygląda na niepoprawny.' : ''),
      phone: v => v.trim() && !phoneRe.test(v.trim()) ? 'Ten numer telefonu wygląda na niepoprawny.' : '',
      service: v => !v ? 'Wybierz usługę, która Cię interesuje.' : '',
      message: v => v.trim().length < 10 ? 'Napisz kilka słów więcej (min. 10 znaków).' : '',
      consent: (v, el) => !el.checked ? 'Potrzebna jest zgoda, żebym mógł odpowiedzieć.' : ''
    };

    const validateField = el => {
      const fn = validators[el.name];
      if (!fn) return true;
      const msg = fn(el.value, el);
      setErr(el, msg);
      return !msg;
    };

    // live validation after first blur
    $$('input, select, textarea', form).forEach(el => {
      if (el.classList.contains('hp') || el.type === 'radio') return;
      el.addEventListener('blur', () => validateField(el));
      el.addEventListener('input', () => { if (el.closest('.field')?.classList.contains('is-invalid')) validateField(el); });
      el.addEventListener('change', () => validateField(el));
    });

    const showAlert = msg => { alertBox.textContent = msg; alertBox.hidden = false; };
    const hideAlert = () => { alertBox.hidden = true; alertBox.textContent = ''; };
    const setLoading = on => { submitBtn.classList.toggle('is-loading', on); submitBtn.disabled = on; submitBtn.setAttribute('aria-busy', String(on)); };

    const collect = () => {
      const fd = new FormData(form);
      return {
        name: fd.get('name')?.trim(), company: fd.get('company')?.trim(), email: fd.get('email')?.trim(),
        phone: fd.get('phone')?.trim(), service: fd.get('service'), budget: fd.get('budget') || 'nie podano',
        message: fd.get('message')?.trim(), page: location.href
      };
    };

    const sendViaEndpoint = async data => {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...data, _subject: `Nowe zapytanie: ${data.service} — ${data.name}` })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
    };

    const sendViaMailto = data => new Promise(resolve => {
      const subject = `Zapytanie ze strony REWORK — ${data.service}`;
      const body = [
        `Imię: ${data.name}`, `Firma: ${data.company || '-'}`, `Email: ${data.email}`, `Telefon: ${data.phone || '-'}`,
        `Usługa: ${data.service}`, `Budżet: ${data.budget}`, '', 'Wiadomość:', data.message
      ].join('\n');
      setTimeout(() => {
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        resolve();
      }, 700);
    });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      hideAlert();
      if ($('.hp', form).value) return; // bot

      const fields = ['name', 'email', 'phone', 'service', 'message', 'consent'].map(n => form.elements[n]);
      const ok = fields.map(validateField).every(Boolean);
      if (!ok) {
        const first = $('.is-invalid input, .is-invalid select, .is-invalid textarea', form);
        first?.focus({ preventScroll: false });
        showAlert('Uzupełnij zaznaczone pola, żebym mógł się z Tobą skontaktować.');
        return;
      }

      setLoading(true);
      try {
        const data = collect();
        if (FORM_ENDPOINT) await sendViaEndpoint(data); else await sendViaMailto(data);
        form.hidden = true;
        success.hidden = false;
        success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      } catch (err) {
        console.error(err);
        showAlert(`Coś poszło nie tak i wiadomość nie została wysłana. Spróbuj ponownie lub napisz bezpośrednio na ${CONTACT_EMAIL}.`);
      } finally {
        setLoading(false);
      }
    });

    again?.addEventListener('click', () => {
      form.reset();
      $$('.field').forEach(f => f.classList.remove('is-invalid'));
      success.hidden = true;
      form.hidden = false;
      $('#f-name').focus();
    });
  }

  /* ---------- Cookie consent ---------- */
  const COOKIE_KEY = 'rework-cookie-consent';
  const cookieBanner = $('#cookie-banner');
  const cookieSettings = $('#cookie-settings');

  const setCookiePreference = value => {
  try { localStorage.setItem(COOKIE_KEY, value); } catch (err) { console.warn('Cookie save failed:', err); }
  const state = value === 'accept' ? 'granted' : 'denied';
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state
    });
  }
  cookieBanner?.classList.remove('is-visible');
};

  const showCookieBanner = () => {
    if (!cookieBanner) return;
    const saved = (() => {
      try { return localStorage.getItem(COOKIE_KEY); } catch (err) { return null; }
    })();
    if (!saved) cookieBanner.classList.add('is-visible');
  };

  cookieBanner?.querySelectorAll('[data-cookie]').forEach(btn => {
    btn.addEventListener('click', () => setCookiePreference(btn.dataset.cookie));
  });

  cookieSettings?.addEventListener('click', () => {
    cookieBanner?.classList.add('is-visible');
  });

  showCookieBanner();

  /* ---------- Footer year ---------- */
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
})();
