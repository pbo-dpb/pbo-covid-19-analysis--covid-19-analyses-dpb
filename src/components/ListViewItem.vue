<template>
    <li
        class="w-full py-2"
        :class="{
            'bg-gray-100': item.route,
            'hover:bg-blue-100': item.route,
            'px-2': item.route,
            'md:px-4': item.route,
            'mb-2': item.route,
            rounded: item.route,
        }">
        <component
            :is="item.url ? 'a' : 'div'"
            class="flex cursor-pointer flex-row items-center justify-between"
            :href="item.url"
            aria-role="link"
            @click="handleClick">
            <div class="flex w-auto flex-row items-center">
                <div
                    v-if="item.image"
                    class="mr-2 w-12">
                    <img
                        class="shadow-sm"
                        :src="item.image" />
                </div>
                <div>
                    <template v-if="date">
                        <span
                            class="text-sm text-gray-600"
                            v-if="date"
                            >{{ date }}</span
                        >
                        <br />
                    </template>
                    <span
                        :class="{
                            underline: item.url,
                            'text-blue-800': item.url,
                        }"
                        >{{ item.title }}</span
                    >
                </div>
            </div>
            <div
                v-if="item.icon"
                class="pl-2 text-2xl font-bold text-blue-800 md:pl-4">
                <list-view-item-icon :type="item.icon"></list-view-item-icon>
            </div>
        </component>
    </li>
</template>
<script>
    import ListViewItemIcon from "./ListViewItemIcon.vue";
    export default {
        props: {
            item: {
                type: Object,
                required: true,
            },
        },
        components: {
            ListViewItemIcon,
        },
        computed: {
            date() {
                if (!this.item.date) return;
                return this.item.date.toLocaleDateString(
                    this.$root.language + "-CA",
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    },
                );
            },
        },
        methods: {
            handleClick() {
                if (this.item.url) return;

                if (this.item.route) {
                    this.$router.push(this.item.route);
                }
            },
        },
    };
</script>
