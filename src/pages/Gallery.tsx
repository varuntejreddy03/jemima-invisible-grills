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

const extraPhotos = [
  { src: '/invisible-grill-balcony-night-view.webp',         alt: 'Invisible grill balcony night view' },
  { src: '/premium-invisible-grill-balcony.webp',            alt: 'Premium invisible grill balcony' },
  { src: '/high-rise-invisible-grill-balcony.webp',          alt: 'High-rise invisible grill balcony' },
  { src: '/glass-balcony-invisible-grill.webp',              alt: 'Glass balcony invisible grill' },
  { src: '/balcony-pigeon-safety-net.webp',                  alt: 'Balcony pigeon safety net' },
  { src: '/balcony-child-safety-net.webp',                   alt: 'Balcony child safety net' },
  { src: '/duct-net-installation-2.webp',                    alt: 'Duct net installation' },
  { src: '/duct-net-installation-3.webp',                    alt: 'Duct net installation' },
  { src: '/duct-net-installation-4.webp',                    alt: 'Duct net installation' },
  { src: '/sports-safety-net-installation.webp',             alt: 'Sports safety net installation' },
  { src: '/safety-nets-balcony-net-tree-view.webp',          alt: 'Safety net balcony tree view' },
  { src: '/safety-nets-child-behind-balcony-net.webp',       alt: 'Child behind balcony safety net' },
  { src: '/safety-nets-corridor-net-with-installer.webp',    alt: 'Corridor net with installer' },
]

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

      <section aria-labelledby="gallery-heading" className="container-page py-16 sm:py-20">
        <h2 id="gallery-heading" className="sr-only">Installation gallery</h2>

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter gallery by service">
          {[{ slug: 'all', shortName: 'All' }, ...services].map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveSlug(s.slug)}
              aria-pressed={activeSlug === s.slug}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeSlug === s.slug
                  ? 'border-orange bg-orange text-white shadow-md shadow-orange/25'
                  : 'border-steel/25 bg-white text-navy-deep/70 hover:border-orange/40 hover:text-orange'
              }`}
            >
              {s.shortName}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        {filteredItems.length > 0 ? (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filteredItems.map((item, i) => (
              <button
                key={`${item.slug}-${item.src}-${i}`}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid"
                aria-label={`View larger: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-0 left-0 right-0 translate-y-1 p-4 text-left text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.shortName}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-navy-deep/60">No images for this service yet — check back soon.</p>
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

      {/* Extra photos — only when showing all */}
      {activeSlug === 'all' && (
        <section aria-labelledby="more-photos-heading" className="border-t border-steel/15 bg-mist py-16 sm:py-20">
          <div className="container-page">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold tracking-[0.14em] text-orange uppercase">More from our installations</p>
              <h2 id="more-photos-heading" className="font-display text-3xl font-extrabold tracking-tight text-navy-deep uppercase">
                On-site across Chennai
              </h2>
            </div>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {extraPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="mb-4 overflow-hidden rounded-2xl break-inside-avoid"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
