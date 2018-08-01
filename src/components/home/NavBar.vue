<template>
    <nav class="colorlib-nav" role="navigation">
        <div class="top-menu">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-md-push-5 text-center">
                        <div id="colorlib-logo"><a href="index.html"><i class="icon-camera4"></i>Saffron</a></div>
                    </div>
                    <div id="nav" class="col-md-5 col-md-pull-2 text-right menu-1">
                        <ul>
                            <router-link to="/">HOME</router-link> |
                            <router-link to="/gallery">GALLERY</router-link> |
                            <router-link to="/service">SERVICES</router-link>
                        </ul>
                    </div>
                    <div id="nav" class="col-md-5 text-left menu-1">
                        <ul>
                            <router-link to="/about">ABOUT</router-link> |
                            <router-link to="/contact">CONTACT</router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


<script>
    export default {
        name:'NavBar'
    }
</script>

<style>




    #nav {
    padding: 30px;
    }

    #nav a {
    font-weight: bold;
    color: white;
    }

    #nav a.router-link-exact-active {
    color: #42b983;
    }

</style>
