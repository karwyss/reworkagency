/* =========================================================
  REWORK — landing "strony-internetowe.html"
  Konwersje i zdarzenia (Google Ads / GA4). Lekki, bez zależności.
  Zdarzenia wysyłane do dataLayer + gtag (jeśli dostępny).
  ========================================================= */
(() => {
  'use strict';

  const track = (event, label) => {
    const dl = window.dataLayer = window.dataLayer || [];
    dl.push({ event, event_label: label || '', event_category: 'landing' });
    if (typeof window.gtag === 'function') {
      try { window.gtag('event', event, { event_label: label || '' }); } catch (e) { /* ignore */ }
    }
  };

  /* ---------- CTA (główny przycisk wyceny) ---------- */
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-track]');
    if (!el) return;
    const kind = el.dataset.track;
    if (kind === 'wycena') track('rework_cta_click', 'wycena');
    else if (kind === 'realizacje') track('rework_portfolio_click', 'realizacje');
    else if (kind === 'telefon') track('rework_phone_click', 'telefon');
    else if (kind === 'opinie') track('rework_reviews_click', 'opinie');
  }, { passive: true });

  /* ---------- Kliknięcie w numer telefonu ---------- */
  document.addEventListener('click', e => {
    const tel = e.target.closest('a[href^="tel:"]');
    if (tel) track('rework_phone_click', 'tel');
  }, { passive: true });

  /* ---------- Formularz — lead (po sukcesie) ---------- */
  const success = document.getElementById('form-success');
  const form = document.getElementById('contact-form');
  if (success && form && 'MutationObserver' in window) {
    const obs = new MutationObserver(muts => {
      muts.forEach(m => {
        if (m.type === 'attributes' && m.attributeName === 'hidden' && !success.hidden) {
          const service = document.getElementById('f-service');
          track('rework_lead', (service && service.value) || 'formularz');
        }
      });
    });
    obs.observe(success, { attributes: true, attributeFilter: ['hidden'] });
  } else if (form) {
    form.addEventListener('submit', () => {
      setTimeout(() => {
        if (success && !success.hidden) {
          const service = document.getElementById('f-service');
          track('rework_lead', (service && service.value) || 'formularz');
        }
      }, 800);
    });
  }
})();