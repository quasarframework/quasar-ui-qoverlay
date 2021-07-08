<template>
  <div class="q-pa-md q-gutter-sm">
    <q-overlay v-model="show" z-index="5000">
      <template v-slot:body>
        <div class="absolute fit row justify-center items-center">
          <q-spinner v-if="show === true && waiting === true" color="yellow" size="3em"></q-spinner>
        </div>
      </template>
    </q-overlay>

      <q-btn label="Add new component" icon="add"   @click="onClickFabOverlay">
        <q-menu :no-parent-event='true' v-model="showMenu">
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Branches</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Leaves</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Roots</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>


  </div>
</template>

<script>
import { defineComponent, onBeforeUnmount, reactive, toRefs, computed } from 'vue'
import { QOverlay } from '@quasar/quasar-ui-qoverlay/src/QOverlay.js'
import '@quasar/quasar-ui-qoverlay/src/QOverlay.sass'

function useFabOverlay(properties) {

  onBeforeUnmount(() => {
    clearTimeout(properties.timerId)
  })

  const onClickFabOverlay = () => {
    clearTimeout(properties.timerId)
    properties.show = !properties.show
    if (properties.show) {
      properties.waiting = true
      properties.timerId = setTimeout(() => {
        properties.waiting = false
        properties.showMenu = true
        properties.show = false
      }, 2000)
    }
 else {
      properties.waiting = false
    }
  }

  const onMouseClick = () => {
    if (properties.closeOnMouseClick) {
      onClickFabOverlay()
    }
  }

  return {
    onClickFabOverlay,
    onMouseClick
  }
}

export default defineComponent({
  name: 'ButtonWithMenu',
  components: {
    QOverlay
  },

  setup() {
    const properties = reactive({
      show: false,
      noScroll: false,
      waiting: false,
      timerId: null,
      color: 'rgb(255, 0, 0)',
      closeOnMouseClick: false,
      showMenu: false
    })

    const {
      onClickFabOverlay,
      onMouseClick
    } = useFabOverlay(properties)

    return {
      ...toRefs(properties),
      onClickFabOverlay,
      onMouseClick
    }
  }
})
</script>

<style scoped>

</style>
