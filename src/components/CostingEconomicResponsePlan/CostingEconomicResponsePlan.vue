<template>
  <div>
    <markdown-content
      :content="$root.strings.costingerp.descriptor"
    ></markdown-content>
    <list-view :items="efos"></list-view>

    <br />
    <costing-indicators></costing-indicators>
    <measures-list></measures-list>
    <costing-total></costing-total>

    <small>{{ $root.strings.costingerp.general_notes }}</small>
  </div>
</template>
<script>
export default {
  components: {
    measuresList: require("./MeasuresList").default,
    costingTotal: require("./CostingTotal").default,
    costingIndicators: require("./CostingIndicators").default,
  },
  computed: {
    efos() {
      return [
        {
          title: "Economic and Fiscal Outlook",
          url:
            "https://www.pbo-dpb.gc.ca/en/blog/news/RP-2021-027-S--economic-fiscal-outlook-september-2020--perspectives-economiques-financieres-septembre-2020",
          date: new Date("2020-09-29" + "T09:00:00.000Z"),
          image:
            "https://pbo-dpb.s3.ca-central-1.amazonaws.com/images/7b5393d01473a0408e33e0308b25c2c6abf0b533",
        },
      ];
    },
  },
};
</script>