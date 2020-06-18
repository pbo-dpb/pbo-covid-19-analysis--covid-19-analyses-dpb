<template>
  <div>
    <label :for="'compare-select-' + _uid">{{ $root.strings.compare_label }}</label>
    <select
      :id="'compare-select-' + _uid"
      v-model="$root.compareWithUpdate"
      style="font-size: 0.75rem;height: 2rem;"
    >
      <option :value="null">&mdash;</option>
      <option
        v-for="option in options"
        :value="option"
        :key="option.title_en"
      >{{ option['title_' + $root.language] }}</option>
    </select>
  </div>
</template>
<script>
import collect from "collect.js";
export default {
  computed: {
    options() {
      return collect(this.$root.payload.updates).reject(
        value => value.id === this.$root.currentUpdate.id
      ).items;
    }
  }
};
</script>