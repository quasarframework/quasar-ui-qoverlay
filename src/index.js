/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithOverlay = function (api, conf) {
  // make sure there is a boot array
  if (!conf.boot) {
    conf.boot = []
  }

  // for brevity
  let boot = conf.boot

  // make sure qoverlay boot file is registered
  if (!boot.includes('~@quasar/quasar-app-extension-qoverlay/boot/qoverlay.js')) {
    boot.push('~@quasar/quasar-app-extension-qoverlay/boot/qoverlay.js')
    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-qoverlay[\\/]src[\\/]boot/)
    console.log(` App Extension (qoverlay) Info: 'Adding qoverlay boot reference to your quasar.conf.js'`)
  }
}

module.exports = function (api, ctx) {
  // register JSON api
  api.registerDescribeApi('QOverlay', '../component/QOverlay.json')

  // extend quasar.conf
  api.extendQuasarConf((conf) => {
    extendWithOverlay(api, conf)
  })
}
