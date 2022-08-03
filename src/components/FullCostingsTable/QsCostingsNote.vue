<template>
  <div class="my-2 p-2 bg-gray-50 rounded text-sm" @click="interceptClick">
    <markdown-content :content="note"></markdown-content>
  </div>
</template>
  
    <script>
export default {
  props: {
    note: {
      type: String,
      required: true
    }
  },
  methods: {
    interceptClick(event) {
      // Open all links in new tabs
      if (event.target && event.target.href && !event.target.target) {
        event.target.target = "_blank";
      }
    }
  }
};
</script>