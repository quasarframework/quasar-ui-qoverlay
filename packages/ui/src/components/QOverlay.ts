import { colors } from 'quasar'
import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  watch,
  type PropType,
  type SlotsType,
  type StyleValue,
  type VNode,
} from 'vue'
import type { OverlayCursorType } from '../../types/types'

import preventScroll from '../utils/prevent-scroll'

const { textToRgb } = colors

export interface QOverlaySlots {
  /**
   * Content wrapped by a component-scoped overlay. Leave this slot empty for fullscreen overlay mode.
   */
  default: () => VNode[]
  /**
   * Content rendered above the overlay surface, such as a button, spinner, or status message.
   */
  body: () => VNode[]
}

export default defineComponent({
  name: 'QOverlay',

  slots: Object as SlotsType<QOverlaySlots>,

  props: {
    /**
     * Background color used for the overlay. Alpha channels are removed; use `opacity` to control transparency.
     *
     * @category style
     * @example background-color="#FFF"
     * @example background-color="rgba(255, 0, 255, 0.5)"
     */
    backgroundColor: {
      type: String,
      default: '#000000',
    },
    /**
     * Overlay opacity.
     *
     * @category style
     * @example :opacity="0.5"
     */
    opacity: {
      type: [Number, String] as PropType<number | string>,
      default: 0.35,
    },
    /**
     * CSS z-index applied to the overlay.
     *
     * @category behavior
     * @example :z-index="5000"
     */
    zIndex: {
      type: [Number, String] as PropType<number | string>,
      default: 6000,
    },
    /**
     * Cursor shown while hovering over the overlay. Any valid cursor type is allowed except `url`.
     *
     * @category behavior
     * @tsType OverlayCursorType
     * @values alias | all-scroll | auto | cell | context-menu | col-resize | copy | crosshair | default | e-resize | ew-resize | grab | grabbing | help | move | n-resize | ne-resize | nesw-resize | no-drop | none | not-allowed | pointer | progress | row-resize | s-resize | text | w-resize | wait | zoom-in | zoom-out | inherit
     * @example cursor-type="pointer"
     * @example cursor-type="wait"
     */
    cursorType: {
      type: String as PropType<OverlayCursorType>,
      default: 'not-allowed',
    },
    /**
     * Prevent page scrolling while the fullscreen overlay is active.
     *
     * @category behavior
     */
    noScroll: Boolean,
    /**
     * Active state of the overlay. Use with `v-model`.
     *
     * @category model
     */
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
