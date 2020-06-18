<style scoped>
.tools {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .tools {
    flex-direction: column;
  }
}
</style>
<template>
  <div id="app">
    <div class="covidcostings">
      <qs-costings-loader v-if="$root.payload && !$root.payload.updates"></qs-costings-loader>

      <template v-if="$root.payload && $root.payload.updates">
        <div class="tools">
          <qs-costings-simple-full-toggle></qs-costings-simple-full-toggle>
          <qs-costings-search-widget v-if="$root.showFullTable"></qs-costings-search-widget>
        </div>
        <qs-costings-full-table-options v-if="$root.showFullTable"></qs-costings-full-table-options>
        <qs-costings-search-results-table v-if="$root.search.query"></qs-costings-search-results-table>

        <template v-if="!$root.search.query">
          <qs-simple-costings-table v-if="!$root.showFullTable"></qs-simple-costings-table>
          <qs-full-costings-table v-if="$root.showFullTable"></qs-full-costings-table>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    qsCostingsLoader: require("./components/QsCostingsLoader.vue").default,
    qsCostingsFullTableOptions: require("./components/QsCostingsFullTableOptions.vue")
      .default,
    qsFullCostingsTable: require("./components/QsFullCostingsTable.vue")
      .default,
    qsCostingsSimpleFullToggle: require("./components/QsCostingsSimpleFullToggle.vue")
      .default,
    qsSimpleCostingsTable: require("./components/QsSimpleCostingsTable.vue")
      .default,
    qsCostingsSearchResultsTable: require("./components/QsCostingsSearchResultsTable.vue")
      .default,
    qsCostingsSearchWidget: require("./components/QsCostingsSearchWidget.vue")
      .default
  }
};
</script>

