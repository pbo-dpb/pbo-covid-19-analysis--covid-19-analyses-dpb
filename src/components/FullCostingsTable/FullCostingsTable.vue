
<template>
  <div>
    <notification-block
      :title="$root.strings.fullcostings.archived.title"
      type="warning"
      >{{ $root.strings.fullcostings.archived.description }}</notification-block
    >

    <div>
      <header class="mb-4">
        <markdown-content
          :content="$root.strings.scenarioanalysis.descriptor"
        ></markdown-content>
      </header>
      <list-view v-if="scenarioItems" :items="scenarioItems"></list-view>
    </div>

    <hr class="border-blue-800 border my-4" />

    <header class="mb-4">
      <markdown-content
        :content="$root.strings.fullcostings.descriptor"
      ></markdown-content>
    </header>

    <div class="covidcostings">
      <qs-costings-loader
        v-if="$root.payload && !$root.payload.updates"
      ></qs-costings-loader>

      <template v-if="$root.payload && $root.payload.updates">
        <div class="w-auto flex flex-row justify-end">
          <qs-costings-search-widget></qs-costings-search-widget>
        </div>
        <template v-if="!$root.search.query">
          <qs-costings-full-table-options></qs-costings-full-table-options>
          <qs-full-costings-table></qs-full-costings-table>
        </template>
        <qs-costings-search-results-table
          v-else
        ></qs-costings-search-results-table>
      </template>
    </div>
  </div>
</template>

<script>

import QsCostingsLoader from "./QsCostingsLoader.vue";
import QsCostingsFullTableOptions from "./QsCostingsFullTableOptions.vue";
import QsFullCostingsTable from "./QsFullCostingsTable.vue";
import QsCostingsSearchResultsTable from "./QsCostingsSearchResultsTable.vue";
import QsCostingsSearchWidget from "./QsCostingsSearchWidget.vue";




import collect from "collect.js";
export default {
  name: "FullCostingsTable",
  components: {
    QsCostingsLoader,
    QsCostingsFullTableOptions,
   QsFullCostingsTable,
    /*qsSimpleCostingsTable: require("./QsSimpleCostingsTable.vue").default,*/
   QsCostingsSearchResultsTable,
    QsCostingsSearchWidget
  },
  computed: {
    scenarioItems() {
      if (!this.$root.payload || !this.$root.payload.scenarios) {
        return null;
      }

      return collect(this.$root.payload.scenarios).map((req) => {
        return {
          url: req["url_" + this.$root.language],
          title: req["title_" + this.$root.language],
          date: new Date(req.date + "T09:00:00.000Z"),
          image: req["image_" + this.$root.language],
          icon: "pdf",
        };
      }).items;
    },
  },
};
</script>

