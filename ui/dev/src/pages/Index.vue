<template>
  <q-page class="row items-center justify-evenly">

    <q-overlay v-model="fullscreen" :id="'full'" :background-color="backgroundColor">
      <template v-slot:body>
        <div class="fullscreen row justify-center items-center">
          <q-spinner v-if="fullscreen && waiting" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="fullscreen && !waiting" color="primary" label="Exit" @click="onClickFullscreen"/>
        </div>
      </template>
    </q-overlay>

    <q-overlay :no-scroll="noScroll" :id="'component'" v-model="component" :background-color="backgroundColor">
      <template v-slot:body>
        <div class="absolute fit row justify-center items-center">
          <q-spinner v-if="component && waiting" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="component && !waiting" color="primary" label="Exit" @click="onClickComponent"/>
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
        <q-checkbox v-model="noScroll" dark label="No scroll"/>
        <q-checkbox v-model="whiteBackground" dark label="White Background"/>
        <q-separator dark/>

        <q-card-actions>
          <q-btn flat @click="onClickFullscreen">Fullscreen</q-btn>
          <q-btn flat @click="onClickComponent">Component</q-btn>
        </q-card-actions>
      </q-card>
    </q-overlay>

  </q-page>
</template>

<script lang="ts">

import { defineComponent, reactive, ref, UnwrapRef, toRefs, computed } from 'vue'

const millisecondsToWait = 2000

interface QOverlayProps {
  noScroll: boolean,
  waiting: boolean,
  timerId: any,
  whiteBackground: boolean
}

function useFullScreenOverlay (props: UnwrapRef<QOverlayProps>) {
  const fullscreen = ref<boolean>(false)
  const onClickFullscreen = () => {
    fullscreen.value = !fullscreen.value
    clearTimeout(props.timerId)
    if (fullscreen.value) {
      props.waiting = true
      props.timerId = setTimeout(() => {
        props.waiting = false
      }, millisecondsToWait)
    } else {
      props.waiting = false
    }
  }

  return {
    fullscreen,
    onClickFullscreen
  }
}

function useComponentOverlay (props: UnwrapRef<QOverlayProps>) {
  const component = ref<boolean>(false)

  const onClickComponent = () => {
    component.value = !component.value
    clearTimeout(props.timerId)
    if (component.value) {
      props.waiting = true
      props.timerId = setTimeout(() => {
        props.waiting = false
      }, millisecondsToWait)
    } else {
      props.waiting = false
    }
  }

  return {
    component,
    onClickComponent
  }
}

export default defineComponent({
  name: 'DevExample',
  components: {},
  setup () {
    const qprops = reactive<QOverlayProps>({
      noScroll: false,
      waiting: false,
      timerId: null,
      whiteBackground: false
    })

    const {
      fullscreen,
      onClickFullscreen
    } = useFullScreenOverlay(qprops)

    const {
      component,
      onClickComponent
    } = useComponentOverlay(qprops)

    const backgroundColor = computed(() => {
      return qprops.whiteBackground ? '#FFF' : '#000'
    })

    return {
      ...toRefs(qprops),
      fullscreen,
      component,
      backgroundColor,
      onClickFullscreen,
      onClickComponent
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
