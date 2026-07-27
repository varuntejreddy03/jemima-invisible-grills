const sharp = require('sharp')
const path = require('path')

const SRC = 'public/gallery'
const OUT = 'public'

const map = [
  ['WhatsApp Image 2026-07-27 at 6.58.42 PM.jpeg',     'gallery-new-1.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.43 PM (1).jpeg', 'gallery-new-2.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.43 PM.jpeg',     'gallery-new-3.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.44 PM (1).jpeg', 'gallery-new-4.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.44 PM (2).jpeg', 'gallery-new-5.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.44 PM (3).jpeg', 'gallery-new-6.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.44 PM.jpeg',     'gallery-new-7.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.45 PM (1).jpeg', 'gallery-new-8.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.45 PM (2).jpeg', 'gallery-new-9.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.45 PM (3).jpeg', 'gallery-new-10.webp'],
  ['WhatsApp Image 2026-07-27 at 6.58.45 PM.jpeg',     'gallery-new-11.webp'],
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
