<template>
  <aside
    tabindex="-1"
    class="mx-2 my-4 px-2 py-4 text-sm rounded-lg border border-gray-100 shadow-lg"
  >
    <h3
      class="text-center text-lg pb-2 mb-2 border-b font-medium border-gray-100 leading-none text-gray-800"
    >
      {{ measure.title[language] }}
    </h3>

    <div
      v-for="note in measure.notes"
      :key="note.en"
      class="p-2 mb-2 rounded"
      :class="{
        'bg-blue-100': note.type == 'info',
        'bg-orange-100': note.type == 'warning',
      }"
    >
      <h4 class="text-left mb-2 font-bold leading-none text-black">
        {{ $root.strings.costingerp.measures_notes.title }}
      </h4>

      <div>
        {{ note[language] }}
      </div>
    </div>

    <measures-list-item-details-costings
      :measure="measure"
      :highlighted-costing-id="highlightedCostingId"
      :prefer-net-cost="preferNetCost"
    />
  </aside>
</template>

<script>
import MeasuresListItemDetailsCostings from "./MeasuresListItemDetailsCostings.vue"
export default {
  components: {
    MeasuresListItemDetailsCostings
  },
  computed: {
    language() {
      return this.language;
    },
  },
  props: {
    measure: Object,
    highlightedCostingId: String,
    preferNetCost: {
      type: Boolean,
      default: false,
    },
  },
  
};
</script>