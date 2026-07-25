import { useMemo, useState } from 'react'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { Lightbox } from '@/components/Lightbox'
import { CtaBand } from '@/components/CtaBand'
import { services } from '@/data/services'

type GalleryItem = { src: string; alt: string; slug: string; shortName: string }

const galleryItems: GalleryItem[] = services.flatMap((s) =>
  s.gallery.map((g) => ({ ...g, slug: s.slug, shortName: s.shortName })),
)

export function Gallery() {
  const [activeSlug, setActiveSlug] = useState<string>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = useMemo(
    () =>
      activeSlug === 'all' ? galleryItems : galleryItems.filter((item) => item.slug === activeSlug),
    [activeSlug],
  )

  return (
    <>
      <Seo
        title="Gallery — Invisible Grills & Safety Nets | Jemima"
        description="Browse our invisible grill and safety net installations by service — balconies, windows, duct areas, terraces and more, across Chennai and India."
        path="/gallery"
      />

      <PageHeader
        eyebrow="Gallery"
        title="Our work, by service"
        lede="Filter by service to see the kind of install you're considering. Click any image to view it larger."
      />

      <section aria-labelledby="gallery-heading" className="container-page py-14 sm:py-16">
        <h2 id="gallery-heading" className="sr-only">
          Installation gallery
        </h2>

        <div
          className="mb-8 flex flex-wrap gap-2.5"
          role="group"
          aria-label="Filter gallery by service"
        >
          <button
            type="button"
            onClick={() => setActiveSlug('all')}
            aria-pressed={activeSlug === 'all'}
            className={`rounded-brand border px-4 py-2 font-sans text-sm font-semibold transition-colors ${
              activeSlug === 'all'
                ? 'border-navy bg-navy text-white'
                : 'border-steel/30 bg-white text-navy-deep hover:border-navy/50'
            }`}
          >
            All
          </button>
          {services.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveSlug(s.slug)}
              aria-pressed={activeSlug === s.slug}
              className={`rounded-brand border px-4 py-2 font-sans text-sm font-semibold transition-colors ${
                activeSlug === s.slug
                  ? 'border-navy bg-navy text-white'
                  : 'border-steel/30 bg-white text-navy-deep hover:border-navy/50'
              }`}
            >
              {s.shortName}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, i) => (
            <button
              key={`${item.slug}-${item.src}-${i}`}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="mb-4 block w-full overflow-hidden rounded-brand border border-steel/25 text-left break-inside-avoid"
              aria-label={`View larger image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                loading="lazy"
                className="w-full object-cover transition-transform hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-navy-deep/70">No images for this service yet — check back soon.</p>
        )}
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filteredItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      <CtaBand />
    </>
  )
}
