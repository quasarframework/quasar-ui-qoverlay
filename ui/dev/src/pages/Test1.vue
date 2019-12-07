<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <!-- fullscreen overlay -->
    <q-overlay v-model="fullscreen" :no-scroll="noScroll" z-index="5000">
      <template v-slot:body>
        <div class="fullscreen row justify-center items-center">
          <q-spinner v-if="fullscreen && waiting" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="fullscreen && !waiting" color="primary" label="Exit" @click="fullscreen = !fullscreen" />
        </div>
      </template>
    </q-overlay>

    <!-- component overlay -->
    <q-overlay v-model="component">
      <template v-slot:body>
        <div class="absolute fit row justify-center items-center">
          <q-spinner v-if="component && waiting" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="component && !waiting" color="primary" label="Exit" @click="component = !component" />
        </div>
      </template>
      <q-card class="my-card bg-secondary text-white">
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
        <q-checkbox v-model="noScroll" dark label="No scollbars" />
        <q-separator dark />

        <q-card-actions>
          <q-btn flat @click="fullscreen = !fullscreen">Fullscreen</q-btn>
          <q-btn flat @click="component = !component">Component</q-btn>
        </q-card-actions>
      </q-card>
    </q-overlay>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      fullscreen: false,
      component: false,
      waiting: false,
      timerId: null,
      noScroll: false
    }
  },
  watch: {
    fullscreen (val) {
      clearTimeout(this.timerId)
      if (val) {
        this.waiting = true
        this.timerId = setTimeout(() => {
          this.waiting = false
        }, 2000)
      } else {
        this.waiting = false
      }
    },
    component (val) {
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
<style>
 body {
   min-height: 2000px;
 }
</style>
<style lang="stylus" scoped>
.my-card
  width 100%
  max-width 350px
</style>
