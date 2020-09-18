<template>
  <li class="bg-white odd:bg-gray-200 py-2">
    <a class="flex flex-row items-center" :href="item.url">
      <div v-if="item.image" class="w-12 mr-2">
        <img class="shadow" :src="item.image" />
      </div>
      <div>
        <template v-if="date">
          <span class="text-sm text-gray-600" v-if="date">{{ date }}</span>
          <br />
        </template>
        <span class="text-blue-800 underline">{{ item.title }}</span>
      </div>
    </a>
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
  },
};
</script>