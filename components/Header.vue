<template>

<header class="header header--main"> <!--inizio menu-->
    <div class="container">
      <div class="col-xs-12 d-flex justify-content-start">
        <div class="col-lg-6 col-xs-12 logo">
          <a href="index.html"><Logo/></a>
        </div>
  
  <nav>
    <ul class="nav justify-content-end">
    <li class="nav-item">
      <NuxtLink to="/" class="nav-link active">WORK</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink to="/about" class="nav-link">ABOUT</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink to="/contact" class="nav-link">CONTACT</NuxtLink>
    </li>
  </ul>
  </nav> 
  
    </div>
  </div>
  </header>
</template>



<style scoped>
header {
  height: 30vh;
  padding: 120px;
  opacity:1;
}

.logo {
    margin: 0 auto;
}

nav a {
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.2rem 2.8rem;
  color: #817CDD;
}

a.active {
  font-weight: 600;
}

a.active:hover {
  font-weight: 600;
}

nav a:hover {
  text-decoration: line-through;
  color: #D887BD;
  font-weight: 500;
}

</style>

<script>
import { gsap } from "gsap"; 
import { ScrollTrigger } from '../js/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Header',
    mounted: function(){
      gsap.from('header', {opacity:1, y:-20, duration:2,});

    }
}
</script>
