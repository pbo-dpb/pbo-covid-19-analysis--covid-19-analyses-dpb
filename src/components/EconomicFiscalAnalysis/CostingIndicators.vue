<template>
  <aside class="bg-blue-100 p-2 my-8 rounded-lg">
    <div
      class="col-span-2 text-center text-xl pb-2 mb-2 border-b border-blue-800 leading-none"
    >
      <component :is="'div'" class="font-bold text-blue-800">{{
        $root.strings.costingerp.indicators.header_title
      }}</component>
      <!--<span class="text-sm font-thin">{{
        $root.strings.costingerp.indicators.header_note
      }}</span>-->
    </div>
    <ul class="divide-y divide-gray-400">
      <li
        v-for="(cost, indicator) in efa.indicators"
        :key="indicator"
        class="grid grid-2 gap-2 py-2 items-center"
      >
        <div class="col-span-2 text-center text-lg pb-2 text-blue-900">
          <component :is="'span'">
            {{ $root.strings.efas.indicators[indicator] }}</component
          >
        </div>
        <div
          v-for="(number, year) in cost"
          :key="year + indicator"
          class="col-span-1 text-center"
        >
          <div class="font-thin text-sm text-gray-700">{{ year }}</div>
          <span class="text-blue-900 font-bold">{{
            number.toLocaleString($root.language)
          }}</span>
        </div>
      </li>
    </ul>
  </aside>
</template>
<script>
import Efa from "../../store/models/Efa";
export default {
  props: {
    efa: {
      type: Efa,
    },
  },
};
</script>