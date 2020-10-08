<template>
  <ul class="divide-y divide-gray-200">
    <li
      class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 even:bg-gray-100 invisible md:visible"
      :class="['grid-cols-' + $store.state.costedYearsCount]"
      aria-hidden="true"
    >
      <div
        class="text-center md:text-left"
        :class="[
          'col-span-' + $store.state.costedYearsCount,
          'md:col-span-' + (8 - $store.state.costedYearsCount),
        ]"
      >
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
  </ul>
</template>
<script>
export default {
  components: {
    measuresListItem: require("./MeasuresListItem/MeasuresListItem").default,
  },
  props: {
    measures: {
      type: Array,
      required: true,
    },
  },
};
</script>