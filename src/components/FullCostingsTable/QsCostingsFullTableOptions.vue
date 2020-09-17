
<template>
  <div class="w-auto flex flex-col lg:flex-row flex-row justify-between font-sm mb-8">
    <qs-costings-sorter v-if="!$root.search.query"></qs-costings-sorter>
    <qs-costings-compare-select></qs-costings-compare-select>
  </div>
</template>
<script>
export default {
  components: {
    qsCostingsCompareSelect: require("./QsCostingsCompareSelect.vue").default,
    qsCostingsSorter: require("./QsCostingsSorter.vue").default,
  },
};
</script>