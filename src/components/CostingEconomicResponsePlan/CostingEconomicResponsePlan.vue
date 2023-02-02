<template>
  <div>
    <markdown-content :content="$root.strings.costingerp.descriptor"></markdown-content>

    <br />
    <measures-list :measures="msses" :prefer-net-cost="true"></measures-list>

    <div class="my-4 pt-4 text-sm text-gray-800 border-t border-gray-100">
      {{ $root.strings.costingerp.general_notes }}
    </div>
  </div>
</template>
<script>
import { collect } from "collect.js";
import MeasuresList from "./MeasuresList.vue"
import { mapState } from 'pinia'
import piniaStore from '../../store/pinia-store'

export default {
  components: {
    MeasuresList
  },
  computed: {
    ...mapState(piniaStore, ['measures', 'settings', 'getLatestEfa']),
    msses() {
      return collect(this.measures)
        .when(this.settings.sortCostingsBy === "name", (items) =>
          items.sortBy((item) => {
            return item.title[this.$root.language];
          })
        )
        .when(this.settings.sortCostingsBy === "cost", (items) =>
          items.sortBy((item) => {
            return item.cost.aggregatedCost;
          })
        ).items;
    },
    latestEfa() {
      return this.getLatestEfa;
    },
  },
  setup() {
    return {
      piniaStore
    }
  }
};
</script>