---
title: Installation Types
desc: How to install QOverlay
keys: Getting Started
related:
  - /getting-started/introduction
  - /developing/using-qoverlay
---

QOverlay can be installed as a Quasar App Extension, as a Vue plugin, as a direct component import, or through the UMD bundle.

## Quasar CLI

### App Extension

To add QOverlay to your Quasar application, run the following in your Quasar app folder:

```bash
quasar ext add @quasar/qoverlay
```

While QOverlay v3 is in beta, install with:

```bash
quasar ext add @quasar/qoverlay@beta
```

The QOverlay v3 App Extension targets Quasar CLI Vite 3 and requires `@quasar/app-vite` >=3.0.0-beta.36. It does not support webpack-based Quasar applications.

### Manual Boot File

If you do not install through the App Extension, install the UI package directly:

```tabs
<<| bash pnpm |>>
pnpm add @quasar/quasar-ui-qoverlay@beta
<<| bash bun |>>
bun add @quasar/quasar-ui-qoverlay@beta
<<| bash yarn |>>
yarn add @quasar/quasar-ui-qoverlay@beta
<<| bash npm |>>
npm install @quasar/quasar-ui-qoverlay@beta
```

Then create and register a boot file:

```js
import { defineBoot } from "@quasar/app-vite";
import Plugin from "@quasar/quasar-ui-qoverlay";
import "@quasar/quasar-ui-qoverlay/dist/index.css";

export default defineBoot(({ app }) => {
  app.use(Plugin);
});
```

## Vue 3 Or Vite

```js
import { createApp } from "vue";
import Plugin from "@quasar/quasar-ui-qoverlay";
import "@quasar/quasar-ui-qoverlay/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(Plugin);
app.mount("#app");
```

## Component Import

```html
<style src="@quasar/quasar-ui-qoverlay/dist/index.css"></style>

<script setup lang="ts">
  import { QOverlay } from "@quasar/quasar-ui-qoverlay";
</script>
```
