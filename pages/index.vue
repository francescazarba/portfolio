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
/*@import 'animate.min.css';*/
@import '~animate.css/animate.css';

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

/* This only changes this particular animation duration */
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}

/* This changes all the animations globally */
:root {
  --animate-duration: 1000ms;
  --animate-delay: 1s;
}

</style>


<script src="https://unpkg.com/scrollreveal"></script>

              

<script>
export default {
  name: 'IndexPage'
}
</script>

