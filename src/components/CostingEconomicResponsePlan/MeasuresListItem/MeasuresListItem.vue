<template>
  <li class="py-2 md:py-1">
    <div
      class="grid md:grid-cols-8 gap-2 items-center"
      :class="['grid-' + $store.state.costedYearsCount]"
    >
      <div
        class="text-center md:text-left"
        :class="[
          'col-span-' + $store.state.costedYearsCount,
          'md:col-span-' + (8 - $store.state.costedYearsCount),
        ]"
      >
        <div
          role="switch"
          class="font-medium cursor-pointer"
          :aria-expanded="showDetails"
          :aria-controls="'item-details-' + uid"
          @click="showDetails = !showDetails"
        >
          <i v-if="showDetails" class="fas fa-caret-down fa-fw"></i>
          <i v-else class="fas fa-caret-right fa-fw"></i>
          <span class="hover:underline">{{
            _measure.title[$root.language]
          }}</span>
          <span
            v-if="!_measure.hasFiscalImpact"
            class="ml-2 font-thin text-gray-600"
          >
            ({{ $root.strings.costingerp.no_incremental_impact }})
          </span>
        </div>

        <div v-if="_measure.subtitle[$root.language]" class="font-thin">
          {{ _measure.subtitle[$root.language] }}
        </div>
      </div>

      <div
        v-for="year in cost.localizedCost($root.language, preferNetCost)"
        :key="year.year + _measure.title.en"
        class="col-span-1 text-center"
        :class="{ italic: !_measure.hasFiscalImpact }"
      >
        <div class="md:sr-only font-thin text-sm text-gray-700">
          {{ year.year }}
        </div>
        <costings-number :value="year.cost" />
      </div>
    </div>

    <measures-list-item-details
      :id="'item-details-' + uid"
      :measure="_measure"
      :highlighted-costing-id="highlightedCostingId"
      v-if="showDetails"
      :prefer-net-cost="preferNetCost"
    ></measures-list-item-details>
  </li>
</template>
<script>
export default {
  props: {
    measure: Object,
    efaMeasure: Object,
    highlightedCostingId: String,
    preferNetCost: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    _measure() {
      if (this.measure) return this.measure;
      return this.efaMeasure.measure;
    },

    cost() {
      if (this.efaMeasure && this.efaMeasure.cost) {
        return this.efaMeasure.cost;
      }

      if (this.efaMeasure && this.highlightedCostingId) {
        let highlightedCosting = this.efaMeasure.measure.getCostingWithId(
          this.highlightedCostingId
        );
        if (highlightedCosting && highlightedCosting.cost)
          return highlightedCosting.cost;
      }

      return this._measure.cost;
    },
  },

  data() {
    return {
      showDetails: false,
      uid: String(Math.random()).replace(/\D+/g, ""),
    };
  },
  components: {
    measuresListItemDetails: require("./MeasuresListItemDetails").default,
  },
};
</script>