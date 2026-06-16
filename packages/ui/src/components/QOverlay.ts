import { colors } from 'quasar'
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  watch,
  type PropType,
  type StyleValue,
} from 'vue'

import preventScroll from '../utils/prevent-scroll'

const { textToRgb } = colors

export default defineComponent({
  name: 'QOverlay',
  props: {
    backgroundColor: {
      type: String,
      default: '#000000',
    },
    opacity: {
      type: [Number, String] as PropType<number | string>,
      default: 0.35,
    },
    zIndex: {
      type: [Number, String] as PropType<number | string>,
      default: 6000,
    },
    cursorType: {
      type: String,
      default: 'not-allowed',
    },
    noScroll: Boolean,
    modelValue: Boolean,
  },
  setup(props, { slots }) {
    const overlayStyle = computed<StyleValue>(() => {
      const rgb = textToRgb(props.backgroundColor)

      return {
        zIndex: props.zIndex,
        backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${props.opacity})`,
        padding: 0,
        margin: 0,
      }
    })

    const shouldPreventScroll = computed(() => props.noScroll === true && props.modelValue === true)

    watch(shouldPreventScroll, (value) => preventScroll(value), { immediate: true })

    onBeforeUnmount(() => {
      preventScroll(false)
    })

    return () => {
      const defaultSlot = slots.default
      const isFullscreen = defaultSlot === undefined

      if (props.modelValue !== true && isFullscreen) {
        return null
      }

      if (props.modelValue === true && isFullscreen) {
        return h(
          'div',
          {
            class: `q-overlay fixed fullscreen cursor-${props.cursorType}`,
            style: overlayStyle.value,
          },
          slots.body?.(),
        )
      }

      if (props.modelValue === true) {
        const overlay = h(
          'div',
          {
            class: `q-overlay q-overlay--component cursor-${props.cursorType}`,
            style: overlayStyle.value,
          },
          slots.body?.(),
        )

        return h('div', { class: 'q-overlay--wrapper' }, [overlay, defaultSlot?.()])
      }

      return h('div', { class: 'q-overlay--wrapper' }, defaultSlot?.() ?? [])
    }
  },
})
