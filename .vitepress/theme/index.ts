// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import AddonList from './components/AddonList.vue'
import AddonTable from './components/AddonTable.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('AddonList', AddonList)
    app.component('AddonTable', AddonTable)
  }
}
