<template>
  <div class="q-pa-md row justify-around q-gutter-sm" style="max-width: 700px; width: 100%;">
    <q-checkbox v-model="noScroll" label="No scroll" />
    <div class="column">
      <q-btn label="Fullscreen Overlay (Red)" @click="color='rgb(255,0,0)'; model = true"></q-btn>
      <q-btn label="Fullscreen Overlay (Green)" @click="color='rgb(0,255,0)'; model = true"></q-btn>
      <q-btn label="Fullscreen Overlay (Blue)" @click="color='rgb(0,0,255)'; model = true"></q-btn>
    </div>

    <q-overlay v-model="model" :background-color="color" :no-scroll="noScroll" :z-index="5000">
      <template #body>
        <div class="fullscreen row justify-evenly items-center">
          <q-spinner v-if="model === true && waiting === true" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="model === true && waiting !== true" color="primary" label="Exit" @click="model = !model" />
        </div>
      </template>
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
      timerId: null,
      color: 'rgb(255, 0, 0)'
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
