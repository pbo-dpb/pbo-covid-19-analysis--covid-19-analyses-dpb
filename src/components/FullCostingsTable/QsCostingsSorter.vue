<style scoped>
@media only screen and (max-width: 768px) {
  .sorter {
    margin: 1rem 0;
  }
}
</style>
<template>
  <div class="sorter">
    {{ $root.strings.fullcostings.sort_label }}
    <br />
    <label class="mr-2">
      <input type="radio" name="sortby" value="alphabetically" v-model="$root.sort" />
      {{ $root.strings.fullcostings.sort_alpha }}
    </label>
    <label>
      <input type="radio" name="sortby" value="price" v-model="$root.sort" />
      {{ $root.strings.fullcostings.sort_price }}
      <span v-if="$root.compareWithUpdate">({{ $root.strings.fullcostings.sort_price_descending }}; {{
        $root.strings.fullcostings.current_scenario.toLowerCase() }})</span>
      <span v-else>({{ $root.strings.fullcostings.sort_price_descending }})</span>
    </label>
  </div>
</template>
<script>
export default {
  computed: {},
  mounted() { },
};
</script>