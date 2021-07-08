<template>
  <div class="q-pa-md q-gutter-sm">

    <div>
    <q-btn label="Show Fullscreen Overlay" @click="onClickComponentOverlay"></q-btn>
    </div>
    <q-checkbox v-model="noScroll" label="Disable scrolling when showing overlay" />

    <q-overlay v-model="show" :no-scroll="noScroll" :z-index="5000">
      <template #body>
        <div class="fullscreen row justify-evenly items-center">
          <q-spinner v-if="show === true && waiting === true" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="show === true && waiting !== true" color="primary" label="Exit" @click="onClickComponentOverlay" />
        </div>
      </template>
    </q-overlay>
  </div>

</template>

<script>
import { defineComponent, onBeforeUnmount, reactive, ref, toRefs } from 'vue'
import { QOverlay } from '@quasar/quasar-ui-qoverlay/src/QOverlay.js'
import '@quasar/quasar-ui-qoverlay/src/QOverlay.sass'

function useComponentOverlay(properties) {

  onBeforeUnmount(() => {
    clearTimeout(properties.timerId)
  })

  const onClickComponentOverlay = () => {
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

  return {
    onClickComponentOverlay
  }
}

export default defineComponent({
  name: 'Fullscreen',
  components: {
    QOverlay
  },

  setup () {
    const properties = reactive({
      show: false,
      noScroll: false,
      waiting: false,
      timerId: null,
      color: 'rgb(255, 0, 0)'
    })

    const {
      onClickComponentOverlay
    } = useComponentOverlay(properties)

    return {
      ...toRefs(properties),
      onClickComponentOverlay
    }
  }
})
</script>
