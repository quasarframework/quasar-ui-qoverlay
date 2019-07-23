/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendConf = function (conf) {
  // make sure qoverlay boot file is registered
  conf.boot.push('~@quasar/quasar-app-extension-qoverlay/src/boot/qoverlay.js')
  console.log(` App Extension (qoverlay) Info: 'Adding qoverlay boot reference to your quasar.conf.js'`)

  // make sure boot & component files transpile
  conf.build.transpileDependencies.push(/quasar-app-extension-qoverlay[\\/]src/)

  // make sure qwindow css goes through webpack to avoid ssr issues
  conf.css.push('~@quasar/quasar-app-extension-qoverlay/src/component/overlay.styl')
  console.log(` App Extension (qoverlay) Info: 'Adding overlay.styl css reference to your quasar.conf.js'`)
}

module.exports = function (api) {
  // quasar compatibility check
  api.compatibleWith('@quasar/app', '^1.0.0')

  // register JSON api
  api.registerDescribeApi('QOverlay', './component/QOverlay.json')

  // extend quasar.conf
  api.extendQuasarConf(extendConf)
}
