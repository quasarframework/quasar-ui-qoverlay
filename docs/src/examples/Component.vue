<template>
  <div class="q-pa-md q-gutter-sm">
    <q-overlay :no-scroll="noScroll" v-model="show">
      <template v-slot:body>
        <div class="absolute fit row justify-center items-center">
          <q-spinner v-if="show === true && waiting === true" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="show === true && waiting !== true" color="primary" label="Exit" @click="onClickComponentOverlay"/>
        </div>
      </template>

      <q-card :class="'my-card ' + ($q.dark.isActive !== true ? 'bg-primary text-white' : '')">
        <q-card-section>
          <div class="text-h5">QOverlay</div>
          <div class="text-subtitle2">Put a standard overlay on full screen or over a component.</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Fullscreen mode</div>
          <div class="text-body2">For fullscreen overlay mode, the <i>q-overlay</i> tag can be placed anywhere in a template and should have no default slot used. The overlay will
            cover all scrollable area (try scrolling this page after entering Fullscreen mode). But, if the <strong>body</strong> slot is used, this will be available on the
            visible view port.
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Component mode</div>
          <div class="text-body2">For component overlay mode, the <i>q-overlay</i> tag is used to wrap a component. The overlay will cover the contained component.</div>
        </q-card-section>

        <q-separator dark/>

        <q-card-actions class="justify-around">
          <q-checkbox v-model="noScroll" color="secondary" dark label="No scroll"/>
          <q-btn flat @click="onClickComponentOverlay">Component Overlay</q-btn>
        </q-card-actions>
      </q-card>
    </q-overlay>
  </div>

</template>

<script>
import { defineComponent, onBeforeUnmount, reactive, toRefs } from 'vue'
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
  name: 'Component',
  components: {
    QOverlay
  },

  setup() {
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
