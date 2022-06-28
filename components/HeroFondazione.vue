<template>
     <section class="section section--hero">
        <div class="image-header col-12 d-flex items-center">
          <NuxtLink to="/fondazionenegri"><img class="fluid" src="../img/fondazionenegri_hero.jpg" alt=""></NuxtLink>
        </div>

        <div class="col-lg-12 description">
          <h3 class="featured-title">FONDAZIONE NEGRI</h3>
          <h4 class="featured-subtitle">UI/UX Web Design</h4>
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
  background-color: var(--primary-color);
  padding: 5%;
  height:auto;
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
    color: var(--lighy-color);
}

h4 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 400;
    color: var(--lighy-color);
}

.fluid {
  width:100%;
  height:auto;
  }

.featured-title, .featured-subtitle {
  opacity: 1;
  
}

@media (max-width:860px) {
  .section--hero {
    height:40vh;
  }

  .description {
    margin-top: 3rem;
    margin-left: 0.5rem;
}
  }
</style>

<!--
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
-->