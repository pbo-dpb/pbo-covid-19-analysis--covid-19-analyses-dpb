<template>
  <div class="w-full text-sm text-right py-2">
    <template v-if="this.$route.params.language === 'en'">English</template>
    <router-link
      v-else
      class="text-blue-800 hover:underline"
      :to="{params:{'language': 'en'}}"
    >English</router-link>

    <span role="separator" class="mx-2 text-gray-600">|</span>

    <template v-if="this.$route.params.language === 'fr'">Français</template>
    <router-link
      v-else
      class="text-blue-800 hover:underline"
      :to="{params:{'language': 'fr'}}"
    >Français</router-link>
  </div>
</template>
<script>
export default {};
</script>