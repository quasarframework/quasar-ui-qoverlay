<template>
  <router-view />
</template>

<script setup lang="ts">
import { useMeta } from "quasar";
import { useDark } from "@/.q-press/composables/dark";

import getMeta from "@/.q-press/assets/get-meta";

const { initDark } = useDark();
initDark();

useMeta({
  title: "QOverlay for Vue and Quasar",
  titleTemplate: (title) => `${title} | QOverlay`,

  meta: getMeta(
    "QOverlay - wheel-style string, time, date, and range overlays for Vue and Quasar",
    "QOverlay is a Vue and Quasar component for building compact string, time, date, and range overlays and overlay controls.",
  ),
});
</script>
