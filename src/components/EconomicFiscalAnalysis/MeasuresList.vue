<template>
  <ul class="divide-y divide-gray-200">
    <li
      class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 even:bg-gray-100 invisible md:visible"
      aria-hidden="true"
    >
      <div class="col-span-2 md:col-span-6 text-center md:text-left">
        <div class="font-thin text-sm">
          {{ $root.strings.fullcostings.in_millions }}
        </div>
      </div>

      <div
        v-for="localizedCostedYear in $root.strings.costingerp.costed_years"
        :key="'costing_header_' + localizedCostedYear"
        class="col-span-1 text-center"
      >
        <div class="font-bold text-gray-700">{{ localizedCostedYear }}</div>
      </div>
    </li>

    <measures-list-item
      v-for="efaMeasure in efaMeasures"
      :key="efaMeasure.measure.title.en"
      :efa-measure="efaMeasure"
      :highlighted-costing-id="efaMeasure.costingId"
    ></measures-list-item>
  </ul>
</template>
<script>
export default {
  components: {
    measuresListItem: require("../CostingEconomicResponsePlan/MeasuresListItem/MeasuresListItem")
      .default,
  },
  props: {
    efaMeasures: {
      type: Array,
      required: true,
    },
  },
};
</script>