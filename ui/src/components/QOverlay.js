import { slot } from 'quasar/src/utils/slot.js'
import ModelToggleMixin from 'quasar/src/mixins/model-toggle.js'
import PreventScrollMixin from 'quasar/src/mixins/prevent-scroll.js'

export default {
  name: 'QOverlay',

  mixins: [ModelToggleMixin, PreventScrollMixin],

  props: {
    opacity: {
      type: [Number, String],
      default: 0.35
    },
    zIndex: {
      type: [Number, String],
      default: 6000
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
        backgroundColor: `rgba(0,0,0,${this.opacity})`,
        padding: 0,
        margin: 0
      }
    }
  },

  render (h) {
    const
      defSlot = slot(this, 'default'),
      bodySlot = slot(this, 'body'),
      isFullscreen = defSlot === void 0

    this.__preventScroll(this.noScroll === true && this.value === true)

    if (this.value === true) {
      if (isFullscreen === true) {
        return h('div', {
          staticClass: 'q-overlay fixed fullscreen',
          class: `cursor-${this.cursorType}`,
          style: this.styles
        }, bodySlot)
      }
    }

    if (this.value !== true) {
      if (isFullscreen === true) {
        // nothing to draw when fullscreen and not displaying
        return void 0
      }
    }

    if (this.value === true) {
      if (isFullscreen !== true) {
        const overlay = h('div', {
          staticClass: 'q-overlay q-overlay--component',
          class: `cursor-${this.cursorType}`,
          style: this.styles
        }, bodySlot)

        return h('div', {
          staticClass: 'q-overlay--wrapper'
        }, [overlay].concat(defSlot))
      }
    }

    return h('div', {
      staticClass: 'q-overlay'
    }, defSlot)
  }
}
