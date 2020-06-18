<style scoped>
@media only screen and (max-width: 768px) {
  table {
    font-size: 0.85rem;
    line-height: 20px;
  }
}
</style>
<template>
  <table>
    <thead is="qs-costings-table-head"></thead>
    <tbody>
      <tr
        is="qs-costings-group-row"
        v-for="costing in costings"
        :key="costing.title_en"
        :costing="costing"
      ></tr>
    </tbody>
  </table>
</template>
  
    <script>
import collect from "collect.js";
export default {
  components: {
    qsCostingsTableHead: require("./QsCostingsTableHead.vue").default,
    qsCostingsGroupRow: require("./QsCostingsGroupRow.vue").default
  },
  computed: {
    costings() {
      return this.$root.payload
        ? collect(this.$root.payload.costings)
            .filter(costing => {
              return costing.currentCostingUpdate.id;
            })
            .sortBy("title_" + this.$root.language).items
        : null;
    }
  }
};
</script>