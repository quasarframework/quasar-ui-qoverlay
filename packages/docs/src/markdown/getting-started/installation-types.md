---
title: Installation Types
desc: How to install QOverlay
keys: Getting Started
related:
  - /getting-started/introduction
  - /developing/using-qoverlay
---

QOverlay can be installed as a Quasar App Extension, as a Vue plugin, as a direct component import, or through the UMD bundle.

## Recommended Path

::: steps

## Use the App Extension in Quasar CLI apps

Choose the App Extension when you want Quasar to add the boot file and stylesheet for you.

## Use the Vue plugin for manual registration

Install the UI package directly when your app owns plugin registration or when you are not using the Quasar CLI App Extension flow.

## Import the component directly for targeted bundles

Import `QOverlay` directly when you only want to register the component on the pages that need it.
:::

## Quasar CLI

### App Extension

To add QOverlay to your Quasar application, run the following in your Quasar app folder:

```bash
quasar ext add @quasar/qoverlay
```

The QOverlay v3 App Extension targets Quasar CLI Vite 3 and requires `@quasar/app-vite` >=3.0.0. It does not support webpack-based Quasar applications.

::: tip
The App Extension can register QOverlay without an import from application source. If your application imports a component or type from `@quasar/quasar-ui-qoverlay`, add the UI package as a direct application dependency (for example, `pnpm add @quasar/quasar-ui-qoverlay`). Do not rely on the App Extension's transitive dependency, especially with strict package managers such as pnpm.
:::

### Manual Boot File

If you do not install through the App Extension, install the UI package directly:

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

Then create and register a boot file:

```js
import { defineBoot } from '#q-app'
import Plugin from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'

export default defineBoot(({ app }) => {
  app.use(Plugin)
})
```

## Vue 3 Or Vite

```js
import { createApp } from 'vue'
import Plugin from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Plugin)
app.mount('#app')
```

## Component Import

```html
<style src="@quasar/quasar-ui-qoverlay/dist/index.css"></style>

<script setup lang="ts">
  import { QOverlay } from '@quasar/quasar-ui-qoverlay'
</script>
```
