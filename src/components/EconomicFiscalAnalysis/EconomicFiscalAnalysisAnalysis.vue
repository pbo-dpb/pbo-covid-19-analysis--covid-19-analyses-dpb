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
        {
          title: efa.title[$root.language],
          destination: {
            name: 'EfaAnalysis',
            params: {
              language: $route.params.language,
            },
          },
        },
      ]"
    ></breadcrumb-view>
    <markdown-content
      :content="efa.description[$root.language]"
    ></markdown-content>

    <aside class="bg-blue-100 p-2 my-8 rounded-lg mx-2">
      <div
        class="col-span-2 md:col-span-6 text-center text-lg pb-2 mb-2 border-b border-blue-800 leading-none"
      >
        <component :is="'div'" class="font-bold text-blue-800">{{
          $root.strings.efas.read_report_cta
        }}</component>
      </div>
      <div class="md:px-2">
        <list-view :items="documents"></list-view>
      </div>
    </aside>

    <br />

    <measures-list :efa-measures="efaMeasures"></measures-list>
    <costing-total></costing-total>

    <costing-indicators></costing-indicators>

    <small>{{ $root.strings.costingerp.general_notes }}</small>
  </div>
</template>
<script>
import collect from "collect.js";

export default {
  components: {
    measuresList: require("./MeasuresList").default,
    costingTotal: require("../CostingEconomicResponsePlan/CostingTotal")
      .default,
    costingIndicators: require("./CostingIndicators").default,
  },
  computed: {
    efa() {
      return this.$store.getters.getEfaById(this.$route.params.efaId);
    },
    documents() {
      return [
        {
          title: this.efa.title[this.$root.language],
          url: this.efa.url[this.$root.language],
          date: this.efa.date,
          image: this.efa.poster[this.$root.language],
          icon: "pdf",
        },
      ];
    },
    efaMeasures() {
      return collect(this.efa.costings)
        .map((efaCosting) => {
          return {
            measure: this.$store.getters.getMeasureForCostingWithId(
              efaCosting.id
            ),
            cost: efaCosting.cost,
          };
        })
        .unique((efaMeasure) => {
          return efaMeasure.measure.title.en;
        }).items;
    },

    costingTotal() {
      return this.efaMeasures.map((efaMeasure) => {
        return efaMeasure.cost
          ? efaMeasure.cost
          : this.$store.getters.getMeasureForCostingWithId(efaMeasure.id).cost;
      });
    },
  },
};
</script>