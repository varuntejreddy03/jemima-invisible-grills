// apply-galleries.cjs
// node apply-galleries.cjs
const fs = require('fs')

const json = JSON.parse(fs.readFileSync('public/service.json', 'utf8'))
let src = fs.readFileSync('src/data/services.ts', 'utf8')

for (const [slug, images] of Object.entries(json)) {
  const items = images
    .map((p) => {
      const filename = p.split('/').pop().replace(/\.[^.]+$/, '')
      const alt = filename.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim()
      return `      { src: '${p}', alt: '${alt}' },`
    })
    .join('\n')

  const newGallery = `gallery: [\n${items}\n    ]`

  // match the gallery array for this specific slug block
  // strategy: find slug marker, then replace the next gallery: [...] after it
  const slugMarker = `slug: '${slug}'`
  const slugIdx = src.indexOf(slugMarker)
  if (slugIdx === -1) { console.warn('slug not found:', slug); continue }

  // find gallery: [ after the slug marker
  const galleryStart = src.indexOf('gallery: [', slugIdx)
  if (galleryStart === -1) { console.warn('gallery not found for:', slug); continue }

  // find matching closing ] using bracket depth
  let depth = 0, i = galleryStart + 'gallery: '.length
  while (i < src.length) {
    if (src[i] === '[') depth++
    else if (src[i] === ']') { depth--; if (depth === 0) break }
    i++
  }

  src = src.slice(0, galleryStart) + newGallery + src.slice(i + 1)
  console.log(`✓ ${slug}: ${images.length} images`)
}

fs.writeFileSync('src/data/services.ts', src)
console.log('Done.')
