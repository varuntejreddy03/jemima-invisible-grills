// Temporary dev page — visit /image-review to see all images
// Delete this file and its route once categorisation is done

const allImages = [
  // ── New gallery photos (tell me which service each belongs to) ──
  'gallery-new-1.webp',
  'gallery-new-2.webp',
  'gallery-new-3.webp',
  'gallery-new-4.webp',
  'gallery-new-5.webp',
  'gallery-new-6.webp',
  'gallery-new-7.webp',
  'gallery-new-8.webp',
  'gallery-new-9.webp',
  'gallery-new-10.webp',
  'gallery-new-11.webp',
  // ── New real photos ──
  'invisible-grill-balcony-evening.webp',
  'invisible-grill-apartment-balcony-night.webp',
  'invisible-grill-balcony-night-view.webp',
  'invisible-grill-apartment-balcony.webp',
  'premium-invisible-grill-balcony.webp',
  'high-rise-invisible-grill-balcony.webp',
  'glass-balcony-invisible-grill.webp',
  'luxury-balcony-invisible-grill.webp',
  'modern-balcony-invisible-grill.webp',
  'child-safe-invisible-grill-balcony.webp',
  'apartment-window-invisible-grill.webp',
  'window-invisible-grill-installation.webp',
  'window-invisible-grill-city-view.webp',
  'corner-window-invisible-grill.webp',
  'staircase-invisible-grill-installation.webp',
  'staircase-safety-net-installation.webp',
  'balcony-pigeon-safety-net.webp',
  'balcony-pigeon-net-installation.webp',
  'apartment-pigeon-net-balcony.webp',
  'apartment-pigeon-safety-net.webp',
  'corridor-pigeon-net-installation.webp',
  'balcony-child-safety-net.webp',
  'duct-area-safety-net-installation.webp',
  'duct-net-installation-1.webp',
  'duct-net-installation-2.webp',
  'duct-net-installation-3.webp',
  'duct-net-installation-4.webp',
  'duct-net-installation-5.webp',
  'duct-net-installation-6.webp',
  'duct-net-installation-7.webp',
  'sports-safety-net-installation.webp',
  'warehouse-construction-safety-net.webp',
  // ── Old photos ──
  'invisible-grill-2-1.webp',
  'invisible-grill-banner.webp',
  'Invisible-Grill-Staircase4.webp',
  'Invisiblegrillsforstairs-841x1024-1.png',
  'gagan-pigeon-netting-service-.jpg.jpeg',
  'balconny-2.jpg.jpeg',
  'duct-slider.jpg.jpeg',
  'duct.jpg.jpeg',
  'safety-nets-1.jpg.jpeg',
  'safety-nets-2.jpg.jpeg',
  'safety-nets-3.jpg.jpeg',
  'safety-nets-4.jpg.jpeg',
  'safety-nets-5.jpg.jpeg',
  'safety-nets-6.jpg.jpeg',
  'safety-nets-7.jpg.jpeg',
  'safety-nets-8.jpg.jpeg',
  'safety-nets-9.jpg.jpeg',
  'safety-nets-10.jpg.jpeg',
  'safety-nets-11.jpg.jpeg',
  'safety-nets-12.jpg.jpeg',
  'safety-nets-13.jpg.jpeg',
  'safety-nets-14.jpg.jpeg',
  'safety-nets-16.jpg.jpeg',
  'safety-nets-17.jpg.jpeg',
  'safety-nets-18.jpg.jpeg',
  'safety-nets-19.jpg.jpeg',
  'child-pet-nets.jpg.jpeg',
  'children-1.jpg.jpeg',
  'open-area-safety-nets.jpg.jpeg',
  'cricket1.jpg.jpeg',
  'Secure-Netting-Offers-Quality-Nets-for-Cricket-Practice-in-Port-Blair-and-Throughout-Andaman-Nicobar-Island.webp',
  'industrial1.jpg.jpeg',
  'building.jpg.jpeg',
  'building-open.jpg.jpeg',
  'terrace-top.jpg.jpeg',
  'w1.jpg.jpeg',
  'w2.jpg.jpeg',
  'w3.jpg.jpeg',
  'w4.jpg.jpeg',
  'ser3.jpeg',
  'service-5.jpg.jpeg',
  'slider-1A.jpg.jpeg',
  'blog2.jpg.jpeg',
  'blog4.jpg.jpeg',
  'cl-5.jpg.jpeg',
  'images.jpeg',
  'images-8.jpeg',
  '4-5.jpg.jpeg',
  '17.jpg.jpeg',
  'a8a4ad7e-6834-4fbd-bf01-3c97b844d6ba.jpeg',
  'product-jpeg-500x500-1-1.webp',
  '15-500x500-1.webp',
  'g-12-14.jpeg',
  'g-12-3.jpeg',
  'spikes-2.jpg.jpeg',
  'spikes-slider1.jpg.jpeg',
]

export function ImageReview() {
  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-2xl font-bold text-white">Image Review</h1>
        <p className="mb-8 text-sm text-gray-400">
          {allImages.length} images — tell me which filename belongs to which service and I'll update the galleries.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {allImages.map((filename, i) => (
            <div key={filename} className="group flex flex-col overflow-hidden rounded-xl bg-gray-900 border border-gray-800">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                <img
                  src={`/${filename}`}
                  alt={filename}
                  loading="lazy"
                  className="size-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                    const parent = (e.target as HTMLImageElement).parentElement
                    if (parent) parent.innerHTML = '<div class="flex size-full items-center justify-center text-gray-600 text-xs p-2 text-center">Image not found</div>'
                  }}
                />
                <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white">
                  #{i + 1}
                </span>
              </div>
              <div className="p-2">
                <p className="break-all text-[10px] leading-tight text-gray-400 select-all">{filename}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
