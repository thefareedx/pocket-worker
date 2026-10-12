# Editable private SaaS source

The current editable source is delivered as an owner-private archive, separate from the compressed static deployment overlay. Original main/public v1 remains untouched.

The archive includes package-lock, separate UI/auth/storage/vault modules, database migration preparation, standalone companion source and unit tests. Build with Node22: npm ci --ignore-scripts, npm test, npm run build. The build verifies the frozen landing and pinned WASM integrity. Model weights are not bundled.

The private stage has owner-only Google identity testing. Sign-in does not upload ordinary data. Cloud sync, account deletion UI and service integrations are not enabled. The prepared record allowlist tests are not proof of finished cloud sync.

A public editable-source layout and CI are still pending. This branch is a staging artifact, not a public SaaS launch or enterprise readiness claim.
