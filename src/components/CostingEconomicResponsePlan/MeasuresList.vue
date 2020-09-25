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
      v-for="measure in measures"
      :key="measure.title_en"
      :measure="measure"
    ></measures-list-item>

    <!-- TODO Remove mockup -->
    <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center">
      <div
        class="col-span-2 md:col-span-6 text-center md:text-left leading-tight"
      >
        <component :is="'span'" class="font-medium"
          >Other COVID-19 costings</component
        >
        <div class="font-thin">
          Lorem ipsum... optional supplementary description of this item.
        </div>
      </div>
      <div
        v-for="year in ['2019-2020', '2020-2021']"
        :key="year + 'othermeasures'"
        class="col-span-1 text-center"
      >
        <div class="md:hidden font-thin text-sm text-gray-700">{{ year }}</div>
        <costings-number :value="999" />
      </div>
    </li>
    <!-- End of todo -->
  </ul>
</template>
<script>
import collect from "collect.js";
export default {
  components: {
    measuresListItem: require("./MeasuresListItem/MeasuresListItem").default,
  },
  computed: {
    measures() {
      return collect(this.$store.state.measures).items;
      /**return this.$root.payload
        ? collect(this.$root.payload.costings)
            .filter((costing) => {
              return costing.currentCostingUpdate.id;
            })
            .sortBy("title_" + this.$root.language).items
        : null;*/
    },
  },
};
</script>