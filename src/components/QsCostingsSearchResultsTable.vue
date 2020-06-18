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
export default {
  components: {
    qsCostingsTableHead: require("./QsCostingsTableHead.vue").default,
    qsCostingsGroupRow: require("./QsCostingsGroupRow.vue").default
  },
  computed: {
    costings() {
      return collect(
        this.$root.search.engine.search(this.$root.search.query)
      ).pluck("item").items;
    }
  }
};
</script>