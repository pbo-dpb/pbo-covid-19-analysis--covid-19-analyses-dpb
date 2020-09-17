<style scoped>
</style>
<template>
  <div>
    <qs-costings-toggle
      :label="$root.strings['full_simple_toggle_label']"
      @change="toggleWasTriggered"
      :value="$root.showFullTable"
      :disabled="$root.search.query ? true : false"
    ></qs-costings-toggle>
  </div>
</template>
<script>
export default {
  components: {
    qsCostingsToggle: require("./QsCostingsToggle.vue").default
  },
  methods: {
    toggleWasTriggered(value) {
      this.$root.showFullTable = value;
      if (value) {
        window.localStorage.setItem("pbo-covid19-costings-full-toggle", "true");
      } else {
        this.$root.compareWithUpdate = null;
        window.localStorage.removeItem("pbo-covid19-costings-full-toggle");
      }
    }
  }
};
</script>