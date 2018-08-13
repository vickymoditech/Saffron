<template>
  <div>

      <NavBar></NavBar>
      <Slider></Slider>
      <Service></Service>
      <Gallary></Gallary>
      <Team></Team>
      <Footer></Footer>

  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '../components/home/Slider';
import NavBar from '../components/home/NavBar';
import Service from '../components/home/Service';
import Gallary from '../components/home/Gallary';
import Team from '../components/home/Team';
import Footer from '../components/home/Footer';

export default {
  name: 'Home',
    components:{
      Slider,NavBar,Service,Gallary,Team,Footer
    },
}
</script>

