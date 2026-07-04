<template>
  <div class="q-pa-md">
    <q-overlay v-model="show" background-color="#0f172a" opacity="0.68" cursor-type="progress">
      <template #body>
        <div class="absolute-full column justify-center items-center q-gutter-md text-white">
          <q-spinner-dots color="cyan" size="3em" />
          <div class="text-subtitle1">Refreshing card data...</div>
        </div>
      </template>

      <q-card class="example-card">
        <q-card-section>
          <div class="text-h6">Project Snapshot</div>
          <div class="text-body2 text-grey-7">
            Component-scoped overlays block one surface without covering the whole page.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-gutter-sm">
          <q-linear-progress rounded size="10px" :value="0.72" color="cyan" />
          <div class="row justify-between text-caption text-grey-7">
            <span>Migration progress</span>
            <span>72%</span>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn color="primary" label="Refresh card" @click="showComponentOverlay" />
        </q-card-actions>
      </q-card>
    </q-overlay>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { QOverlay } from '@quasar/quasar-ui-qoverlay'

const show = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

function showComponentOverlay(): void {
  if (timer !== undefined) {
    clearTimeout(timer)
  }

  show.value = true

  timer = setTimeout(() => {
    show.value = false
    timer = undefined
  }, 1600)
}

onBeforeUnmount(() => {
  if (timer !== undefined) {
    clearTimeout(timer)
  }
})
</script>

<style scoped>
.example-card {
  max-width: 420px;
}
</style>
