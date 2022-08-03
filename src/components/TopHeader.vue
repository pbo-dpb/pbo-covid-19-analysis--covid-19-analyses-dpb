<template>

        <h1
              class="text-4xl leading-none font-thin mb-4"
            >
              <router-link
                :to="{name:'AnalysisHome'}"
                >{{ title }}</router-link
              >
            </h1>


</template>
<script>
export default {

  computed: {

    title() {
      return this.$root.strings.title;
    },
  },
};
</script>