<template>
  <div class="prose max-w-none" v-html="markdownContent"></div>
</template>

<script>
import { Remarkable } from "remarkable";

import collect from "collect.js";

export default {
  props: {
    content: {
      type: String,
    },
  },
  computed: {
    markdownContent() {
      let md = new Remarkable();
      if (this.content) {
        return md.render(this.content);
      }
      let slotsContent = collect(this.$slots.default).reduce((carry, node) => {
        return (carry ? carry + "\n" : "") + node.text;
      });

      return md.render(slotsContent);
    },
  },
};
</script>

