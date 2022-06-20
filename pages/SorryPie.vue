<template>
    <div>
      <Header/>
      <Hero/>
      <h2 class="animate__animated animate__fadeInUp animate__delay-2s">Login/Signup</h2>
      <img src="../img/sorrypie_login.png" class="d-flex justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
      <h2 class="animate__animated animate__fadeInUp animate__delay-4s">Essentials</h2>
      <img src="../img/sorrypie_essentials.png" class="d-flex justify-content-center animate__animated animate__fadeInUp animate__delay-4s">
      <h2 class="animate__animated animate__fadeInUp animate__delay-7s">Create new</h2>
      <img src="../img/sorrypie_createnew.png" class="d-flex justify-content-center animate__animated animate__fadeInUp animate__delay-7s">
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

</style>

<script>

export default {
  name: 'details',
  transition: 'home'
}
</script>