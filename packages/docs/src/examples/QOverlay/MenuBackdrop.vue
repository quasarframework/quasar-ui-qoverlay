<template>
  <div class="q-pa-md q-gutter-md">
    <q-banner rounded class="bg-grey-2 text-grey-9">
      Keep the menu attached to its button, then use the menu lifecycle events to show an overlay
      behind the menu while it is open.
    </q-banner>

    <q-overlay v-model="showBackdrop" z-index="1999" opacity="0.48" />

    <q-btn color="primary" icon="more_vert" label="Open actions">
      <q-menu
        anchor="bottom left"
        self="top left"
        :offset="[0, 8]"
        @before-show="showBackdrop = true"
        @before-hide="showBackdrop = false"
      >
        <q-list style="min-width: 220px">
          <q-item-label header>Project actions</q-item-label>
          <q-item v-close-popup clickable>
            <q-item-section avatar>
              <q-icon name="visibility" />
            </q-item-section>
            <q-item-section>Review status</q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section avatar>
              <q-icon name="edit_note" />
            </q-item-section>
            <q-item-section>Add notes</q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section avatar>
              <q-icon name="archive" />
            </q-item-section>
            <q-item-section>Archive project</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QOverlay } from '@quasar/quasar-ui-qoverlay'

const showBackdrop = ref(false)
</script>
