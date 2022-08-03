<template>
  <div>
    <aside class="flex flex-row items-center justify-between">
      <h3 class="font-bold text-lg text-blue-800">
        <slot></slot>
      </h3>
      <button
        hidden
        title="$root.strings.options_label"
        class="text-gray-700 rounded border border-gray-100 p-1 text-sm font-thin"
        role="switch"
        :aria-checked="displaySettings"
        :class="{
          'hover:bg-gray-200': !displaySettings,
          'hover:text-blue-700': !displaySettings,
          'text-gray-700': !displaySettings,
          'bg-gray-200': displaySettings,
          'text-blue-700': displaySettings,
        }"
        @click="displaySettings = !displaySettings"
      >
        <i class="fas fa-cogs" aria-hidden="true"></i>
      </button>
    </aside>
    <nav
      v-if="displaySettings"
      class="bg-gray-100 rounded border-gray-200 px-2 py-4 my-2"
    >
      <costings-tools-sorter></costings-tools-sorter>
    </nav>
  </div>
</template>
<script>
import CostingsToolsSorter from "./CostingsToolsSorter.vue"

export default {
  components: {
    CostingsToolsSorter
  },
  data() {
    return {
      displaySettings: false,
    };
  },
};
</script>