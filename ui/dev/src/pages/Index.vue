<template>
  <q-page class="row items-center justify-evenly">

    <q-overlay :no-scroll="data.noScroll" :id="'component'" v-model="component" :background-color="data.whiteBackground ? '#FFF' : '#000'">
      <template v-slot:body>
        <div class="absolute fit row justify-center items-center">
          <q-spinner v-if="component && data.waiting" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="component && !data.waiting" color="primary" label="Exit" @click="component = !component"/>
        </div>
      </template>
      <q-card class="my-card bg-secondary text-white">
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
        <q-checkbox v-model="data.noScroll" dark label="No scroll"/>
        <q-checkbox v-model="data.whiteBackground" dark label="White Background"/>
        <q-separator dark/>

        <q-card-actions>
          <q-btn flat @click="fullscreen = !fullscreen">Fullscreen</q-btn>
          <q-btn flat @click="component = !component">Component</q-btn>
        </q-card-actions>
      </q-card>
    </q-overlay>
    <q-overlay v-model="fullscreen" :id="'full'" :no-scroll="data.noScroll" >
      <template v-slot:body>
        <div class="fullscreen row justify-center items-center">
          <q-spinner v-if="fullscreen && data.waiting" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="fullscreen && !data.waiting" color="primary" label="Exit" @click="fullscreen = !fullscreen"/>
        </div>
      </template>
    </q-overlay>
  </q-page>
</template>

<script lang="ts">

import { defineComponent, reactive, ref, UnwrapRef, watch } from 'vue'

interface UIModel {
  noScroll: boolean,
  waiting: boolean,
  timerId: any,
  whiteBackground: boolean
}

export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup () {
    const fullscreen = ref(false)
    const component = ref(false)

    const data: UnwrapRef<UIModel> = reactive({
      noScroll: false,
      waiting: false,
      timerId: null,
      whiteBackground: false
    })

    watch(() => component.value, (val) => {
      clearTimeout(data.timerId)
      if (val) {
        data.waiting = true
        data.timerId = setTimeout(() => {
          data.waiting = false
        }, 5000)
      } else {
        data.waiting = false
      }
    })

    watch(() => fullscreen.value, (val) => {
      clearTimeout(data.timerId)
      if (val) {
        data.waiting = true
        data.timerId = setTimeout(() => {
          data.waiting = false
        }, 5000)
      } else {
        data.waiting = false
      }
    })

    return {
      data,
      fullscreen,
      component
    }
  }
})
</script>
<style>
body {
  min-height: 2000px;
}

.my-card {
  width: 100%;
  max-width: 350px;
}

</style>
