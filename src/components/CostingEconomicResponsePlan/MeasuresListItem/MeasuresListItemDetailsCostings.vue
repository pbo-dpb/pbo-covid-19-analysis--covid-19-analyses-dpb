<template>
  <figure>
    <table class="table-fixed w-full">
      <thead>
        <tr>
          <th class="w-1/2 px-2 py-1">
            {{
              costingsCount > 1
                ? $root.strings.costingerp.costing_date_label.plural
                : $root.strings.costingerp.costing_date_label.singular
            }}
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
          v-for="costing in costings"
          :key="costing.id"
          :costing="costing"
          is="measures-list-item-details-costings-costing"
          :highlighted="highlightedCostingId === costing.id"
          :prefer-net-cost="preferNetCost"
        ></tr>
      </tbody>
    </table>
  </figure>
</template>
<script>
import collect from "collect.js";

export default {
  props: {
    measure: Object,
    highlightedCostingId: String,
    preferNetCost: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    measuresListItemDetailsCostingsCosting: require("./MeasuresListItemDetailsCostingsCosting")
      .default,
  },
  computed: {
    costingsCount() {
      return collect(this.measure.costings).count();
    },
    costings() {
      return collect(this.measure.costings).when(this.preferNetCost, (coll) => {
        return coll.filter((costing) => costing.hasArtifacts);
      }).items;
    },
  },
};
</script>