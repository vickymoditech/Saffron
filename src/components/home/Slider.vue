<template>
    <div>
        <template v-if="loader">
        <v-carousel hide-controls hideDelimiters>
            <v-carousel-item v-for="item in slider" :key="item.id" :src="apihost+'/'+item.image_url" class="img-responsive">
            </v-carousel-item>
        </v-carousel>
            <h1>here tag </h1>
        </template>
        <template v-else>
            <div id="app">
                <img src="../../assets/loader.gif"/>
            </div>
        </template>
    </div>
</template>


<script>
    import {mapState} from 'vuex'
    import {RotateSquare2} from 'vue-loading-spinner'
    import {apihost} from '../../Api.js'

    export default {
        name: 'Slider',
        components: {RotateSquare2},
        data(){
            return {
                apihost:apihost
            }
        },
        computed:{
            slider:function () {
                var slider = this.$store.state.slider;
                console.log(slider);
                if(slider.length > 0){
                    console.log("user state will be change that time call here");
                }else{
                    console.log("first time");
                }
                return slider;
            },
            loader:function () {
                return this.$store.state.loader;
            }
        }
    }
</script>

<style>
    .v-jumbotron__image {
        display: block;
        margin:  0 auto;
        position: unset;
        top: unset;
        left: unset;
        transform: unset;

    }
    .v-jumbotron__wrapper img{
        width: 100%;
        height: 100%;
    }


</style>
