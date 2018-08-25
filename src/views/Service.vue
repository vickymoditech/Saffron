<template>
    <div>

        <NavBar></NavBar>

        <section id="home" class="video-hero" style="height: 800px; background-image: url(images/cover_img_2.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;" data-section="home">
            <div class="overlay"></div>
            <div class="display-t text-center">
                <div class="display-tc">
                    <div class="container">
                        <div class="col-md-10 col-md-offset-1">
                            <div >
                                <h2>Services</h2>
                                <p class="breadcrumbs"><span><a href="index.html">Home</a></span>/<span>Services</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="colorlib-services">
            <div class="container">
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

        <Footer></Footer>

    </div>
</template>

<script>

    import Footer from '../components/home/Footer';
    import NavBar from '../components/home/NavBar';
    import {mapState} from 'vuex';
    import {RotateSquare2} from 'vue-loading-spinner'
    import {apihost} from '../Api';

export default {
    name:'Service',
    components:{Footer,NavBar,RotateSquare2},
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