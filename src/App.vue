<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <markdown-content content="Hello, **world**!"></markdown-content>
  </div>
</template>

<script>
import MarkdownContent from "./components/MarkdownContent.vue";

export default {
  name: "App",
  components: {
    MarkdownContent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
