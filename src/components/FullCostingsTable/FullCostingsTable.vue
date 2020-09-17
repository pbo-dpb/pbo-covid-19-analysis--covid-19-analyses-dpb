
<template>
  <div>
    <notification-block
      :title="$root.strings.fullcostings.archived.title"
      type="warning"
    >{{ $root.strings.fullcostings.archived.description }}</notification-block>

    <div class="covidcostings">
      <qs-costings-loader v-if="$root.payload && !$root.payload.updates"></qs-costings-loader>

      <template v-if="$root.payload && $root.payload.updates">
        <div class="w-auto flex flex-row justify-end">
          <qs-costings-search-widget></qs-costings-search-widget>
        </div>
        <template v-if="!$root.search.query">
          <qs-costings-full-table-options></qs-costings-full-table-options>
          <qs-full-costings-table></qs-full-costings-table>
        </template>
        <qs-costings-search-results-table v-else></qs-costings-search-results-table>
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

    /*qsSimpleCostingsTable: require("./QsSimpleCostingsTable.vue").default,*/
    qsCostingsSearchResultsTable: require("./QsCostingsSearchResultsTable.vue")
      .default,
    qsCostingsSearchWidget: require("./QsCostingsSearchWidget.vue").default,
  },
};
</script>

