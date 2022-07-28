
<template>
  <div class="w-auto flex flex-col lg:flex-row flex-row justify-between font-sm mb-8">
    <qs-costings-sorter v-if="!$root.search.query"></qs-costings-sorter>
    <qs-costings-compare-select></qs-costings-compare-select>
  </div>
</template>
<script>
import QsCostingsCompareSelect from "./QsCostingsCompareSelect.vue"
import QsCostingsSorter from "./QsCostingsSorter.vue"

export default {
  components: {
    QsCostingsCompareSelect,
    QsCostingsSorter
  },
};
</script>