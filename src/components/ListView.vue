<template>
  <ul class="divide-y divide-gray-300">
    <li is="list-view-item" :item="item" :key="item.url" v-for="item in items"></li>
  </ul>
</template>
<script>
export default {
  props: {
    items: {
      type: [Array, Object],
      required: true,
    },
  },
  components: {
    listViewItem: require("./ListViewItem").default,
  },
};
</script>