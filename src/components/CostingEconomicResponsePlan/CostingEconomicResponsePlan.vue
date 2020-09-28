<template>
  <div>
    <markdown-content
      :content="$root.strings.costingerp.descriptor"
    ></markdown-content>

    <br />
    <measures-list :measures="measures"></measures-list>

    <div class="my-4 pt-4 text-sm text-gray-800 border-t border-gray-100">
      {{ $root.strings.costingerp.general_notes }}
    </div>
  </div>
</template>
<script>
import { collect } from "collect.js";

export default {
  components: {
    measuresList: require("./MeasuresList").default,
  },
  computed: {
    measures() {
      return collect(this.$store.state.measures).items;
    },
    latestEfa() {
      return this.$store.getters.getLatestEfa();
    },
  },
};
</script>