<template>
  <aside
    tabindex="-1"
    class="m-2 p-2 text-sm rounded border border-gray-100 shadow-lg"
  >
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