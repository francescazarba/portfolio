<template>
    <section class="section section-project pb-5"> <!--inizio sezione progetti x2-->
    <div class="col-12 d-flex flex-wrap">

      <div class="col-12 col-lg-7 d-flex flex-wrap mb-5">
        <div class="col-12 image-project">
          <a><img class="fluid" src="../img/kfd-cover.jpg" alt=""></a>
        </div>
        <div class="col-12 description">
          <h3 class="featured-title">KATIE FOURNIER DESIGN</h3>
          <h4 class="featured-subtitle">Web Develop</h4>
        </div>
      </div>

      <div class="col-12 col-lg-5 mb-5">
        <div class="col-12 image-small">
          <a><img class="fluid" src="../img/cohabit-cover.jpg" alt=""></a>
          </div>
          <div class="col-12 description">
            <h3 class="featured-title">COHABIT</h3>
            <h4 class="featured-subtitle">App Design</h4>
          </div>
        </div>

      <div class="col-12 col-lg-5 lg-mt-5 mb-5">
        <div class="col-12 image-small" data-aos="fade-right">
          <a><img class="fluid" src="../img/trackit-cover.jpg" alt=""></a>
          </div>
          <div class="col-12 description">
            <h3 class="featured-title">TRACKIT</h3>
            <h4 class="featured-subtitle">App Design</h4>
          </div>
        </div>

          <div class="col-12 col-lg-7 d-flex flex-wrap lg-mt-5 mb-5">
        <div class="col-12 image-project">
          <NuxtLink to="/fondazionenegri" class="indicators-link">
          <img class="fluid" src="../img/fondazionenegri-cover.jpg" alt="">
          </NuxtLink>
        </div>
        <div class="col-12 description">
          <h3 class="featured-title">FONDAZIONE NEGRI</h3>
          <h4 class="featured-subtitle">Web Design</h4>
        </div>
      </div>

    </div>
  </section>

</template>

<style scoped>

.section-project {
    background-color: var(--primary-color);
    padding-top: 4rem;
    height: auto;
}

.description {
    margin-top: 2rem;
    margin-left: 2rem;
}

h3 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: var(--white);
}

h4 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 400;
    color: var(--white);
}

.fluid {
  width:100%;
  height:100%;
  }

.image-small {
    width: 100%;
    height: 60%;
    overflow: hidden;
    opacity:1;
}

.image-small img {
  transition: transform 0.75s ease-out;
  will-change: auto;
}

.image-small:hover img {
  transform: scale(1.0);
}

.image-project {
  width:100%;
  height:auto;
  overflow: hidden;
  opacity:1;
}

.image-project img {
  transition: transform 0.75s ease-out;
  will-change: auto;
}

.image-project:hover img {
  transform: scale(1.1);
}

.featured-title, .featured-subtitle {
  opacity: 1,
}

@media (max-width:1200px) {
    .marquee-content li {
    width:50vw;
}

  .description {
    margin-top: 1rem;
    margin-left: 0.5rem;
}

.image-small {
    width: 100%;
    height: auto;
    overflow: hidden;
    opacity:1;
}
  }
</style>

<!--
<script>
import { gsap } from "gsap"; 
import { ScrollTrigger } from '../js/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Work',
    mounted: function(){

      gsap.from('.image-project', {
        y:800,
        opacity:1,
        duration:1.4,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".section-project",
        }
      });

       gsap.from('.image-small', {
        y:800,
        opacity:1,
        duration:1.4,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".section-project",
        }
      });

    }
}
</script>
-->