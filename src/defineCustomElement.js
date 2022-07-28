// Adapted from https://stackoverflow.com/questions/69808113/how-to-use-vue-router-and-vuex-inside-custom-element-from-root
import { defineCustomElement as vueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
import collect from "collect.js"
import strings from "./strings"
import Costing from "./store/legacyModels/Costing.js"
import Update from "./store/legacyModels/Update.js"
import MarkdownContent from "./components/MarkdownContent.vue"
import CostingsNumber from "./components/QsCostingsNumber.vue"

import NotificationBlock from "./components/NotificationBlock.vue"
import BreadcrumbView from "./components/BreadcrumbView.vue"
import ListView from "./components/ListView.vue"

import legacyPayload from './store/data/legacyPayload.json'
import Fuse from "fuse.js"
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
      app.component('CostingsNumber', CostingsNumber);
      app.component('MarkdownContent', MarkdownContent);
      app.component('NotificationBlock', NotificationBlock);
      app.component('BreadcrumbView', BreadcrumbView);
      app.component('ListView', ListView);


      /**
       * 
Vue.component('costings-number', require('./components/QsCostingsNumber.vue').default);
Vue.component('markdown-content', require('./components/MarkdownContent.vue').default);
Vue.component('notification-block', require('./components/NotificationBlock.vue').default);
Vue.component('list-view', require('./components/ListView.vue').default);
Vue.component('breadcrumb-view', require('./components/BreadcrumbView.vue').default);
       */

      /**
       * Load plugins
       */
      plugins.forEach(app.use)
      const inst = getCurrentInstance()
      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)




      return {
        language,
        payload: null,
        compareWithUpdate: null,
        sort: "alphabetically",
        search: {
          query: null,
          engine: null
        },

      }
    },

    computed: {

      strings() {
        return strings[this.language];
      },
      currentUpdate() {
        return this.payload ? collect(this.payload.updates).sortByDesc('id').first() : null;
      },

      /**
       * Return the latest ID used for costings that are not part of an official update (scenario, efo, etc.)
       */
      currentGhostUpdateId() {
        return this.payload ? collect(this.payload.costings).pluck("costing_updates").flatten(1).pluck("update_id").sort().reverse().first() : null;
      },

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
        this.search.query = "";
        this.search.engine = new Fuse(this.payload.costings.items, {
          includeScore: true,
          // We search both languages since some English acronyms are sometimes used in French
          keys: this.language === 'fr' ? ["title_fr", "title_en"] : ["title_en", "title_fr"]
        });
      }
    }

  })