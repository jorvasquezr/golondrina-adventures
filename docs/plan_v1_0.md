# Golondrina Adventures — Project Plan v1

## Overview

A tourism-focused web platform for Costa Rica — a static React app with Medium-style travel weblogs. All content is hardcoded in v1; no backend or database.

---

## Goals

- Establish the brand and visual identity for the platform
- Publish travel weblogs about Costa Rica destinations, nature, and experiences
- Provide a clean, readable reading experience (Medium-style)
- Ship fast: static React app, deployable to Netlify or GitHub Pages
- **Work seamlessly on desktop (PC) and mobile (phones/tablets)** — every page and feature must be fully usable across all screen sizes

---

## Pages / Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Hero section, featured posts grid, site intro |
| `/blog` | `BlogPage` | All posts — cards with cover image, title, excerpt, date |
| `/blog/:slug` | `PostPage` | Single post — title, author, date, body, images |
| `/tours` | `ToursPage` | Tour listings — cards with name, description, duration, price |
| `/tours/:slug` | `TourDetailPage` | Single tour — full details, highlights, itinerary, booking CTA |
| `/about` | `AboutPage` | About the platform / author |
| `/contact` | `ContactPage` | Static contact form (no backend) |

---

## Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | **React 18** | via Vite |
| Routing | **React Router v6** | client-side routing |
| Styling | **CSS Modules** | scoped styles, no extra deps |
| Content | **Hardcoded JS/JSON** | blog posts as static data files |
| i18n | **react-i18next + JSON** | EN/ES, fallback to English, interpolation support |
| Unit & Integration Tests | **Vitest + React Testing Library** | component and page-level tests |
| E2E Tests | **Playwright** | full browser simulation, accessibility checks |
| Build | **Vite** | fast dev server and build |
| Hosting | **Netlify / GitHub Pages** | static deploy |

---

## Project Structure

```
golondrina-adventures/
├── resources/
│   └── images/
│       ├── hero/           ← homepage hero banners
│       ├── posts/          ← blog post cover images
│       ├── tours/          ← tour cover and detail images
│       └── icons/          ← logos, favicons, UI icons
├── public/
│   └── images/             ← optimized/exported images ready for the web
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PostCard.jsx
│   │   ├── TourCard.jsx
│   │   └── HeroSection.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── PostPage.jsx
│   │   ├── ToursPage.jsx
│   │   ├── TourDetailPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/
│   │   ├── posts.js        ← blog post content
│   │   └── tours.js        ← tour catalog content
│   ├── i18n/
│   │   ├── index.js        ← react-i18next config (default lang, fallback)
│   │   ├── en/
│   │   │   ├── common.json ← nav, footer, buttons, labels
│   │   │   ├── blog.json   ← blog UI strings and ARIA labels
│   │   │   └── tours.json  ← tours UI strings and ARIA labels
│   │   └── es/
│   │       ├── common.json
│   │       ├── blog.json
│   │       └── tours.json
│   ├── styles/
│   │   ├── global.css
│   │   └── themes/
│   │       ├── light.css   ← light theme variables
│   │       └── dark.css    ← dark theme variables
│   ├── App.jsx
│   └── main.jsx
├── docs/
│   └── plan_v1_0.md
├── index.html
├── vite.config.js
└── package.json
```

---

## Tours Section

Tours are static data in v1.0 (hardcoded in `src/data/tours.js`), displayed as a browsable catalog.

### Tour Card (listing)
- Cover image
- Tour name and short description
- Duration (e.g., "Full day · 8 hrs")
- Difficulty level (Easy / Moderate / Challenging)
- Price per person
- "View Details" link

### Tour Detail Page
- Hero image
- Full description
- Highlights (bullet list)
- Itinerary (day-by-day or step-by-step)
- Included / not included list
- Meeting point / location
- Booking CTA button (links to contact page in v1.0)

### Sample Tours
| Tour | Region | Type |
|------|--------|------|
| Arenal Volcano Hike | La Fortuna | Adventure |
| Manuel Antonio Wildlife Walk | Pacific Coast | Nature |
| Monteverde Cloud Forest | Monteverde | Ecotourism |
| Caribbean Coast Snorkel | Puerto Viejo | Water |
| Coffee Farm Tour | Central Valley | Culture |

---

## Images & Assets

### Logo
- Designed as an SVG swallow (golondrina) in flight with logotype
- Source file: `resources/images/icons/logo.svg`
- Export as SVG and PNG (32px, 64px, 180px) for favicon and Open Graph use
- Color: forest green palette (`#2d6a4f`, `#40916c`, `#1b4332`)

### Photography
- Source: **Google Images / Google Photos** — search for Creative Commons licensed photos
  - Preferred licenses: CC0, CC BY, CC BY-SA
  - Keywords: "Costa Rica [destination] landscape", "Costa Rica wildlife", "cloud forest Costa Rica"
- Raw/reference images → `resources/images/`
- Web-optimized exports (WebP, max 1200px wide) → `public/images/`
- Every image must have a descriptive filename (e.g., `arenal-volcano-sunrise.webp`) to inform alt text authoring

### Recommended Google Search filters
- Tools → Usage rights → **Creative Commons licenses**
- Alternatively: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com), [Wikimedia Commons](https://commons.wikimedia.org) for guaranteed-free Costa Rica imagery

---

## Design Principles

- Mobile-first, responsive layout
- Clean typography — large readable fonts, generous whitespace
- Nature-inspired palette: greens, earthy tones, tropical accents
- Hero images from Costa Rica landscapes (cloud forests, beaches, wildlife)
- Fast load — no heavy UI libraries
- Accessible by default — WCAG 2.1 AA compliance target

---

## Responsive Design

The site must work correctly on **desktop (PC) and mobile phones**. Every page, component, and interaction must adapt gracefully to all screen sizes.

### Breakpoints

| Name | Width | Target devices |
|------|-------|----------------|
| Mobile | < 640px | Phones (iPhone SE → iPhone Pro Max, Android) |
| Tablet | 640px – 1024px | iPads, small laptops |
| Desktop | > 1024px | Laptops, monitors |

### Layout Rules

- **Mobile-first CSS** — base styles target mobile; wider layouts added via `min-width` media queries
- Navigation collapses to a hamburger menu on mobile; full horizontal nav on desktop
- Post and tour card grids: 1 column on mobile → 2 columns on tablet → 3 columns on desktop
- Hero sections: full-viewport-height on desktop, ~60vh on mobile with text legible over the image
- Images use `max-width: 100%` and `object-fit: cover` to fill containers without overflow
- Typography scales: body text minimum 16px on mobile; headings reduce proportionally on small screens
- Touch targets (buttons, links) minimum 44×44px as per Apple HIG and WCAG 2.5.5

### What Must Work on Mobile

- Hamburger menu opens, traps focus, closes on link tap or Escape
- Tour and post cards are tappable, not just hoverable
- Contact form inputs are usable with a virtual keyboard (no viewport zoom on focus)
- Horizontal scrolling never appears on any page
- Images load without layout shift (use explicit `width`/`height` or `aspect-ratio`)

### Testing Targets

| Device | Viewport | Browser |
|--------|----------|---------|
| Desktop Chrome | 1280×800 | Chromium |
| Desktop Firefox | 1280×800 | Firefox |
| iPhone 14 Pro | 390×844 | WebKit (Playwright) |
| Android phone | 375×812 | Chromium (Playwright) |
| iPad | 768×1024 | WebKit |

---

## Accessibility

**Target standard:** WCAG 2.1 Level AA

### Semantic Structure
- Use landmark elements throughout: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Each page has exactly one `<main>` element and a visible `<h1>`
- Heading hierarchy is logical (h1 → h2 → h3), never skipped for visual styling
- Lists (`<ul>` / `<ol>`) used for nav links, post cards grids, and tour highlights

### Navigation & Keyboard
- "Skip to main content" anchor link as the first focusable element on every page
- All interactive elements (links, buttons, form controls) reachable and operable via keyboard alone
- Visible focus ring on all focusable elements — never suppressed with `outline: none` without a styled replacement
- `<Navbar>` mobile menu: `aria-expanded` on the toggle button; focus trapped inside the open menu; `Escape` closes it

### Images & Media
- Every `<img>` has a meaningful `alt` attribute describing the subject
- Decorative images use `alt=""` so screen readers skip them
- Hero images (`<HeroSection>`) have `role="img"` and `aria-label` when they are CSS backgrounds
- Tour and post cover images convey the destination in alt text (e.g., `alt="Arenal Volcano reflected in Lago Arenal at sunrise"`)

### Color & Contrast
- Text on background meets WCAG AA minimums: ≥ 4.5:1 for body text, ≥ 3:1 for large text (≥ 18 pt / 14 pt bold)
- Both `light.css` and `dark.css` theme variables validated against these ratios
- Difficulty badges (Easy / Moderate / Challenging) never rely on color alone — include a text label
- Links distinguished from surrounding text by more than color alone (underline or icon)

### Forms (`<ContactPage>`)
- Every `<input>` and `<textarea>` has an associated `<label>` (via `for` / `id` or wrapping)
- Required fields marked with `aria-required="true"` and a visible indicator
- Inline validation errors announced with `role="alert"` or `aria-live="polite"`
- Submit button has a descriptive label (not just "Submit")

### ARIA Usage
- `aria-label` on icon-only buttons (e.g., social icon links in `<Footer>`)
- `aria-current="page"` on the active nav link
- `aria-hidden="true"` on purely decorative SVG icons and spinner graphics
- Avoid overriding native semantics unless necessary; prefer semantic HTML over ARIA roles

### Language & Internationalization
- `<html lang="en">` (or `"es"`) set on every page; switch the `lang` attribute when content switches language
- All ARIA labels and alt text live in the JSON namespaces alongside visible copy — never hardcoded in components
- Missing Spanish keys fall back to English automatically via react-i18next `fallbackLng`

### Motion & Animation
- Any transitions or animations respect `@media (prefers-reduced-motion: reduce)` — disable or reduce them when set
- No content flashes more than 3 times per second (seizure threshold)

### Testing Checklist (per milestone)
- [ ] Axe or Lighthouse accessibility audit — zero critical violations
- [ ] Keyboard-only navigation walkthrough for every page
- [ ] Screen reader smoke test (NVDA + Firefox, or VoiceOver + Safari)
- [ ] Color contrast checked with browser DevTools or a contrast checker tool
- [ ] `<html lang>` attribute verified on every route

---

## Testing

### Unit Tests — Vitest + React Testing Library

Test individual components in isolation.

| Component | What to test |
|-----------|-------------|
| `<Navbar>` | renders nav links, active link gets `aria-current="page"`, mobile menu toggles open/closed |
| `<Footer>` | renders social links with `aria-label`, copyright text present |
| `<PostCard>` | renders title, excerpt, date, cover image with alt text |
| `<TourCard>` | renders name, duration, difficulty badge, price, "View Details" link |
| `<HeroSection>` | renders heading and CTA link |
| i18n | `en` and `es` namespaces load, missing ES key falls back to EN |

```
src/
└── __tests__/
    ├── components/
    │   ├── Navbar.test.jsx
    │   ├── Footer.test.jsx
    │   ├── PostCard.test.jsx
    │   ├── TourCard.test.jsx
    │   └── HeroSection.test.jsx
    └── i18n/
        └── i18n.test.js
```

### Integration Tests — Vitest + React Testing Library

Test pages as composed units — routing, data wiring, user interactions.

| Page | What to test |
|------|-------------|
| `<HomePage>` | renders hero, featured posts grid; "Read more" links point to correct slugs |
| `<BlogPage>` | renders all posts from `posts.js`; each card links to `/blog/:slug` |
| `<PostPage>` | loads correct post by slug; renders title, body, author, date |
| `<ToursPage>` | renders all tours from `tours.js`; filters/sort if applicable |
| `<TourDetailPage>` | loads correct tour by slug; booking CTA links to `/contact` |
| `<ContactPage>` | form fields render with labels; submit shows validation errors on empty fields |
| Routing | navigating to unknown route renders a 404 or redirects to home |
| Language switch | toggling locale re-renders UI strings in Spanish; fallback works for missing keys |

```
src/
└── __tests__/
    └── pages/
        ├── HomePage.test.jsx
        ├── BlogPage.test.jsx
        ├── PostPage.test.jsx
        ├── ToursPage.test.jsx
        ├── TourDetailPage.test.jsx
        └── ContactPage.test.jsx
```

### End-to-End Tests — Playwright

Full browser simulation of real user journeys across the built app.

#### User Journeys

| Journey | Steps |
|---------|-------|
| **Read a blog post** | Land on `/` → click a post card → verify post page loads with correct title and body |
| **Browse tours** | Navigate to `/tours` → click a tour → verify detail page shows itinerary and booking CTA |
| **Contact form** | Navigate to `/contact` → submit empty form → verify error messages appear → fill form → verify success state |
| **Language switch** | Switch to Spanish → verify nav and page headings render in Spanish |
| **Mobile navigation** | Viewport 375×812 → open hamburger menu → click a link → verify menu closes and page changes |
| **Keyboard navigation** | Tab through entire homepage → verify focus order is logical and skip link works |

#### Accessibility Automation

Run `axe-playwright` on every route to catch WCAG violations automatically:

```
e2e/
├── journeys/
│   ├── blog.spec.ts
│   ├── tours.spec.ts
│   ├── contact.spec.ts
│   └── navigation.spec.ts
├── a11y/
│   └── axe.spec.ts        ← runs axe on every route
└── playwright.config.ts
```

#### Playwright Config Targets

| Project | Browser | Viewport |
|---------|---------|----------|
| Desktop Chrome | Chromium | 1280×800 |
| Desktop Firefox | Firefox | 1280×800 |
| Mobile Safari | WebKit | 390×844 |
| Mobile Chrome | Chromium | 375×812 |

### Running Tests

```bash
# Unit + integration
npx vitest run

# Watch mode during development
npx vitest

# E2E (requires built app or dev server)
npx playwright test

# E2E with UI
npx playwright test --ui
```

---

## Content Focus

- Costa Rica regions: Guanacaste, Osa Peninsula, Central Valley, Caribbean Coast
- Topics: Ecotourism, wildlife, national parks, food, culture, travel tips
- Posts written in a personal, narrative style (like Medium articles)

---

## Scope — v1.0

Everything below ships together as v1.0:

- Vite + React scaffold, routing, Navbar/Footer
- Homepage and BlogPage with static post data
- PostPage (single article view)
- ToursPage and TourDetailPage with static tour data
- About and Contact pages
- Fully responsive layout — works on desktop PC and mobile phones, SEO meta tags
- Accessibility (WCAG 2.1 AA) — semantic HTML, keyboard nav, ARIA, contrast
- SVG logo + image assets (Google CC-licensed photos, WebP exports)
- Unit and integration tests (Vitest + React Testing Library)
- E2E tests with browser simulation and axe accessibility checks (Playwright)
- Deploy to Netlify or GitHub Pages

---

## Open Questions

- Will content be in English, Spanish, or bilingual?
- Who are the target readers — international tourists, local travelers, or both?
- Will the blog be single-author in v1?

---

*Last updated: 2026-05-10 — Plan v1.0 (added images, logo, testing)*
