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
          class="px-4 xl:px-2 py-4 xl:-ml-2 xl:-mr-2 cursor-pointer mb-2 bg-gray-100 hover:bg-gray-200 text-sm leading-tight"
          :class="{
            'bg-gray-800': isActiveLink(link),
            'hover:bg-gray-700': isActiveLink(link),
            'tracking-tight': $route.params.language === 'en',
            'tracking-tighter': $route.params.language === 'fr',
          }"
        >
          <a
            class="hover:underline"
            :class="{
              'text-blue-800': !isActiveLink(link),
              'text-white': isActiveLink(link),
            }"
            :href="href"
            @click="navigate"
            >{{ link.title }}</a
          >
          <div
            v-if="link.subtitle"
            class="font-thin text-sm italic"
            :class="{
              'text-gray-700': !isActiveLink(link),
              'text-blue-100': isActiveLink(link),
            }"
          >
            {{ link.subtitle }}
          </div>
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
        /*
        {
          title: this.$root.strings.efas.title,
          destination: {
            name: "EfasHome",
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
          title: this.$root.strings.monitoringframework.title,
          destination: {
            name: "MonitoringFramework",
            params: {
              language: this.$route.params.language,
            },
          },
        },
        {
          title: this.$root.strings.fullcostings.title,
          subtitle: this.$root.strings.fullcostings.archived.label,
          destination: {
            name: "FullCostingTable",
            params: {
              language: this.$route.params.language,
            },
          },
        },*/
      ];
      return links;
    },
  },
  methods: {
    isActiveLink(link) {
      return (
        link.destination.name === this.$route.name ||
        (link.destination.name === "EfasHome" &&
          this.$route.name === "EfaAnalysis")
      );
    },
  },
};
</script>