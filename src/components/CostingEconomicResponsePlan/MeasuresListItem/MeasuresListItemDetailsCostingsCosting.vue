<template>
  <tr :class="{ 'bg-yellow-200': highlighted }">
    <td class="border p-2">
      <a
        v-if="costing.hasArtifacts"
        :href="costing.localizedArtifactUrl(language)"
        target="_blank"
        class="text-blue-800 hover:text-blue-900 flex flex-row items-center gap-1"
        ><span class="underline">
          {{
            costing.publication_date.toLocaleDateString(
              language + "-CA",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )
          }}</span
        >
        

      <ListViewItemIcon type="pdf" class="w-4 h-4"></ListViewItemIcon>
      
      
      </a>
      <span v-else>{{
        costing.publication_date.toLocaleDateString(language + "-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}</span>
    </td>
    <td
      v-for="cost in costing.cost.localizedCost(language, preferNetCost)"
      :key="costing.id + cost.year"
      class="border px-2 py-1 text-center"
    >
      <costings-number :value="cost.cost" />
    </td>
  </tr>
</template>
<script>
import Costing from "../../../store/models/Costing";
import ListViewItemIcon from "../../ListViewItemIcon.vue";
export default {
    props: {
        costing: {
            required: true,
            type: Costing,
        },
        highlighted: {
            required: false,
            default: false,
        },
        preferNetCost: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        language() {
            return this.$root.language;
        },
    },
    components: { ListViewItemIcon }
};
</script>