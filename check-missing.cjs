// check-missing.cjs
const fs = require('fs')

const json = JSON.parse(fs.readFileSync('public/service.json', 'utf8'))
const allImgs = Object.values(json).flat()

let missing = 0
for (const p of allImgs) {
  const file = 'public' + p.replace(/\//g, require('path').sep)
  if (!fs.existsSync(file)) {
    console.log('MISSING:', p)
    missing++
  }
}
console.log(`\nTotal missing: ${missing} / ${allImgs.length}`)
