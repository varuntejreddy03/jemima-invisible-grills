// remove-jpegs.cjs
const fs = require('fs')

const json = JSON.parse(fs.readFileSync('public/service.json', 'utf8'))

// Build drop set: specific files + any jpeg/jpg
const SPECIFIC = new Set([
  '/invisible-grill-balcony-evening.webp',
  '/safety-nets-installer-fitting-corridor-net.webp',
  '/safety-nets-balcony-net-garden-view.webp',
  '/pigeon-nets-open-corridor-installation.webp',
  '/gallery/WhatsApp Image 2026-07-27 at 6.58.44 PM (3).jpeg',
])

function shouldDrop(p) {
  if (SPECIFIC.has(p)) return true
  if (/\.(jpeg|jpg)$/i.test(p)) return true
  return false
}

// 1. Update service.json
let totalDropped = 0
for (const slug of Object.keys(json)) {
  const before = json[slug].length
  json[slug] = json[slug].filter(p => !shouldDrop(p))
  totalDropped += before - json[slug].length
}
fs.writeFileSync('public/service.json', JSON.stringify(json, null, 2))
console.log(`service.json: removed ${totalDropped} entries`)

// 2. Update services.ts
let src = fs.readFileSync('src/data/services.ts', 'utf8')
const allDropped = []
for (const slug of Object.keys(json)) {
  // collect what was dropped
}
// Re-collect from original json before filter — easier to just remove lines matching dropped paths
const originalJson = JSON.parse(fs.readFileSync('public/service.json', 'utf8'))
// Build full drop list by re-reading original
const dropPaths = new Set()
SPECIFIC.forEach(p => dropPaths.add(p))
// add all jpeg/jpg from original services.ts
const srcMatches = [...src.matchAll(/src: '([^']+)'/g)].map(m => m[1])
for (const p of srcMatches) {
  if (/\.(jpeg|jpg)$/i.test(p)) dropPaths.add(p)
}

for (const p of dropPaths) {
  const escaped = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  src = src.replace(new RegExp(`[ \t]*\\{ src: '${escaped}', alt: '[^']*' \\},?\\r?\\n`, 'g'), '')
}
fs.writeFileSync('src/data/services.ts', src)
console.log(`services.ts: removed ${dropPaths.size} entries`)

// 3. Delete files from disk
let deleted = 0
for (const p of dropPaths) {
  const file = 'public' + p.replace(/\//g, require('path').sep)
  if (fs.existsSync(file)) {
    fs.unlinkSync(file)
    console.log('deleted:', p)
    deleted++
  }
}
console.log(`\nDone. Deleted ${deleted} files.`)
