<template>
    <div>
      <Header/>
      <HeroFondazione/>
    <section class="mt-5">
      <div class="login">
      <h2 class="animate">Typography</h2>
      <img src="../img/typography-fn.png" class="d-flex justify-content-center mt-5 pt-5">
      </div>

      <div class="essentials">
      <h2 class="animate">Colors</h2>
      <img src="../img/colors-fn.png" class="d-flex justify-content-center">
      </div>
      
      <div class="new">
        <h2 class="animate">All Layout</h2>
        <img src="../img/all-layout-fn.png" class="d-flex justify-content-center fluid">
      </div>
    </section>
      <NextProject/>
      <Footer/>
  </div>
</template>


<style scoped>
  .home-enter-active, .home-leave-active {transition: opacity 0.5s; }
  .home-enter, .home-leave-active { opacity: 0; }

  body {
      background-color: var(--prymary-color);
    }

  h2 {
  font-family: 'Lora', serif;
  font-weight: 700;
  color: var(--dark-color);
  font-size: calc(3rem + 2vh);
  line-height: 1.2;
  font-weight: 300;
  text-align:center;
  margin-top:8rem;
  }

  img {
    width:70%;
    height:auto;
    margin:0 auto;
    padding-bottom: 4rem;
  }

  .fluid {
    width:100%;
    height:auto;
  }

  .essentials, .login, .new {
  opacity: 1;
  }

  .animate {
  opacity:1;
  }

</style>

<script>
import { gsap } from "gsap"; 
import { ScrollTrigger } from '../js/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'SorryPie',
  transition: 'home',
    mounted: function(){
      gsap.from('header', {opacity:0, y:-60, duration:1.2,});

      gsap.from('.animate', {
        y:100,
        opacity:0,
        duration:1.4,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".login",
        }
      });

       gsap.from('.animate', {
        y:100,
        opacity:0,
        duration:1.4,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".essentials",
        }
      });

       gsap.from('.animate', {
        y:100,
        opacity:0,
        duration:1.4,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".new",
        }
      });


    
    }

    
}

</script>