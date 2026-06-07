# QOverlay

[![npm](https://img.shields.io/npm/v/@quasar/quasar-ui-qoverlay/beta?label=@quasar/quasar-ui-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-ui-qoverlay.svg)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)

QOverlay is a Vue 3 and Quasar component for fullscreen and component-scoped overlays.

## Install

```bash
pnpm add @quasar/quasar-ui-qoverlay@beta
# or
bun add @quasar/quasar-ui-qoverlay@beta
# or
yarn add @quasar/quasar-ui-qoverlay@beta
# or
npm install @quasar/quasar-ui-qoverlay@beta
```

## Quasar Boot File

```ts
import { defineBoot } from "@quasar/app-vite";
import QOverlay from "@quasar/quasar-ui-qoverlay";
import "@quasar/quasar-ui-qoverlay/dist/index.css";

export default defineBoot(({ app }) => {
  app.use(QOverlay);
});
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
import { ref } from "vue";
import { QOverlay } from "@quasar/quasar-ui-qoverlay";
import "@quasar/quasar-ui-qoverlay/dist/index.css";

const loading = ref(false);
</script>
```

## UMD

The UMD build exports `window.QOverlay`.

```html
<link
  href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@beta/dist/index.min.css"
  rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@beta/dist/index.umd.min.js"></script>
```

## Support

If QOverlay is useful in your workflow and you want to support ongoing maintenance:

- GitHub Sponsors: https://github.com/sponsors/hawkeye64
- PayPal: https://paypal.me/hawkeye64

## License

MIT (c) Jeff Galbraith <jeff@quasar.dev>
