# Content TODO — before this site goes live

Everything below is a placeholder that reads fine but was written or estimated
by the build, not confirmed by the business owner. Search the codebase for
`EDIT:` to find each spot marked in code.

## 1. Photos (the most important item)

Most services now show a **free stock photo** (Pexels, no attribution
required) instead of a plain SVG diagram, plus the hero image and the About
page — this was done so the client-facing preview reads as a fuller site
while real photography is arranged. These are still stand-ins, not photos of
this business's actual work:

- `public/gallery/hero-balcony-exterior.jpg` — homepage hero image
  (`src/components/Hero.tsx`).
- `public/gallery/worker-install.jpg` — About page banner (`src/pages/About.tsx`).
- `public/gallery/cable-tension-detail.jpg`, `pigeon-balcony-1/2.jpg`,
  `balcony-net-installed.jpg`, `glass-atrium.jpg`, `cricket-net.jpg` —
  first gallery image for Invisible Grills, Stainless Steel Grills, Pigeon
  Nets, Anti-Bird/Balcony/Children Safety Nets, Glass Safety Nets and Cricket
  Practice Nets respectively, referenced from `gallery: [...]` in
  `src/data/services.ts`.
- `public/gallery/*.svg` (still present as the second gallery image on those
  services, and the only image on Monkey Safety Grills and Duct Area Pigeon
  Nets, where no honest stock photo exists) — simple navy/steel line-art
  diagrams, not photographs.

**To replace:** shoot real before/after installation photos, name them per
service (e.g. `invisible-grills-adyar-1.jpg`), drop them in `public/gallery/`,
and update the `gallery` array for the matching service in
`src/data/services.ts` to point at the new files. Real photos with
`loading="lazy"` and explicit `width`/`height` are already wired up in
`ServiceDetail.tsx` and `Gallery.tsx` — only the file paths need to change.
This matters more than anything else on this list: stock photos build some
trust, but real photos of this business's own completed jobs build much more.

## 2. Business figures (About page)

`src/pages/About.tsx` shows three stat tiles — **installations completed
(500+), cities served (10+), years installing (5+)** — and a line about the
business's founding. These are placeholders, not real figures. Confirm the
real numbers and founder background, then update the JSX directly (marked
with `{/* EDIT: ... */}` comments in that file).

## 3. Warranty terms

Every service in `src/data/services.ts` states a warranty in its `materials`
table (typically "5 years on cable/net, 1 year on installation", "7 years"
for 304-grade fabricated steel). These are realistic industry figures, not
verified against this specific business's actual policy. Confirm the exact
warranty you're willing to put in writing per product, then update the
`materials` array for each affected service.

## 4. Testimonials

`src/data/testimonials.ts` contains four illustrative quotes with Chennai
locality names (Adyar, Velachery, OMR, Anna Nagar) — these are drafted
examples, not real customers. Replace with real customer names/quotes (with
their permission), or remove entries you don't have a replacement for.

## 5. GST number (GSTIN)

Not currently shown anywhere on the site (we didn't want to invent a number).
If you want it displayed, add it to the footer in
`src/components/layout/Footer.tsx` (marked with an `EDIT:` comment near the
copyright line).

## 6. Google Map (Contact page)

`src/pages/Contact.tsx` embeds a generic map centred on "Chennai, Tamil Nadu"
— it is not pinned to your exact office address, because none was supplied.
Once you have a exact address or Google Maps place link, replace the iframe
`src` with the specific embed URL (Google Maps → Share → Embed a map).

## 7. Domain name

`src/lib/constants.ts` (`BUSINESS.siteUrl`), `public/robots.txt` and
`public/sitemap.xml` all currently point at `https://www.jemimasafetynets.in`
as a placeholder domain. Update all three to match whatever domain you
actually purchase and deploy to — canonical URLs, Open Graph tags and the
`LocalBusiness` JSON-LD all derive from `BUSINESS.siteUrl`.

## 8. Full street address

Only "Chennai, Tamil Nadu" was supplied, so that's all that appears in the
footer, Contact page and `LocalBusiness` structured data
(`src/lib/seo-schema.ts`). Add a full street address in
`src/lib/constants.ts` (`BUSINESS.addressLine`) if you want one displayed and
included in search-engine structured data.

## 9. Pricing table (new homepage section)

The homepage now shows a "Typical pricing, shown up front" table
(`src/data/pricing.ts`, rendered in `src/pages/Home.tsx`) with a price range
per material — nylon net, HDPE pigeon net, reinforced HDPE net, invisible
grill cable, fabricated SS grill. These rates are **indicative estimates
based on typical Chennai market pricing, not this business's confirmed
costing**. Confirm real rates (or decide to withhold pricing from the
homepage entirely) before this goes live — publishing wrong prices is worse
than publishing none, since customers will hold you to what's printed.
