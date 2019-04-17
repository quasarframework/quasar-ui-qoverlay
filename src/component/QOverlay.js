import Vue from 'vue'
import slot from 'quasar/src/utils/slot.js'
import ModelToggleMixin from 'quasar/src/mixins/model-toggle.js'

export default Vue.extend({
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
      default: 'not-allowed',
      validator: v => ['not-allowed', 'pointer', 'none'].includes(v)
    }
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

    if (this.value === true) {
      const overlay = h('div', {
        class: `cursor-${this.cursorType} ` +
          (isFullscreen === true ? 'fixed fullscreen' : 'absolute fit'),
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
})
