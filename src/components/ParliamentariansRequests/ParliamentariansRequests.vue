<template>
  <div>
    <header class="mb-4">
      <markdown-content
        :content="$root.strings.parliamentariansrequests.descriptor"
      ></markdown-content>
    </header>
    <list-view v-if="items" :items="items"></list-view>
  </div>
</template>
<script>
import collect from "collect.js";
export default {
  computed: {
    items() {
      if (!this.$root.payload || !this.$root.payload.parlementariansrequests) {
        return null;
      }

      return collect(this.$root.payload.parlementariansrequests).map((req) => {
        return {
          url: req["url_" + this.$root.language],
          title: req["title_" + this.$root.language],
          date: new Date(req.date + "T09:00:00.000Z"),
        };
      }).items;
    },
  },
};
</script>