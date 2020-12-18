<template>
  <div>
    <header class="mb-4">
      <markdown-content
        :content="$root.strings.monitoringframework.descriptor"
      ></markdown-content>
    </header>
    <list-view v-if="items" :items="items"></list-view>
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      if (!this.$root.payload || !this.$root.payload.parlementariansrequests) {
        return null;
      }

      return [
        {
          url: `/monitoring-framework--cadre-de-surveillance/2020-12-18-${this.$root.language}.xlsx`,
          title: this.$root.strings.monitoringframework.title,
          date: new Date("2020-12-18T09:00:00.000Z"),
          icon: "xlsx",
        },
        {
          url: `/monitoring-framework--cadre-de-surveillance/${this.$root.language}.xlsx`,
          title: this.$root.strings.monitoringframework.title,
          date: new Date("2020-11-24T09:00:00.000Z"),
          icon: "xlsx",
        },
      ];
    },
  },
};
</script>