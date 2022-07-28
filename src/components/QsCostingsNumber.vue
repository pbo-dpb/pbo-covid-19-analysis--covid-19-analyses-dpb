<template>
  <span>{{ formattedNumber }}</span>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    }
  },

  computed: {
    formattedNumber() {
      if (this.value === null) return "N/A";

      return this.roundNumber === 0
        ? "-"
        : this.roundNumber.toLocaleString(this.$root.language);
    },

    roundNumber() {
      if (this.value === null) return "N/A";
      let val = this.value;

      let epsilonedValue = val + Number.EPSILON;
      if (isNaN(epsilonedValue)) {
        // Just use the value so it works in IE
        epsilonedValue = val;
      }
      return Math.round(epsilonedValue);
    }
  }
};
</script>