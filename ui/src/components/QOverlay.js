import { slot } from 'quasar/src/utils/slot.js'
import ModelToggleMixin from 'quasar/src/mixins/model-toggle.js'

export default {
  name: 'QOverlay',

  mixins: [ ModelToggleMixin ],

  props: {
    opacity: {
      type: [Number, String],
      default: 0.35
    },
    zIndex: {
      type: [Number, String],
      default: 200
    },
    cursorType: {
      type: String,
      default: 'not-allowed'
    },
    noScroll: Boolean
  },

  computed: {
    styles () {
      return {
        zIndex: this.zIndex,
        backgroundColor: `rgba(0,0,0,${this.opacity})`
      }
    }
  },

  render (h) {
    const
      defSlot = slot(this, 'default'),
      isFullscreen = defSlot === void 0

    if (isFullscreen === true) {
      if (this.noScroll === true) {
        if (this.value === true) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      }
    }

    if (this.value === true) {
      const overlay = h('div', {
        class: `cursor-${this.cursorType}` +
          (isFullscreen === true ? ' fixed fullscreen' : ' absolute fit') +
          (isFullscreen !== true && this.noScroll === true ? ' no-scroll' : ''),
        style: this.styles
      }, slot(this, 'body'))

      return h('div', {
        staticClass: 'absolute'
      }, [overlay].concat(defSlot))
    } else if (defSlot !== void 0) {
      return h('div', {
        staticClass: 'absolute'
      }, defSlot)
    }
  }
}
