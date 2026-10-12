const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib');
const original=require('./assets-0.cjs')+require('./assets-1.cjs')+require('./assets-2.cjs');
const baseline=JSON.parse(zlib.gunzipSync(Buffer.from(original,'base64')));
const overlay=JSON.parse(zlib.gunzipSync(Buffer.from(require('./saas-overlay.cjs'),'base64')));
fs.rmSync('dist',{recursive:true,force:true});
for(const [name,b64] of Object.entries({...baseline,...overlay})){const out=path.join('dist',name);fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,Buffer.from(b64,'base64'));}
console.log('Built private-stage baseline + UI overlay; accounts/sync closed.');
(async()=>{const url='https://cdn.jsdelivr.net/npm/@wllama/wllama@3.8.1/esm/wasm/wllama.wasm';const r=await fetch(url);if(!r.ok)throw Error('Pinned runtime unavailable');const bytes=Buffer.from(await r.arrayBuffer());if(require('node:crypto').createHash('sha256').update(bytes).digest('hex')!=='551f13439366eff11e057b1b91fe46a7fdac29d56d67372d4c5f19a549dfe70c')throw Error('Runtime hash mismatch');fs.mkdirSync('dist/vendor/wllama3/wasm',{recursive:true});fs.writeFileSync('dist/vendor/wllama3/wasm/wllama.wasm',bytes);})().catch(e=>{console.error(e);process.exit(1)});
