<template>
      <section class="section-linkwork mb-5"> <!--inizio sezione titoli-->
    <div class="col-12 section--titles">
      <article class="inline-block">
        <h4 class="tag">ALL WORKS</h4>
        <div class="items-center">
        <h1 class="variant-color">
          <a href="#" class="link-dark">Andersen</a> / <NuxtLink to="/sorrypie">SorryPie</NuxtLink> / <a href="#" class="link-dark">Katie Fournier Design</a> / <NuxtLink to="/fondazionenegri">Fondazione Negri</NuxtLink> / <a href="#" class="link-dark">Trackit</a> / <a href="#" class="link-dark">Cohabit</a> /
        </h1>
        </div>
      </article>

    <div class="col-12 d-flex flex-wrap section-tagline">

      <article class="tagline col-xs-12 col-lg-6 inline-block mb-5">
        <h4 class="tag">WEB SITES</h4>
        <div class="items-center">
        <h2 class="variant-color">
          <a href="#" class="link-dark">Katie Fournier Design</a> / <a href="#" class="link-dark">Fondazione Negri</a> / 
        </h2>
        </div>
      </article>

      <article class="tagline col-xs-12 col-lg-6 inline-block mb-5">
        <h4 class="tag">APP MOBILE</h4>
        <div class="items-center">
        <h2 class="variant-color">
          <a href="#" class="link-dark">Andersen</a> / <a href="#" class="link-dark">SorryPie</a> / <a href="#" class="link-dark">Trackit</a> / <a href="#" class="link-dark">Cohabit</a> /
        </h2>
        </div>
      </article>

    </div>

    </div>
  </section>
</template>

<style scoped>

.section-two {
  opacity: 1;
  height: 70vh;
}

.section--titles {
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
  margin-top: 16rem;
  opacity:1;
  }

h1.variant-color {
  font-family: 'Lora', serif;
  font-weight: 400;
  color: var(--secondary-color);
  font-size: calc(3rem + 2vh);
  line-height: 1.2;
  font-weight: 300;
  }

a {
  color: var(--dark-color);
  text-decoration: none;
  }

a:hover {
 color: var(--secondary-color);
  }

h2.variant-color {
  font-family: 'Lora', serif;
  color: var(--secondary-color);
  font-size: calc(1rem + 1.2vh);
  line-height: 150%;
  font-weight: 500;
  }

article.tagline {
  padding: 4rem 2rem;
  align-items: flex-start;
  }

  article.tagline:first-child {
  padding-left:0rem;
  }

.section-tagline {
    padding-left: 0rem;
}

h4 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 400;
}
</style>

<!--
<script>
import { gsap } from "gsap"; 
import { ScrollTrigger } from '../js/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'LinkWork',
    mounted: function(){

      gsap.to('.section--titles', {
        y:-100,
        opacity:1,
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