<template>
  <div id="app">
    <top-header></top-header>
    <router-view />
  </div>
</template>

<script>
const topHeader = require("./components/TopHeader.vue").default;
export default {
  components: {
    topHeader,
  },
};
</script>