---
title: Upgrade Guide
desc: Upgrade to QOverlay v3
keys: other
related:
  - /getting-started/installation-types
  - /developing/using-qoverlay
---

QOverlay v3 modernizes the package for Quasar v2, Vue 3, `@quasar/app-vite` v3, and ESM-first
tooling.

## Requirements

- Vue 3 and Quasar v2.
- Quasar CLI Vite with `@quasar/app-vite` >=3.0.0-rc.1 for the App Extension.
- Node.js 22.13 or newer.
- pnpm 11.5 or newer when working in this repository.

## Update Packages

For Quasar App Extension installs:

```bash
quasar ext add @quasar/qoverlay
```

For direct UI package installs:

```tabs
<<| bash pnpm |>>
pnpm add @quasar/quasar-ui-qoverlay
<<| bash bun |>>
bun add @quasar/quasar-ui-qoverlay
<<| bash yarn |>>
yarn add @quasar/quasar-ui-qoverlay
<<| bash npm |>>
npm install @quasar/quasar-ui-qoverlay
```

## Import Changes

Use the package entrypoint instead of old source-file imports:

```ts [twoslash]
import { QOverlay } from "@quasar/quasar-ui-qoverlay";

QOverlay;
// ^?
```

Import the component stylesheet alongside the component:

```ts
import "@quasar/quasar-ui-qoverlay/dist/index.css";
```

Do not import old paths such as `src/QOverlay.js` or `src/QOverlay.sass`; those belonged to the
legacy package layout.

## Build Output

QOverlay v3 publishes ESM and UMD builds. CommonJS entrypoints have been removed to match the modern
Quasar and Vite ecosystem.
