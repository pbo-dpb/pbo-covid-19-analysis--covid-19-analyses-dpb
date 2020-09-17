import Vue from 'vue'
Vue.config.productionTip = false

import axios from "axios"
import collect from "collect.js"

import Costing from "./models/Costing.js"
import Update from "./models/Update.js"

import App from './App.vue'
import './assets/tailwind.css'

const covidLanguage = window.document.documentElement.lang ? window.document.documentElement.lang : "en";
const covidRawStrings = {
  en: {
    "in_millions": "$ millions",
    "compare_label": "Select previous scenario for comparison",
    "total": "Total",
    "current_scenario": "Current Scenario",
    "previous_scenario": "Previous Scenario",
    "read_previous_pdf": "Read previous cost estimate",
    "real_gdp_growth": "Real GDP growth (%)",
    "employment_rate": "Employment Rate (%)",
    "wti": "WTI (US$/barrel)",
    "budgetary_balance": "Budgetary Balance ($ billions)",
    "federal_debt": "Federal Debt (% of GDP)",
    "full_simple_toggle_label": "Show Full Costing Table",
    "is_pbo_costing": "Costing by PBO",
    "no_incremental_impact": "PBO costings without incremental fiscal impact",
    "figcaption_line1": "Sources: Finance Canada and Parliamentary Budget Officer.",
    "figcaption_line2": "Note: Hyperlinks indicate a PBO Cost Estimate is available. Where PBO Cost Estimates are not available, Finance Canada estimates have been used. PBO Cost Estimates are revised with each new scenario analysis and may not match previously published costing notes. A positive (negative) number increases (reduces) the budgetary deficit. Totals may not add due to rounding.",
    "figcaption_line3": "Several measures in Canada’s COVID-19 Emergency Response are administrative or regulatory in nature without a material fiscal impact. One example is the temporary extensions of GIS and Allowance payments.",
    "new": "New",
    "updated_artifact": "Updated",
    "updated_numbers": "Updated",
    "meta_header": "Economic and Fiscal Scenario Indicators",
    "meta_header_note": "Economic indicators are on a calendar year basis. ",
    "display_note": "Display the associated note.",
    "display_warning": "Display the associated warning.",
    "options_label": "Settings",
    "sort_label": "Sort...",
    "sort_alpha": "Alphabetically",
    "sort_price": "By size",
    "sort_price_descending": "descending",
    "search_label": "Search",
    "pending_costings_title": "PBO costings - not included in the latest PBO scenario",
    "pending_costings_subtitle": "These estimates will be added to the full costing table in the next update of the PBO scenario.",

  },
  fr: {
    "in_millions": "Millions de dollars",
    "compare_label": "Sélectionner un scénario précédent à des fins de comparaison",
    "total": "Total",
    "current_scenario": "Scénario courant",
    "previous_scenario": "Scénario comparé",
    "read_previous_pdf": "Lire l'estimation de coût précédente",
    "real_gdp_growth": "Croissance du PIB réel (%)",
    "employment_rate": "Taux d'emploi (%)",
    "wti": "WTI ($ US/baril)",
    "budgetary_balance": "Solde budgétaire (milliards de dollars)",
    "federal_debt": "Dette fédérale (% du PIB)",
    "full_simple_toggle_label": "Afficher le tableau complet d’estimations de coûts",
    "is_pbo_costing": "Évaluation par le DPB",
    "no_incremental_impact": "Évaluations de coût du DPB sans impact fiscal supplémentaire",
    "figcaption_line1": "Sources: Finance Canada et Directeur parlementaire du budget.",
    "figcaption_line2": "Note: Les hyperliens indiquent qu'une estimation de coût du DPB est disponible. Lorsque les estimations des coûts du DPB ne sont pas disponibles, les estimations de Finances Canada ont été utilisées. Les estimations des coûts du DPB sont révisées à chaque nouvelle analyse de scénario et peuvent ne pas correspondre aux notes d'évaluation de coûts publiées précédemment. Un nombre positif (négatif) indique une augmentation (réduction) du déficit budgétaire. Les chiffres ayant été arrondis, les totaux peuvent ne pas correspondre.",
    "figcaption_line3": "Plusieurs mesures prévues dans l’intervention d’urgence du Canada en réponse à la COVID-19 sont d’ordre administratif ou réglementaire et n’ont aucune incidence financière notable (le prolongement provisoire des paiements au titre du Supplément de revenu garanti et des allocations, par exemple).",
    "new": "Nouveau",
    "updated_artifact": "Mis à jour",
    "updated_numbers": "Mis à jour",
    "meta_header": "Indicateurs du scénario économique et fiscal",
    "meta_header_note": "Les indicateurs économiques sont calculés sur la base de l'année civile.",
    "display_note": "Afficher la note associée.",
    "display_warning": "Afficher l'avertissement associé.",
    "options_label": "Paramètres",
    "sort_label": "Trier...",
    "sort_alpha": "Alphabétiquement",
    "sort_price": "Par taille",
    "sort_price_descending": "décroissante",
    "search_label": "Rechercher",
    "pending_costings_title": "Évaluations de coût du DPB - non inclus dans le dernier scénario du DPB",
    "pending_costings_subtitle": "Ces estimations seront ajoutées au tableau complet d’estimations de coûts lors de la prochaine mise à jour du scénario du DPB.",
  }
}


Vue.component('costings-number', require('./components/QsCostingsNumber.vue').default);
Vue.component('markdown-content', require('./components/MarkdownContent.vue').default);


new Vue({
  render: h => h(App),
  data: {
    strings: covidRawStrings[covidLanguage],
    payload: null,
    language: covidLanguage,
    compareWithUpdate: null,
    sort: "alphabetically",
    showFullTable: window.localStorage.getItem("pbo-covid19-costings-full-toggle") ? true : false,
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
