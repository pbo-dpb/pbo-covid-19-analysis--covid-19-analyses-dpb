<template>
  <tr :class="{ 'bg-orange-100': highlighted }">
    <td class="border p-2">
      <a
        v-if="costing.hasArtifacts"
        :href="costing.localizedArtifactUrl($root.language)"
        target="_blank"
        class="text-blue-800 hover:text-blue-900"
        ><span class="underline">
          {{
            costing.publication_date.toLocaleDateString(
              $root.language + "-CA",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )
          }}</span
        >
        <i aria-hidden="true" class="ml-1 far fa-file-pdf"></i
      ></a>
      <span v-else>{{
        costing.publication_date.toLocaleDateString($root.language + "-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}</span>
    </td>
    <td
      v-for="cost in costing.cost.localizedCost($root.language)"
      :key="costing.id + cost.year"
      class="border px-2 py-1 text-center"
    >
      <costings-number :value="cost.cost" />
    </td>
  </tr>
</template>
<script>
import Costing from "../../../store/models/Costing";
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
  },
};
</script>