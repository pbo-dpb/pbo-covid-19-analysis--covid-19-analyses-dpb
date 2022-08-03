<template>
  <div>
    <markdown-content
      :content="$root.strings.costingerp.descriptor"
    ></markdown-content>

    <br />
    <measures-list :measures="measures" :prefer-net-cost="true"></measures-list>

    <div class="my-4 pt-4 text-sm text-gray-800 border-t border-gray-100">
      {{ $root.strings.costingerp.general_notes }}
    </div>
  </div>
</template>
<script>
import { collect } from "collect.js";
import MeasuresList from "./MeasuresList.vue"
export default {
  components: {
    MeasuresList
  },
  computed: {
    measures() {
      return collect(this.$store.state.measures)
        .when(this.$store.state.settings.sortCostingsBy === "name", (items) =>
          items.sortBy((item) => {
            return item.title[this.$root.language];
          })
        )
        .when(this.$store.state.settings.sortCostingsBy === "cost", (items) =>
          items.sortBy((item) => {
            return item.cost.aggregatedCost;
          })
        ).items;
    },
    latestEfa() {
      return this.$store.getters.getLatestEfa();
    },
  },
};
</script>