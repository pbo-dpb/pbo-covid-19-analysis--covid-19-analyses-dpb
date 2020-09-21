<template>
  <!-- TODO Remove mockup -->
  <aside class="bg-blue-100 p-2 md:-mx-2 mt-8 rounded-lg">
    <div
      class="col-span-2 md:col-span-6 text-center text-lg pb-2 mb-2 border-b border-blue-800 leading-none"
    >
      <component :is="'div'" class="font-bold text-blue-800">Economic and Fiscal Indicators</component>
      <span class="text-sm font-thin">{{ $root.strings.fullcostings.meta_header_note }}</span>
    </div>

    <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center">
      <div class="col-span-2 md:col-span-6 text-center md:text-left">
        <component :is="'span'">Total COVID Measures included in the EFO</component>
      </div>
      <div
        v-for="year in ['2019-2020', '2020-2021']"
        :key="year + 'othermeasures'"
        class="col-span-1 text-center"
      >
        <div class="md:hidden font-thin text-sm text-gray-700">{{ year }}</div>
        <costings-number :value="123" />
      </div>
    </li>
    <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center">
      <div class="col-span-2 md:col-span-6 text-center md:text-left">
        <component :is="'span'">Real GDP growth (%)</component>
      </div>
      <div
        v-for="year in ['2019-2020', '2020-2021']"
        :key="year + 'othermeasures'"
        class="col-span-1 text-center"
      >
        <div class="md:hidden font-thin text-sm text-gray-700">{{ year }}</div>
        <costings-number :value="123" />
      </div>
    </li>
    <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center">
      <div class="col-span-2 md:col-span-6 text-center md:text-left">
        <component :is="'span'">WTI (US$/barrel)</component>
      </div>
      <div
        v-for="year in ['2019-2020', '2020-2021']"
        :key="year + 'othermeasures'"
        class="col-span-1 text-center"
      >
        <div class="md:hidden font-thin text-sm text-gray-700">{{ year }}</div>
        <costings-number :value="123" />
      </div>
    </li>
    <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center">
      <div class="col-span-2 md:col-span-6 text-center md:text-left">
        <component :is="'span'">Budgetary Balance ($ billions)</component>
      </div>
      <div
        v-for="year in ['2019-2020', '2020-2021']"
        :key="year + 'othermeasures'"
        class="col-span-1 text-center"
      >
        <div class="md:hidden font-thin text-sm text-gray-700">{{ year }}</div>
        <costings-number :value="123" />
      </div>
    </li>
    <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center">
      <div class="col-span-2 md:col-span-6 text-center md:text-left">
        <component :is="'span'">Federal Debt (% of GDP)</component>
      </div>
      <div
        v-for="year in ['2019-2020', '2020-2021']"
        :key="year + 'othermeasures'"
        class="col-span-1 text-center"
      >
        <div class="md:hidden font-thin text-sm text-gray-700">{{ year }}</div>
        <costings-number :value="123" />
      </div>
    </li>
  </aside>
  <!-- End of todo -->
</template>