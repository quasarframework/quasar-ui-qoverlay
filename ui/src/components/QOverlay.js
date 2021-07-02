import { h, defineComponent, onBeforeUnmount, computed } from 'vue'
import preventScroll from 'quasar/src/utils/prevent-scroll'
import { textToRgb } from 'quasar/src/utils/colors'

export default defineComponent({
  name: 'QOverlay',
  props: {
    backgroundColor: {
      type: String,
      default: '#000000'
    },
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
    noScroll: Boolean,
    modelValue: Boolean
  },
  setup (props, { slots }) {
    onBeforeUnmount(() => {
      // make sure noScroll is not left in unintended state
      if (props.noScroll && props.modelValue) {
        preventScroll(false)
      }
    })

    /**
     * Overlay style
     *
     * @return {{padding: number, backgroundColor: string, margin: number, zIndex: (Number|String)}}
     */
    const __style = computed(() => {
      const rgb = textToRgb(props.backgroundColor)
      return {
        zIndex: props.zIndex,
        backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${props.opacity})`,
        padding: 0,
        margin: 0
      }
    })

    /**
     * Renders component with overlay.
     *
     * @param slot default slot
     * @return h component overlay render function
     * @private
     */
    function __renderComponent (slot) {
      const overlay = h('div', {
        class: `q-overlay q-overlay--component cursor-${props.cursorType}`,
        style: __style.value
      }, slots.body())

      return h('div', {
        class: 'q-overlay--wrapper'
      }, [overlay, (slot && slot())])
    }

    /**
     * Renders fullscreen overlay.
     *
     * @return h fullscreen overlay render function
     * @private
     */
    function __renderFullscreen () {
      return h('div', {
        class: `q-overlay fixed fullscreen cursor-${props.cursorType}`,
        style: __style.value
      }, [slots.body()])
    }

    /**
     * Renders fullscreen overlay or component overlay
     *
     * @return h overlay
     * @private
     */
    function __renderOverlay () {
      const slot = slots.default
      const isFullscreen = (slot && slot()) === void 0

      // nothing to draw when fullscreen and not displaying
      if (!props.modelValue && isFullscreen) {
        return void 0
      }

      preventScroll(props.noScroll && props.modelValue)

      if (props.modelValue && isFullscreen) {
        return __renderFullscreen()
      }

      if (props.modelValue && !isFullscreen) {
        return __renderComponent(slot)
      }

      return h('div', {
        class: 'q-overlay'
      }, (slot && slot()) || [])
    }

    return () => __renderOverlay()
  }
})
