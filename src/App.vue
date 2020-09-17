<template>
  <div id="app">
    <full-costings-table></full-costings-table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    fullCostingsTable: require("./components/FullCostingsTable/FullCostingsTable.vue")
      .default,
  },
};
</script>

