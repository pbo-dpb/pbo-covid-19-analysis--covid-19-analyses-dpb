<style scoped>
</style>
<template>
  <div v-html="markdownContent"></div>
</template>

<script>
import snarkdown from "snarkdown";
import collect from "collect.js";

export default {
  props: {
    content: {
      type: String
    }
  },
  computed: {
    markdownContent() {
      if (this.content) {
        return snarkdown(this.content);
      }
      let slotsContent = collect(this.$slots.default).reduce((carry, node) => {
        return (carry ? carry + "\n" : "") + node.text;
      });

      return snarkdown(slotsContent);
    }
  }
};
</script>

