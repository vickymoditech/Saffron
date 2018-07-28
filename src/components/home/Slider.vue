<template>
    <div>
        <template v-if="loader">
        <v-carousel hide-controls>
            <v-carousel-item v-for="item in slider" :key="item.id" :src="apihost+'/'+item.image_url">
            </v-carousel-item>
        </v-carousel>
        </template>
        <template v-else>
            <div id="app">
                <img src="loader.gif"/>
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

