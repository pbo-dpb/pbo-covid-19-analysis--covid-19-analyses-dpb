<template>
  <div class="border-l-4 p-4 mb-4" :class="colors" role="alert">
    <h2 v-if="title" class="font-bold font-lg" :class="{'mb-2': this.$slots.default}">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
const baseColors = {
  danger: "red",
  warning: "orange",
  success: "green",
  info: "blue",
  default: "gray",
};

export default {
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      validator: function (value) {
        return Object.keys(baseColors).indexOf(value) !== -1;
      },
      default: "default",
    },
    shouldScrollIntoView: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      const color = baseColors[this.type];
      return color ? color : baseColors["default"];
    },
    colors() {
      const colors = {
        red: {
          bg: "bg-red-200",
          border: "border-red-800",
          text: "text-red-800",
        },
        orange: {
          bg: "bg-orange-200",
          border: "border-orange-800",
          text: "text-orange-800",
        },
        green: {
          bg: "bg-green-200",
          border: "border-green-800",
          text: "text-green-800",
        },
        blue: {
          bg: "bg-blue-200",
          border: "border-blue-800",
          text: "text-blue-800",
        },
        gray: {
          bg: "bg-gray-200",
          border: "border-gray-800",
          text: "text-gray-800",
        },
      };
      return Object.values(colors[this.color]);
    },
  },
  mounted() {
    if (this.shouldScrollIntoView) {
      this.$el.scrollIntoView();
    }
  },
};
</script>

