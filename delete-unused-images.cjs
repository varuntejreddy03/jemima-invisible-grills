// delete-unused-images.cjs
const fs = require('fs')

const json = JSON.parse(fs.readFileSync('public/service.json', 'utf8'))
const kept = new Set(Object.values(json).flat().map(p => p.replace(/^\//, '')))

const keepAlways = new Set(['logo.png', 'favicon.png', 'hero.webp'])

// root
let deleted = 0
for (const f of fs.readdirSync('public')) {
  if (!/\.(webp|jpeg|jpg|png)$/i.test(f)) continue
  if (keepAlways.has(f) || kept.has(f)) continue
  fs.unlinkSync('public/' + f)
  console.log('deleted:', f)
  deleted++
}

// gallery/
const gdir = 'public/gallery'
if (fs.existsSync(gdir)) {
  for (const f of fs.readdirSync(gdir)) {
    if (!/\.(webp|jpeg|jpg|png)$/i.test(f)) continue
    if (kept.has('gallery/' + f)) continue
    fs.unlinkSync(gdir + '/' + f)
    console.log('deleted: gallery/' + f)
    deleted++
  }
}

console.log('\nTotal deleted:', deleted)
console.log('Kept:', kept.size, 'images')
