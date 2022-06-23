<template>
  <div>
      <Header/>
      <About/>
      <Footer/>
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
  name: 'AboutPage',
    mounted: function(){
      gsap.from('header', {opacity:0, y:-100, duration:1.2,});
      gsap.from('.citazione', {opacity:0, x:-200, duration:2,});
      gsap.from('.sub-citazione', {opacity:0, x:-150, dalay:3, duration:1.8,});

      gsap.from('.title-skills', {
        y:50,
        opacity:0,
        rotate:-10,
        duration:1,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".section--skills",
        }
      });

       gsap.from('.subtitle-skills', {
        y:80,
        opacity:0,
        duration:1.6,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".section--skills",
        }
      })

    }
}

</script>