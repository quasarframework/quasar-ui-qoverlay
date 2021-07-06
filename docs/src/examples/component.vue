<template>
  <div class="q-pa-md q-gutter-sm">
  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'
import { QOverlay } from '@quasar/quasar-ui-qoverlay/src/QOverlay.js'
import '@quasar/quasar-ui-qoverlay/src/QOverlay.sass'

export default defineComponent({
  name: 'Component',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    QOverlay
  },

  setup () {
    const model = ref(false)

    return {
      model
    }
  }
})
</script>