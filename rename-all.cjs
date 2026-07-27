const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const PUB = 'public'

// [old path relative to public, new filename]
const map = [
  ['gallery-new-1.webp',                          'cloth-hangers-ceiling-pulley-hanger-white-balcony.webp'],
  ['gallery-new-2.webp',                          'staircase-nets-stairwell-net-load-test.webp'],
  ['gallery-new-3.webp',                          'cloth-hangers-balcony-ceiling-hanger-near-ac-unit.webp'],
  ['gallery-new-4.webp',                          'duct-area-nets-technician-installing-shaft-net.webp'],
  ['gallery-new-5.webp',                          'staircase-nets-spiral-staircase-net-cover.webp'],
  ['gallery-new-6.webp',                          'safety-nets-balcony-net-garden-view.webp'],
  ['gallery-new-7.webp',                          'pigeon-nets-bedroom-window-net-installation.webp'],
  ['gallery-new-8.webp',                          'cloth-hangers-wooden-ceiling-balcony-hanger.webp'],
  ['gallery-new-9.webp',                          'cloth-hangers-balcony-hanger-with-clothes-drying.webp'],
  ['gallery-new-10.webp',                         'cloth-hangers-wooden-ceiling-hanger-open-balcony.webp'],
  ['gallery-new-11.webp',                         'cloth-hangers-ceiling-hanger-narrow-balcony.webp'],
  ['invisible-grill-balcony-evening.webp',        'invisible-grills-balcony-evening-woman-standing.webp'],
  ['invisible-grill-apartment-balcony-night.webp','invisible-grills-apartment-balcony-night.webp'],
  ['invisible-grill-balcony-night-view.webp',     'invisible-grills-balcony-night-city-view.webp'],
  ['invisible-grill-apartment-balcony.webp',      'invisible-grills-apartment-balcony-high-rise-view.webp'],
  ['premium-invisible-grill-balcony.webp',        'invisible-grills-premium-balcony-wooden-deck.webp'],
  ['high-rise-invisible-grill-balcony.webp',      'invisible-grills-high-rise-balcony-lake-view.webp'],
  ['glass-balcony-invisible-grill.webp',          'invisible-grills-glass-balcony-wooden-flooring.webp'],
  ['luxury-balcony-invisible-grill.webp',         'invisible-grills-luxury-balcony-blue-glass-facade.webp'],
  ['modern-balcony-invisible-grill.webp',         'invisible-grills-modern-balcony-city-skyline.webp'],
  ['child-safe-invisible-grill-balcony.webp',     'invisible-grills-child-safe-balcony-lake-view.webp'],
  ['apartment-window-invisible-grill.webp',       'invisible-grills-apartment-window-exterior.webp'],
  ['window-invisible-grill-installation.webp',    'invisible-grills-window-installation-city-outlook.webp'],
  ['window-invisible-grill-city-view.webp',       'invisible-grills-window-net-city-view.webp'],
  ['corner-window-invisible-grill.webp',          'invisible-grills-corner-window-open-field-view.webp'],
  ['staircase-invisible-grill-installation.webp', 'invisible-grills-staircase-installation-apartment.webp'],
  ['staircase-safety-net-installation.webp',      'staircase-nets-stairwell-net-installation.webp'],
  ['balcony-pigeon-safety-net.webp',              'pigeon-nets-balcony-corridor-net.webp'],
  ['balcony-pigeon-net-installation.webp',        'pigeon-nets-balcony-installation-greenery-view.webp'],
  ['apartment-pigeon-net-balcony.webp',           'pigeon-nets-apartment-balcony-with-plants.webp'],
  ['apartment-pigeon-safety-net.webp',            'pigeon-nets-apartment-balcony-city-view.webp'],
  ['corridor-pigeon-net-installation.webp',       'pigeon-nets-open-corridor-installation.webp'],
  ['balcony-child-safety-net.webp',               'safety-nets-balcony-child-safety-father-and-baby.webp'],
  ['duct-area-safety-net-installation.webp',      'duct-area-nets-installation-in-progress-shaft.webp'],
  ['duct-net-installation-1.webp',                'sports-nets-indoor-turf-court-enclosure.webp'],
  ['duct-net-installation-2.webp',                'duct-area-nets-terrace-duct-grating-cover.webp'],
  ['duct-net-installation-3.webp',                'duct-area-nets-wall-shaft-net-closeup.webp'],
  ['duct-net-installation-4.webp',                'duct-area-nets-rope-access-installation-high-rise.webp'],
  ['duct-net-installation-5.webp',                'duct-area-nets-green-net-between-buildings.webp'],
  ['duct-net-installation-6.webp',                'duct-area-nets-green-net-shaft-multi-floor.webp'],
  ['duct-net-installation-7.webp',                'duct-area-nets-white-net-box-over-shaft.webp'],
  ['sports-safety-net-installation.webp',         'sports-nets-indoor-turf-court-net-enclosure.webp'],
  ['warehouse-construction-safety-net.webp',      'construction-nets-warehouse-roof-net.webp'],
  ['invisible-grill-2-1.webp',                    'invisible-grills-balcony-sea-facing-view.webp'],
  ['invisible-grill-banner.webp',                 'invisible-grills-balcony-wide-banner-view.webp'],
  ['Invisible-Grill-Staircase4.webp',             'invisible-grills-indoor-staircase-living-room.webp'],
  ['Invisiblegrillsforstairs-841x1024-1.png',     'invisible-grills-indoor-stairs-hallway.webp'],
  ['gagan-pigeon-netting-service-.jpg.jpeg',      'pigeon-nets-installer-fitting-balcony-net.webp'],
  ['balconny-2.jpg.jpeg',                         'safety-nets-balcony-net-installer-at-work.webp'],
  ['duct-slider.jpg.jpeg',                        'duct-area-nets-bird-proofing-between-buildings.webp'],
  ['duct.jpg.jpeg',                               'duct-area-nets-green-net-shaft-enclosure.webp'],
  ['safety-nets-1.jpg.jpeg',                      'safety-nets-balcony-net-apartment-view.webp'],
  ['safety-nets-2.jpg.jpeg',                      'sports-nets-outdoor-cricket-practice-cage.webp'],
  ['safety-nets-3.jpg.jpeg',                      'construction-nets-green-net-over-building-structure.webp'],
  ['safety-nets-4.jpg.jpeg',                      'safety-nets-child-at-balcony-railing.webp'],
  ['safety-nets-5.jpg.jpeg',                      'safety-nets-cat-pet-safety-window-net.webp'],
  ['safety-nets-6.jpg.jpeg',                      'safety-nets-installer-fitting-corridor-net.webp'],
  ['safety-nets-7.jpg.jpeg',                      'pigeon-nets-bird-spikes-installation-closeup.webp'],
  ['safety-nets-8.jpg.jpeg',                      'sports-nets-football-turf-boundary-net.webp'],
  ['safety-nets-9.jpg.jpeg',                      'construction-nets-warehouse-open-side-net.webp'],
  ['safety-nets-10.jpg.jpeg',                     'pigeon-nets-apartment-window-net-elevation.webp'],
  ['safety-nets-11.jpg.jpeg',                     'safety-nets-balcony-green-net-installation.webp'],
  ['safety-nets-12.jpg.jpeg',                     'construction-nets-scaffolding-green-net-facade.webp'],
  ['safety-nets-13.jpg.jpeg',                     'pigeon-nets-building-facade-window-nets.webp'],
  ['safety-nets-14.jpg.jpeg',                     'safety-nets-plant-nursery-open-area-net.webp'],
  ['safety-nets-16.jpg.jpeg',                     'safety-nets-swimming-pool-cover-net.webp'],
  ['safety-nets-17.jpg.jpeg',                     'safety-nets-monkey-safety-net-building-corridor.webp'],
  ['safety-nets-18.jpg.jpeg',                     'safety-nets-car-parking-shade-net.webp'],
  ['safety-nets-19.jpg.jpeg',                     'safety-nets-coconut-tree-fall-protection-net.webp'],
  ['child-pet-nets.jpg.jpeg',                     'safety-nets-child-and-pet-safety-collage.webp'],
  ['children-1.jpg.jpeg',                         'safety-nets-child-behind-balcony-net.webp'],
  ['open-area-safety-nets.jpg.jpeg',              'safety-nets-open-area-corridor-net.webp'],
  ['cricket1.jpg.jpeg',                           'sports-nets-cricket-practice-net-batsman.webp'],
  ['Secure-Netting-Offers-Quality-Nets-for-Cricket-Practice-in-Port-Blair-and-Throughout-Andaman-Nicobar-Island.webp', 'sports-nets-cricket-practice-cage-outdoor.webp'],
  ['industrial1.jpg.jpeg',                        'construction-nets-industrial-roof-net.webp'],
  ['building.jpg.jpeg',                           'pigeon-nets-building-elevation-window-nets.webp'],
  ['building-open.jpg.jpeg',                      'construction-nets-multi-floor-building-net.webp'],
  ['terrace-top.jpg.jpeg',                        'safety-nets-terrace-top-net-installation.webp'],
  ['w1.jpg.jpeg',                                 'pigeon-nets-bird-blocked-by-window-net.webp'],
  ['w2.jpg.jpeg',                                 'pigeon-nets-ac-outdoor-unit-protection-net.webp'],
  ['w3.jpg.jpeg',                                 'sports-nets-indoor-cricket-practice-session.webp'],
  ['w4.jpg.jpeg',                                 'duct-area-nets-atrium-multi-floor-nets.webp'],
  ['ser3.jpeg',                                   'duct-area-nets-green-net-over-shaft-top-view.webp'],
  ['service-5.jpg.jpeg',                          'duct-area-nets-atrium-green-nets-multiple-floors.webp'],
  ['slider-1A.jpg.jpeg',                          'safety-nets-balcony-green-net-with-plants.webp'],
  ['blog2.jpg.jpeg',                              'pigeon-nets-pigeons-on-balcony-railing.webp'],
  ['blog4.jpg.jpeg',                              'pigeon-nets-balcony-net-city-view.webp'],
  ['cl-5.jpg.jpeg',                               'safety-nets-balcony-net-tree-view.webp'],
  ['images.jpeg',                                 'safety-nets-balcony-net-hillside-view.webp'],
  ['images-8.jpeg',                               'cloth-hangers-wall-mounted-drying-rack-window.webp'],
  ['4-5.jpg.jpeg',                                'pigeon-nets-installer-on-building-facade.webp'],
  ['17.jpg.jpeg',                                 'construction-nets-industrial-shed-roof-net.webp'],
  ['a8a4ad7e-6834-4fbd-bf01-3c97b844d6ba.jpeg',  'invisible-grills-balcony-customer-view.webp'],
  ['product-jpeg-500x500-1-1.webp',               'invisible-grills-sliding-window-city-view.webp'],
  ['15-500x500-1.webp',                           'safety-nets-corridor-net-with-installer.webp'],
  ['g-12-14.jpeg',                                'sports-nets-cricket-practice-ground-cage.webp'],
  ['g-12-3.jpeg',                                 'pigeon-nets-building-window-nets-elevation.webp'],
  ['spikes-2.jpg.jpeg',                           'pigeon-nets-bird-spikes-on-roof-edge.webp'],
  ['spikes-slider1.jpg.jpeg',                     'pigeon-nets-bird-spikes-installation-collage.webp'],
]

;(async () => {
  let ok = 0, skip = 0, fail = 0
  for (const [oldName, newName] of map) {
    const src = path.join(PUB, oldName)
    const dest = path.join(PUB, newName)
    if (!fs.existsSync(src)) { console.warn(`⚠ SKIP (not found): ${oldName}`); skip++; continue }
    if (fs.existsSync(dest) && src !== dest) { console.log(`→ already exists: ${newName}`); ok++; continue }
    try {
      await sharp(src).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 82 }).toFile(dest)
      console.log(`✓ ${newName}`)
      ok++
    } catch (e) {
      console.error(`✗ ${oldName}: ${e.message}`)
      fail++
    }
  }
  console.log(`\nDone. ✓${ok}  ⚠${skip}  ✗${fail}`)
})()
