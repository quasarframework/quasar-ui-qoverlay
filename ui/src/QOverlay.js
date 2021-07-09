import QOverlay from './components/QOverlay'
import pkg from '../package.json'
const { version } = pkg

export {
  version,
  QOverlay
}

export default {
  version,
  QOverlay,

  install (Vue) {
    Vue.component(QOverlay.name, QOverlay)
  }
}
