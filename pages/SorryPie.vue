<template>
    <div>
      <Header/>
      <Hero/>
    <section class="section-work">
      <div class="login">
      <h2 class="animate">Login/Signup</h2>
      <img src="../img/sorrypie_login.png" class="d-flex justify-content-center">
      </div>

      <div class="essentials">
      <h2 class="animate">Essentials</h2>
      <img src="../img/sorrypie_essentials.png" class="d-flex justify-content-center">
      </div>
      
      <div class="new">
      <h2 class="animate">Create new</h2>
      <img src="../img/sorrypie_createnew.png" class="d-flex justify-content-center">
      </div>
    </section>
      <NextProject/>
      <Footer/>
  </div>
</template>


<style scoped>
    .home-enter-active, .home-leave-active {transition: opacity 0.5s; }
    .home-enter, .home-leave-active { opacity: 0; }

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

.essentials, .login, .new {
  opacity: 1;
}

.animate {
  opacity:1;
}

.section-work {
  margin-top: 8rem;
}

@media (max-width:860px) {
  .section-work{
  margin-top:10rem;
  }

  h2 {
    font-size: calc(2rem + 2vh)
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