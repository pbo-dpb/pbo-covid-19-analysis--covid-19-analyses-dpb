<template>
  <div>
    <label
      :for="'compare-select-' + _uid"
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    >{{ $root.strings.fullcostings.compare_label }}</label>
    <div class="relative">
      <select
        :id="'compare-select-' + _uid"
        v-model="$root.compareWithUpdate"
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option :value="null">&mdash;</option>
        <option
          v-for="option in options"
          :value="option"
          :key="option.title_en"
        >{{ option['title_' + $root.language] }}</option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import collect from "collect.js";
export default {
  computed: {
    options() {
      return collect(this.$root.payload.updates).reject(
        (value) => value.id === this.$root.currentUpdate.id
      ).items;
    },
  },
};
</script>