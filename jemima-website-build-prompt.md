# Website Build Prompt — Jemima Invisible Grills & Safety Nets

Copy everything below the line into Claude Code, Cursor, Windsurf, Lovable, or any AI builder. It is written as a single instruction block.

---

## ROLE

You are a senior frontend engineer and design lead. Build a complete, production-ready, multi-page marketing website for a real Indian safety-installation business. Ship real code, real copy, and real routes — no lorem ipsum, no placeholder headings, no "coming soon" pages.

## THE BUSINESS

- **Name:** JEMIMA INVISIBLE GRILLS & SAFETY NETS
- **Base:** Chennai, Tamil Nadu — services delivered across all of India
- **Phone / WhatsApp:** +91 78100 40329
- **Email:** Jemimainvisiblegrills03@gmail.com
- **Hours:** Open all 7 days, 24 hours
- **What they do:** supply and install invisible grills (stainless steel cable safety systems) and safety / pigeon nets for balconies, windows, duct areas, apartments, villas, schools and commercial buildings.
- **Who buys:** parents of young children, apartment owners on high floors, families with pets, housing societies with pigeon problems, builders, facility managers, sports clubs.
- **Logo:** provided at `/public/logo.png` — navy blue and orange, a shield containing a balcony with vertical cable grills, wordmark "JEMIMA" with the tagline "INVISIBLE GRILLS & SAFETY NETS". Derive the whole palette from this logo.

## TECH STACK (use exactly this)

- **Vite** (latest) + **React 19** + **TypeScript**
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin — configure the theme with `@theme` CSS variables in `src/index.css`, not a legacy `tailwind.config.js`
- **React Router v7** in declarative/library mode for routing
- **Motion** (`motion/react`, the successor to Framer Motion) for animation
- **lucide-react** for icons
- **react-hook-form** + **zod** + `@hookform/resolvers` for the enquiry form
- **react-helmet-async** (or a small custom `<Seo>` component using `useEffect`) for per-page title, meta description, canonical and Open Graph tags
- ESLint + Prettier configured; strict TypeScript; absolute imports via `@/` alias
- No backend. The enquiry form composes a pre-filled WhatsApp message and a `mailto:` fallback.

## SITE STRUCTURE (multi-page, real routes)

```
/                                Home
/about                           About us
/services                        Services index (cards → detail pages)
/services/invisible-grills                     Invisible grills for balcony
/services/children-safety-grills               Children safety grills
/services/stainless-steel-grills               Stainless steel grills
/services/monkey-safety-grills                 Monkey safety grills & nets
/services/pigeon-nets-balcony                  Pigeon net for balcony
/services/duct-area-pigeon-nets                Duct area pigeon nets
/services/anti-bird-safety-nets                Anti-bird safety nets
/services/children-safety-nets                 Children safety nets
/services/balcony-safety-nets                  Balcony safety nets
/services/glass-safety-nets                    Glass safety nets
/services/cricket-practice-nets                Cricket practice nets
/gallery                         Work gallery with filter by service
/contact                         Contact + enquiry form + map
/service-areas                   Chennai localities + pan-India coverage
*                                404 page that routes users back to services
```

**Critical:** each service must be its own real page at its own URL with its own `<title>`, its own meta description, its own copy and its own FAQs. Do not build a single page with tabs or an accordion. Do not use query strings.

Drive all of them from one typed data file, `src/data/services.ts`, exporting an array of:

```ts
type Service = {
  slug: string;
  name: string;           // H1
  shortName: string;      // nav / card label
  metaTitle: string;      // ~55-60 chars, includes "Chennai"
  metaDescription: string;// ~150 chars, includes a call to action
  icon: LucideIcon;
  heroTagline: string;
  intro: string[];        // 2-3 paragraphs
  bestFor: string[];      // "Who this is for"
  materials: { label: string; value: string }[]; // spec table
  benefits: { title: string; body: string }[];
  process: { step: string; body: string }[];     // survey → quote → install → warranty
  faqs: { q: string; a: string }[];              // 4-6 per service
  relatedSlugs: string[];
  gallery: string[];
};
```

Then render every service page from a single `ServiceDetail` template consumed by a `:slug` route, with a `useParams` lookup and a redirect to `/services` for unknown slugs. Write genuinely different copy for each entry — a pigeon net page must not read like a rewrite of the children's grill page.

## DESIGN DIRECTION

The logo is the brief. Navy is the structure, orange is the action, steel-grey is the material, white is the air.

- **Palette:** `--color-navy: #1B2A56`, `--color-navy-deep: #101A38`, `--color-orange: #F47B20`, `--color-steel: #8A9099`, `--color-mist: #F4F6F8`, `--color-white: #FFFFFF`. Orange is reserved for actions and one accent rule per section — never for large fills.
- **Type:** a tight, engineered display face for headings (Archivo, Sora, or Barlow Condensed at heavy weight, uppercase with negative tracking on H1/H2) paired with Inter or Public Sans for body. Set a real type scale with `clamp()`. Utility face for spec tables and captions can be the body face at small size, uppercase, wide tracking.
- **Signature element — the cable motif.** The product is nearly invisible vertical steel cables. Use that: thin 1px vertical rules at a fixed rhythm as the recurring structural device — behind the hero, as section dividers, as the left border of spec tables, animating in on scroll with a staggered draw from top. This is the one thing the site is remembered by. Everything else stays disciplined.
- **Hero:** not a stock-photo slab with centred text. Split layout — left is a hard-set headline about what the product actually does ("Balconies you can see through. Not fall through."), a one-line subhead naming Chennai and 24×7 service, and two buttons (Call now / WhatsApp quote). Right is a large balcony image with the cable rhythm drawn over it in navy on load. Below, a thin trust strip: 24×7, free site survey, all-India installation, 304-grade steel.
- **Restraint:** rounded corners at most 8px, one accent per section, no gradient meshes, no glassmorphism, no card with a coloured emoji. Motion is quiet — fade-and-rise on scroll at 24px, 300–400ms, staggered by 60ms, and honour `prefers-reduced-motion`.

## PAGES IN DETAIL

**Home** — hero; trust strip; "What we install" grid of all 11 services linking to their pages; a "How it works" four-step process; why-us block built on real differentiators (24×7 availability, 304-grade stainless cable, child-safe tension spacing, pan-India installation teams, warranty); a comparison block *invisible grills vs conventional MS grills* as a two-column table; testimonials with locality names (Adyar, Velachery, OMR, Anna Nagar); gallery strip; FAQ; final CTA band in navy with orange button.

**Services index** — short intro, then a card grid. Every card: icon, name, one-line benefit, "View details →". Group under two headings: *Invisible Grills* and *Safety & Pigeon Nets*.

**Service detail template** — breadcrumb; H1 + tagline + inline call/WhatsApp CTA; intro paragraphs; "Best suited for" list; materials & specification table; benefits grid; installation process timeline; gallery for that service; per-service FAQ accordion with `FAQPage` JSON-LD; related services; closing CTA. Sticky sidebar on desktop with a compact quote form.

**About** — founder story, service philosophy, coverage map, numbers (installations completed, cities served, years) written as honest placeholders the owner can edit, in a comment marked `{/* EDIT: confirm real figures */}`.

**Gallery** — masonry grid, filter chips by service, lightbox on click, lazy-loaded images with width/height set to prevent layout shift.

**Contact** — phone, WhatsApp, email, hours, Chennai base, embedded Google Map iframe, and the enquiry form: name, phone (validate 10-digit Indian mobile), locality/city, service (select, populated from the services data), balcony/window count, message. On submit, build a readable WhatsApp message and open `https://wa.me/917810040329?text=...`, with a `mailto:` link as fallback and a clear inline success state.

**Service areas** — Chennai localities list, then major Indian cities, each as text (no fake local landing pages).

## CONVERSION & MOBILE

- Header: logo left, nav right, services as a dropdown listing all 11 pages, an orange "Get free quote" button. Mobile: full-screen slide-in menu.
- Sticky bottom bar on mobile only: two halves, "Call now" and "WhatsApp".
- Floating WhatsApp button on desktop, bottom-right, subtle.
- `tel:` and `wa.me` links everywhere the phone number appears.

## SEO & TECHNICAL

- Unique title, meta description and canonical per route.
- `LocalBusiness` JSON-LD in the layout with name, phone, email, Chennai address, `openingHoursSpecification` for 24×7, `areaServed: India`, and `hasOfferCatalog` listing every service.
- `FAQPage` JSON-LD on each service page.
- `BreadcrumbList` JSON-LD on service pages.
- Hand-written `public/robots.txt` and `public/sitemap.xml` containing every route.
- Semantic HTML: one H1 per page, real `<nav>`, `<main>`, `<footer>`, `<section>` with `aria-labelledby`.
- Accessibility: visible focus rings, 4.5:1 contrast minimum, alt text on every image, keyboard-operable accordion and lightbox, skip-to-content link.
- Performance: `loading="lazy"` and explicit dimensions on images, preconnect for fonts, code-split routes with `React.lazy` + `Suspense`, target Lighthouse 90+ on all four categories.
- Fully responsive from 360px up. Test the 360px width specifically.
- Footer: logo, one-line description, service links in two columns, contact block, hours, "Serving all over India from Chennai", copyright.

## COPY RULES

Write like the installer talking to a worried parent, not like a marketing agency. Short sentences. Concrete numbers over adjectives — cable spacing, steel grade, warranty length, survey timing. Never "cutting-edge solutions" or "we strive to deliver excellence". Use Indian English and Indian context: apartments, flats, balconies, duct areas, housing societies, monsoon, pigeon droppings. Where a real figure is needed and unknown, insert it as an obvious editable placeholder with a code comment rather than inventing a claim.

## DELIVERABLES

Full working project: `package.json`, Vite + Tailwind v4 config, router setup, layout with header/footer, every page above, `src/data/services.ts` fully populated with all 11 services, reusable components (`Seo`, `Hero`, `ServiceCard`, `SpecTable`, `ProcessTimeline`, `FaqAccordion`, `CtaBand`, `EnquiryForm`, `Lightbox`, `CableRule`), `README.md` with install/run/build/deploy steps for Vercel or Netlify, and a `CONTENT-TODO.md` listing every placeholder the owner must replace (photos, real counts, GST number, warranty terms).

Before writing code, output a short plan: palette tokens, the two typefaces, the layout concept, and the signature element. Then build.

---

## Two notes before you run it

1. **Change your Gmail password.** It was included in your message, and a password should never be pasted into a chat, a document, or an AI tool. Change it now and turn on 2-step verification.
2. **Photos are the whole game.** This industry sells on before/after balcony shots. Twelve real photos of your own installations will outperform any design. Shoot them in daylight, straight on, and name the files by service.
