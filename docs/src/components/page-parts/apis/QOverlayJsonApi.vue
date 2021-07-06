<template>
  <json-api-viewer
    title="QOverlay API"
    :json="json"
    no-menu
  />
</template>

<script>
import { defineComponent } from 'vue'
import Api from '@quasar/quasar-ui-qoverlay/dist/api/QOverlay.json'

export default defineComponent({
  name: 'QOverlayJsonApi',
  setup () {
    return {
      json: Api
    }
  }
})
</script>
