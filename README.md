# Personal Landing Page

A minimal, quiet-futuristic digital business card — built for offline events (e.g. AWS Summit). Scan a QR code → land here → explore Resume, LinkedIn, GitHub, and Featured Projects.

Built with **React + Vite + TailwindCSS v4**. Single page, no backend.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Editing your content

All page content lives in one place:

```
src/data/profile.js
```

Update your name, role, tagline, links, current focus list, and the 3 featured projects there.

- **Resume PDF**: drop your file into `/public` and point `links.resume` at it (e.g. `/Aaron-Zheng-Resume.pdf`).
- **LinkedIn / GitHub / Email**: set the URLs under `links`.

## Structure

```
index.html              Fonts + meta
src/
  main.jsx              App entry
  App.jsx               Section composition
  index.css            Design tokens + allowed animations
  data/profile.js      ← edit your content here
  components/
    BackgroundGrid.jsx  Faint grid + glow
    Hero.jsx            Section 1 — name, role, CTAs
    CurrentFocus.jsx    Section 2 — terminal-style focus
    FeaturedProjects.jsx Section 3 — 3 project cards
    Connect.jsx         Section 4 — LinkedIn / GitHub / Email
```

## Deploy

The `/dist` folder is fully static. Deploy to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3 + CloudFront).
