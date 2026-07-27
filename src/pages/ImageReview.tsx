// Dev-only page — visit /image-review to tag images
// Delete once done.
import { useState } from 'react'
import { X, Copy, Check, Tag } from 'lucide-react'

const SERVICES = [
  { slug: 'invisible-grills',   label: 'Invisible Grills' },
  { slug: 'pigeon-nets',        label: 'Pigeon Nets' },
  { slug: 'safety-nets',        label: 'Safety Nets' },
  { slug: 'cloth-hangers',      label: 'Cloth Hangers' },
  { slug: 'sports-nets',        label: 'Sports Nets' },
  { slug: 'duct-area-nets',     label: 'Duct Area Nets' },
  { slug: 'staircase-nets',     label: 'Staircase Nets' },
  { slug: 'construction-nets',  label: 'Construction Nets' },
]

const ALL_IMAGES = [
  // ── gallery/ subfolder ──
  'gallery/WhatsApp Image 2026-07-27 at 6.58.42 PM.jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.43 PM (1).jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.43 PM.jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.44 PM (1).jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.44 PM (2).jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.44 PM (3).jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.44 PM.jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.45 PM (1).jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.45 PM (2).jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.45 PM (3).jpeg',
  'gallery/WhatsApp Image 2026-07-27 at 6.58.45 PM.jpeg',
  // ── new gallery-new ──
  'gallery-new-1.webp','gallery-new-2.webp','gallery-new-3.webp','gallery-new-4.webp',
  'gallery-new-5.webp','gallery-new-6.webp','gallery-new-7.webp','gallery-new-8.webp',
  'gallery-new-9.webp','gallery-new-10.webp','gallery-new-11.webp',
  // ── invisible grills ──
  'invisible-grills-apartment-balcony-high-rise-view.webp',
  'invisible-grills-apartment-balcony-night.webp',
  'invisible-grills-apartment-window-exterior.webp',
  'invisible-grills-balcony-customer-view.webp',
  'invisible-grills-balcony-evening-woman-standing.webp',
  'invisible-grills-balcony-night-city-view.webp',
  'invisible-grills-balcony-sea-facing-view.webp',
  'invisible-grills-balcony-wide-banner-view.webp',
  'invisible-grills-child-safe-balcony-lake-view.webp',
  'invisible-grills-corner-window-open-field-view.webp',
  'invisible-grills-glass-balcony-wooden-flooring.webp',
  'invisible-grills-high-rise-balcony-lake-view.webp',
  'invisible-grills-indoor-staircase-living-room.webp',
  'invisible-grills-indoor-stairs-hallway.webp',
  'invisible-grills-luxury-balcony-blue-glass-facade.webp',
  'invisible-grills-modern-balcony-city-skyline.webp',
  'invisible-grills-premium-balcony-wooden-deck.webp',
  'invisible-grills-sliding-window-city-view.webp',
  'invisible-grills-staircase-installation-apartment.webp',
  'invisible-grills-window-installation-city-outlook.webp',
  'invisible-grills-window-net-city-view.webp',
  'invisible-grill-2-1.webp','invisible-grill-banner.webp',
  'invisible-grill-balcony-evening.webp','invisible-grill-apartment-balcony-night.webp',
  'invisible-grill-balcony-night-view.webp','invisible-grill-apartment-balcony.webp',
  'premium-invisible-grill-balcony.webp','high-rise-invisible-grill-balcony.webp',
  'glass-balcony-invisible-grill.webp','luxury-balcony-invisible-grill.webp',
  'modern-balcony-invisible-grill.webp','child-safe-invisible-grill-balcony.webp',
  'apartment-window-invisible-grill.webp','window-invisible-grill-installation.webp',
  'window-invisible-grill-city-view.webp','corner-window-invisible-grill.webp',
  'staircase-invisible-grill-installation.webp',
  'Invisible-Grill-Staircase4.webp',
  // ── pigeon nets ──
  'pigeon-nets-ac-outdoor-unit-protection-net.webp',
  'pigeon-nets-apartment-balcony-city-view.webp',
  'pigeon-nets-apartment-balcony-with-plants.webp',
  'pigeon-nets-apartment-window-net-elevation.webp',
  'pigeon-nets-balcony-corridor-net.webp',
  'pigeon-nets-balcony-installation-greenery-view.webp',
  'pigeon-nets-balcony-net-city-view.webp',
  'pigeon-nets-bedroom-window-net-installation.webp',
  'pigeon-nets-bird-blocked-by-window-net.webp',
  'pigeon-nets-bird-spikes-installation-closeup.webp',
  'pigeon-nets-bird-spikes-installation-collage.webp',
  'pigeon-nets-bird-spikes-on-roof-edge.webp',
  'pigeon-nets-building-elevation-window-nets.webp',
  'pigeon-nets-building-facade-window-nets.webp',
  'pigeon-nets-building-window-nets-elevation.webp',
  'pigeon-nets-installer-fitting-balcony-net.webp',
  'pigeon-nets-installer-on-building-facade.webp',
  'pigeon-nets-open-corridor-installation.webp',
  'pigeon-nets-pigeons-on-balcony-railing.webp',
  'apartment-pigeon-net-balcony.webp','apartment-pigeon-safety-net.webp',
  'balcony-pigeon-net-installation.webp','balcony-pigeon-safety-net.webp',
  'corridor-pigeon-net-installation.webp',
  // ── safety nets ──
  'safety-nets-balcony-child-safety-father-and-baby.webp',
  'safety-nets-balcony-green-net-installation.webp',
  'safety-nets-balcony-green-net-with-plants.webp',
  'safety-nets-balcony-net-apartment-view.webp',
  'safety-nets-balcony-net-garden-view.webp',
  'safety-nets-balcony-net-hillside-view.webp',
  'safety-nets-balcony-net-installer-at-work.webp',
  'safety-nets-balcony-net-tree-view.webp',
  'safety-nets-car-parking-shade-net.webp',
  'safety-nets-cat-pet-safety-window-net.webp',
  'safety-nets-child-and-pet-safety-collage.webp',
  'safety-nets-child-at-balcony-railing.webp',
  'safety-nets-child-behind-balcony-net.webp',
  'safety-nets-coconut-tree-fall-protection-net.webp',
  'safety-nets-corridor-net-with-installer.webp',
  'safety-nets-installer-fitting-corridor-net.webp',
  'safety-nets-monkey-safety-net-building-corridor.webp',
  'safety-nets-open-area-corridor-net.webp',
  'safety-nets-plant-nursery-open-area-net.webp',
  'safety-nets-swimming-pool-cover-net.webp',
  'safety-nets-terrace-top-net-installation.webp',
  'balcony-child-safety-net.webp','staircase-safety-net-installation.webp',
  'sports-safety-net-installation.webp',
  // ── cloth hangers ──
  'cloth-hangers-balcony-ceiling-hanger-near-ac-unit.webp',
  'cloth-hangers-balcony-hanger-with-clothes-drying.webp',
  'cloth-hangers-ceiling-hanger-narrow-balcony.webp',
  'cloth-hangers-ceiling-pulley-hanger-white-balcony.webp',
  'cloth-hangers-wall-mounted-drying-rack-window.webp',
  'cloth-hangers-wooden-ceiling-balcony-hanger.webp',
  'cloth-hangers-wooden-ceiling-hanger-open-balcony.webp',
  // ── sports nets ──
  'sports-nets-cricket-practice-cage-outdoor.webp',
  'sports-nets-cricket-practice-ground-cage.webp',
  'sports-nets-cricket-practice-net-batsman.webp',
  'sports-nets-football-turf-boundary-net.webp',
  'sports-nets-indoor-cricket-practice-session.webp',
  'sports-nets-indoor-turf-court-enclosure.webp',
  'sports-nets-indoor-turf-court-net-enclosure.webp',
  'sports-nets-outdoor-cricket-practice-cage.webp',
  'Secure-Netting-Offers-Quality-Nets-for-Cricket-Practice-in-Port-Blair-and-Throughout-Andaman-Nicobar-Island.webp',
  // ── duct area nets ──
  'duct-area-nets-atrium-green-nets-multiple-floors.webp',
  'duct-area-nets-atrium-multi-floor-nets.webp',
  'duct-area-nets-bird-proofing-between-buildings.webp',
  'duct-area-nets-green-net-between-buildings.webp',
  'duct-area-nets-green-net-over-shaft-top-view.webp',
  'duct-area-nets-green-net-shaft-enclosure.webp',
  'duct-area-nets-green-net-shaft-multi-floor.webp',
  'duct-area-nets-installation-in-progress-shaft.webp',
  'duct-area-nets-rope-access-installation-high-rise.webp',
  'duct-area-nets-technician-installing-shaft-net.webp',
  'duct-area-nets-terrace-duct-grating-cover.webp',
  'duct-area-nets-wall-shaft-net-closeup.webp',
  'duct-area-nets-white-net-box-over-shaft.webp',
  'duct-area-safety-net-installation.webp',
  'duct-net-installation-1.webp','duct-net-installation-2.webp',
  'duct-net-installation-3.webp','duct-net-installation-4.webp',
  'duct-net-installation-5.webp','duct-net-installation-6.webp',
  'duct-net-installation-7.webp',
  // ── staircase nets ──
  'staircase-nets-spiral-staircase-net-cover.webp',
  'staircase-nets-stairwell-net-installation.webp',
  'staircase-nets-stairwell-net-load-test.webp',
  // ── construction nets ──
  'construction-nets-green-net-over-building-structure.webp',
  'construction-nets-industrial-roof-net.webp',
  'construction-nets-industrial-shed-roof-net.webp',
  'construction-nets-multi-floor-building-net.webp',
  'construction-nets-scaffolding-green-net-facade.webp',
  'construction-nets-warehouse-open-side-net.webp',
  'construction-nets-warehouse-roof-net.webp',
  'warehouse-construction-safety-net.webp',
  // ── old / misc ──
  'safety-nets-1.jpg.jpeg','safety-nets-2.jpg.jpeg','safety-nets-3.jpg.jpeg',
  'safety-nets-4.jpg.jpeg','safety-nets-5.jpg.jpeg','safety-nets-6.jpg.jpeg',
  'safety-nets-7.jpg.jpeg','safety-nets-8.jpg.jpeg','safety-nets-9.jpg.jpeg',
  'safety-nets-10.jpg.jpeg','safety-nets-11.jpg.jpeg','safety-nets-12.jpg.jpeg',
  'safety-nets-13.jpg.jpeg','safety-nets-14.jpg.jpeg','safety-nets-16.jpg.jpeg',
  'safety-nets-17.jpg.jpeg','safety-nets-18.jpg.jpeg','safety-nets-19.jpg.jpeg',
  'gagan-pigeon-netting-service-.jpg.jpeg','balconny-2.jpg.jpeg',
  'duct-slider.jpg.jpeg','duct.jpg.jpeg',
  'child-pet-nets.jpg.jpeg','children-1.jpg.jpeg','open-area-safety-nets.jpg.jpeg',
  'cricket1.jpg.jpeg','industrial1.jpg.jpeg',
  'building.jpg.jpeg','building-open.jpg.jpeg','terrace-top.jpg.jpeg',
  'w1.jpg.jpeg','w2.jpg.jpeg','w3.jpg.jpeg','w4.jpg.jpeg',
  'ser3.jpeg','service-5.jpg.jpeg','slider-1A.jpg.jpeg',
  'blog2.jpg.jpeg','blog4.jpg.jpeg','cl-5.jpg.jpeg',
  'images.jpeg','images-8.jpeg','images-5.jpeg','images-6.jpeg',
  '4-5.jpg.jpeg','17.jpg.jpeg',
  'a8a4ad7e-6834-4fbd-bf01-3c97b844d6ba.jpeg',
  'product-jpeg-500x500-1-1.webp','15-500x500-1.webp',
  'g-12-14.jpeg','g-12-3.jpeg',
  'spikes-2.jpg.jpeg','spikes-slider1.jpg.jpeg',
  '134207_executivebirdnettingservices_1667953093.jpeg',
  'Invisiblegrillsforstairs-841x1024-1.png',
  'Untitled-design-42-747x1024-1.png',
  'Untitled-design_20251128_172314_0000-scaled-e1764331517895-1024x377.png',
  'ChatGPT Image Jul 26, 2026, 10_54_22 PM.png',
  '1995497.webp',
  'hero.webp',
  'gallery/worker-install.jpg',
  'gallery/balcony-net-installed.jpg',
  'gallery/cricket-net.jpg',
  'gallery/glass-atrium.jpg',
  'gallery/hero-balcony-exterior.jpg',
  'gallery/pigeon-balcony-1.jpg',
  'gallery/pigeon-balcony-2.jpg',
]

type Tag = string // service slug or 'ignore'

const SERVICE_COLORS: Record<string, string> = {
  'invisible-grills':  'bg-blue-600',
  'pigeon-nets':       'bg-purple-600',
  'safety-nets':       'bg-green-600',
  'cloth-hangers':     'bg-yellow-500',
  'sports-nets':       'bg-red-600',
  'duct-area-nets':    'bg-cyan-600',
  'staircase-nets':    'bg-indigo-600',
  'construction-nets': 'bg-orange-600',
  'ignore':            'bg-gray-500',
}

export function ImageReview() {
  const [tags, setTags] = useState<Record<string, Tag>>({})
  const [active, setActive] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const tag = (img: string, slug: Tag) => {
    setTags((t) => ({ ...t, [img]: slug }))
    // auto-advance to next untagged
    const idx = ALL_IMAGES.indexOf(img)
    const next = ALL_IMAGES.slice(idx + 1).find((i) => !tags[i] && i !== img)
    setActive(next ?? null)
  }

  const tagged = Object.keys(tags).length
  const ignored = Object.values(tags).filter((v) => v === 'ignore').length

  const buildJson = () => {
    const result: Record<string, string[]> = {}
    for (const svc of SERVICES) result[svc.slug] = []
    for (const [img, slug] of Object.entries(tags)) {
      if (slug !== 'ignore') result[slug]?.push(`/${img}`)
    }
    return JSON.stringify(result, null, 2)
  }

  const copy = () => {
    navigator.clipboard.writeText(buildJson())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* ── Sticky header ── */}
      <div className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-gray-950/95 px-4 py-3 backdrop-blur">
        <div>
          <span className="text-sm font-bold">Image Tagger</span>
          <span className="ml-3 text-xs text-gray-400">
            {tagged} / {ALL_IMAGES.length} tagged &nbsp;·&nbsp; {ignored} ignored
          </span>
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold hover:bg-orange-400 active:scale-95 transition-all"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? 'Copied!' : 'Copy JSON'}
        </button>
      </div>

      {/* ── Legend ── */}
      <div className="flex flex-wrap gap-2 px-4 py-3 border-b border-white/10">
        {SERVICES.map((s) => (
          <span key={s.slug} className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white ${SERVICE_COLORS[s.slug]}`}>
            {s.label}
          </span>
        ))}
        <span className="rounded-full bg-gray-500 px-2.5 py-0.5 text-[11px] font-semibold text-white">Ignore</span>
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {ALL_IMAGES.map((img, i) => {
          const t = tags[img]
          return (
            <button
              key={img}
              onClick={() => setActive(img)}
              className={`group relative flex flex-col overflow-hidden rounded-xl border-2 text-left transition-all hover:scale-[1.02] ${
                t === 'ignore'
                  ? 'border-gray-600 opacity-40'
                  : t
                  ? `border-transparent ring-2 ring-offset-2 ring-offset-gray-950 ring-${SERVICE_COLORS[t]?.replace('bg-', '')}`
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div className="relative aspect-[4/3] bg-gray-800">
                <img
                  src={`/${img}`}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                    el.parentElement!.innerHTML =
                      '<div class="flex size-full items-center justify-center text-gray-600 text-[10px] p-2 text-center">not found</div>'
                  }}
                />
                <span className="absolute left-1.5 top-1.5 rounded-full bg-black/70 px-1.5 py-0.5 text-[9px] font-bold">
                  #{i + 1}
                </span>
                {t && t !== 'ignore' && (
                  <span className={`absolute bottom-1.5 left-1.5 rounded-full px-2 py-0.5 text-[9px] font-bold text-white ${SERVICE_COLORS[t]}`}>
                    {SERVICES.find((s) => s.slug === t)?.label}
                  </span>
                )}
                {t === 'ignore' && (
                  <span className="absolute bottom-1.5 left-1.5 rounded-full bg-gray-500 px-2 py-0.5 text-[9px] font-bold text-white">
                    Ignored
                  </span>
                )}
                {!t && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                    <Tag className="size-6 text-white" />
                  </span>
                )}
              </div>
              <div className="bg-gray-900 px-2 py-1.5">
                <p className="truncate text-[9px] text-gray-500">{img.split('/').pop()}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* ── Modal ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-gray-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-black/50 hover:bg-black/80"
            >
              <X className="size-4" />
            </button>

            {/* Image */}
            <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-gray-800">
              <img src={`/${active}`} alt="" className="size-full object-contain" />
            </div>

            {/* Filename */}
            <p className="px-4 pt-3 text-[11px] text-gray-400 break-all">{active}</p>

            {/* Service buttons */}
            <div className="grid grid-cols-2 gap-2 p-4">
              {SERVICES.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => tag(active, s.slug)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] active:scale-95 ${SERVICE_COLORS[s.slug]} ${tags[active] === s.slug ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''}`}
                >
                  {s.label}
                </button>
              ))}
              <button
                onClick={() => tag(active, 'ignore')}
                className={`col-span-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] active:scale-95 bg-gray-600 hover:bg-gray-500 ${tags[active] === 'ignore' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''}`}
              >
                Ignore this image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
