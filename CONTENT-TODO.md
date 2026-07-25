# Content TODO — before this site goes live

Everything below is a placeholder that reads fine but was written or estimated
by the build, not confirmed by the business owner. Search the codebase for
`EDIT:` to find each spot marked in code.

## 1. Photos (the most important item)

Every image on the site right now is a generated placeholder — a simple
navy/steel line-art diagram, not a photograph — used so the gallery, lightbox
and service pages work end-to-end before real photos exist.

- `public/gallery/*.svg` (9 files) — referenced from `src/data/services.ts`
  (`gallery: [...]`) and from the homepage gallery strip.
- `src/components/BalconyIllustration.tsx` — the hero illustration on the homepage.

**To replace:** shoot real before/after installation photos, name them per
service (e.g. `invisible-grills-adyar-1.jpg`), drop them in `public/gallery/`,
and update the `gallery` array for the matching service in
`src/data/services.ts` to point at the new files. Real photos with
`loading="lazy"` and explicit `width`/`height` are already wired up in
`ServiceDetail.tsx` and `Gallery.tsx` — only the file paths need to change.

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
