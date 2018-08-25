<template>
    <div>

        <NavBar></NavBar>

        <section id="home" class="video-hero"
                 style="height: 800px; background-image: url(images/cover_img_2.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;"
                 data-section="home">
            <div class="overlay"></div>
            <div class="display-t text-center">
                <div class="display-tc">
                    <div class="container">
                        <div class="col-md-10 col-md-offset-1">
                            <div>
                                <h2>About Us</h2>
                                <p class="breadcrumbs"><span><a href="index.html">Home</a></span>/<span>About</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="colorlib-about">
            <div class="container">
                <div class="row row-pb-lg">
                    <div class="col-md-6">
                        <div class="video colorlib-video" style="background-image: url(images/about.jpg);">
                            <a href="https://vimeo.com/channels/staffpicks/93951774" class="popup-vimeo"><i
                                    class="icon-play3"></i></a>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>About Imahe</h2>
                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
                            Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her
                            seven versalia, put her initial into the belt and made herself on the way.</p>
                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the
                            skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
                            her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she
                            continued her way.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center colorlib-heading">
                        <h2>Our Team</h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic life One day however a small line of blind text by the name</p>
                    </div>
                </div>
                <div class="row" v-if="loader" v-for="(t,i) in team">
                    <div class="col-md-3 text-center" v-for="(team,index) in t">
                        <div class="staff-entry">
                            <img
                                    class="img-responsive rcorners3"
                                    :src="apiurl+team.image_url"
                                    :alt="team.name">
                            <div class="desc">
                                <h3>{{team.name}}</h3>
                                <p> {{team.description}}</p>
                                <p>
                                <ul class="colorlib-social-icons">

                                    <li><a href="#"><i class="icon-facebook"></i></a></li> &nbsp;
                                    <li><a href="#"><i class="icon-instagram"></i></a></li>

                                </ul>
                                </p>
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
        name: 'About.vue',
        components: {Footer, NavBar, RotateSquare2},
        data() {
            return {}
        },
        computed: {
            team: function () {
                let team = this.$store.state.team;
                if (team.length > 0) {
                    console.log("user state will be change that time call here (Service)");
                } else {
                    console.log("first time (Service)");
                }
                console.log(team);
                return team;
            },
            loader: function () {
                return this.$store.state.teamLoader;
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

    .rcorners3 {

        background: #0a1014;
        padding: 10px;

    }


</style>