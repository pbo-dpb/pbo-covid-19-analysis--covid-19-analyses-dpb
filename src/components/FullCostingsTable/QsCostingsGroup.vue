<template>
  <tbody>
    <tr v-if="group">
      <th style="text-align:left;padding-top:1rem;">{{ group }}</th>
    </tr>
    <tr
      is="vue:qs-costings-group-row"
      v-for="costing in orderedCostings"
      :costing="costing"
      :display-as-of-latest-scenario="true"
      :key="costing.title_en"
    ></tr>
  </tbody>
</template>
<script>
import QsCostingsGroupRow from "./QsCostingsGroupRow.vue"

export default {
  components: {
    QsCostingsGroupRow
  },
  props: {
    costings: {
      type: Object,
      required: true
    },
    group: {
      type: String,
      required: false
    }
  },

  computed: {
    orderedCostings() {
      return this.costings
        .sortBy(costing => {
          if (this.$root.sort === "price") {
            return costing.totalCost;
          }
          return costing["title_" + this.$root.language];
        })
        .when(this.$root.sort === "price", collection => collection.reverse())
        .items;
    }
  }
};
</script>