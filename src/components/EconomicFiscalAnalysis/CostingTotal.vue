<template>
  <!-- TODO Remove mockup -->
  <div class="border-blue-800 border-t-2" v-if="costedYearsCount">
    <li class="grid md:grid-cols-8 gap-2 py-2 md:py-1 items-center" :class="['grid-cols-' + costedYearsCount]">
      <div class="text-center md:text-left" :class="[
        'col-span-' + costedYearsCount,
        'md:col-span-' + (8 - costedYearsCount),
      ]">
        <component :is="'span'" class="font-bold">{{
          $root.strings.efas.total.title
        }}</component>
      </div>
      <div v-for="year in years" :key="year.year + '_othermeasures'" class="col-span-1 text-center font-bold">
        <div class="md:hidden font-thin text-sm text-gray-700">
          {{ year.year }}
        </div>

        <costings-number :value="year.cost" />
      </div>
    </li>
  </div>
  <!-- End of todo -->
</template>
<script>
import { mapState } from 'pinia'
import piniaStore from '../../store/pinia-store'
import Efa from "../../store/models/Efa";
export default {
  props: {
    //totals: Object,
    efa: Efa,
  },
  computed: {

    ...mapState(piniaStore, ['costedYearsCount']),
    years() {
      return this.efa.total.cost.localizedCost(this.$root.language);
    },
  },
};
</script>