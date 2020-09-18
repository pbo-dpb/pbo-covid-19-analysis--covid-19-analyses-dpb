import Vue from 'vue'
Vue.config.productionTip = false

import axios from "axios"
import collect from "collect.js"

import Costing from "./models/Costing.js"
import Update from "./models/Update.js"

import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

const strings = require("./strings.js").default;

Vue.component('costings-number', require('./components/QsCostingsNumber.vue').default);
Vue.component('markdown-content', require('./components/MarkdownContent.vue').default);
Vue.component('notification-block', require('./components/NotificationBlock.vue').default);
Vue.component('list-view', require('./components/ListView.vue').default);

new Vue({
  render: h => h(App),

  data: {
    payload: null,
    compareWithUpdate: null,
    sort: "alphabetically",
    search: {
      query: null,
      engine: null
    },

  },

  computed: {

    currentUpdate() {
      return this.payload ? collect(this.payload.updates).sortByDesc('id').first() : null;
    },

    /**
     * Return the latest ID used for costings that are not part of an official update (scenario, efo, etc.)
     */
    currentGhostUpdateId() {
      return this.payload ? collect(this.payload.costings).pluck("costing_updates").flatten(1).pluck("update_id").sort().reverse().first() : null;
    },

    language() {
      return this.$route.params.language ? this.$route.params.language : "en";
    },

    strings() {
      return strings[this.language];
    }

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
  },

  router,

  mounted() {
    const payloadUrl = process.env.VUE_APP_FEED_URL;

    const cacheBuster = Math.ceil((new Date()).getTime() / 10000) * 10000;

    axios.get(payloadUrl + "?t=" + cacheBuster)
      .then((response) => {
        // handle success
        let payload = response.data;
        payload.costings = collect(payload.costings).map((costing) => {
          return new Costing(costing);
        });
        payload.updates = collect(payload.updates).map((update) => {
          return new Update(update);
        });
        this.payload = payload;
        this.initializeSearch();
      })
  }
}).$mount('#app')
