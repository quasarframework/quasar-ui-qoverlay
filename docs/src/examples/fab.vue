<template>
  <div class="q-pa-md q-gutter-sm">
    <q-overlay v-model="show" z-index="5000">
      <template v-slot:body>
        <div class="absolute fit row justify-center items-center">
          <q-spinner v-if="show === true && waiting === true" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="show === true && waiting !== true" color="primary" label="Exit" @click="onClickFabOverlay"/>
        </div>
      </template>
    </q-overlay>

    <div>
      <q-btn icon="add" fab>
        <q-menu
          @before-show="onClickFabOverlay"
          @before-hide="onMouseClick">
        </q-menu>
      </q-btn>
    </div>
    <q-checkbox v-model="closeOnMouseClick" label="Close overlay on mouse click"/>
  </div>
</template>

<script>
import { defineComponent, onBeforeUnmount, reactive, toRefs } from 'vue'
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
  name: 'Fab',
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
      closeOnMouseClick: false
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
