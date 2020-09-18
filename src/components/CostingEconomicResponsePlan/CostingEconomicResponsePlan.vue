<template>
  <div>
    <markdown-content :content="$root.strings.costingerp.descriptor"></markdown-content>
    <br />
    <costing-list></costing-list>
    <costing-total></costing-total>
    <costing-indicators></costing-indicators>
  </div>
</template>
<script>
export default {
  components: {
    costingList: require("./CostingList").default,
    costingTotal: require("./CostingTotal").default,
    costingIndicators: require("./CostingIndicators").default,
  },
};
</script>