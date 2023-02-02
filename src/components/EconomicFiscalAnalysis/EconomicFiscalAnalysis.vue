<template>
  <div>
    <breadcrumb-view :links="[
      {
        title: $root.strings.efas.title,
        destination: {
          name: 'EfasHome',
          params: {
            language: $route.params.language,
          },
        },
      },
    ]"></breadcrumb-view>
    <list-view v-if="items" :items="items"></list-view>
  </div>
</template>
<script>
import { mapState } from 'pinia'
import piniaStore from '../../store/pinia-store'

import collect from "collect.js";
export default {
  computed: {
    ...mapState(piniaStore, ['efas']),
    items() {
      return collect(this.efas)
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
                efaId: efa.id,
              },
            },
          };
        }).items;
    },
  },
};
</script>