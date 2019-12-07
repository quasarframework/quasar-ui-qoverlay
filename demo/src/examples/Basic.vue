<template>
  <div class="q-pa-md row justify-around q-gutter-md">
    <q-checkbox v-model="noScroll" label="No scroll" />

    <q-overlay v-model="model" :no-scroll="noScroll" :z-index="5000">
      <template #body>
        <div class="fullscreen row justify-center items-center">
          <q-spinner v-if="model === true && waiting === true" color="yellow" size="3em"></q-spinner>
          <q-btn v-if="model === true && waiting !== true" color="primary" label="Exit" @click="model = !model" />
        </div>
      </template>
    </q-overlay>

    <q-btn label="Fullscreen Overlay" @click="model = true"></q-btn>

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
