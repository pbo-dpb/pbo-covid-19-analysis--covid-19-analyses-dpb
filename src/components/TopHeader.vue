<template>
  <header>
    <div class="bg-gray-100">
      <section class="container mx-auto">
        <top-header-language-selector></top-header-language-selector>
      </section>
    </div>
    <div class="border-b border-gray-400">
      <section class="container mx-auto">
        <div
          class="py-4 flex flex-col md:flex-row-reverse items-center justify-between"
        >
          <a :href="url">
            <img
              :src="logo"
              class="w-full mx-4 md:mx-0 md:w-64"
              :alt="logoAlt"
            />
          </a>
          <nav>
            <h1
              class="text-2xl md:text-4xl font-hairline text-gray-800 text-center md:text-left mt-4 md:mt-0"
            >
              <router-link
                :to="{
                  name: 'welcome',
                  params: { language: $route.params.language },
                }"
                >{{ title }}</router-link
              >
              <br />
            </h1>
          </nav>
        </div>
      </section>
    </div>
  </header>
</template>
<script>
export default {
  components: {
    topHeaderLanguageSelector: require("./TopHeaderLanguageSelector.vue")
      .default,
  },
  computed: {
    url() {
      return "https://www.pbo-dpb.gc.ca/" + this.$route.params.language;
    },
    logo() {
      return `https://www.pbo-dpb.gc.ca/web/default/files/public/public/2019-08-19_Full_logo_${
        this.$route.params.language === "fr" ? "f" : "e"
      }-01.svg`;
    },
    logoAlt() {
      return this.$root.strings.logo_alt;
    },
    title() {
      return this.$root.strings.title;
    },
  },
};
</script>