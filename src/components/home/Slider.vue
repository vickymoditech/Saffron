<template>
    <!--<div>
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
    </div> -->

    <section id="home" class="video-hero" style="height: 800px; background-image: url(images/cover_img_1.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;" data-section="home">
        <div class="overlay"></div>
        <a class="player" data-property="{videoURL:'https://www.youtube.com/watch?v=Yz5-mrDBbxU&origin=http://localhost:9000',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a>
        <div class="display-t text-center">
            <div class="display-tc">
                <div class="container">
                    <div class="col-md-10 col-md-offset-1">
                        <div>
                            <h1 class="holder"><span>Fashion Photoshoot</span></h1>
                            <h2>Saffron</h2>
                            <p>29.07.2018</p>
                            <p><a href="gallery.html" class="btn btn-primary btn-custom">Online Booking</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
    /*
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
    }*/
</style>
