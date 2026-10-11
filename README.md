# Pocket Worker

A small, local-first writing and planning assistant. Free open software, no subscription or paid API. This is a basic small-model assistant, not a frontier AI or a 24/7 autonomous employee.

## Web app

The UI runs in your browser. Click **Load free local AI** to download the official Qwen2.5 0.5B Q4_K_M model (491,400,032 bytes) from Hugging Face. Inference runs on your device. The model is cached where supported; browser storage can be evicted. Keep backups.

Memory, reviewed text drafts, reminders and repeating scheduled notes stay in browser storage. Reminders work while the tab is open and show missed items when you return. Nothing runs when the laptop is asleep or off. Browser data does not sync between devices.

Use current Chrome or Firefox. Safari and macOS 12.6 have not been tested on an actual Mac. A small disk download does not guarantee less than 1GB RAM use. No GPU is required for the CPU/WebAssembly path.

## Actions

- `/help`
- `/remember your exact note` (approval first)
- `/recall keyword`
- `/remind 10m drink water` (approval first; m, h, d)
- `/search topic` (Wikipedia-only sources, not general web search)
- `/write notes.md | exact file contents` (review first)
- `/read notes.md`

The model cannot execute actions. Actions are parsed from the user's exact command, validated and reviewed before saving. There is no shell, account automation, messaging, purchase tool or unrestricted file access. Network destinations are fixed: Hugging Face model download and Wikipedia-only search. Retrieved text is untrusted data.

## Privacy

No API key or paid fallback. The static host can receive normal page access metadata; Hugging Face receives the model download request and Wikipedia receives search queries. Chat prompts and saved notes are not sent to a hosted model by this app. Device-local storage is not encrypted by the app. Export before clearing browser storage.

## Dependencies and licenses

- wllama 1.16.2, MIT: https://github.com/ngxson/wllama
- Qwen2.5 0.5B Instruct GGUF, Apache 2.0: https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF
- Model revision: 9217f5db79a29953eb74d5343926648285ec7e67
- Model SHA256: 74a4da8c9fdbcd15bd1f6d01d621410d31c6fc00986f5eb687824e7b93d7a9db

App code is MIT licensed. Model and runtime licenses are included separately. No proprietary instructions, personal notes, private transcripts or account secrets are included.
