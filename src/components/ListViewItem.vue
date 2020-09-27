<template>
  <li
    class="py-2 w-full"
    :class="{
      'bg-gray-100': item.route,
      'hover:bg-blue-100': item.route,
      'px-2': item.route,
      'md:px-4': item.route,
      'mb-2': item.route,
      rounded: item.route,
    }"
  >
    <component
      :is="item.url ? 'a' : 'div'"
      class="flex flex-row items-center justify-between cursor-pointer"
      :href="item.url"
      aria-role="link"
      @click="handleClick"
    >
      <div class="flex flex-row items-center w-auto">
        <div v-if="item.image" class="w-12 mr-2">
          <img class="shadow" :src="item.image" />
        </div>
        <div>
          <template v-if="date">
            <span class="text-sm text-gray-600" v-if="date">{{ date }}</span>
            <br />
          </template>
          <span :class="{ underline: item.url, 'text-blue-800': item.url }">{{
            item.title
          }}</span>
        </div>
      </div>
      <div
        v-if="item.icon"
        class="text-2xl font-bold text-blue-800 pl-2 md:pl-4"
      >
        <i :class="iconClasses"></i>
      </div>
    </component>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      if (!this.item.date) return;
      return this.item.date.toLocaleDateString(this.$root.language + "-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    iconClasses() {
      if (!this.item.icon) return null;

      switch (this.item.icon) {
        case "next":
          return ["fas", "fa-arrow-right"];
        case "pdf":
          return ["fas", "fa-file-pdf"];
      }
      return null;
    },
  },
  methods: {
    handleClick() {
      if (this.item.url) return;

      if (this.item.route) {
        this.$router.push(this.item.route);
      }
    },
  },
};
</script>