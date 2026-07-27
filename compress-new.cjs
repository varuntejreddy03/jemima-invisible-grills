const sharp = require('sharp')
const path = require('path')

const SRC = 'public/Invisible grill and pigeo net and safety nets photos'
const DUCT = 'public/Duct area nets'
const OUT = 'public'

const mainMap = [
  ['WhatsApp Image 2026-07-27 at 6.10.25 PM.jpeg',     'invisible-grill-balcony-night-view.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.34 PM.jpeg',     'invisible-grill-apartment-balcony.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.35 PM.jpeg',     'premium-invisible-grill-balcony.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.36 PM (1).jpeg', 'sports-safety-net-installation.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.36 PM.jpeg',     'high-rise-invisible-grill-balcony.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.37 PM (1).jpeg', 'glass-balcony-invisible-grill.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.37 PM.jpeg',     'staircase-invisible-grill-installation.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.38 PM (1).jpeg', 'apartment-window-invisible-grill.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.38 PM (2).jpeg', 'window-invisible-grill-installation.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.38 PM.jpeg',     'corner-window-invisible-grill.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.39 PM (1).jpeg', 'balcony-child-safety-net.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.39 PM (2).jpeg', 'balcony-pigeon-safety-net.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.39 PM.jpeg',     'child-safe-invisible-grill-balcony.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.40 PM (1).jpeg', 'modern-balcony-invisible-grill.webp'],
  ['WhatsApp Image 2026-07-27 at 6.10.40 PM.jpeg',     'apartment-pigeon-net-balcony.webp'],
]

const ductMap = [
  ['WhatsApp Image 2026-07-27 at 6.11.09 PM.jpeg',     'duct-net-installation-1.webp'],
  ['WhatsApp Image 2026-07-27 at 6.11.18 PM (1).jpeg', 'duct-net-installation-2.webp'],
  ['WhatsApp Image 2026-07-27 at 6.11.18 PM.jpeg',     'duct-net-installation-3.webp'],
  ['WhatsApp Image 2026-07-27 at 6.11.19 PM (1).jpeg', 'duct-net-installation-4.webp'],
  ['WhatsApp Image 2026-07-27 at 6.11.19 PM (2).jpeg', 'duct-net-installation-5.webp'],
  ['WhatsApp Image 2026-07-27 at 6.11.19 PM (3).jpeg', 'duct-net-installation-6.webp'],
  ['WhatsApp Image 2026-07-27 at 6.11.19 PM.jpeg',     'duct-net-installation-7.webp'],
]

async function convert(srcDir, map) {
  for (const [old, newName] of map) {
    const src = path.join(srcDir, old)
    const dest = path.join(OUT, newName)
    try {
      await sharp(src)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(dest)
      console.log(`✓ ${newName}`)
    } catch (e) {
      console.error(`✗ ${old}: ${e.message}`)
    }
  }
}

;(async () => {
  console.log('--- Main photos ---')
  await convert(SRC, mainMap)
  console.log('--- Duct area nets ---')
  await convert(DUCT, ductMap)
  console.log('Done.')
})()
