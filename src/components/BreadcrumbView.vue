<template>
    <nav
        aria-label="breadcrumb"
        class="mb-2 border-b border-gray-100 pb-2 text-sm">
        <ol class="flex flex-col leading-none text-blue-800 md:flex-row">
            <li class="pr-1">
                <router-link
                    :to="{
                        name: 'AnalysisHome',
                        params: { language: this.$route.params.language },
                    }"
                    class="underline"
                    ><i
                        class="fas fa-home"
                        :title="$root.strings.title"></i
                ></router-link>
            </li>

            <li
                v-for="(link, index) in links"
                :key="link.label">
                <span
                    aria-hidden="true"
                    role="separator"
                    class="invisible px-1 md:visible"
                    >/</span
                >
                <router-link
                    class="underline md:px-1"
                    v-if="index != Object.keys(links).length - 1"
                    :to="link.destination"
                    >{{ link.title }}</router-link
                >
                <span
                    v-else
                    class="text-gray-800 md:px-1"
                    aria-current="page"
                    >{{ link.title }}</span
                >
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
