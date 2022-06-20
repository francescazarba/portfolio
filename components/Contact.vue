<template>
<div class="contact">             
    <div class="col-lg-12 d-flex justify-content-center">
        <a href = "mailto:hello@francescazarba.it" class="animate__animated animate__bounce">hello@francescazarba.it</a>
    </div>

    <div class="col-lg-12 icon"><SocialIcons/></div> 
</div>
</template>

<style scoped>

.contact {
    background-color: var(--light-color);
    color: var(--light-color);
    height: 70vh;
}

.icon{
    background-color: var(--primary-color);
    height:50vh;
    text-align: center;
    margin-top:0;
    padding-top:10rem;
}

a {
  font-family: 'Lora', serif;
  font-weight: 400;
  color: var(--primary-color);
  font-size: calc(6rem + 2vh);
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  padding-top: 2.75rem;
  margin-bottom: 0rem;
  transition: all 0.75s ease-in-out;
  will-change: auto;
  }

a:hover {
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 600;
}

h4 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 400;
    color: var(--black);
}

</style>