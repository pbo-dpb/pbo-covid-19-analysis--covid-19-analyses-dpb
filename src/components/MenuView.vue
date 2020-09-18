<template>
  <div class="w-full">
    <ul v-if="links">
      <router-link
        v-for="link in links"
        :key="link.title"
        :to="link.destination"
        v-slot="{ href, navigate }"
      >
        <li
          @click="navigate"
          class="px-4 xl:px-2 py-2 xl:mr-0 xl:-ml-2 xl:-mr-2 cursor-pointer text-blue-800 font-medium hover:text-blue-800 hover:underline mb-2 bg-gray-100"
          :class="{'bg-gray-700': isActiveLink(link),  'text-base':($route.params.language === 'en'), 'text-sm': ($route.params.language === 'fr')}"
        >
          <a
            :class="{'text-white': isActiveLink(link),}"
            :href="href"
            @click="navigate"
          >{{ link.title }}</a>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    links() {
      let links = [
        {
          title: this.$root.strings.home.title,
          destination: {
            name: "AnalysisHome",
            params: {
              language: this.$route.params.language,
            },
          },
        },
        {
          title: this.$root.strings.costingerp.title,
          destination: {
            name: "CostingERP",
            params: {
              language: this.$route.params.language,
            },
          },
        },
        {
          title: this.$root.strings.scenarioanalysis.title,
          destination: {
            name: "ScenarioAnalysis",
            params: {
              language: this.$route.params.language,
            },
          },
        },
        {
          title: this.$root.strings.parliamentariansrequests.title,
          destination: {
            name: "ParliamentariansRequests",
            params: {
              language: this.$route.params.language,
            },
          },
        },
        {
          title: this.$root.strings.fullcostings.title,
          destination: {
            name: "FullCostingTable",
            params: {
              language: this.$route.params.language,
            },
          },
        },
      ];
      return links;
    },
  },
  methods: {
    isActiveLink(link) {
      return link.destination.name === this.$route.name;
    },
  },
};
</script>