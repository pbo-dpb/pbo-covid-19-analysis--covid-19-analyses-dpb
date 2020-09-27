<template>
  <div>
    <markdown-content
      :content="$root.strings.costingerp.descriptor"
    ></markdown-content>

    <br />
    <measures-list :measures="measures"></measures-list>
    <costing-total></costing-total>

    <small>{{ $root.strings.costingerp.general_notes }}</small>
  </div>
</template>
<script>
import { collect } from "collect.js";

export default {
  components: {
    measuresList: require("./MeasuresList").default,
    costingTotal: require("./CostingTotal").default,
  },
  computed: {
    measures() {
      return collect(this.$store.state.measures).items;
    },
  },
};
</script>