# NOVAFOCUS — strona internetowa

Czysty HTML + CSS + JS. Zero frameworków, zero build stepu, zero backendu.
Wystarczy wgrać folder na dowolny hosting (home.pl, OVH, Netlify, Vercel, GitHub Pages, Cloudflare Pages…).

## Struktura

```
novafocus/
├── index.html                 # strona główna (one-page)
├── polityka-prywatnosci.html  # szablon polityki prywatności
├── css/style.css              # style (design tokens na górze pliku)
├── js/main.js                 # nawigacja, animacje, FAQ, formularz
├── fonts/                     # self-hosted fonty (Manrope, Instrument Serif, JetBrains Mono)
├── img/
│   ├── projects/*.webp        # grafiki do mockupów projektów koncepcyjnych
│   ├── og.jpg                 # obrazek Open Graph (1200×630)
│   ├── favicon.svg / favicon-32.png / apple-touch-icon.png / icon-512.png
│   └── karol.jpg              # ← WGRAJ SWOJE ZDJĘCIE (4:5, np. 800×1000). Placeholder zniknie sam.
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Co uzupełnić przed publikacją (checklista)

1. **Domena** — zamień `https://novafocus.pl/` w:
   `index.html` (canonical, og:url, og:image, JSON-LD), `polityka-prywatnosci.html`, `robots.txt`, `sitemap.xml`. ok
2. **Dane kontaktowe** — znajdź i zamień `[EMAIL]`, `[TELEFON]`, `[ADRES]`, `[MIASTO]` (index.html + polityka). ok
3. **Formularz** — w `js/main.js` na górze: ok
   - `CONTACT_EMAIL` — Twój adres (domyślny tryb *mailto*: po walidacji otwiera się klient poczty z gotową wiadomością).ok
   - `FORM_ENDPOINT` — jeśli chcesz wysyłkę bez otwierania poczty, załóż darmowe konto w **Formspree** / ok**Web3Forms** / **Getform** i wklej endpoint. Nadal bez serwera po Twojej stronie. ok
4. **Statystyki** — w sekcji `.stats` zamień `XX` na liczby (np. `24`). Gdy wpiszesz liczbę, animacja odliczania włączy się automatycznie. deleted
5. **Zdjęcie** — wgraj `img/karol.jpg`. ok
6. **Social media** — linki w stopce (`https://www.instagram.com/` itd.). ok
7. **Realizacje / case studies** — obecne projekty są oznaczone jako *CONCEPT PROJECT*. Gdy pojawią się prawdziwe, podmień treść kart i usuń badge. ok
8. **Polityka prywatności** — uzupełnij dane firmy, najlepiej skonsultuj z prawnikiem. ok

## Kolor akcentu

Wszystko steruje się jedną zmienną w `css/style.css`:

```css
--accent:#ff5a24;   /* np. #7c5cff (fiolet), #22c55e (zieleń), #0ea5e9 (błękit) */
```

## Podgląd lokalny

Wystarczy otworzyć `index.html` w przeglądarce. Dla pełnej zgodności (fonty, fetch) lepiej przez lokalny serwer:

```
python3 -m http.server 8000
```
