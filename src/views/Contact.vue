<template>
    <div>

        <NavBar></NavBar>

        <section id="home" class="video-hero" style="height: 800px; background-image: url(images/cover_img_2.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;" data-section="home">
            <div class="overlay"></div>
            <div class="display-t text-center">
                <div class="display-tc">
                    <div class="container">
                        <div class="col-md-10 col-md-offset-1">
                            <div>
                                <h2>Contact Us</h2>
                                <p class="breadcrumbs"><span><a href="index.html">Home</a></span>/<span>Contact</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div id="colorlib-contact">
            <div class="container">
                <div class="row">
                    <div>
                        <h2>Contact Information</h2>
                        <div>
                            <div class="col-md-12">
                                <div class="contact-info-wrap-flex">
                                    <div class="con-info">
                                        <p><span><i class="icon-location-2"></i></span> 198 West 21th Street, <br> Suite 721 New York NY 10016</p>
                                    </div>
                                    <div class="con-info">
                                        <p><span><i class="icon-phone3"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                    </div>
                                    <div class="con-info">
                                        <p><span><i class="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                    </div>
                                    <div class="con-info">
                                        <p><span><i class="icon-globe"></i></span> <a href="#">yourwebsite.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="map" class="colorlib-map">

            <div style="width: 100%"><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/custom-google-maps/">Embed Google Map</a> by <a href="https://www.mapsdirections.info/en/">Measure area on map</a></iframe></div><br />

        </div>

        <Footer></Footer>

    </div>
</template>


<script>

    import Footer from '../components/home/Footer';
    import NavBar from '../components/home/NavBar';

    export default {
        name:'Contact',
        components:{Footer,NavBar}
    }
</script>