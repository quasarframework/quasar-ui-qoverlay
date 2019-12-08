import { version } from '../package.json'
import QOverlay from './components/QOverlay'

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
