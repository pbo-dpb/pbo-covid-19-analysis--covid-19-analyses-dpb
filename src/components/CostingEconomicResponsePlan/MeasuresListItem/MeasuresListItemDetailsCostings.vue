<template>
  <figure>
    <table class="table-fixed w-full">
      <thead>
        <tr>
          <th class="w-1/2 p-2">Date of PBO costing</th>
          <th class="w-1/4 p-2">2019-2020</th>
          <th class="w-1/4 p-2">2020-2021</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="costing in measure.costings"
          :key="costing.id"
          :costing="costing"
          is="measures-list-item-details-costings-costing"
        ></tr>
      </tbody>
    </table>
  </figure>
</template>
<script>
export default {
  props: {
    measure: Object,
  },
  components: {
    measuresListItemDetailsCostingsCosting: require("./MeasuresListItemDetailsCostingsCosting")
      .default,
  },
};
</script>