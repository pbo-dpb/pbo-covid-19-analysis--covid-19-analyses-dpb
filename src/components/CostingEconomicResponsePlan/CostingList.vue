<template>
  <ul>
    <!-- TODO Remove mockup -->
    <li
      class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 even:bg-gray-100 invisible md:visible"
      aria-hidden="true"
    >
      <div class="col-span-2 md:col-span-6 text-center md:text-left">
        <div class="font-thin text-sm">{{ $root.strings.fullcostings.in_millions }}</div>
      </div>
      <div
        v-for="year in ['2019-2020', '2020-2021']"
        :key="year + 'othermeasures'"
        class="col-span-1 text-center"
      >
        <div class="font-bold text-gray-700">{{ year }}</div>
      </div>
    </li>
    <!-- End of todo -->

    <costing-list-item v-for="costing in costings" :key="costing.title_en" :costing="costing"></costing-list-item>

    <!-- TODO Remove mockup -->
    <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 even:bg-gray-100 items-center">
      <div class="col-span-2 md:col-span-6 text-center md:text-left leading-tight">
        <component :is="'span'" class="font-medium">Other COVID-19 costings</component>
        <div class="font-thin">Lorem ipsum... optional supplementary description of this item.</div>
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
    costingListItem: require("./CostingListItem").default,
  },
  computed: {
    costings() {
      return this.$root.payload
        ? collect(this.$root.payload.costings)
            .filter((costing) => {
              return costing.currentCostingUpdate.id;
            })
            .sortBy("title_" + this.$root.language).items
        : null;
    },
  },
};
</script>