<template>
    <div class="colorlib-blog">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 text-center colorlib-heading ">
                    <h2>Saffron Service</h2>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name</p>
                </div>
            </div>

            <div class="row" v-if="loader" v-for="(s,index) in service">
                <div class="col-md-4" v-for="(service,indexService) in s" :key="service.id">
                    <article class="article-entry">
                        <a href="blog.html">
                            <div class="blog-img">
                                <img
                                        class="img-responsive"
                                        :src="apiurl+service.image_url"
                                        alt="">
                            </div>
                        </a>
                        <div class="desc">
                            <a href="blog.html"><h2>{{service.title}}</h2></a>
                            <p>{{service.discription}}</p>
                        </div>
                    </article>
                </div>
            </div>

            <div class="center" v-else>
                <center>
                    <rotate-square2></rotate-square2>
                </center>
            </div>
        </div>
    </div>
</template>


<script>

    import {mapState} from 'vuex'
    import {RotateSquare2} from 'vue-loading-spinner'
    import {apihost} from '../../Api';
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: 'Service',
        components: {
            Carousel, Slide, RotateSquare2
        },
        data() {
            return {}
        },
        computed: {
            service: function () {

                let service = this.$store.state.service;
                if (service.length > 0) {
                    console.log("user state will be change that time call here (Service)");
                } else {
                    console.log("first time (Service)");
                }
                console.log(service);
                return service;
            },
            loader: function () {
                return this.$store.state.serviceLoader;
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