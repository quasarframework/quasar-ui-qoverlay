<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row items-center q-gutter-sm">
      <q-btn color="primary" label="Run fullscreen task" @click="showFullscreenOverlay" />
      <q-toggle v-model="noScroll" label="Prevent page scroll while active" />
    </div>

    <q-banner rounded class="bg-blue-grey-1 text-blue-grey-9">
      A fullscreen overlay is useful while a blocking operation is running. This example briefly
      shows a loading state, then swaps to an action button so the user can dismiss it.
    </q-banner>

    <q-overlay v-model="show" :no-scroll="noScroll" :z-index="5000" cursor-type="wait">
      <template #body>
        <div class="fullscreen column justify-center items-center q-gutter-md text-white">
          <q-spinner v-if="waiting" color="yellow" size="4em" />
          <q-icon v-else name="check_circle" color="positive" size="4em" />

          <div class="text-h6">{{ waiting ? "Processing..." : "Ready" }}</div>

          <q-btn
            v-if="waiting === false"
            color="primary"
            label="Close overlay"
            @click="hideOverlay"
          />
        </div>
      </template>
    </q-overlay>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { QOverlay } from "@quasar/quasar-ui-qoverlay";

const show = ref(false);
const waiting = ref(false);
const noScroll = ref(true);
let timer: ReturnType<typeof setTimeout> | undefined;

function clearTimer(): void {
  if (timer !== undefined) {
    clearTimeout(timer);
    timer = undefined;
  }
}

function showFullscreenOverlay(): void {
  clearTimer();
  show.value = true;
  waiting.value = true;

  timer = setTimeout(() => {
    waiting.value = false;
    timer = undefined;
  }, 1600);
}

function hideOverlay(): void {
  clearTimer();
  waiting.value = false;
  show.value = false;
}

onBeforeUnmount(clearTimer);
</script>
