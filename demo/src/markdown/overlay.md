QOverlay
===

**QOverlay** is a component for managing overlays in your Quasar application.

# Features
- Show fullscreen overlays
- Show component-level overlays
- Turn off scrollbars
- Put a component/element on top of the overlay

# Installation Types

## Quasar CLI

**App Extension**

:::
#### Install

To add as an App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qoverlay@qv1
```

#### Uninstall

To remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):
```
quasar ext remove @quasar/qoverlay
```

#### Describe
When installed as an App Extension, you can use `quasar describe QOverlay`
:::

**OR**:

:::
Create and register a boot file:

```js
import Vue from 'vue'
import Plugin from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'

Vue.use(Plugin)
```
:::

**OR**:

:::
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
:::

## Vue CLI project

:::
```js
import Vue from 'vue'
import Plugin from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/dist/index.css'

Vue.use(Plugin)
```
:::

**OR**:

:::
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
:::

## UMD variant

Exports `window.QOverlay`.

Add the following tag(s) after the Quasar ones:

:::
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
:::

## Testing on Codepen
[UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/wvBKVNB)

# Docs
Can be found [here](https://quasarframework.github.io/quasar-ui-qoverlay).

# Examples
Can be found [here](https://quasarframework.github.io/quasar-ui-qoverlay/examples).

# Demo (source) Project
Can be found [here](https://github.com/quasarframework/quasar-ui-qoverlay/tree/master/demo).

~~~
