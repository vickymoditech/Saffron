<template>
  <div>
    <!--<div id="nav" class="navbar navbar-default">-->
        <!--<router-link to="/">Home</router-link>-->
        <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->

      <nav class="colorlib-nav" role="navigation">
          <div class="top-menu">
              <div class="container">
                  <div class="row">
                      <div class="col-md-2 col-md-push-5 text-center">
                          <div id="colorlib-logo"><a href="index.html"><i class="icon-camera4"></i>Imahe</a></div>
                      </div>
                      <div class="col-md-5 col-md-pull-2 text-right menu-1">
                          <ul>
                              <li class="active"><a href="index.html">Home</a></li>
                              <li class="has-dropdown">
                                  <a href="gallery.html">Gallery</a>
                                  <ul class="dropdown">
                                      <li><a href="#">Gallery 1</a></li>
                                      <li><a href="#">Gallery 2</a></li>
                                      <li><a href="#">Gallery 3</a></li>
                                      <li><a href="#">Gallery 4</a></li>
                                  </ul>
                              </li>
                              <li><a href="services.html">Services</a></li>
                          </ul>
                      </div>
                      <div class="col-md-5 text-left menu-1">
                          <ul>
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="about.html">About</a></li>
                              <li><a href="contact.html">Contact</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
      <section id="home" class="video-hero" style="height: 800px; background-image: url(images/cover_img_1.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;" data-section="home">
          <div class="overlay"></div>
          <a class="player" data-property="{videoURL:'https://www.youtube.com/watch?v=Yz5-mrDBbxU',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a>
          <div class="display-t text-center">
              <div class="display-tc">
                  <div class="container">
                      <div class="col-md-10 col-md-offset-1">
                          <div class="animate-box">
                              <h1 class="holder"><span>Fashion Photoshoot</span></h1>
                              <h2>Saffron</h2>
                              <p>29.07.2018</p>
                              <p><a href="gallery.html" class="btn btn-primary btn-custom">Now Available Online Booking</a></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- our service -->
      <div id="colorlib-services">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 text-center animate-box">
                      <div class="services">
							<span class="icon">
								<i class="icon-camera4"></i>
							</span>
                          <div class="desc">
                              <h3>Photography</h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 text-center animate-box">
                      <div class="services">
							<span class="icon">
								<i class="icon-image2"></i>
							</span>
                          <div class="desc">
                              <h3>Image Processing</h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 text-center animate-box">
                      <div class="services">
							<span class="icon">
								<i class="icon-video3"></i>
							</span>
                          <div class="desc">
                              <h3>Videography</h3>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      <div class="colorlib-about-flex">
          <div class="col-half about-flex-img animate-box" style="background-image: url(images/about.jpg);"></div>
          <div class="col-half">
              <div class="row">
                  <div class="col-md-12 col-md-pull-2 animate-box">
                      <div class="about-desc">
                          <h2>We Are Imahe a Photography Studio</h2>
                          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                          <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>




      <div class="colorlib-gallery">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                      <h2>Gallery</h2>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-3 no-gutters">
                      <a href="images/gallery-1.jpg" class="gallery-img image-popup-link animate-box"><img class="img-responsive" src="images/gallery-1.jpg" alt="">
                          <div class="desc text-center">
                              <h2>Fashion be like</h2>
                              <p class="category"><span>Fashion</span></p>
                          </div>
                      </a>
                      <a href="images/gallery-2.jpg" class="gallery-img image-popup-link animate-box"><img class="img-responsive" src="images/gallery-2.jpg" alt="">
                          <div class="desc text-center">
                              <h2>Fashion be like</h2>
                              <p class="category"><span>Jacket</span> <span>Woman</span></p>
                          </div>
                      </a>
                  </div>
                  <div class="col-md-3 no-gutters">
                      <a href="images/gallery-3.jpg" class="gallery-img image-popup-link animate-box"><img class="img-responsive" src="images/gallery-3.jpg" alt="">
                          <div class="desc text-center">
                              <h2>Fashion be like</h2>
                              <p class="category"><span>Jacket</span> <span>Male</span></p>
                          </div>
                      </a>
                      <a href="images/gallery-4.jpg" class="gallery-img image-popup-link animate-box"><img class="img-responsive" src="images/gallery-4.jpg" alt="">
                          <div class="desc text-center">
                              <h2>Fashion be like</h2>
                              <p class="category"><span>Fashion</span></p>
                          </div>
                      </a>
                  </div>
                  <div class="col-md-3 no-gutters">
                      <a href="images/gallery-5.jpg" class="gallery-img image-popup-link animate-box"><img class="img-responsive" src="images/gallery-5.jpg" alt="">
                          <div class="desc text-center">
                              <h2>Fashion be like</h2>
                              <p class="category"><span>Fashion</span></p>
                          </div>
                      </a>
                      <a href="images/gallery-6.jpg" class="gallery-img image-popup-link animate-box"><img class="img-responsive" src="images/gallery-6.jpg" alt="">
                          <div class="desc text-center">
                              <h2>Fashion be like</h2>
                              <p class="category"><span>Fashion</span></p>
                          </div>
                      </a>
                  </div>
                  <div class="col-md-3 no-gutters">
                      <a href="images/gallery-7.jpg" class="gallery-img image-popup-link animate-box"><img class="img-responsive" src="images/gallery-7.jpg" alt="">
                          <div class="desc text-center">
                              <h2>Fashion be like</h2>
                              <p class="category"><span>Fashion</span></p>
                          </div>
                      </a>
                      <a href="images/gallery-8.jpg" class="gallery-img image-popup-link animate-box"><img class="img-responsive" src="images/gallery-8.jpg" alt="">
                          <div class="desc text-center">
                              <h2>Fashion be like</h2>
                              <p class="category"><span>Fashion</span></p>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>


      <div class="colorlib-blog">
          <div class="container">
              <div class="row">
                  <div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                      <h2>Recent Blog</h2>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-4 animate-box">
                      <article class="article-entry">
                          <a href="blog.html" class="blog-img" style="background-image: url(images/blog-1.jpg);"></a>
                          <div class="desc">
                              <h2><a href="blog.html">Photoshoot Technique</a></h2>
                              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                          </div>
                          <div class="admin">
                              <p><span><i class="icon-user2"></i> by: Mark Harris</span> <span class="day"><i class="icon-calendar"></i> 30 March 2018</span> <span><a href="#"><i class="icon-bubble3"></i> 10</a></span></p>
                          </div>
                      </article>
                  </div>
                  <div class="col-md-4 animate-box">
                      <article class="article-entry">
                          <a href="blog.html" class="blog-img" style="background-image: url(images/blog-2.jpg);"></a>
                          <div class="desc">
                              <h2><a href="blog.html">Some tricks in Photoshop for your photo</a></h2>
                              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                          </div>
                          <div class="admin">
                              <p><span><i class="icon-user2"></i> by: Mark Harris</span> <span class="day"><i class="icon-calendar"></i> 30 March 2018</span> <span><a href="#"><i class="icon-bubble3"></i> 10</a></span></p>
                          </div>
                      </article>
                  </div>
                  <div class="col-md-4 animate-box">
                      <article class="article-entry">
                          <a href="blog.html" class="blog-img" style="background-image: url(images/blog-3.jpg);"></a>
                          <div class="desc">
                              <h2><a href="blog.html">50 Effects in Photoshop</a></h2>
                              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                          </div>
                          <div class="admin">
                              <p><span><i class="icon-user2"></i> by: Mark Harris</span> <span class="day"><i class="icon-calendar"></i> 30 March 2018</span> <span><a href="#"><i class="icon-bubble3"></i> 10</a></span></p>
                          </div>
                      </article>
                  </div>
              </div>
          </div>
      </div>



      <footer id="colorlib-footer">
          <div class="container">
              <div class="row row-pb-md">
                  <div class="col-md-3 colorlib-widget">
                      <h4>About Imahe</h4>
                      <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                      <p>
                      <ul class="colorlib-social-icons">
                          <li><a href="#"><i class="icon-twitter"></i></a></li>
                          <li><a href="#"><i class="icon-facebook"></i></a></li>
                          <li><a href="#"><i class="icon-linkedin"></i></a></li>
                          <li><a href="#"><i class="icon-dribbble"></i></a></li>
                      </ul>
                      </p>
                  </div>
                  <div class="col-md-3 colorlib-widget">
                      <h4>Information</h4>
                      <p>
                      <ul class="colorlib-footer-links">
                          <li><a href="#"><i class="icon-check"></i> Home</a></li>
                          <li><a href="#"><i class="icon-check"></i> Gallery</a></li>
                          <li><a href="#"><i class="icon-check"></i> About</a></li>
                          <li><a href="#"><i class="icon-check"></i> Blog</a></li>
                          <li><a href="#"><i class="icon-check"></i> Contact</a></li>
                          <li><a href="#"><i class="icon-check"></i> Privacy</a></li>
                      </ul>
                      </p>
                  </div>

                  <div class="col-md-3 colorlib-widget">
                      <h4>Recent Blog</h4>
                      <div class="f-blog">
                          <a href="blog.html" class="blog-img" style="background-image: url(images/blog-1.jpg);">
                          </a>
                          <div class="desc">
                              <h2><a href="blog.html">Photoshoot Technique</a></h2>
                              <p class="admin"><span>30 March 2018</span></p>
                          </div>
                      </div>
                      <div class="f-blog">
                          <a href="blog.html" class="blog-img" style="background-image: url(images/blog-2.jpg);">
                          </a>
                          <div class="desc">
                              <h2><a href="blog.html">Camera Lens Shoot</a></h2>
                              <p class="admin"><span>30 March 2018</span></p>
                          </div>
                      </div>
                      <div class="f-blog">
                          <a href="blog.html" class="blog-img" style="background-image: url(images/blog-3.jpg);">
                          </a>
                          <div class="desc">
                              <h2><a href="blog.html">Imahe the biggest photography studio</a></h2>
                              <p class="admin"><span>30 March 2018</span></p>
                          </div>
                      </div>
                  </div>

                  <div class="col-md-3 colorlib-widget">
                      <h4>Contact Info</h4>
                      <ul class="colorlib-footer-links">
                          <li>291 South 21th Street, <br> Suite 721 New York NY 10016</li>
                          <li><a href="tel://1234567920"><i class="icon-phone"></i> + 1235 2355 98</a></li>
                          <li><a href="mailto:info@yoursite.com"><i class="icon-envelope"></i> info@yoursite.com</a></li>
                          <li><a href="#"><i class="icon-location4"></i> yourwebsite.com</a></li>
                      </ul>
                  </div>
              </div>
          </div>

      </footer>


  </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {

        methods:{
            ...mapActions({initaction:'initaction'})
        },
        created(){

            this.initaction();

        }
    }

</script>


<style>

/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/

</style>
