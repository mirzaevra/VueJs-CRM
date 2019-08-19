<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
        <router-link
                tag="li"
                v-for="(item, index) in sidebarList"
                :key="index"
                active-class="active"
                exact
                :to="item.path"
        >
            <a
                    class="waves-effect waves-orange pointer">
                {{item.name}}
            </a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: "Sidebar",
        props: ['value'],
        data() {
            return {
                sidebarList: [
                    {
                        name: 'Счет',
                        path: '/'
                    },
                    {
                        name: 'История',
                        path: '/history'
                    },
                    {
                        name: 'Планирование',
                        path: '/planing'
                    },
                    {
                        name: 'Новая запись',
                        path: '/record'
                    },
                    {
                        name: 'Категории',
                        path: '/categories'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
