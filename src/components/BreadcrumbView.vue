<template>
  <nav
    aria-label="breadcrumb"
    class="text-sm pb-2 mb-2 border-b border-gray-100"
  >
    <ol class="flex flex-col md:flex-row leading-none text-blue-800">
      <li class="pr-1">
        <router-link
          :to="{
            name: 'AnalysisHome',
            params: { language: this.$route.params.language },
          }"
          class="underline"
          ><i class="fas fa-home" :title="$root.strings.title"></i
        ></router-link>
      </li>

      <li v-for="(link, index) in links" :key="link.label">
        <span
          aria-hidden="true"
          role="separator"
          class="invisible md:visible px-1"
          >/</span
        >
        <router-link
          class="underline md:px-1"
          v-if="index != Object.keys(links).length - 1"
          :to="link.destination"
          >{{ link.title }}</router-link
        >
        <span v-else class="md:px-1 text-gray-800" aria-current="page">{{
          link.title
        }}</span>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  props: {
    links: {
      type: [Array],
      required: true,
    },
  },
};
</script>