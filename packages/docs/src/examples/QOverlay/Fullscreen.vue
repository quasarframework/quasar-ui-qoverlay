<template>
  <div class="q-pa-md">
    <q-overlay
      v-model="show"
      :no-scroll="noScroll"
      background-color="#050505"
      opacity="0.72"
      :z-index="5000"
      cursor-type="wait"
    >
      <template #body>
        <div class="absolute-full column justify-center items-center q-gutter-md text-white">
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

      <q-card class="fullscreen-demo-card">
        <q-card-section class="q-gutter-md">
          <div class="row items-center q-gutter-sm">
            <q-btn color="primary" label="Run fullscreen task" @click="showFullscreenOverlay" />
            <q-toggle
              v-model="noScroll"
              color="cyan-5"
              keep-color
              label="Prevent page scroll while active"
            />
          </div>

          <q-banner rounded class="bg-blue-grey-1 text-blue-grey-9">
            This preview uses a contained app surface so the docs page stays usable. In your app,
            leave the default slot empty when the overlay should block the whole viewport.
          </q-banner>
        </q-card-section>
      </q-card>
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

<style scoped>
.fullscreen-demo-card {
  min-height: 220px;
  background: #1f1f1f;
  border: 1px solid rgba(255, 255, 255, 0.14);
}
</style>
