<template>
  <div id="app">
    <top-header></top-header>

    <main class="px-2 py-4">
      <div class="container mx-auto">
        <section class="lg:grid lg:grid-cols-4 lg:gap-4">
          <nav class="lg:col-span-1">
            <menu-view></menu-view>
          </nav>
          <div class="lg:col-span-3">
            <router-view />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    topHeader: require("./components/TopHeader.vue").default,
    menuView: require("./components/MenuView.vue").default,
  },
};
</script>