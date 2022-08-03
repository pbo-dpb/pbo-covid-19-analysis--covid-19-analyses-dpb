<style scoped>
@media only screen and (max-width: 768px) {
  table {
    font-size: 0.75rem;
    line-height: 18px;
  }
}
</style>
<template>
  <div class="covidcostings">
    <div class="loader" v-if="!groups"></div>

    <template v-if="groups">
      <table class="w-full mb-8">
        <thead is="vue:qs-costings-table-head"></thead>
        <tbody
          is="vue:qs-costings-group"
          v-for="(costings, group) in groups"
          :group="group"
          :key="group"
          :costings="costings"
        ></tbody>
        <tfoot is="vue:qs-costings-table-foot"></tfoot>
      </table>

      <qs-costings-meta-table></qs-costings-meta-table>

      <table class="w-full mb-8">
        <tbody>
          <tr>
            <th style="text-align: left">
              {{ $root.strings.fullcostings.no_incremental_impact }}
            </th>
          </tr>
        </tbody>
        <tr
          is="vue:qs-costings-group-row"
          v-for="costing in noIncrementalImpactCostings"
          :key="costing.title_en"
          :costing="costing"
        ></tr>
      </table>

      <figcaption
        
        class="mb-8 border-t border-gray-300 pt-4"
      >
        <markdown-content
          :content="$root.strings.fullcostings.figcaption_line1"
          class="prose-sm"
        ></markdown-content>
        <markdown-content
          :content="$root.strings.fullcostings.figcaption_line2"
          class="prose-sm"
        ></markdown-content>
        <br />
        <markdown-content
          :content="$root.strings.fullcostings.figcaption_line3"
          class="prose-sm"
        ></markdown-content>
      </figcaption>
    </template>
  </div>
</template>
  
    <script>
import collect from "collect.js";
import QsCostingsGroup from "./QsCostingsGroup.vue"
import QsCostingsTableHead from "./QsCostingsTableHead.vue"
import QsCostingsTableFoot from "./QsCostingsTableFoot.vue"
import QsCostingsMetaTable from "./QsCostingsMetaTable.vue"
import QsCostingsGroupRow from "./QsCostingsGroupRow.vue"

export default {
  components: {
    QsCostingsGroup,
    QsCostingsTableHead,
    QsCostingsTableFoot,
   QsCostingsMetaTable,
    QsCostingsGroupRow
  },
  computed: {
    groups() {
      return this.$root.payload
        ? collect(this.$root.payload.costings)
            .reject((costing) => costing.no_incremental_impact)
            .filter((costing) => {
              // Reject pending
              return costing.wasPartOfScenarioWithId(
                this.$root.currentUpdate.id
              );
            })
            .groupBy("category_" + this.$root.language).items
        : null;
    },
    noIncrementalImpactCostings() {
      return collect(this.$root.payload.costings).filter((costing) => {
        return costing.no_incremental_impact;
      }).items;
    },
    pendingCostings() {
      return collect(this.$root.payload.costings).reject((costing) => {
        let costingDuringLastUpdate = costing.wasPartOfScenarioWithId(
          this.$root.currentUpdate.id
        );
        if (!costingDuringLastUpdate) {
          return false;
        }
        return costingDuringLastUpdate.id === costing.currentCostingUpdate.id;
      }).items;
    },
  },
};
</script>