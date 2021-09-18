import { boot } from 'quasar/wrappers'
import JsonApiViewer from 'quasar-ui-json-api-viewer/src/components/JsonApiViewer'
import MarkdownPage from '../components/MarkdownPage.vue'
import MarkdownLink from '../components/MarkdownLink.vue'
import ExampleViewer, { setDefaults } from 'quasar-ui-example-viewer/src'
import pkg from '@quasar/quasar-ui-qoverlay/package.json'
const { version } = pkg


setDefaults({
  locationUrl: 'https://github.com/quasarframework/quasar-ui-qoverlay/tree/next/docs/src/examples',
  jsPaths: [`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@${ version }/dist/index.umd.min.js`],
  cssPaths: [
    `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@${ version }/dist/index.min.css`,
    'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css'
  ],
  noEdit: true
})

export default boot(({ app }) => {
  // app.use(VuePlugin)
  app.use(ExampleViewer)
  app.component('JsonApiViewer', JsonApiViewer)
  app.component('MarkdownPage', MarkdownPage)
  app.component('MarkdownLink', MarkdownLink)

  if (process.env.DEV) {
    const QOverlay = require('@quasar/quasar-ui-qoverlay')
    app.use(QOverlay)
  }
})
