<template>
  <div class="row justify-center q-pa-md q-gutter-sm">

    <q-checkbox v-model="noScroll" label="Disable scrolling when showing overlay" />
    <div class="column q-gutter-sm">
      <q-btn label="Show Fullscreen Overlay (Red)" @click="onClickComponentOverlay('rgb(255,0,0)')"></q-btn>
      <q-btn label="Show Fullscreen Overlay (Green)" @click="onClickComponentOverlay('rgb(0,255,0)')"></q-btn>
      <q-btn label="Show Fullscreen Overlay (Blue)" @click="onClickComponentOverlay('#0000FF')"></q-btn>
    </div>

    <q-overlay v-model="show" :background-color="color" :no-scroll="noScroll" :z-index="5000">
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
import { defineComponent, onBeforeUnmount, reactive, toRefs, ref } from 'vue'
import { QOverlay } from '@quasar/quasar-ui-qoverlay'
import '@quasar/quasar-ui-qoverlay/src/QOverlay.sass'

function useComponentOverlay(properties, color) {

  onBeforeUnmount(() => {
    clearTimeout(properties.timerId)
  })

  const onClickComponentOverlay = (colorName) => {
    clearTimeout(properties.timerId)
    properties.show = !properties.show
    if (properties.show) {
      console.log('colorName:', colorName)
      color.value = colorName
      properties.waiting = true
      properties.timerId = setTimeout(() => {
        properties.waiting = false
        properties.show = false
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
  name: 'BackgroundColor',
  components: {
    QOverlay
  },

  setup () {
    const properties = reactive({
      show: false,
      noScroll: false,
      waiting: false,
      timerId: null
    })
    const color = ref('rgb(255,0,0)')

    const {
      onClickComponentOverlay
    } = useComponentOverlay(properties, color)

    return {
      ...toRefs(properties),
      color,
      onClickComponentOverlay
    }
  }
})
</script>
