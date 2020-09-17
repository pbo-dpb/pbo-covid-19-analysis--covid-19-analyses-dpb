<style scoped>
th {
  text-align: left;
}
tbody > tr {
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
}

tr > td {
  padding: 0.25em;
}

.is-not-pbo-costing {
  color: #888;
}

.covid-badge {
  margin-left: 0.5em;
}
</style>

<template>
  <table>
    <thead>
      <tr>
        <th>
          {{ $root.strings.meta_header }}
          <br />
          <small style="font-weight:200;">{{ $root.strings.meta_header_note }}</small>
        </th>
        <th></th>
        <th></th>
        <template v-if="$root.compareWithUpdate">
          <th></th>
          <th></th>
        </template>
      </tr>
    </thead>

    <tbody>
      <tr class="covidcostings-row">
        <td style="text-align:left">
          <b>{{ $root.strings.real_gdp_growth }}</b>
        </td>

        <td
          style="text-align:right;width:10%"
          v-for="number in $root.currentUpdate.meta.real_gdp_growth"
          :key="'real_gdp_growth' + '_current_' + number"
        >{{ number }}</td>

        <template v-if="$root.compareWithUpdate">
          <td
            class="comparative-cell"
            style="text-align:right;width:10%"
            v-for="number in $root.compareWithUpdate.meta.real_gdp_growth"
            :key="'real_gdp_growth' + '_past_' + number"
          >{{ number }}</td>
        </template>
      </tr>

      <tr class="covidcostings-row">
        <td style="text-align:left">
          <b>{{ $root.strings.employment_rate }}</b>
        </td>

        <td
          style="text-align:right;width:10%"
          v-for="number in $root.currentUpdate.meta.employment_rate"
          :key="'employment_rate' + '_current_' + number"
        >{{ number }}</td>

        <template v-if="$root.compareWithUpdate">
          <td
            class="comparative-cell"
            style="text-align:right;width:10%"
            v-for="number in $root.compareWithUpdate.meta.employment_rate"
            :key="'employment_rate' + '_past_' + number"
          >{{ number }}</td>
        </template>
      </tr>

      <tr class="covidcostings-row">
        <td style="text-align:left">
          <b>{{ $root.strings.wti }}</b>
        </td>

        <td
          style="text-align:right;width:10%"
          v-for="number in $root.currentUpdate.meta.wti"
          :key="'wti' + '_current_' + number"
        >{{ number }}</td>

        <template v-if="$root.compareWithUpdate">
          <td
            class="comparative-cell"
            style="text-align:right;width:10%"
            v-for="number in $root.compareWithUpdate.meta.wti"
            :key="'wti' + '_past_' + number"
          >{{ number }}</td>
        </template>
      </tr>

      <tr class="covidcostings-row">
        <td style="text-align:left">
          <b>{{ $root.strings.budgetary_balance }}</b>
        </td>

        <td
          style="text-align:right;width:10%"
          v-for="number in $root.currentUpdate.meta.budgetary_balance"
          :key="'budgetary_balance' + '_current_' + number"
        >{{ number }}</td>

        <template v-if="$root.compareWithUpdate">
          <td
            class="comparative-cell"
            style="text-align:right;width:10%"
            v-for="number in $root.compareWithUpdate.meta.budgetary_balance"
            :key="'budgetary_balance' + '_past_' + number"
          >{{ number }}</td>
        </template>
      </tr>

      <tr class="covidcostings-row">
        <td style="text-align:left">
          <b>{{ $root.strings.federal_debt }}</b>
        </td>

        <td
          style="text-align:right;width:10%"
          v-for="number in $root.currentUpdate.meta.federal_debt"
          :key="'federal_debt' + '_current_' + number"
        >{{ number }}</td>

        <template v-if="$root.compareWithUpdate">
          <td
            class="comparative-cell"
            style="text-align:right;width:10%"
            v-for="number in $root.compareWithUpdate.meta.federal_debt"
            :key="'federal_debt' + '_past_' + number"
          >{{ number }}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  template: `
 
    `
};
</script>