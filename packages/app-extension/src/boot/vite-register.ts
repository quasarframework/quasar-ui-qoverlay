import { defineBoot } from '#q-app'
import QOverlay from '@quasar/quasar-ui-qoverlay'
// @ts-expect-error SCSS side-effect imports do not have type declarations
import '@quasar/quasar-ui-qoverlay/src/index.scss'

export default defineBoot(({ app }) => {
  app.use(QOverlay)
})
