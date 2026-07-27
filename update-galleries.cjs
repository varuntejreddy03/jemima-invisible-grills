const fs = require('fs')

const file = 'src/data/services.ts'
let src = fs.readFileSync(file, 'utf8')

const galleries = {
  'invisible-grills': `    gallery: [
      { src: '/invisible-grills-balcony-evening-woman-standing.webp', alt: 'Invisible grill balcony evening' },
      { src: '/invisible-grills-apartment-balcony-night.webp', alt: 'Invisible grill apartment balcony night' },
      { src: '/invisible-grills-balcony-night-city-view.webp', alt: 'Invisible grill balcony night city view' },
      { src: '/invisible-grills-apartment-balcony-high-rise-view.webp', alt: 'Invisible grill apartment high-rise' },
      { src: '/invisible-grills-premium-balcony-wooden-deck.webp', alt: 'Premium invisible grill wooden deck balcony' },
      { src: '/invisible-grills-high-rise-balcony-lake-view.webp', alt: 'High-rise invisible grill lake view' },
      { src: '/invisible-grills-glass-balcony-wooden-flooring.webp', alt: 'Glass balcony invisible grill wooden floor' },
      { src: '/invisible-grills-luxury-balcony-blue-glass-facade.webp', alt: 'Luxury balcony invisible grill' },
      { src: '/invisible-grills-modern-balcony-city-skyline.webp', alt: 'Modern balcony invisible grill city skyline' },
      { src: '/invisible-grills-child-safe-balcony-lake-view.webp', alt: 'Child-safe invisible grill balcony lake view' },
      { src: '/invisible-grills-apartment-window-exterior.webp', alt: 'Apartment window invisible grill exterior' },
      { src: '/invisible-grills-window-installation-city-outlook.webp', alt: 'Window invisible grill city outlook' },
      { src: '/invisible-grills-window-net-city-view.webp', alt: 'Window invisible grill city view' },
      { src: '/invisible-grills-corner-window-open-field-view.webp', alt: 'Corner window invisible grill open field' },
      { src: '/invisible-grills-staircase-installation-apartment.webp', alt: 'Invisible grill staircase apartment' },
      { src: '/invisible-grills-balcony-sea-facing-view.webp', alt: 'Invisible grill sea-facing balcony' },
      { src: '/invisible-grills-balcony-wide-banner-view.webp', alt: 'Invisible grill wide balcony view' },
      { src: '/invisible-grills-indoor-staircase-living-room.webp', alt: 'Invisible grill indoor staircase living room' },
      { src: '/invisible-grills-indoor-stairs-hallway.webp', alt: 'Invisible grill indoor stairs hallway' },
      { src: '/invisible-grills-balcony-customer-view.webp', alt: 'Invisible grill balcony customer view' },
      { src: '/invisible-grills-sliding-window-city-view.webp', alt: 'Invisible grill sliding window city view' },
    ],`,

  'pigeon-nets': `    gallery: [
      { src: '/pigeon-nets-balcony-corridor-net.webp', alt: 'Pigeon net balcony corridor' },
      { src: '/pigeon-nets-balcony-installation-greenery-view.webp', alt: 'Pigeon net balcony installation greenery view' },
      { src: '/pigeon-nets-apartment-balcony-with-plants.webp', alt: 'Pigeon net apartment balcony with plants' },
      { src: '/pigeon-nets-apartment-balcony-city-view.webp', alt: 'Pigeon net apartment balcony city view' },
      { src: '/pigeon-nets-open-corridor-installation.webp', alt: 'Pigeon net open corridor installation' },
      { src: '/pigeon-nets-bedroom-window-net-installation.webp', alt: 'Pigeon net bedroom window installation' },
      { src: '/pigeon-nets-installer-fitting-balcony-net.webp', alt: 'Pigeon net installer fitting balcony' },
      { src: '/pigeon-nets-building-elevation-window-nets.webp', alt: 'Pigeon net building elevation window' },
      { src: '/pigeon-nets-bird-blocked-by-window-net.webp', alt: 'Bird blocked by window pigeon net' },
      { src: '/pigeon-nets-ac-outdoor-unit-protection-net.webp', alt: 'AC outdoor unit pigeon net protection' },
      { src: '/pigeon-nets-apartment-window-net-elevation.webp', alt: 'Pigeon net apartment window elevation' },
      { src: '/pigeon-nets-building-facade-window-nets.webp', alt: 'Pigeon net building facade windows' },
      { src: '/pigeon-nets-pigeons-on-balcony-railing.webp', alt: 'Pigeons on balcony railing before netting' },
      { src: '/pigeon-nets-balcony-net-city-view.webp', alt: 'Pigeon net balcony city view' },
      { src: '/pigeon-nets-installer-on-building-facade.webp', alt: 'Pigeon net installer on building facade' },
      { src: '/pigeon-nets-building-window-nets-elevation.webp', alt: 'Pigeon net building window elevation' },
      { src: '/pigeon-nets-bird-spikes-installation-closeup.webp', alt: 'Bird spikes installation close-up' },
      { src: '/pigeon-nets-bird-spikes-on-roof-edge.webp', alt: 'Bird spikes on roof edge' },
      { src: '/pigeon-nets-bird-spikes-installation-collage.webp', alt: 'Bird spikes installation collage' },
    ],`,

  'safety-nets': `    gallery: [
      { src: '/safety-nets-balcony-child-safety-father-and-baby.webp', alt: 'Balcony child safety net father and baby' },
      { src: '/safety-nets-balcony-net-garden-view.webp', alt: 'Safety net balcony garden view' },
      { src: '/safety-nets-balcony-net-apartment-view.webp', alt: 'Safety net balcony apartment view' },
      { src: '/safety-nets-child-at-balcony-railing.webp', alt: 'Child at balcony railing safety net' },
      { src: '/safety-nets-cat-pet-safety-window-net.webp', alt: 'Cat pet safety window net' },
      { src: '/safety-nets-installer-fitting-corridor-net.webp', alt: 'Safety net installer fitting corridor' },
      { src: '/safety-nets-balcony-green-net-installation.webp', alt: 'Safety net balcony green installation' },
      { src: '/safety-nets-plant-nursery-open-area-net.webp', alt: 'Safety net plant nursery open area' },
      { src: '/safety-nets-swimming-pool-cover-net.webp', alt: 'Safety net swimming pool cover' },
      { src: '/safety-nets-monkey-safety-net-building-corridor.webp', alt: 'Monkey safety net building corridor' },
      { src: '/safety-nets-car-parking-shade-net.webp', alt: 'Safety net car parking shade' },
      { src: '/safety-nets-coconut-tree-fall-protection-net.webp', alt: 'Coconut tree fall protection net' },
      { src: '/safety-nets-child-and-pet-safety-collage.webp', alt: 'Child and pet safety net collage' },
      { src: '/safety-nets-child-behind-balcony-net.webp', alt: 'Child behind balcony safety net' },
      { src: '/safety-nets-open-area-corridor-net.webp', alt: 'Safety net open area corridor' },
      { src: '/safety-nets-balcony-net-installer-at-work.webp', alt: 'Safety net balcony installer at work' },
      { src: '/safety-nets-terrace-top-net-installation.webp', alt: 'Safety net terrace top installation' },
      { src: '/safety-nets-balcony-green-net-with-plants.webp', alt: 'Safety net balcony green with plants' },
      { src: '/safety-nets-balcony-net-tree-view.webp', alt: 'Safety net balcony tree view' },
      { src: '/safety-nets-balcony-net-hillside-view.webp', alt: 'Safety net balcony hillside view' },
      { src: '/safety-nets-corridor-net-with-installer.webp', alt: 'Safety net corridor with installer' },
    ],`,

  'cloth-hangers': `    gallery: [
      { src: '/cloth-hangers-ceiling-pulley-hanger-white-balcony.webp', alt: 'Ceiling pulley cloth hanger white balcony' },
      { src: '/cloth-hangers-balcony-ceiling-hanger-near-ac-unit.webp', alt: 'Balcony ceiling cloth hanger near AC unit' },
      { src: '/cloth-hangers-wooden-ceiling-balcony-hanger.webp', alt: 'Wooden ceiling balcony cloth hanger' },
      { src: '/cloth-hangers-balcony-hanger-with-clothes-drying.webp', alt: 'Balcony cloth hanger with clothes drying' },
      { src: '/cloth-hangers-wooden-ceiling-hanger-open-balcony.webp', alt: 'Wooden ceiling hanger open balcony' },
      { src: '/cloth-hangers-ceiling-hanger-narrow-balcony.webp', alt: 'Ceiling cloth hanger narrow balcony' },
      { src: '/cloth-hangers-wall-mounted-drying-rack-window.webp', alt: 'Wall mounted drying rack window' },
    ],`,

  'sports-nets': `    gallery: [
      { src: '/sports-nets-indoor-turf-court-net-enclosure.webp', alt: 'Sports net indoor turf court enclosure' },
      { src: '/sports-nets-indoor-turf-court-enclosure.webp', alt: 'Sports net indoor turf court' },
      { src: '/sports-nets-outdoor-cricket-practice-cage.webp', alt: 'Sports net outdoor cricket practice cage' },
      { src: '/sports-nets-football-turf-boundary-net.webp', alt: 'Sports net football turf boundary' },
      { src: '/sports-nets-cricket-practice-net-batsman.webp', alt: 'Cricket practice net batsman' },
      { src: '/sports-nets-cricket-practice-cage-outdoor.webp', alt: 'Cricket practice cage outdoor' },
      { src: '/sports-nets-indoor-cricket-practice-session.webp', alt: 'Indoor cricket practice session net' },
      { src: '/sports-nets-cricket-practice-ground-cage.webp', alt: 'Cricket practice ground cage net' },
    ],`,

  'duct-area-nets': `    gallery: [
      { src: '/duct-area-nets-installation-in-progress-shaft.webp', alt: 'Duct area net installation in progress' },
      { src: '/duct-area-nets-technician-installing-shaft-net.webp', alt: 'Duct area technician installing shaft net' },
      { src: '/duct-area-nets-terrace-duct-grating-cover.webp', alt: 'Duct area terrace grating cover net' },
      { src: '/duct-area-nets-wall-shaft-net-closeup.webp', alt: 'Duct area wall shaft net close-up' },
      { src: '/duct-area-nets-rope-access-installation-high-rise.webp', alt: 'Duct area rope access installation high-rise' },
      { src: '/duct-area-nets-green-net-between-buildings.webp', alt: 'Duct area green net between buildings' },
      { src: '/duct-area-nets-green-net-shaft-multi-floor.webp', alt: 'Duct area green net shaft multi-floor' },
      { src: '/duct-area-nets-white-net-box-over-shaft.webp', alt: 'Duct area white net box over shaft' },
      { src: '/duct-area-nets-bird-proofing-between-buildings.webp', alt: 'Duct area bird proofing between buildings' },
      { src: '/duct-area-nets-green-net-shaft-enclosure.webp', alt: 'Duct area green net shaft enclosure' },
      { src: '/duct-area-nets-atrium-multi-floor-nets.webp', alt: 'Duct area atrium multi-floor nets' },
      { src: '/duct-area-nets-green-net-over-shaft-top-view.webp', alt: 'Duct area green net over shaft top view' },
      { src: '/duct-area-nets-atrium-green-nets-multiple-floors.webp', alt: 'Duct area atrium green nets multiple floors' },
    ],`,

  'staircase-nets': `    gallery: [
      { src: '/staircase-nets-stairwell-net-installation.webp', alt: 'Staircase net stairwell installation' },
      { src: '/staircase-nets-stairwell-net-load-test.webp', alt: 'Staircase net stairwell load test' },
      { src: '/staircase-nets-spiral-staircase-net-cover.webp', alt: 'Staircase net spiral staircase cover' },
      { src: '/invisible-grills-staircase-installation-apartment.webp', alt: 'Staircase invisible grill apartment' },
      { src: '/invisible-grills-indoor-staircase-living-room.webp', alt: 'Indoor staircase living room grill' },
      { src: '/invisible-grills-indoor-stairs-hallway.webp', alt: 'Indoor stairs hallway grill' },
    ],`,

  'construction-nets': `    gallery: [
      { src: '/construction-nets-warehouse-roof-net.webp', alt: 'Construction net warehouse roof' },
      { src: '/construction-nets-green-net-over-building-structure.webp', alt: 'Construction net green over building structure' },
      { src: '/construction-nets-warehouse-open-side-net.webp', alt: 'Construction net warehouse open side' },
      { src: '/construction-nets-scaffolding-green-net-facade.webp', alt: 'Construction net scaffolding green facade' },
      { src: '/construction-nets-industrial-roof-net.webp', alt: 'Construction net industrial roof' },
      { src: '/construction-nets-multi-floor-building-net.webp', alt: 'Construction net multi-floor building' },
      { src: '/construction-nets-industrial-shed-roof-net.webp', alt: 'Construction net industrial shed roof' },
    ],`,
}

// Split file into service blocks by slug markers, replace gallery in each
for (const [slug, newGallery] of Object.entries(galleries)) {
  // Find the gallery block inside the service with this slug
  // Strategy: find "slug: 'X'" then find the next "gallery: [" and replace until matching "],"
  const slugMarker = `slug: '${slug}'`
  const idx = src.indexOf(slugMarker)
  if (idx === -1) { console.warn(`⚠ slug not found: ${slug}`); continue }

  const galleryStart = src.indexOf('    gallery: [', idx)
  if (galleryStart === -1) { console.warn(`⚠ gallery not found for: ${slug}`); continue }

  // Find the closing "]," — count bracket depth
  let depth = 0
  let galleryEnd = galleryStart
  for (let i = galleryStart; i < src.length; i++) {
    if (src[i] === '[') depth++
    if (src[i] === ']') { depth--; if (depth === 0) { galleryEnd = i + 1; break } }
  }
  // include trailing comma if present
  if (src[galleryEnd] === ',') galleryEnd++

  src = src.slice(0, galleryStart) + newGallery + src.slice(galleryEnd)
  console.log(`✓ ${slug}`)
}

fs.writeFileSync(file, src, 'utf8')
console.log('Done.')
