<template>
    <div class="colorlib-gallery">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center colorlib-heading">
                    <h2>Gallery</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name</p>
                </div>
            </div>
            <div class="row" v-if="loader" v-viewer>
                <div class="col-md-3 no-gutters">

                    <div class="gallery-img image-popup-link ">
                        <img
                            class="img-responsive"
                            :src="apiurl+gallery[0].image_url"
                            alt="">

                        <div class="desc text-center">
                            <h2>{{gallery[0].title}}</h2>
                            <p class="category"><span>{{gallery[0].description}}</span></p>
                        </div>

                    </div>


                    <div class="gallery-img image-popup-link ">
                        <img
                            class="img-responsive"
                            :src="apiurl+gallery[1].image_url"
                            alt="">
                        <div class="desc text-center">
                            <h2>{{gallery[1].title}}</h2>
                            <p class="category"><span>{{gallery[1].description}}</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 no-gutters">
                    <div class="gallery-img image-popup-link ">
                        <img
                            class="img-responsive"
                            :src="apiurl+gallery[2].image_url"
                            alt="">
                        <div class="desc text-center">
                            <h2>{{gallery[2].title}}</h2>
                            <p class="category"><span>{{gallery[2].description}}</span></p>
                        </div>
                    </div>
                    <div class="gallery-img image-popup-link ">
                        <img
                            class="img-responsive"
                            :src="apiurl+gallery[3].image_url"
                            alt="">
                        <div class="desc text-center">
                            <h2>{{gallery[3].title}}</h2>
                            <p class="category"><span>{{gallery[3].description}}</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 no-gutters">
                    <div class="gallery-img image-popup-link ">
                        <img
                            class="img-responsive"
                            :src="apiurl+gallery[4].image_url"
                            alt="">
                        <div class="desc text-center">
                            <h2>{{gallery[4].title}}</h2>
                            <p class="category"><span>{{gallery[4].description}}</span></p>
                        </div>
                    </div>
                    <div class="gallery-img image-popup-link ">
                        <img
                                class="img-responsive"
                                :src="apiurl+gallery[5].image_url"
                                alt="">
                        <div class="desc text-center">
                            <h2>{{gallery[5].title}}</h2>
                            <p class="category"><span>{{gallery[5].description}}</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 no-gutters">

                    <div class="gallery-img image-popup-link ">
                        <img
                                class="img-responsive"
                                :src="apiurl+gallery[6].image_url"
                                alt="">
                        <div class="desc text-center">
                            <h2>{{gallery[6].title}}</h2>
                            <p class="category"><span>{{gallery[6].description}}</span></p>
                        </div>

                    </div>


                    <div class="gallery-img image-popup-link ">
                        <img
                                class="img-responsive"
                                :src="apiurl+gallery[7].image_url"
                                alt="">
                        <div class="desc text-center">
                            <h2>{{gallery[7].title}}</h2>
                            <p class="category"><span>{{gallery[7].description}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center" v-else>
                <center>
                    <rotate-square2></rotate-square2>
                </center>
            </div>
        </div>
        <viewer :images="images">
            <img v-for="src in images" :src="src" :key="src">
        </viewer>
    </div>
</template>


<script>

    import {mapState} from 'vuex'
    import {RotateSquare2} from 'vue-loading-spinner'
    import {apihost} from '../../Api';

    export default {
        name: 'Gallary',
        components: {RotateSquare2},
        data() {
            return {
                images: []
            }
        },
        computed: {
            gallery: function () {
                var gallery = this.$store.state.gallery;
                if (gallery.length > 0) {
                    console.log("user state will be change that time call here");
                } else {
                    console.log("first time");
                }
                return gallery;
            },
            loader: function () {
                return this.$store.state.loader;
            },
            apiurl: function () {
                return apihost;
            }
        }
    }
</script>

<style scoped>
    .center {
        margin: auto;
        width: 50%;
    }
</style>