// Adapted from https://stackoverflow.com/questions/69808113/how-to-use-vue-router-and-vuex-inside-custom-element-from-root
import { defineCustomElement as vueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
import collect from "collect.js"
import strings from "./strings"
import Costing from "./store/legacyModels/Costing.js"
import Update from "./store/legacyModels/Update.js"
import MarkdownContent from "./components/MarkdownContent.vue"
import legacyPayload from './store/data/legacyPayload.json'
const language = document.documentElement.lang;

export const defineCustomElement = (component, { plugins = [] }) =>
  vueDefineCustomElement({
    render: () => h(component),
    styles: component.styles,
    props: {
      publicPath: String,
    },
    setup() {
      const app = createApp();
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
        payload: null
      }
    },

    computed: {
      strings() {
        return strings[this.language];
      }
    },

    mounted() {
      /**
         * Setup hardcoded legacy payload content
         */

      let hcpl = legacyPayload;
      hcpl.costings = collect(legacyPayload.costings).map((costing) => {
        return new Costing(costing);
      });
      hcpl.updates = collect(legacyPayload.updates).map((update) => {
        return new Update(update);
      });
      this.payload = hcpl;

      this.initializeSearch();

    },
    methods: {
      initializeSearch() {

      }
    }

  })