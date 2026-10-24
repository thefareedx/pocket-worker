const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib'),crypto=require('node:crypto');
const gzip=require('./assets-0.cjs');
const files=JSON.parse(zlib.gunzipSync(Buffer.from(gzip,'base64')));
for(const [name,b64] of Object.entries(files)){const out=path.join('dist',name);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,Buffer.from(b64,'base64'));}
console.log('Built '+Object.keys(files).length+' static files');
// Pinned local-AI runtime: downloaded at build time so this repo stays text-only.
const WASM='https://cdn.jsdelivr.net/npm/@wllama/wllama@3.8.1/esm/wasm/wllama.wasm';
const SHA='551f13439366eff11e057b1b91fe46a7fdac29d56d67372d4c5f19a549dfe70c';
fetch(WASM).then(r=>{if(!r.ok)throw new Error('wasm download failed: '+r.status);return r.arrayBuffer()}).then(b=>{
 const buf=Buffer.from(b);
 if(crypto.createHash('sha256').update(buf).digest('hex')!==SHA)throw new Error('wasm integrity mismatch');
 fs.mkdirSync('dist/vendor/wllama3/wasm',{recursive:true});
 fs.writeFileSync('dist/vendor/wllama3/wasm/wllama.wasm',buf);
 console.log('Pinned wllama runtime verified');
}).catch(e=>{console.error(e.message);process.exit(1)});
