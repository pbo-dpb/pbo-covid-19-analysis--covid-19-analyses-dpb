
<template>
  <div>
    <input
      type="search"
      v-model="$root.search.query"
      :placeholder="$root.strings.fullcostings.search_label"
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-8"
    />
  </div>
</template>
<script>
export default {
  data() {
    return { shouldShowQuery: true };
  },
  methods: {
    displaySearchField() {
      this.shouldShowQuery = true;
      this.$nextTick(() => {
        this.$el.querySelector("input").focus();
      });
    },
  },
};
</script>