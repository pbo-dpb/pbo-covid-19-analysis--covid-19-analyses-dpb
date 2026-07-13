<template>
    <div
        class="font-sm mb-8 flex w-auto flex-col flex-row justify-between lg:flex-row">
        <qs-costings-sorter v-if="!$root.search.query"></qs-costings-sorter>
        <qs-costings-compare-select></qs-costings-compare-select>
    </div>
</template>
<script>
    import QsCostingsCompareSelect from "./QsCostingsCompareSelect.vue";
    import QsCostingsSorter from "./QsCostingsSorter.vue";

    export default {
        components: {
            QsCostingsCompareSelect,
            QsCostingsSorter,
        },
    };
</script>
