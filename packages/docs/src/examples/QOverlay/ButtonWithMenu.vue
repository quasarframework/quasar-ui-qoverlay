<template>
  <div class="q-pa-md q-gutter-md">
    <q-banner rounded class="bg-grey-2 text-grey-9">
      Use an overlay to communicate a short asynchronous handoff, such as fetching menu options from
      a remote server before opening a menu, dialog, or other follow-up UI.
    </q-banner>

    <q-overlay v-model="show" z-index="5000" opacity="0.45">
      <template #body>
        <div class="fullscreen column justify-center items-center q-gutter-md text-white">
          <q-spinner-grid color="yellow" size="4em" />
          <div class="text-subtitle1">Fetching remote options...</div>
        </div>
      </template>
    </q-overlay>

    <q-btn color="primary" icon="cloud_download" label="Load sections" @click="loadMenuOptions">
      <q-menu v-model="showMenu" no-parent-event>
        <q-list style="min-width: 180px">
          <q-item v-for="option in menuOptions" :key="option.label" v-close-popup clickable>
            <q-item-section avatar>
              <q-icon :name="option.icon" />
            </q-item-section>
            <q-item-section>{{ option.label }}</q-item-section>
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
const menuOptions = ref<{ icon: string; label: string }[]>([]);
let timer: ReturnType<typeof setTimeout> | undefined;

function loadMenuOptions(): void {
  if (timer !== undefined) {
    clearTimeout(timer);
  }

  showMenu.value = false;
  menuOptions.value = [];
  show.value = true;

  // Simulate fetching menu options from a remote endpoint before opening the menu.
  timer = setTimeout(() => {
    menuOptions.value = [
      { icon: "account_tree", label: "Branches" },
      { icon: "eco", label: "Leaves" },
      { icon: "foundation", label: "Roots" },
    ];
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
