<template>
  <div>


      <router-view/>


  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Home from '@/views/Home.vue';


    export default {

        components:{Home},
        methods:{
            ...mapActions({initaction:'initaction'})
        },
        created(){

            this.initaction();

        }
    }

</script>


<style>



</style>
