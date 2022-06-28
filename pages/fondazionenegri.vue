<template>
    <div>
      <Header/>
      <HeroFondazione/>
    <section class="section-work">
      <div class="typography">
      <h2 class="animate">Typography and Colors</h2>
      <img src="../img/typography-fn.png" class="d-flex justify-content-center mt-5 pt-5">
      <img src="../img/colors-fn.png" class="d-flex justify-content-center">
      </div>
      
      <div class="layout">
        <h2 class="animate mb-5">All Layout</h2>
        <img src="../img/all-layout-fn-0.png" class="d-flex justify-content-center mt-5">
        <img src="../img/all-layout-fn-1.png" class="d-flex justify-content-center">
        <img src="../img/all-layout-fn-2.png" class="d-flex justify-content-center">
        <img src="../img/all-layout-fn-3.png" class="d-flex justify-content-center">
        <img src="../img/all-layout-fn-4.png" class="d-flex justify-content-center">
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
  opacity: 1;
  }

  img {
    width:70%;
    height:auto;
    margin:0 auto;
    padding-bottom: 4rem;
  }

  .essentials, .login, .new {
  opacity: 1;
  }

  .animate {
  opacity:1;
  }


@media (max-width:860px) {
  .section-work{
  margin-top:10rem;
  }

  h2 {
    font-size: calc(2rem + 2vh);
    margin-bottom: 1rem;
  }

  img {
    width:90%;
    padding-bottom: 1rem;
}
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
        trigger: ".typography",
        }
      });


       gsap.from('.animate', {
        y:100,
        opacity:0,
        duration:1.4,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".layout",
        }
      });


    
    }

    
}

</script>