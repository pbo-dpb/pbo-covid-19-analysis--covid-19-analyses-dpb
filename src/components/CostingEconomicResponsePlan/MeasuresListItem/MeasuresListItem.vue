<template>
  <li
    class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 even:bg-gray-100 items-center"
  >
    <div class="col-span-2 md:col-span-6 text-center md:text-left">
      <div
        class="font-medium"
        :class="{ 'text-blue-800': url, underline: url }"
      >
        {{ measure.title[$root.language] }}
      </div>

      <div v-if="measure.subtitle[$root.language]" class="font-thin">
        {{ measure.subtitle[$root.language] }}
      </div>
    </div>
    <!--<div
      v-for="year in years"
      :key="year + costing.title_en"
      class="col-span-1 text-center"
    >
      <div class="md:sr-only font-thin text-sm text-gray-700">{{ year }}</div>
      <costings-number :value="update.numbers[year]" />
    </div>-->
  </li>
</template>
<script>
export default {
  props: {
    measure: Object,
  },
};
</script>