import type { App } from 'vue'

import QOverlay from './components/QOverlay'
import { version } from './version'

function install(app: App): void {
  app.component(String(QOverlay.name), QOverlay)
}

export { version, QOverlay, install }

export default {
  version,
  QOverlay,
  install,
}
