# QOverlay

[![npm version](https://img.shields.io/npm/v/@quasar/quasar-ui-qoverlay?label=%40quasar%2Fquasar-ui-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)
[![npm downloads](https://img.shields.io/npm/dt/@quasar/quasar-ui-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)
[![npm monthly downloads](https://img.shields.io/npm/dm/@quasar/quasar-ui-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)
[![license](https://img.shields.io/npm/l/@quasar/quasar-ui-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)

<span class="badge-github-sponsors"><a href="https://github.com/sponsors/hawkeye64" title="Sponsor this project on GitHub"><img src="https://img.shields.io/badge/github-sponsors-ea4aaa.svg?logo=githubsponsors&logoColor=white" alt="GitHub Sponsors button" /></a></span>
<span class="badge-paypal"><a href="https://paypal.me/hawkeye64" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

[![Discord](https://img.shields.io/badge/discord-join%20server-738ADB?style=for-the-badge&logo=discord&logoColor=738ADB)](https://chat.quasar.dev)
[![X](https://img.shields.io/badge/follow-@jgalbraith64-1DA1F2?style=for-the-badge&logo=x&logoColor=1DA1F2)](https://twitter.com/jgalbraith64)

QOverlay is a Vue 3 and Quasar component for fullscreen and component-scoped overlays.

## Install

```bash
pnpm add @quasar/quasar-ui-qoverlay
# or
bun add @quasar/quasar-ui-qoverlay
# or
yarn add @quasar/quasar-ui-qoverlay
# or
npm install @quasar/quasar-ui-qoverlay
```

## Quasar Boot File

```ts
import { defineBoot } from '#q-app'
import QOverlay from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'

export default defineBoot(({ app }) => {
  app.use(QOverlay)
})
```

## Direct Component Import

```vue
<template>
  <q-overlay v-model="loading">
    <template #body>
      <div class="fullscreen row justify-center items-center">
        <q-spinner color="yellow" size="3em" />
      </div>
    </template>
  </q-overlay>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QOverlay } from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'

const loading = ref(false)
</script>
```

## UMD

The UMD build exports `window.QOverlay`.

```html
<link
  href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay/dist/index.min.css"
  rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay/dist/index.umd.min.js"></script>
```

## Support

If QOverlay is useful in your workflow and you want to support ongoing maintenance:

- GitHub Sponsors: https://github.com/sponsors/hawkeye64
- PayPal: https://paypal.me/hawkeye64

## License

MIT (c) Jeff Galbraith <jeff@quasar.dev>
