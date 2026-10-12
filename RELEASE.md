# Pocket Worker

A free small-model local writing and planning app. Separate cinematic landing and dashboard. No subscription, account automation, billing or cloud AI. It is not a frontier assistant or an autonomous employee.

## Routes and models

index.html is the landing page; dashboard.html is the app. Qwen2.5 1.5B Q4_K_M is the default, 1,117,320,736 bytes. Optional 0.5B fallback: 491,400,032 bytes, selected manually with its own button. Both cached where supported; storage may be evicted. Several GB of free RAM can be needed. CPU first-token time can exceed a minute. Only Linux Chrome inference tested, not real Mac, phone or Safari. An arithmetic follow-up failed. Browser reminders require the page open, nothing runs when the device sleeps or is off.

## Privacy and limits

Prompts stay on-device. Ordinary notes, drafts and app backups are not app-encrypted. Vault entries are separate local ciphertext and never enter prompts, search, companion state or ordinary backups. Export its encrypted backup separately. Master password not saved and not recoverable; five-minute inactivity/hidden-tab lock. AES-256-GCM and PBKDF2-SHA256, 600,000 rounds. No audit or protection against compromised hosting, devices or extensions.

Site requests go to the chosen static host (Vercel on the new deployment), model downloads to Hugging Face, hosted runtime downloads to jsDelivr, /search query to Wikipedia. No analytics or cloud AI calls. No cloud key input. Device stores do not sync.

Exact slash commands prepare reviewed actions: /help, /remember, /recall, /remind, /search, /write and /read. Model text cannot execute actions.

## Licenses

App MIT; wllama 3.8.1 MIT; IBM Plex Sans SIL Open Font License; Qwen2.5 Apache 2.0. Notices included. Landing art: 61 WebP frames from eight original generated keyframes with interpolated transitions, not live 3D or native video. Larger model revision 91cad51170dc346986eccefdc2dd33a9da36ead9, SHA256 6a1a2eb6d15622bf3c96857206351ba97e1af16c30d7a74ee38970e434e9407e. Smaller revision 9217f5db79a29953eb74d5343926648285ec7e67, SHA256 74a4da8c9fdbcd15bd1f6d01d621410d31c6fc00986f5eb687824e7b93d7a9db.

Sources: https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF and https://github.com/ngxson/wllama

Full limits, privacy and terms are in Settings. No legal immunity or universal compatibility claimed. No private conversations or account secrets included.

## Deployment build

Run `node build-site.cjs` to reconstruct the exact 69 static files into dist/. The assets-0.cjs through assets-2.cjs files hold compressed build input because this repository upload path rejected ordinary binary commits. No dependencies are installed. Vercel uses vercel.json. Root index.html remains the previous GitHub Pages release; new production is on Vercel. Editable source and launchers are also in the separately delivered package.


Full-screen preview checkpoint: edge-to-edge desktop and mobile; signup and sync remain closed. Trigger private branch-only preview after production credit limit.
