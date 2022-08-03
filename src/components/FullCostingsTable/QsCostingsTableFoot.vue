<template>
  <tfoot>
    <tr>
      <th style="text-align:right">{{ $root.strings.fullcostings.total }}</th>

      <th
        style="border-top: 1px solid gray;text-align:right;padding-left: 0.5em;"
        v-for="(number, key) in computedCurrentSums"
        :key="'current_scen_total_'  + key + '_' + number"
      >
        <costings-number :value="number" />
      </th>

      <template v-if="compareWithUpdate">
        <th
          class="comparative-cell"
          style="border-top: 1px solid gray;text-align:right;padding-left: 0.5em;"
          v-for="(number, key) in computedPreviousSums"
          :key="'prev_scen_total_' + key + '_' + number"
        >
          <costings-number :value="number" />
        </th>
      </template>
    </tr>
  </tfoot>
</template>
<script>
import collect from "collect.js";
export default {
  methods: {
    sumsByUpdateId(updateObjectId) {
      return collect(this.$root.payload.costings)
        .reject((costing) => costing.no_incremental_impact)
        .pluck("costing_updates")
        .flatten(1)
        .filter((value) => value.update_id === updateObjectId)
        .map((costingNums) => {
          return collect(costingNums.numbers).map((nums, yy) => {
            return { nums: nums, yy: yy };
          }).items;
        })
        .flatten(1)
        .mapToDictionary((item) => [item.yy, item.nums])
        .map((items) => {
          return collect(items)
            .filter()
            .map((val) => {
              return parseFloat(val);
            })
            .sum();
        }).items;
    },
  },

  computed: {
    computedCurrentSums() {
      return this.sumsByUpdateId(this.$root.currentUpdate.id);
    },
    computedPreviousSums() {
      return this.$root.compareWithUpdate
        ? this.sumsByUpdateId(this.$root.compareWithUpdate.id)
        : null;
    },
    compareWithUpdate() {
    
      return this.$root.compareWithUpdate;
    }
  },
};
</script>