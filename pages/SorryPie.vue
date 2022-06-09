<template>
    <div>
      <Header/>
      <Hero/>
      <h2>Login/Signup</h2>
      <img src="../img/sorrypie_login.png" class="d-flex justify-content-center">
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