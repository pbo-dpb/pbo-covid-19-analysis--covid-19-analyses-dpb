<template>
    <aside class="my-8 rounded-lg bg-blue-100 p-2">
        <div
            class="col-span-2 mb-4 border-b border-blue-800 pt-2 pb-4 text-center text-xl leading-none">
            <component
                :is="'div'"
                class="font-bold text-blue-800"
                >{{
                    $root.strings.costingerp.indicators.header_title
                }}</component
            >
            <!--<span class="text-sm font-thin">{{
        $root.strings.costingerp.indicators.header_note
      }}</span>-->
        </div>
        <ul class="divide-y divide-gray-400">
            <li
                v-for="(cost, indicator) in efa.indicators"
                :key="indicator"
                class="grid-3 grid items-center gap-2 py-4 md:grid-cols-8">
                <div
                    class="col-span-3 pb-2 text-center text-lg font-semibold text-blue-900 md:col-span-5">
                    <component :is="'span'">
                        {{
                            $root.strings.efas.indicators[indicator]
                        }}</component
                    >
                </div>
                <div
                    v-for="(number, year) in cost"
                    :key="year + indicator"
                    class="col-span-1 text-center">
                    <span class="text-xl font-bold text-blue-900">{{
                        number.toLocaleString($root.language)
                    }}</span>
                    <div class="text-sm font-thin text-gray-700">
                        {{ year }}
                    </div>
                </div>
            </li>
        </ul>
    </aside>
</template>
<script>
    import Efa from "../../store/models/Efa";
    export default {
        props: {
            efa: {
                type: Efa,
            },
        },
    };
</script>
