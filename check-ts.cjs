const fs=require('fs'),path=require('path')
const src=fs.readFileSync('src/data/services.ts','utf8')
const refs=[...src.matchAll(/src: '([^']+)'/g)].map(m=>m[1])
console.log('total refs in services.ts:',refs.length)
let missing=0
for(const p of refs){
  const file='public'+p.split('/').join(path.sep)
  if(!fs.existsSync(file)){console.log('MISSING:',p);missing++}
}
console.log('missing:',missing)
