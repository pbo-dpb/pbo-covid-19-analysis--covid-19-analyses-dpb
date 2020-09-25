<template>
  <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center">
    <div class="col-span-2 md:col-span-6 text-center md:text-left">
      <div
        role="switch"
        class="font-medium cursor-pointer"
        :aria-expanded="showDetails"
        :aria-controls="'item-details-' + uid"
        @click="showDetails = !showDetails"
      >
        <i v-if="showDetails" class="fas fa-caret-down fa-fw"></i>
        <i v-else class="fas fa-caret-right fa-fw"></i>
        <span class="hover:underline">{{ measure.title[$root.language] }}</span>
      </div>

      <div v-if="measure.subtitle[$root.language]" class="font-thin">
        {{ measure.subtitle[$root.language] }}
      </div>

      <measures-list-item-details
        :id="'item-details-' + uid"
        :measure="measure"
        v-if="showDetails"
      ></measures-list-item-details>
    </div>
    <div
      v-for="(cst, year) in measure.cost._cost"
      :key="year + measure.title.en"
      class="col-span-1 text-center"
    >
      <div class="md:sr-only font-thin text-sm text-gray-700">{{ year }}</div>
      <costings-number :value="cst" />
    </div>
  </li>
</template>
<script>
export default {
  props: {
    measure: Object,
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