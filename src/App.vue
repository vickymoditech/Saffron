<template>
    <div>


        <router-view/>


    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Home from '@/views/Home.vue';

    export default {

        components: {Home},
        methods: {
            ...mapActions({
                initaction: 'initaction',
                initServiceAction: 'initServiceAction',
                initTeamAction: 'initTeamAction'
            })
        },
        created() {

            this.initaction();
            this.initServiceAction();
            this.initTeamAction();

        }
    }

</script>


<style>


</style>
