# Golden Ride Car Care — concept demo

Static, framework-free demo site prepared for **Golden Ride Car Care** (Umm Ramool, Dubai).
English + Arabic (full RTL). No analytics, no build step, `noindex`.

## Run locally

```powershell
python -m http.server 8080
# or: npx serve .
```

Open http://localhost:8080 — add `?lang=ar` to preview Arabic.

## Placeholders to fill (all defined at the top of `main.js`, `CONFIG`)

| Key | Current value | What to put there |
|---|---|---|
| `WHATSAPP_NUMBER` | `{{WHATSAPP_NUMBER}}` | Full international number, digits only (e.g. `971551411012`). Until filled, WhatsApp buttons open the WhatsApp share picker with the message instead of a specific chat. |
| `PHONE` | `{{PHONE}}` | Display phone number. Two candidates found — **+971 55 141 1012** (Instagram bio, emiratesbz, garagefinder) vs **+971 56 117 9794** (Google/Yango/2GIS). Confirm which is current before showing. |
| `HOURS` | `{{HOURS}}` | Opening hours. Sources disagree: Google mirror says 09:00–22:00 daily, 2GIS says 08:00–22:00. Confirm on Google Maps. |
| `GOOGLE_RATING` / `GOOGLE_REVIEWS` | `4.8` / `22` | From a 2026-09-14 listing mirror. A magicpin mirror shows 4.7 / 28. **Verify live in Google Maps** (Sort by Newest) before showing the owner. |

Also in `index.html` (2 places): the `og:image` / `twitter:image` absolute URLs —
currently set to the live demo (`https://anesch531.github.io/goldenride-dubai-demo/assets/og-image.png`);
swap to the final domain once the site is hosted for real. Local file: `assets/og-image.png`.

## Removing the preview bar

The top line ("Concept preview prepared for…") is plain HTML in `index.html`
(`<div class="concept-bar">`). Hide it with one class: add `hide-concept` to `<body>`,
or delete the div when the site becomes real.

## Photos — stock stand-ins (replace before real use)

All seven slots are filled with **free-licence Unsplash stand-ins** (see
`assets/photos/SOURCES.md` for per-file source URLs, licence and what each shows). They are
*not* Golden Ride's work — the shop's own photos could not be obtained (Instagram posts sit
behind a login wall; Google Maps photos can't be fetched without their API; third-party
aggregator photos have unknown provenance; no website exists).

Replacing them is drop-in: same filenames, no HTML/CSS edits —

| File | Slot | Aspect | Max size |
|---|---|---|---|
| `hero.webp` | hero (`.plate-hero`) | 4:5 portrait | 200 KB |
| `g1.webp` | gallery wide top | 16:10 | 120 KB |
| `g2/g3.webp` | gallery tall | 3:4 | 120 KB |
| `g4/g5.webp` | gallery square | 1:1 | 120 KB |
| `g6.webp` | gallery strip | 21:6 | 120 KB |

When swapping: match the `width`/`height` attributes in `index.html` to the new files and
update each bilingual `alt` (e.g. `alt="PPF applied on a dark sedan / تطبيق حماية الطلاء"`),
then record the source in `SOURCES.md`.

Gold hue was kept as specified while judging it against the stand-ins; after real photos
land, the `--gold` token in `styles.css` may be shifted up to 6° in hue to match the paint tones.

## Files

- `index.html` — semantic structure, OG/Twitter tags, SVG icon symbols
- `styles.css` — design tokens on `:root`, CSS logical properties (RTL), mobile-first
- `main.js` — `CONFIG` placeholders, one copy dictionary (EN/AR), language toggle
  (`?lang=ar`, localStorage in try/catch), reveal-on-scroll, WhatsApp link builder.
  Arabic copy is listed in a comment block at the end of `main.js` for review.
- `assets/fonts/` — 4 self-hosted woff2; `assets/photos/` — 7 WebP stand-ins + `SOURCES.md`
  (licence, source URLs, replacement specs)
- `assets/og-image.png` — 1200×630 share card, rendered from `og.html` (dev-only, not linked
  from the site; re-render after copy changes)

## Design system (as specified)

Warm near-black `#0B0A09`, champagne gold `#C8A96A` under 5% of any screen (hairlines,
numerals, primary CTA only), Bodoni Moda + Archivo for Latin, Reem Kufi + Readex Pro for
Arabic, all self-hosted woff2 (~111 KB total, `font-display: swap`, preloaded critical pair).
Motion is transform/opacity only, `cubic-bezier(.2,.7,.2,1)` 600–900 ms, disabled under
`prefers-reduced-motion`.
