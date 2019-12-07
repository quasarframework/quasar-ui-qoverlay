<template>
  <hero>
    <q-markdown :src="markdown" toc @data="onToc" />
    <component-api
      title="QOverlay API"
      :json="json"
    />
    <q-markdown>
# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

---
This page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.
    </q-markdown>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import markdown from '../markdown/overlay.md'
import api from '@quasar/quasar-ui-qoverlay/dist/api/QOverlay.json'

export default {
  name: 'PageIndex',

  components: {
    Hero
  },

  data () {
    return {
      markdown: markdown,
      json: api
    }
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        // console.log('toc:', toc)
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    onToc (toc) {
      // add the manual ones
      toc.push({ id: 'QThemeMixin-API', label: 'QThemeMixin API', level: 1, children: Array(0) })
      toc.push({ id: 'Donate', label: 'Donate', level: 1, children: Array(0) })

      this.toc = toc
    }
  }
}
</script>
