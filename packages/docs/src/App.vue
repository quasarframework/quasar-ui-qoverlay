<template>
  <router-view />
</template>

<script setup lang="ts">
import { useMeta } from 'quasar'
import { useDark } from '@/.q-press/composables/dark'

import getMeta from '@/.q-press/assets/get-meta'

const { initDark } = useDark()
initDark()

useMeta({
  title: 'QOverlay for Vue and Quasar',
  titleTemplate: (title) => `${title} | QOverlay`,

  meta: getMeta(
    'QOverlay - fullscreen and component-scoped overlays for Vue and Quasar',
    'QOverlay is a Vue and Quasar component for temporarily blocking interaction while work completes.',
  ),
})
</script>
