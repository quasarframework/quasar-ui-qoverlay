<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row items-center q-gutter-sm">
      <q-btn
        v-for="option in colorOptions"
        :key="option.color"
        :label="option.label"
        :style="{ backgroundColor: option.color, color: option.textColor }"
        @click="showColorOverlay(option.color)"
      />
    </div>

    <div class="opacity-control">
      <div class="text-caption text-blue-grey-2">Overlay opacity</div>
      <q-slider
        v-model="opacity"
        label
        :min="0.2"
        :max="0.85"
        :step="0.05"
        color="cyan-5"
        track-color="blue-grey-8"
        thumb-color="cyan-3"
        class="opacity-slider"
      />
    </div>

    <q-overlay
      v-model="show"
      :background-color="backgroundColor"
      :opacity="opacity"
      :z-index="5000"
      no-scroll
    >
      <template #body>
        <div class="fullscreen column justify-center items-center q-gutter-md text-white">
          <q-icon name="palette" size="4em" />
          <div class="text-h6">Custom overlay color</div>
          <q-btn color="white" text-color="primary" label="Close" @click="show = false" />
        </div>
      </template>
    </q-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QOverlay } from '@quasar/quasar-ui-qoverlay'

const show = ref(false)
const opacity = ref(0.55)
const backgroundColor = ref('#1d4ed8')

const colorOptions = [
  { label: 'Ocean', color: '#1d4ed8', textColor: 'white' },
  { label: 'Grape', color: '#7c3aed', textColor: 'white' },
  { label: 'Slate', color: '#0f172a', textColor: 'white' },
  { label: 'Sunset', color: '#ea580c', textColor: 'white' },
]

function showColorOverlay(color: string): void {
  backgroundColor.value = color
  show.value = true
}
</script>

<style scoped>
.opacity-control,
.opacity-slider {
  max-width: 420px;
}
</style>
