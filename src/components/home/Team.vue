<template>

    <div id="colorlib-about">
        <div class="container">
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

</template>


<script>

    import {mapState} from 'vuex';
    import {RotateSquare2} from 'vue-loading-spinner'
    import {apihost} from '../../Api';

    export default {
        name: 'Team',
        data() {
            return {}
        },
        components:{RotateSquare2},
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
