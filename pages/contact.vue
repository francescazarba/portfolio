<template>
  <div>
      <Header/>
      <Contact/>
  </div>
</template>

<style scoped>
body {
  background-color: var(--light-color);
  background-image: url('../img/bg-rose.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<script>
import { gsap } from "gsap"; 
import { ScrollTrigger } from '../js/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ContactPage',
    mounted: function(){
      gsap.from('header', {opacity:0, y:-60, duration:1.2,});
      gsap.from('.email', {opacity:0, y:-10, scale:0.97, duration:1.4,});
      gsap.from('.icon', {opacity:0, y:100, duration:1.4,});
    }
}

</script>