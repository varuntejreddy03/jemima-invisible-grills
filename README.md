# Jemima Invisible Grills & Safety Nets — Website

Marketing website for Jemima Invisible Grills & Safety Nets, a Chennai-based supplier and
installer of invisible cable grills and safety/pigeon nets, serving customers across India.

## Tech stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`, theme configured in `src/index.css`)
- React Router v7 (declarative mode)
- [Motion](https://motion.dev/) for scroll/entry animation
- lucide-react for icons
- react-hook-form + zod for the enquiry form
- react-helmet-async for per-page SEO tags
- ESLint (flat config) + Prettier

There is no backend. The enquiry form builds a pre-filled WhatsApp message
(`wa.me/91XXXXXXXXXX?text=...`) and offers a `mailto:` link as a fallback.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # type-check and build for production into dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
npm run format    # run Prettier
```

> **Windows users:** if this project ever lives in a folder whose path contains an
> `&` character, `npm run <script>` may fail with an error like `'Safety' is not
> recognized as an internal or external command`. This is a known issue with how
> Windows `cmd.exe` batch shims (`node_modules/.bin/*.cmd`) parse `&` in a path —
> it is not a bug in this project. If you hit it, either move the project to a path
> without `&`, or run the underlying tools directly, e.g.
> `node node_modules/vite/bin/vite.js` / `node node_modules/typescript/bin/tsc -b`.

## Project structure

```
src/
  data/services.ts       Single source of truth for all 11 service pages
  data/testimonials.ts    Homepage testimonial quotes
  data/serviceAreas.ts     Chennai localities + Indian cities list
  lib/constants.ts         Business info (phone, email, hours, WhatsApp link)
  lib/seo-schema.ts        JSON-LD builders (LocalBusiness, FAQPage, BreadcrumbList)
  components/              Shared UI (Hero, ServiceCard, SpecTable, FaqAccordion, ...)
  components/layout/       Header, Footer, mobile sticky bar, WhatsApp float button
  pages/                   One file per route (see App.tsx for the route list)
public/
  logo.png                 Brand logo
  gallery/*.svg            Placeholder installation graphics — see CONTENT-TODO.md
  robots.txt, sitemap.xml
```

Every service page renders from the same `ServiceDetail` template, driven by the
`Service` objects in `src/data/services.ts`. To add or edit a service, edit that
file only — no route or template code needs to change.

## Deployment

### Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel — it auto-detects Vite.
3. Build command: `npm run build`, output directory: `dist`.
4. Because this is a client-side router (React Router), add a rewrite so deep
   links like `/services/invisible-grills` don't 404 on refresh: in
   `vercel.json`:

   ```json
   { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
   ```

### Netlify

1. Push this repository to GitHub and connect it in Netlify.
2. Build command: `npm run build`, publish directory: `dist`.
3. Add a `public/_redirects` file containing:

   ```
   /*  /index.html  200
   ```

   (Vite copies everything in `public/` into `dist/` on build.)

## Before going live

See **CONTENT-TODO.md** for the full list of placeholders (photos, business
figures, warranty terms, GST number, map pin) that need real content before
launch.
