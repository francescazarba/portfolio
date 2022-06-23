<template>
  <div>
      <Header/>
      <Hero/>
      <LinkWork/>
      <Scritta/>
      <Work/>
      <Footer/>
  </div>
</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;700;800;900&family=Lora:ital,wght@0,400;0,700;1,400;1,500&display=swap');
/*@import 'animate.css';*/


:root {
    --black:#000000;
    --white:#fff;
    --primary-color: #817CDD;
    --secondary-color: #D887BD;
    --dark-color:#220F36;
    --light-color: #faf1f1;
    }


body {
  background-color: var(--light-color);
  font-family: 'Darker Grotesque', sans-serif;
  font-family: 'Lora', serif;
  background-color: var(--light-color);
  color: var(--black);
}

body {
	cursor: url('../img/custom-cursor.png'), auto;
  transition: all 0.75s ease-in-out;
  will-change: auto;
}

img:hover, li:hover {
  cursor: url('../img/custom-cursor-hover.png'), auto;
}

.section--hero, .featured-title, .featured-subtitle, .section--titles {
  opacity:1;
}
</style>

<script>
import { gsap } from "gsap"; 
import { ScrollTrigger } from '../js/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'IndexPage',
  mounted: function(){
      gsap.from('header', {opacity:0, y:-100, duration:1.2,});
      gsap.from('.section--hero', {opacity:0, y:-50, duration:1.2,});

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
        y:400,
        opacity:0,
        duration:1.6,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".section-linkwork",
        }
      });

    gsap.from('.image-project', {
        y:800,
        opacity:1,
        duration:1.6,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".section-project",
        }
      });

       gsap.from('.image-small', {
        y:800,
        opacity:1,
        duration:1.6,
        startAt: {y:0},
        scrollTrigger: {
        trigger: ".section-project",
        }
      });

       gsap.from('.featured-title', {
        x:-400,
        opacity:0,
        duration:1.6,
        dalay:0.4,
        startAt: {x:0,y:0},
        scrollTrigger: {
        trigger: ".section-project",
        }
      });

       gsap.from('.featured-subtitle', {
        x:-400,
        opacity:0,
        duration:1.6,
        dalay:0.4,
        startAt: {x:0,y:0},
        scrollTrigger: {
        trigger: ".section-project",
        }
      });

    }
}
</script>

<!--
<script src="../js/wow.min.js"></script>
              <script>
              new WOW().init();
              </script>
-->


<!--<script src="https://unpkg.com/scrollreveal"></script>
<script src="https://cdn.jsdelivr.net/npm/lax.js" ></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="../js/main.js"></script>-->

<!--
<script>
  AOS.init({
        easing: 'ease-in-out-sine'
      });

   setInterval(addItem, 300);

      var itemsCounter = 1;
      var container = document.getElementById('aos-demo');

      function addItem () {
        if (itemsCounter > 42) return;
        var item = document.createElement('div');
        item.classList.add('aos-item');
        item.setAttribute('data-aos', 'fade-right');
        item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
        container.appendChild(item);
        itemsCounter++;
      }
</script>-->


