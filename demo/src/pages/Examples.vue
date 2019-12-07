<template>
  <hero>
    <div class="q-markdown">
      <q-markdown>
In the examples below, QThemeMixin is dependent on the [QColorizeMixin](https://github.com/hawkeye64/q-colorize-mixin) to apply the actual colors.
      </q-markdown>
      <example-title title="Theme Basic" />
      <example-card title="Basic" name="Basic" :tag-parts="getTagParts(require('!!raw-loader!../examples/Basic.vue').default)" />

      <!-- <example-title title="Theme Advanced" />
      <example-card title="Theme Selection" name="ThemeSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/ThemeSelection.vue').default)" />
      <example-card title="Theme Quasar Components" name="ThemeQuasarComponents" :tag-parts="getTagParts(require('!!raw-loader!../examples/ThemeQuasarComponents.vue').default)" /> -->

    </div>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import ExampleCard from '../components/ExampleCard'
import { slugify } from '../utils/page-utils'
import { getTagParts } from '@quasar/quasar-ui-qmarkdown'

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleTitle,
    ExampleCard
  },

  data () {
    return {
      tempToc: []
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('Theme Basic')
    // this.addToToc('Simple Theme', 2)
    // this.addToToc('Theme Advanced')
    // this.addToToc('Theme Selection', 2)
    // this.addToToc('Theme Quasar Components', 2)

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
    getTagParts,
    addToToc (name, level = 1) {
      const slug = slugify(name)
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
