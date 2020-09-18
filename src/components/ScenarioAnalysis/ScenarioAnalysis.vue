<template>
  <div>
    <header class="mb-4">
      <markdown-content :content="$root.strings.scenarioanalysis.descriptor"></markdown-content>
    </header>
    <list-view v-if="items" :items="items"></list-view>
  </div>
</template>
<script>
import collect from "collect.js";
export default {
  computed: {
    items() {
      if (!this.$root.payload || !this.$root.payload.scenarios) {
        return null;
      }

      return collect(this.$root.payload.scenarios).map((req) => {
        return {
          url: req["url_" + this.$root.language],
          title: req["title_" + this.$root.language],
          date: new Date(req.date),
          image: req["image_" + this.$root.language],
        };
      }).items;
    },
  },
};
</script>