<template>
  <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 even:bg-gray-100 items-center">
    <div class="col-span-2 md:col-span-6 text-center md:text-left">
      <component
        :is="url ? 'a' : 'span'"
        :href="url"
        class="font-medium"
        :class="{'text-blue-800': url, 'underline': url}"
      >{{ costing['title_' + $root.language] }}</component>
      <div v-if="subtitle" class="font-thin">{{ subtitle }}</div>
    </div>
    <div v-for="year in years" :key="year + costing.title_en" class="col-span-1 text-center">
      <div class="md:sr-only font-thin text-sm text-gray-700">{{ year }}</div>
      <costings-number :value="update.numbers[year]" />
    </div>
  </li>
</template>
<script>
export default {
  props: {
    costing: Object,
  },
  data() {
    return {
      years: ["2019-2020", "2020-2021"],
    };
  },
  computed: {
    update() {
      if (this.displayAsOfLatestScenario) {
        return this.costing.updateWithId(this.$root.currentUpdate.id);
      }
      return this.costing.currentCostingUpdate;
    },
    url() {
      return this.update.id
        ? `https://www.pbo-dpb.gc.ca/web/default/files/Documents/LEG/${this.update.id}/${this.update.id}_${this.$root.language}.pdf`
        : null;
    },

    subtitle() {
      if (this.update.id === "LEG-2021-015-S") {
        return "This costing has no incremental fiscal impact.";
      }
      return null;
    },
  },
};
</script>