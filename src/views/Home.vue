<template>
  <div class="home">
        <Slider></Slider>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/home/Slider.vue'

export default {
  name: 'home',
    components:{
      Slider
    },
}
</script>

