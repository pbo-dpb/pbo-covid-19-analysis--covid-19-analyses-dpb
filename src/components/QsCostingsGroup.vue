<template>
  <tbody>
    <tr v-if="group">
      <th style="text-align:left;padding-top:1rem;">{{ group }}</th>
    </tr>
    <tr
      is="qs-costings-group-row"
      v-for="costing in orderedCostings"
      :costing="costing"
      :display-as-of-latest-scenario="true"
      :key="costing.title_en"
    ></tr>
  </tbody>
</template>
<script>
export default {
  components: {
    qsCostingsGroupRow: require("./QsCostingsGroupRow.vue").default
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