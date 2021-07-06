<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useMeta } from 'quasar'

import { provideMarkdownStore } from 'assets/markdown-store.js'
import getMeta from 'assets/get-meta.js'

export default defineComponent({
  name: 'App',

  setup () {
    useMeta({
      title: 'QOverlay » simple overlays for your Quasar apps',
      titleTemplate: title => `${ title } » QOverlay`,

      meta: getMeta(
        'QOverlay - simple overlays for your Quasar apps',
        'QOverlay allows simplified overlays for your Quasar apps.'
      )
    })

    provideMarkdownStore()
  }
})
</script>
