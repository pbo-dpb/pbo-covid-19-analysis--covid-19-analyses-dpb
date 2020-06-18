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
      <table>
        <thead is="qs-costings-table-head"></thead>
        <tbody
          is="qs-costings-group"
          v-for="(costings, group) in groups"
          :group="group"
          :key="group"
          :costings="costings"
        ></tbody>
        <tfoot is="qs-costings-table-foot"></tfoot>
      </table>

      <qs-costings-meta-table></qs-costings-meta-table>

      <table>
        <tbody>
          <tr>
            <th style="text-align:left;">{{ $root.strings.no_incremental_impact }}</th>
          </tr>
        </tbody>
        <tr
          is="qs-costings-group-row"
          v-for="costing in noIncrementalImpactCostings"
          :key="costing.title_en"
          :costing="costing"
        ></tr>
      </table>

      <figcaption style="text-align:left;font-size: 0.8em;caption-side: bottom;">
        <markdown-content :content="$root.strings.figcaption_line1"></markdown-content>
        <markdown-content :content="$root.strings.figcaption_line2"></markdown-content>
        <br />
        <markdown-content :content="$root.strings.figcaption_line3"></markdown-content>
      </figcaption>

      <template v-if="pendingCostings && pendingCostings.length">
        <hr />

        <table>
          <tbody>
            <tr>
              <th style="text-align:left;">
                {{ $root.strings.pending_costings_title }}
                <br />
                <small style="font-weight:200;">{{ $root.strings.pending_costings_subtitle }}</small>
              </th>
            </tr>
          </tbody>
          <tr
            is="qs-costings-group-row"
            v-for="costing in pendingCostings"
            :key="costing.title_en"
            :costing="costing"
          ></tr>
        </table>
      </template>
    </template>
  </div>
</template>
  
    <script>
import collect from "collect.js";
import get from "get-value";

export default {
  components: {
    qsCostingsGroup: require("./QsCostingsGroup.vue").default,
    qsCostingsTableHead: require("./QsCostingsTableHead.vue").default,
    qsCostingsTableFoot: require("./QsCostingsTableFoot.vue").default,
    qsCostingsMetaTable: require("./QsCostingsMetaTable.vue").default,
    QsCostingsGroupRow: require("./QsCostingsGroupRow.vue").default
  },
  computed: {
    groups() {
      return this.$root.payload
        ? collect(this.$root.payload.costings)
            .reject(costing => costing.no_incremental_impact)
            .reject(costing => {
              // Reject pending
              return (
                collect(
                  get(
                    costing.updateWithId(this.$root.currentUpdate.id),
                    "numbers"
                  )
                )
                  .values()
                  .unique()
                  .first() === null
              );
            })
            .groupBy("category_" + this.$root.language).items
        : null;
    },
    noIncrementalImpactCostings() {
      return collect(this.$root.payload.costings).filter(costing => {
        return costing.no_incremental_impact;
      }).items;
    },
    pendingCostings() {
      return collect(this.$root.payload.costings).filter(costing => {
        return (
          collect(
            get(costing.updateWithId(this.$root.currentUpdate.id), "numbers")
          )
            .values()
            .unique()
            .first() === null
        );
      }).items;
    }
  }
};
</script>