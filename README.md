# Јелена & Филип — Wedding Invitation

A single-page digital wedding invitation, built as a static site with no frameworks and no build step.

**Live:** https://filip-jelena.onrender.com/
![Serbian](https://img.shields.io/badge/lang-Serbian_(Cyrillic)-4a5c3a)
![No frameworks](https://img.shields.io/badge/dependencies-none-b8a44c)

---

## Features

**Live countdown** — days, hours, minutes and seconds until the ceremony, updated every second.

**Event timeline** — the full day rendered from a single data array: gathering of both families, civil ceremony, church ceremony and reception. Each entry carries a time, a venue and a map link, so changing the schedule means editing one object, not the markup.

**RSVP** — deadline is computed and displayed from a single date constant, with a link to the response form.

**Responsive typography** — all font sizes use `clamp()`, so the invitation scales from phone to desktop without media queries.

---

## Structure

```
filip-jelena/
├── index.html          # markup only
├── css/
│   └── styles.css      # all styling
├── js/
│   └── script.js       # countdown, RSVP deadline, event rendering
└── assets/
    ├── couple.jpg
    ├── pigeon-left.svg
    ├── pigeon-right.svg
    └── icon-*.svg      # one per event type
```

## Running locally

No build step — the site is plain HTML, CSS and JavaScript.

```bash
git clone https://github.com/nedeljko02/filip-jelena.git
cd filip-jelena
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

Opening `index.html` directly from the filesystem also works, but serving it over HTTP matches how it behaves when deployed.

---

## Customising

All content that changes between weddings lives in two places.

**Dates** — top of `js/script.js`:

```js
const WEDDING  = new Date('2026-05-02T09:00:00');
const DEADLINE = new Date('2026-04-15T23:59:59');
```

**Schedule** — the `events` array in the same file. Each entry renders one card:

```js
{
  icon: 'church',                       // key into ICONS
  title: 'Црквено венчање',
  location: 'Црква Светог Ђорђа',
  address: 'Доситејева 1, Крушевац',
  time: '13:30h',
  map: 'Crkva Svetog Djordja, Krusevac' // passed to Google Maps
}
```

To add a new event type, drop an SVG into `assets/` and register it in the `ICONS` map.

---

## Notes

The page is in Serbian Cyrillic throughout. Fonts are loaded from Google Fonts (Cormorant Garamond, Playfair Display, Pinyon Script, Great Vibes); everything else is self-hosted, so the site works offline apart from the typefaces.
