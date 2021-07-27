import QOverlay from './components/QOverlay'

const version = __UI_VERSION__

function install (app) {
  app.component(QOverlay.name, QOverlay)
}

export {
  version,
  QOverlay,

  install
}
