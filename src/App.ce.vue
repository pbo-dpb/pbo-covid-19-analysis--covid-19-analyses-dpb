<template>
<div class="flex flex-col justify-center items-center gap-8">
  <img alt="Vue logo" :src="logoUrl" class="w-64" />
  </div>
</template>

<script>
import logoUrl from "./assets/logo.svg?url";
const language = document.documentElement.lang;

export default {
  data() {
    return {
      language: language,
    };
  },
  props: {
    publicPath: String
  },
  computed: {
    logoUrl() {
      return this.publicPath ? this.publicPath + logoUrl : logoUrl
    }
  },
};
</script>
<style>
@import "./index.css";
</style>
