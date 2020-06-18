<style scoped>
.main {
  margin-top: 1em;
  color: #666666;
  font-size: smaller;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.withsearch {
  justify-content: flex-end;
}

@media only screen and (max-width: 768px) {
  .main {
    flex-direction: column;
    margin-top: 0;
  }
}
</style>
<template>
  <div class="main" :class="{'withsearch': $root.search.query}">
    <qs-costings-sorter v-if="!$root.search.query"></qs-costings-sorter>
    <qs-costings-compare-select></qs-costings-compare-select>
  </div>
</template>
<script>
export default {
  components: {
    qsCostingsCompareSelect: require("./QsCostingsCompareSelect.vue").default,
    qsCostingsSorter: require("./QsCostingsSorter.vue").default
  }
};
</script>