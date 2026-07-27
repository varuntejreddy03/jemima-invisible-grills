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
  { src: '/safety-nets-6.jpg.jpeg', alt: 'Safety net installation' },
  { src: '/safety-nets-7.jpg.jpeg', alt: 'Safety net on a residential building' },
  { src: '/safety-nets-8.jpg.jpeg', alt: 'Net installation close-up' },
  { src: '/safety-nets-9.jpg.jpeg', alt: 'Safety net fitted on a balcony' },
  { src: '/safety-nets-10.jpg.jpeg', alt: 'Safety net installation work in progress' },
  { src: '/safety-nets-11.jpg.jpeg', alt: 'Completed safety net installation' },
  { src: '/safety-nets-12.jpg.jpeg', alt: 'Safety net on apartment building' },
  { src: '/safety-nets-13.jpg.jpeg', alt: 'Safety net installation detail' },
  { src: '/safety-nets-14.jpg.jpeg', alt: 'Safety net fitted across balcony' },
  { src: '/safety-nets-16.jpg.jpeg', alt: 'Safety net installation view' },
  { src: '/safety-nets-17.jpg.jpeg', alt: 'Net installation on high-rise' },
  { src: '/safety-nets-18.jpg.jpeg', alt: 'Safety net on residential complex' },
  { src: '/safety-nets-19.jpg.jpeg', alt: 'Safety net installation completed' },
  { src: '/gallery/worker-install.jpg', alt: 'Technician installing safety net on site' },
  { src: '/w1.jpg.jpeg', alt: 'Installation work on site' },
  { src: '/w2.jpg.jpeg', alt: 'Team installing safety net' },
  { src: '/w3.jpg.jpeg', alt: 'Worker fitting net on balcony' },
  { src: '/w4.jpg.jpeg', alt: 'Installation team at work' },
  { src: '/slider-1A.jpg.jpeg', alt: 'Safety net installation showcase' },
  { src: '/ser3.jpeg', alt: 'Service installation photo' },
  { src: '/service-5.jpg.jpeg', alt: 'Safety net service installation' },
  { src: '/terrace-top.jpg.jpeg', alt: 'Terrace safety net installation' },
  { src: '/industrial1.jpg.jpeg', alt: 'Industrial safety net installation' },
  { src: '/images.jpeg', alt: 'Safety net installation' },
  { src: '/images-8.jpeg', alt: 'Net installation on building' },
  { src: '/cl-5.jpg.jpeg', alt: 'Safety net close-up' },
  { src: '/blog2.jpg.jpeg', alt: 'Safety net installation blog photo' },
  { src: '/blog4.jpg.jpeg', alt: 'Installation work photo' },
  { src: '/4-5.jpg.jpeg', alt: 'Safety net installation' },
  { src: '/17.jpg.jpeg', alt: 'Net installation on apartment' },
  { src: '/a8a4ad7e-6834-4fbd-bf01-3c97b844d6ba.jpeg', alt: 'Safety net installation' },
  // New real photos
  { src: '/invisible-grill-balcony-night-view.webp', alt: 'Invisible grill balcony night view' },
  { src: '/invisible-grill-apartment-balcony.webp', alt: 'Invisible grill apartment balcony' },
  { src: '/premium-invisible-grill-balcony.webp', alt: 'Premium invisible grill balcony' },
  { src: '/high-rise-invisible-grill-balcony.webp', alt: 'High-rise invisible grill balcony' },
  { src: '/glass-balcony-invisible-grill.webp', alt: 'Glass balcony invisible grill' },
  { src: '/balcony-pigeon-safety-net.webp', alt: 'Balcony pigeon safety net' },
  { src: '/balcony-child-safety-net.webp', alt: 'Balcony child safety net' },
  { src: '/duct-net-installation-1.webp', alt: 'Duct net installation' },
  { src: '/duct-net-installation-2.webp', alt: 'Duct net installation 2' },
  { src: '/duct-net-installation-3.webp', alt: 'Duct net installation 3' },
  { src: '/sports-safety-net-installation.webp', alt: 'Sports safety net installation' },
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
