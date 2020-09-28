<template>
  <!-- TODO Remove mockup -->
  <li
    class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center border-t-2 border-blue-800"
  >
    <div class="col-span-2 md:col-span-6 text-center md:text-left">
      <component :is="'span'" class="font-bold">{{
        $root.strings.efas.total.title
      }}</component>
    </div>
    <div
      v-for="year in efa.total.cost.localizedCost($root.language)"
      :key="year.year + '_othermeasures'"
      class="col-span-1 text-center font-bold"
    >
      <div class="md:hidden font-thin text-sm text-gray-700">
        {{ year.year }}
      </div>

      <costings-number :value="year.cost" />
    </div>
  </li>
  <!-- End of todo -->
</template>
<script>
import Efa from "../../store/models/Efa";
export default {
  props: {
    //totals: Object,
    efa: Efa,
  },
};
</script>