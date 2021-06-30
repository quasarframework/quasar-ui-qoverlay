// import something here
import VuePlugin from 'ui' // "ui" is aliased in quasar.conf.js
// import '@quasar/quasar-ui-qoverlay/src/index.sass'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// eslint-disable-next-line @typescript-eslint/require-await
export default async ({ app }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  app.use(VuePlugin)
}
