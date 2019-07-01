QOverlay (quasar-app-extension-qoverlay)
===

![official icon](https://img.shields.io/badge/Quasar%201.0-Official%20UI%20App%20Extension-blue.svg)
![npm (scoped)](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qoverlay.svg?style=plastic)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/app-extension-qoverlay.svg)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/app-extension-qoverlay.svg)]()
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-app-extension-qoverlay.svg)](https://www.npmjs.com/package/@quasar/quasar-app-extension-qoverlay)

QOverlay is an `UI App Extension` for [Quasar Framework v1](https://v1.quasar-framework.org/). It will not work with legacy versions of Quasar Framework.

This work is currently in `beta` and there are expected changes while things get worked out. Your help with testing is greatly appreciated.

# Installation
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qoverlay
```

# Describe
You can use `quasar describe QOverlay`

# Test Project
In **demo** folder of **app-extension-qoverlay**.

# Demo
Can be found [here](https://quasarframework.github.io/app-extension-qoverlay).

# Example Code

## Fullscreen overlay
You may have to set the `z-index` property (default 200) for fullscreen. Just make sure it has a z-index higher than other visible components.

**Template code**
  ```html
<q-overlay v-model="fullscreen" z-index="5000">
  <template v-slot:body>
    <div class="fullscreen row justify-center items-center">
      <q-spinner v-if="fullscreen && waiting" color="yellow" size="3em" />
      <q-btn v-if="fullscreen && !waiting" color="primary" label="Exit" @click="fullscreen = !fullscreen" />
    </div>
  </template>
</q-overlay>
```
**Javscript code**
```js
  data () {
    return {
      fullscreen: false,
      waiting: false,
      timerId: null
    }
  },
  watch: {
    fullscreen (val) {
      clearTimeout(this.timerId)
      if (val) {
        this.waiting = true
        this.timerId = setTimeout(() => {
          this.waiting = false
        }, 2000)
      } else {
        this.waiting = false
      }
    }
  }
```

## Component overlay
**Template code**
```html
  <q-overlay v-model="component">
    <template v-slot:body>
      <div class="absolute fit row justify-center items-center">
        <q-spinner v-if="component && waiting" color="yellow" size="3em"></q-spinner>
        <q-btn v-if="component && !waiting" color="primary" label="Exit" @click="component = !component" />
      </div>
    </template>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h5">QOverlay</div>
        <div class="text-subtitle2">Put a standard overlay on full screen or over a component.</div>
      </q-card-section>

      </q-card-section>
      <q-card-section>
        <div class="text-h6">Component mode</div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="component = !component">Component</q-btn>
      </q-card-actions>
    </q-card>
  </q-overlay>
```
**Javascript code**
```js
  data () {
    return {
      component: false,
      waiting: false,
      timerId: null
    },
  watch: {
    component (val) {
      clearTimeout(this.timerId)
      if (val) {
        this.waiting = true
        this.timerId = setTimeout(() => {
          this.waiting = false
        }, 2000)
      } else {
        this.waiting = false
      }
    }
  }
```

# QOverlay Vue Properties
| Vue&nbsp;Property | Type	| Default | Description |
|---|---|---|---|
| value | Boolean | | Use v-model to control active state |
| opacity | Number,String | 0.35 | Used to change the opacity of the overlay |
| z-index | Number,String | 200 | Used to change the z-index of the overlay |
| cursor-type | String | not-allowed | ["not-allowed","pointer","none"] Used to change the cursor type of the overlay |

# QOverlay Vue Slots
| Vue&nbsp;Property | Description |
|---|---|
| default | The basic dev land slot |
| body | Anything in the "body" slot will be displayed above the overlay |

QOverlay has no events or methods.

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
