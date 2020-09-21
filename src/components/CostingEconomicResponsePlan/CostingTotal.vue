<template>
  <!-- TODO Remove mockup -->
  <li class="grid grid-2 md:grid-cols-8 gap-2 py-2 md:py-1 items-center border-t-2 border-blue-800">
    <div class="col-span-2 md:col-span-6 text-center md:text-left">
      <component :is="'span'" class="font-bold">Total COVID-19 measures</component>
    </div>
    <div
      v-for="year in ['2019-2020', '2020-2021']"
      :key="year + 'othermeasures'"
      class="col-span-1 text-center font-bold"
    >
      <div class="md:hidden font-thin text-sm text-gray-700">{{ year }}</div>
      <costings-number :value="999" />
    </div>
  </li>
  <!-- End of todo -->
</template>