<template>
  <div>

      <NavBar></NavBar>
      <router-view/>
      <Footer></Footer>

  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Home from '@/views/Home.vue';
    import NavBar from './components/home/NavBar';
    import Footer from './components/home/Footer';

    export default {

        components:{Home,NavBar,Footer},
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
