import Vue from 'vue'
import slot from 'quasar/src/utils/slot.js'
import ModelToggleMixin from 'quasar/src//mixins/model-toggle.js'

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
      default: 5000
    },
    cursorType: {
      type: String,
      default: 'not-allowed',
      validator: v => ['not-allowed', 'pointer', 'none'].includes(v)
    }
  },

  computed: {
    isFullscreen () {
      return !this.hasDefaultSlot
    },
    hasBodySlot () {
      const body = slot(this, 'body')
      console.log('body', body)
      return body !== void 0 && body.length > 0
    },
    hasDefaultSlot () {
      const def = slot(this, 'default')
      console.log('default', def)
      return def !== void 0 && def.length > 0
    },
    classes () {
      let c = {
      }
      if (this.value) {
        c['fixed'] = this.value && this.isFullscreen
        c['absolute'] = this.value && !this.isFullscreen
        c['fit'] = this.value && !this.isFullscreen
        c['fullscreen'] = this.isFullscreen
        c[this.cursor] = this.value !== void 0 && this.value === true
      }
      return c
    },
    styles () {
      return {
        zIndex: this.zIndex,
        backgroundColor: `rgba(0,0,0,${this.opacity})`
      }
    },
    wrapperClasses () {
      return {
        'absolute': true
      }
    },
    cursor () {
      return `cursor-${this.cursorType}`
    }
  },

  render (h) {
    const overlay = h('div', {
      class: this.classes,
      style: this.styles
    }, this.hasBodySlot ? slot(this, 'body') : null)

    const def = h('div', {
      style: {
        position: 'absolute'
      }
    }, slot(this, 'default'))

    if (this.value) {
      return h('div', {
        class: this.wrapperClasses,
      }, [overlay].concat(this.$slots.default))
    }
    else {
      if (this.hasDefaultSlot) {
        return def
      }
    }
    return null
  }
})
