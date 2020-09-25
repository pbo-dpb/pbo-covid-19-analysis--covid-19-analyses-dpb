<template>
  <aside
    tabindex="-1"
    class="m-2 p-2 text-sm rounded-lg border border-gray-100 shadow-lg"
  >
    <h3
      class="text-center text-lg pb-2 mb-2 border-b font-medium border-gray-100 leading-none text-gray-800"
    >
      {{ measure.title[$root.language] }}
    </h3>

    <measures-list-item-details-costings :measure="measure" />
  </aside>
</template>
<script>
import Measure from "../../../store/models/Measure";
export default {
  props: {
    measure: Object,
  },
  components: {
    measuresListItemDetailsCostings: require("./MeasuresListItemDetailsCostings")
      .default,
  },
};
</script>