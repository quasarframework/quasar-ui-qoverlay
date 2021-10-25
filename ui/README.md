QOverlay
===

> If you are looking for QOverlay that supports Quasar v2/Vue v3, then head to the docs [here](https://qoverlay.netlify.app/).

[![npm](https://img.shields.io/npm/v/@quasar/quasar-ui-qoverlay.svg?label=@quasar/quasar-ui-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-ui-qoverlay.svg)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)

QOverlay is a [Quasar](https://quasar.dev) component. It allows you to have fullscreen or component overlays and put a component on top of the overlay.

# Examples and Documentation
Can be found [here](https://quasarframework.github.io/quasar-ui-qoverlay)


# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

**OR**:

Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="@quasar/quasar-ui-qoverlay/dist/index.css"></style>

<script>
import { QOverlay } from '@quasar/quasar-ui-qoverlay'

export default {
  components: {
    QOverlay
  }
}
</script>
```

## Vue CLI project

```js
import Vue from 'vue'
import Plugin from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'

Vue.use(Plugin)
```

**OR**:

```html
<style src="@quasar/quasar-ui-qoverlay/dist/index.css"></style>

<script>
import { QOverlay } from '@quasar/quasar-ui-qoverlay'

export default {
  components: {
    QOverlay
  }
}
</script>
```

## UMD variant

Exports `window.QOverlay`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@qv1/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@qv1/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@qv1/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```

[UMD example on Codepen](https://codepen.io/Hawkeye64/pen/wvBKVNB)

# Building the Projects

## Setup

In both the `ui` and `ui/dev` folders:

```bash
$ yarn
```

## Developing

In the `ui` folder

```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

## Building package

```bash
$ yarn build
```

# build just the JSON API
```bash
$ yarn build:api
```

# Donate

If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
