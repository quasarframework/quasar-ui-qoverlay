/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendConf = function (api, conf) {
  // for brevity
  let boot = conf.boot

  // make sure qoverlay boot file is registered
  const bootFile = '~@quasar/quasar-app-extension-qoverlay/src/boot/qoverlay.js'
  if (!boot.includes(bootFile)) {
    boot.push(bootFile)
    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-qoverlay[\\/]src[\\/]boot/)
    console.log(` App Extension (qoverlay) Info: 'Adding qoverlay boot reference to your quasar.conf.js'`)
  }
}

module.exports = function (api, ctx) {
  // register JSON api
  api.registerDescribeApi('QOverlay', './component/QOverlay.json')

  // extend quasar.conf
  api.extendQuasarConf((conf) => {
    extendConf(api, conf)
  })
}
