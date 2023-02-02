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
      {
        title: efa.title[$root.language],
        destination: {
          name: 'EfaAnalysis',
          params: {
            language: $route.params.language,
          },
        },
      },
    ]"></breadcrumb-view>
    <markdown-content :content="efa.description[$root.language]"></markdown-content>

    <aside class="bg-blue-100 p-2 my-8 rounded-lg mx-2">
      <div class="col-span-2 md:col-span-6 text-center text-lg pb-2 mb-2 border-b border-blue-800 leading-none">
        <component :is="'div'" class="font-bold text-blue-800">{{
          $root.strings.efas.read_report_cta
        }}</component>
      </div>
      <div class="md:px-2">
        <list-view :items="documents"></list-view>
      </div>
    </aside>

    <br />

    <costings-tools>
      {{ $root.strings.efas.table_title }}
    </costings-tools>

    <measures-list :efa-measures="efaMeasures"></measures-list>

    <li class="grid md:grid-cols-8 gap-2 py-2 md:py-1 items-center border-t border-gray-200"
      :class="['grid-cols-' + countOfYears]">
      <div class="text-center md:text-left leading-tight" :class="[
        'col-span-' + countOfYears,
        'md:col-span-' + (8 - countOfYears),
      ]">
        <component :is="'span'" class="font-medium">{{
          $root.strings.efas.other_measures.title
        }}</component>
        <div class="font-thin">
          {{ efa.otherMeasures.description[$root.language] }}
        </div>
      </div>
      <div v-for="year in efa.otherMeasures.cost.localizedCost($root.language)" :key="year.year + '_othermeasures'"
        class="col-span-1 text-center">
        <div class="md:hidden font-thin text-sm text-gray-700">
          {{ year.year }}
        </div>
        <costings-number :value="year.cost" />
      </div>
    </li>

    <costing-total :efa="efa"></costing-total>

    <costing-indicators :efa="efa"></costing-indicators>

    <small>{{ efa.footer[$root.language] }}</small>
  </div>
</template>
<script>
import collect from "collect.js";
import MeasuresList from './MeasuresList.vue';
import CostingTotal from './CostingTotal.vue';
import CostingIndicators from './CostingIndicators.vue';
import CostingsTools from '../CostingsTools/CostingsTools.vue';

import { mapState } from 'pinia'
import piniaStore from '../../store/pinia-store'

export default {
  components: {
    MeasuresList,
    CostingTotal,
    CostingIndicators,
    CostingsTools,
  },

  computed: {
    ...mapState(piniaStore, ['settings', 'getEfaById', 'getMeasureForCostingWithId', 'costedYearsCount']),
    efa() {
      return this.getEfaById(this.$route.params.efaId);
    },
    countOfYears() {
      return this.costedYearsCount ? this.costedYearsCount : 0;
    },
    documents() {
      let docs = [
        {
          title: this.efa.title[this.$root.language],
          url: this.efa.url[this.$root.language],
          date: this.efa.date,
          image: this.efa.poster[this.$root.language],
          icon: "pdf",
        },
      ];
      return collect(docs).merge(
        collect(this.efa.files).map((file) => {
          return {
            title: file[this.$root.language].title,
            url: file[this.$root.language].url,
            icon: file.type,
          };
        }).items
      ).items;
    },
    efaMeasures() {
      return collect(this.efa.costings)
        .map((efaCosting) => {
          return {
            measure: this.getMeasureForCostingWithId(
              efaCosting.id
            ),
            cost: efaCosting.cost,
            costingId: efaCosting.id,
          };
        })
        .unique((efaMeasure) => {
          return efaMeasure.measure.title.en;
        })
        .when(this.settings.sortCostingsBy === "name", (items) =>
          items.sortBy((item) => {
            return item.measure.title[this.$root.language];
          })
        )
        .when(this.settings.sortCostingsBy === "cost", (items) =>
          items.sortBy((item) => {
            return item.measure.cost.aggregatedCost;
          })
        ).items;
    },


  },
};
</script>