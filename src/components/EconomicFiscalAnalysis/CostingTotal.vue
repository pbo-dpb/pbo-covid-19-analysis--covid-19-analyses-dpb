<template>
    <!-- TODO Remove mockup -->
    <div
        class="border-t-2 border-blue-800"
        v-if="costedYearsCount">
        <li
            class="grid items-center gap-2 py-2 md:grid-cols-8 md:py-1"
            :class="['grid-cols-' + costedYearsCount]">
            <div
                class="text-center md:text-left"
                :class="[
                    'col-span-' + costedYearsCount,
                    'md:col-span-' + (8 - costedYearsCount),
                ]">
                <component
                    :is="'span'"
                    class="font-bold"
                    >{{ $root.strings.efas.total.title }}</component
                >
            </div>
            <div
                v-for="year in years"
                :key="year.year + '_othermeasures'"
                class="col-span-1 text-center font-bold">
                <div class="text-sm font-thin text-gray-700 md:hidden">
                    {{ year.year }}
                </div>

                <costings-number :value="year.cost" />
            </div>
        </li>
    </div>
    <!-- End of todo -->
</template>
<script>
    import { mapState } from "pinia";
    import piniaStore from "../../store/pinia-store";
    import Efa from "../../store/models/Efa";
    export default {
        props: {
            //totals: Object,
            efa: Efa,
        },
        computed: {
            ...mapState(piniaStore, ["costedYearsCount"]),
            years() {
                return this.efa.total.cost.localizedCost(this.$root.language);
            },
        },
    };
</script>
