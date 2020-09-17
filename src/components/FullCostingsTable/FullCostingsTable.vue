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
  <div>
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
  name: "FullCostingsTable",
  components: {
    qsCostingsLoader: require("./QsCostingsLoader.vue").default,
    qsCostingsFullTableOptions: require("./QsCostingsFullTableOptions.vue")
      .default,
    qsFullCostingsTable: require("./QsFullCostingsTable.vue").default,
    qsCostingsSimpleFullToggle: require("./QsCostingsSimpleFullToggle.vue")
      .default,
    qsSimpleCostingsTable: require("./QsSimpleCostingsTable.vue").default,
    qsCostingsSearchResultsTable: require("./QsCostingsSearchResultsTable.vue")
      .default,
    qsCostingsSearchWidget: require("./QsCostingsSearchWidget.vue").default,
  },
};
</script>

