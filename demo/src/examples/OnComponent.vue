<template>
  <div class="q-pa-md row justify-around">

    <q-overlay :no-scroll="noScroll" v-model="model">
      <template v-slot:body>
        <div class="absolute fit row justify-center items-center">
          <q-spinner v-if="model === true && waiting === true" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="model === true && waiting !== true" color="primary" label="Exit" @click="model = !model" />
        </div>
      </template>
      <q-card :class="'my-card ' + ($q.dark.isActive !== true ? 'bg-secondary text-white' : '')" >
        <q-card-section>
          <div class="text-h5">QOverlay</div>
          <div class="text-subtitle2">Put a standard overlay on full screen or over a component.</div>
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Fullscreen mode</div>
          <div class="text-body2">For fullscreen overlay mode, the <i>q-overlay</i> tag can be placed anywhere in a template and should have no default slot used. The overlay will cover all scrollable area (try scrolling this page after entering Fullscreen mode). But, if the <strong>body</strong> slot is used, this will be available on the visible view port.</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Component mode</div>
          <div class="text-body2">For component overlay mode, the <i>q-overlay</i> tag is used to wrap a component. The overlay will cover the contained component.</div>
        </q-card-section>

        <q-separator dark />
        <q-checkbox v-model="noScroll" dark label="No scroll" />
        <q-separator dark />

        <q-card-actions>
          <q-btn flat @click="model = !model">Component</q-btn>
        </q-card-actions>
      </q-card>
    </q-overlay>

  </div>
</template>

<script>
export default {
  data () {
    return {
      model: false,
      noScroll: false,
      waiting: false,
      timerId: null
    }
  },

  deforeDestroy () {
    clearTimeout(this.timerId)
  },

  watch: {
    model (val) {
      clearTimeout(this.timerId)
      if (val) {
        this.waiting = true
        this.timerId = setTimeout(() => {
          this.waiting = false
        }, 2000)
      } else {
        this.waiting = false
      }
    }
  }
}
</script>
