<style scoped>
div.note-container {
  font-size: 0.95em;
  line-height: 1.25em;

  color: #272932;
  padding: 14px 28px;
}
</style>
<template>
  <div class="note-container" @click="interceptClick">
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