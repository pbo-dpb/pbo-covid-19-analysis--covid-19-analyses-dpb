<template>
  <div id="app">

    <main class="px-2 py-4">
      <div class="container mx-auto">
        <section class="lg:grid lg:grid-cols-4 lg:gap-4">
          <nav class="lg:col-span-1">
            <menu-view></menu-view>
          </nav>
          <div class="lg:col-span-3">
            <router-view></router-view>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import MenuView from "./components/MenuView.vue";

export default {
  components: {
    MenuView
  }

};
</script>
<style>
@import "./index.css";
</style>
