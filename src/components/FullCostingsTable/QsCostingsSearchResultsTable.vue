<style scoped>
@media only screen and (max-width: 768px) {
  table {
    font-size: 0.85rem;
    line-height: 20px;
  }
}
</style>
<template>
  <table class="w-full mb-8">
    <thead is="vue:qs-costings-table-head"></thead>
    <tbody>
      <tr
        is="vue:qs-costings-group-row"
        v-for="costing in costings"
        :key="costing.title_en"
        :costing="costing"
      ></tr>
    </tbody>
  </table>
</template>
  
    <script>
    import QsCostingsTableHead from "./QsCostingsTableHead.vue"
    import QsCostingsGroupRow from "./QsCostingsGroupRow.vue"

import collect from "collect.js";
export default {
  components: {
    QsCostingsTableHead,
    QsCostingsGroupRow
  },
  computed: {
    costings() {
      return collect(
        this.$root.search.engine.search(this.$root.search.query)
      ).pluck("item").items;
    },
  },
};
</script>