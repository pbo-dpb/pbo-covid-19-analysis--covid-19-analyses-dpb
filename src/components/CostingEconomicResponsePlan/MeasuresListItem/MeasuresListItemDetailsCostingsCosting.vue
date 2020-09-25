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
    <td class="border p-2">123</td>
    <td class="border p-2">456</td>
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