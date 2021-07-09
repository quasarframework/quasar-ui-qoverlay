---
title: Installation Types
desc: How to install QOverlay
keys: All about QOverlay
related:
  - /all-about-qoverlay/what-is-qoverlay
  - /contributing/bugs-and-feature-requests
  - /contributing/sponsor
---
## Quasar CLI

### App Extension

#### Install

To add as an App Extension to your Quasar application, run the following (in your Quasar app folder):
```
$ quasar ext add @quasar/qoverlay
```

#### Uninstall

To remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):
```
$ quasar ext remove @quasar/qoverlay
```

#### Describe
When installed as an App Extension, you can use `quasar describe QOverlay`.


### Or Create and register a boot file

```
$ yarn add @quasar/quasar-ui-qoverlay
# or
$ npm install @quasar/quasar-ui-qoverlay
```

Then

```js
import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'

export default boot(({ app }) => {
  app.use(Plugin)
})
```

or from sources

```js
import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qoverlay/src/QOverlay.js'

export default boot(({ app }) => {
  app.use(Plugin)
})
```

Additionally, because you are accessing the sources this way, you will need to make sure your project will transpile the code.

In `quasar.conf.js` update the following:
```js
// Note: using ~ tells Quasar the file resides in node_modules
css: [
  'app.sass',
  '~quasar-ui-qoverlay/src/QOverlay.sass'
],

build: {
  transpile = true,
  transpileDependencies: [
    /quasar-ui-qoverlay[\\/]src/
  ]
}
```

### Or target as a component import

:::
```html
<style src="@quasar/quasar-ui-qoverlay/dist/QOverlay.min.css"></style>

<script>
import { QOverlay } from '@quasar/quasar-ui-qoverlay/dist/QOverlay.esm.js'

export default {
  components: {
    QOverlay
  }
}
</script>
```
:::

## Vue CLI or Vite
### Vue project from src

:::
```js
import Plugin from '@quasar/quasar-ui-qoverlay/src/QOverlay.js'
import '@quasar/quasar-ui-qoverlay/src/QOverlay.sass'
import App from './App.vue'

const app = createApp(App)
  .use(Plugin)
```
:::

### Vue project from dist

:::
```js
import Plugin from '@quasar/quasar-ui-qoverlay/dist/QOverlay.esm.js'
import '@quasar/quasar-ui-qoverlay/dist/QOverlay.min.css'
import App from './App.vue'

const app = createApp(App)
  .use(Plugin)
```
:::

### Or component import

:::
```html
<style src="@quasar/quasar-ui-qoverlay/dist/QOverlay.min.css"></style>

<script>
import { QOverlay } from '@quasar/quasar-ui-qoverlay/dist/QOverlay.esm.js'

export default {
  components: {
    QOverlay
  }
}
</script>
```
:::

## UMD variant

Exports `window.QOverlay`.

### Quasar install

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@next/dist/QOverlay.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@next/dist/QOverlay.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@next/dist/QOverlay.rtl.min.css" rel="stylesheet" type="text/css">
```

### Vue install

```html
<head>
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@next/dist/QOverlay.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body: -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@next/dist/QOverlay.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@next/dist/QOverlay.rtl.min.css" rel="stylesheet" type="text/css">
```

Your Vue source:
```js
const app = Vue.createApp({
  setup() {
    // ...your set up methods
  }
});

app.component("QOverlay", QOverlay.QOverlay);
app.mount("#app");
```


## Testing on Codepen
[QOverlay UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/ZEemBjm) // TBD

# Project source
Can be found [here](https://github.com/quasarframework/quasar-ui-qoverlay/tree/next).
