<template>
     <section class="section section--hero">
        <div class="image-header col-12 d-flex items-center">
          <NuxtLink to="/sorryPie"><img class="fluid" src="../img/header.jpg" alt=""></NuxtLink>
        </div>

        <div class="col-lg-12 description">
          <h3 class="featured-title">SORRYPIE</h3>
          <h4 class="featured-subtitle">App prototype</h4>
        </div>
    </section>
</template>


<style scoped>
.image-header {
  width:100%;
  height:100%;
  overflow:hidden;
}

.image-header img {
  transition: transform 0.75s ease-out;
  will-change: auto;
}

.image-header:hover img {
  transform: scale(1.1);
}

.section--hero {
  padding-left: 5%;
  padding-right: 5%;
  height:100vh;
  opacity:1;
  }

.description {
    margin-top: 2rem;
    margin-left: 2rem;
}

h3 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 600;
    line-height: 1.2;
}

h4 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 400;
}

.fluid {
  width:100%;
  height:auto;
  }

</style>

<script>
import { gsap } from "gsap"; 
import { ScrollTrigger } from '../js/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Hero',
    mounted: function(){
      gsap.from('.section--hero', {opacity:0, y:-20, duration:1.2,});

      gsap.from('.featured-title', {
        x:-400,
        opacity:0,
        duration:1.6,
        startAt: {x:0,y:0},
        scrollTrigger: {
        trigger: ".description",
        }
      });

       gsap.from('.featured-subtitle', {
        x:-400,
        opacity:0,
        duration:1.6,
        startAt: {x:0,y:0},
        scrollTrigger: {
        trigger: ".description",
        }
      });

      gsap.from('.section--titles', {
        y:80,
        opacity:0,
        duration:1.6,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".section-two",
        }
      });

    }
}
</script>