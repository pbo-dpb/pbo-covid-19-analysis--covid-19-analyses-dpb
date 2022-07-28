<template>
  <ul class="divide-y divide-gray-300">
    <li is="vue:list-view-item" :item="item" :key="item.url" v-for="item in items"></li>
  </ul>
</template>
<script>
import ListViewItem from "./ListViewItem.vue"
export default {
  props: {
    items: {
      type: [Array, Object],
      required: true,
    },
  },
  components: {
    ListViewItem
  },
};
</script>