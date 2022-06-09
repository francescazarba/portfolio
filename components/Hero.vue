<template>
     <section class="section section--hero">
        <div class="image-header col-12 d-flex items-center lax lax_preset_fadeIn:50:100 lax_preset_spin">
          <NuxtLink to="/SorryPie"><img class="fluid" src="../img/header.jpg" alt=""></NuxtLink>
        </div>

        <div class="col-12 description">
          <h3 class="featured-title">SORRYPIE</h3>
          <h4 class="featured-subtitle">App prototype</h4>
        </div>
    </section>
</template>


<style scoped>
.image-header {
  width:100%;
  height:100%;
  overflow:hidden;
}

.image-header img {
  transition: transform 0.75s ease-out;
  will-change: auto;
}

.image-header:hover img {
  transform: scale(1.1);
}

.section--hero {
  padding-left: 5%;
  padding-right: 5%;
  }

.description {
    margin-top: 2rem;
    margin-left: 2rem;
}

h3 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 600;
    line-height: 1.2;
}

h4 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 400;
}

.fluid {
  width:100%;
  height:auto;
  }

</style>



<script>
export default {
  name: 'Hero'
}
</script>