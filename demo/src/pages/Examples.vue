<template>
  <hero>
    <div class="q-markdown">
      <q-markdown>
The examples below use a timer to switch states while the overlay is being displayed. When the timer expires, a button is displayed that allows you to turn off the overlay.

Try out both Fullscreen and Component overlays with and without scrollbar support.
      </q-markdown>
      <example-title title="QOverlay" />
      <example-viewer title="Fullscreen" file="Basic" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Background Color" file="BackgroundColor" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="On Component" file="OnComponent" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    </div>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import { slugify } from '../utils/page-utils'
import { version } from 'ui'

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleTitle
  },

  data () {
    return {
      tempToc: [],
      locationUrl: 'https://github.com/quasarframework/quasar-ui-qoverlay/tree/dev/demo/src/examples/',
      jsPaths: [
        `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@${version}/dist/index.umd.min.js`
      ],
      cssPaths: [
        `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qoverlay@${version}/dist/index.min.css`
      ]
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('QOverlay')
    this.addToToc('Fullscreen', 2)
    this.addToToc('Background Color', 2)
    this.addToToc('On Component', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    addToToc (name, level = 1) {
      let n = name
      if (level > 1) {
        n = 'example-' + n
      }
      const slug = slugify(n)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>

<style lang="stylus">
.example-page
  padding: 16px 46px;
  font-weight: 300;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
</style>
