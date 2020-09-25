<template>
  <tr>
    <td class="border p-2">
      {{
        costing.publication_date.toLocaleDateString($root.language + "-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
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
  },
};
</script>