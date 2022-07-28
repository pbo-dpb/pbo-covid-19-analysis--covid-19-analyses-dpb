// Adapted from https://stackoverflow.com/questions/69808113/how-to-use-vue-router-and-vuex-inside-custom-element-from-root
import { defineCustomElement as vueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
import strings from "./strings"
import MarkdownContent from "./components/MarkdownContent.vue"
const language = document.documentElement.lang;

export const defineCustomElement = (component, { plugins = [] }) =>
vueDefineCustomElement({
    render: () => h(component),
    styles: component.styles,
    props: {
      publicPath: String,
    },
    setup() {
      const app = createApp()
      /**
       * Register global components
       */
      app.component('MarkdownContent', MarkdownContent);

      /**
       * Load plugins
       */
      plugins.forEach(app.use)
      const inst = getCurrentInstance()
      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)
      
      return {
        language,
      }
    },

  computed: {
    strings() {
      return strings[this.language];
    }
  }
    
  })