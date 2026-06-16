import { defineBoot } from '#q-app'
import QOverlay from '@quasar/quasar-ui-qoverlay'

export default defineBoot(({ app }) => {
  app.use(QOverlay)
})
