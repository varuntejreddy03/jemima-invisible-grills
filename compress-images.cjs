const sharp = require('sharp')
const path = require('path')

const SRC = 'public/images'
const OUT = 'public'

const map = [
  ['WhatsApp Image 2026-07-27 at 6.22.54 PM.jpeg',     'invisible-grill-balcony-evening.webp'],
  ['WhatsApp Image 2026-07-27 at 6.22.55 PM.jpeg',     'invisible-grill-apartment-balcony-night.webp'],
  ['WhatsApp Image 2026-07-27 at 6.23.00 PM.jpeg',     'window-invisible-grill-city-view.webp'],
  ['WhatsApp Image 2026-07-27 at 6.23.02 PM (1).jpeg', 'luxury-balcony-invisible-grill.webp'],
  ['WhatsApp Image 2026-07-27 at 6.23.02 PM (2).jpeg', 'duct-area-safety-net-installation.webp'],
  ['WhatsApp Image 2026-07-27 at 6.23.02 PM.jpeg',     'balcony-pigeon-net-installation.webp'],
  ['WhatsApp Image 2026-07-27 at 6.23.03 PM (1).jpeg', 'staircase-safety-net-installation.webp'],
  ['WhatsApp Image 2026-07-27 at 6.23.03 PM (2).jpeg', 'apartment-pigeon-safety-net.webp'],
  ['WhatsApp Image 2026-07-27 at 6.23.03 PM.jpeg',     'corridor-pigeon-net-installation.webp'],
  ['WhatsApp Image 2026-07-27 at 6.23.04 PM.jpeg',     'warehouse-construction-safety-net.webp'],
]

;(async () => {
  for (const [old, newName] of map) {
    try {
      await sharp(path.join(SRC, old))
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(OUT, newName))
      console.log(`✓ ${newName}`)
    } catch (e) {
      console.error(`✗ ${old}: ${e.message}`)
    }
  }
  console.log('Done.')
})()
