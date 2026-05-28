<template>
  <div class="q-pa-md q-gutter-md">
    <q-banner rounded class="bg-grey-2 text-grey-9">
      Use an overlay to communicate a short asynchronous handoff before opening a menu, dialog, or
      other follow-up UI.
    </q-banner>

    <q-overlay v-model="show" z-index="5000" opacity="0.45">
      <template #body>
        <div class="fullscreen row justify-center items-center">
          <q-spinner-grid color="yellow" size="4em" />
        </div>
      </template>
    </q-overlay>

    <q-btn color="primary" icon="add" label="Add new section" @click="openMenuAfterOverlay">
      <q-menu v-model="showMenu" no-parent-event>
        <q-list style="min-width: 180px">
          <q-item v-close-popup clickable>
            <q-item-section avatar>
              <q-icon name="account_tree" />
            </q-item-section>
            <q-item-section>Branches</q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section avatar>
              <q-icon name="eco" />
            </q-item-section>
            <q-item-section>Leaves</q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section avatar>
              <q-icon name="foundation" />
            </q-item-section>
            <q-item-section>Roots</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { QOverlay } from "@quasar/quasar-ui-qoverlay";

const show = ref(false);
const showMenu = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

function openMenuAfterOverlay(): void {
  if (timer !== undefined) {
    clearTimeout(timer);
  }

  showMenu.value = false;
  show.value = true;

  timer = setTimeout(() => {
    show.value = false;
    showMenu.value = true;
    timer = undefined;
  }, 900);
}

onBeforeUnmount(() => {
  if (timer !== undefined) {
    clearTimeout(timer);
  }
});
</script>
