<template>
  <figure>
    <table class="table-fixed w-full">
      <thead>
        <tr>
          <th class="w-1/2 px-2 py-1">
            {{ $root.strings.costingerp.costing_date_label }}
          </th>
          <th
            v-for="localizedCostedYear in $root.strings.costingerp.costed_years"
            :key="'costing_header_' + localizedCostedYear"
            class="w-1/4 px-2 py-1 text-center"
          >
            {{ localizedCostedYear }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="costing in measure.costings"
          :key="costing.id"
          :costing="costing"
          is="measures-list-item-details-costings-costing"
          :highlighted="highlightedCostingId === costing.id"
        ></tr>
      </tbody>
    </table>
  </figure>
</template>
<script>
export default {
  props: {
    measure: Object,
    highlightedCostingId: String,
  },
  components: {
    measuresListItemDetailsCostingsCosting: require("./MeasuresListItemDetailsCostingsCosting")
      .default,
  },
};
</script>