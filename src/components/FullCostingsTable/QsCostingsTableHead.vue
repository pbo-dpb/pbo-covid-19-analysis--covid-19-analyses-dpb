<template>
  <thead>
    <tr>
      <th
        rowspan="2"
        style="border-bottom: 1px solid gray"
        class="text-sm text-left font-thin"
      >
        {{ $root.strings.fullcostings.in_millions }}
      </th>

      <th
        colspan="2"
        style="border-bottom: 1px solid gray; width: 20%; line-height: 0.9em"
      >
        {{ $root.strings.fullcostings.current_scenario }}
        <span>
          <br />
          <small>{{ currentUpdateTitle }}</small>
        </span>
      </th>

      <template v-if="previousUpdateTitle">
        <th
          colspan="2"
          style="border-bottom: 1px solid gray; width: 20%; line-height: 0.9em"
        >
          {{ $root.strings.fullcostings.previous_scenario }}
          <br />
          <small>{{ previousUpdateTitle }}</small>
        </th>
      </template>
    </tr>
    <tr style="border-bottom: 1px solid gray">
      <th
        v-for="number in numbersHeaders"
        :key="'header_current_' + number"
        style="width: 10%"
      >
        {{ number }}
      </th>

      <template v-if="previousUpdateTitle">
        <th
          v-for="number in numbersHeaders"
          :key="'header_compared_' + number"
          style="width: 10%"
          class="comparative-cell"
        >
          {{ number }}
        </th>
      </template>
    </tr>
  </thead>
</template>
        <script>
export default {
  data() {
    return {
      numbersHeaders: ["2019-2020", "2020-2021"],
    };
  },
  computed: {
    currentUpdateTitle() {
      return this.$root.currentUpdate["title_" + this.$root.language];
    },
    previousUpdateTitle() {
      return this.$root.compareWithUpdate
        ? this.$root.compareWithUpdate["title_" + this.$root.language]
        : null;
    },
  },
};
</script>