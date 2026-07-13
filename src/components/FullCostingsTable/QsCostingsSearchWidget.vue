<template>
    <div>
        <input
            type="search"
            v-model="$root.search.query"
            :placeholder="$root.strings.fullcostings.search_label"
            class="mb-8 w-full appearance-none rounded-sm border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-hidden" />
    </div>
</template>
<script>
    export default {
        data() {
            return { shouldShowQuery: true };
        },
        methods: {
            displaySearchField() {
                this.shouldShowQuery = true;
                this.$nextTick(() => {
                    this.$el.querySelector("input").focus();
                });
            },
        },
    };
</script>
