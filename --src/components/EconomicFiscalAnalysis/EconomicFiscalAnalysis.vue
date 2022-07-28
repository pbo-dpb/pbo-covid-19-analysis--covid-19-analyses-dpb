<template>
  <div>
    <breadcrumb-view
      :links="[
        {
          title: $root.strings.efas.title,
          destination: {
            name: 'EfasHome',
            params: {
              language: $route.params.language,
            },
          },
        },
      ]"
    ></breadcrumb-view>
    <list-view v-if="items" :items="items"></list-view>
  </div>
</template>
<script>
import collect from "collect.js";
export default {
  computed: {
    items() {
      return collect(this.$store.state.efas)
        .sortByDesc("publication_date")
        .map((efa) => {
          return {
            title: efa.title[this.$root.language],
            date: efa.publication_date,
            image: efa.poster[this.$root.language],
            icon: "next",
            route: {
              name: "EfaAnalysis",
              params: {
                language: this.$route.params.language,
                efaId: efa.id,
              },
            },
          };
        }).items;
    },
  },
};
</script>