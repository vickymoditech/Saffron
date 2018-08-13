<template>
    <vue-tree-navigation :items="items" />
</template>


<script>
    export default {
        name:'SideNavBar',
        data() {
            return {
                items: [
                    { name: 'First category', children: [
                            { name: 'Category item', href: '#/' },
                            { name: 'Category item', href: '#/about' }
                        ]},
                    { name: 'Second category', href: '#take-me-somewhere' }
                ],
            }
        }
    };
</script>