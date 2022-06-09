<template>
    <section class="section section-project pb-5"> <!--inizio sezione progetti x2-->
    <div class="col-12 d-flex flex-wrap">

      <div class="col-7 d-flex flex-wrap mb-5">
        <div class="col-12 image-project wow slideInLeft">
          <a><img class="fluid" src="../img/kfd-cover.jpg" alt=""></a>
        </div>
        <div class="col-12 description">
          <h3 class="featured-title">KATIE FOURNIER DESIGN</h3>
          <h4 class="featured-subtitle">Web Develop</h4>
        </div>
      </div>

      <div class="col-5 mb-5">
        <div class="col-12 image-small wow slideInLeft">
          <a><img class="fluid" src="../img/cohabit-cover.jpg" alt=""></a>
          </div>
          <div class="col-12 description">
            <h3 class="featured-title">COHABIT</h3>
            <h4 class="featured-subtitle">App Design</h4>
          </div>
        </div>

      <div class="col-5 mt-5 mb-5">
        <div class="col-12 image-small wow slideInLeft">
          <a><img class="fluid" src="../img/trackit-cover.jpg" alt=""></a>
          </div>
          <div class="col-12 description">
            <h3 class="featured-title">TRACKIT</h3>
            <h4 class="featured-subtitle">App Design</h4>
          </div>
        </div>

          <div class="col-7 d-flex flex-wrap mt-5 mb-5">
        <div class="col-12 image-project wow slideInLeft">
          <a><img class="fluid" src="../img/fondazionenegri-cover.jpg" alt=""></a>
        </div>
        <div class="col-12 description">
          <h3 class="featured-title">FONDAZIONE NEGRI</h3>
          <h4 class="featured-subtitle">Web Design</h4>
        </div>
      </div>

    </div>
  </section>

</template>

<style scoped>

.section-project {
    background-color: var(--primary-color);
    padding-top: 4rem;
}

.description {
    margin-top: 2rem;
    margin-left: 2rem;
}

h3 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: var(--white);
}

h4 {
    font-family: 'Darker Grotesque', sans-serif;
    font-weight: 400;
    color: var(--white);
}

.fluid {
  width:100%;
  height:100%;
  }

.image-small {
    width: 100%;
    height: 60%;
    overflow: hidden;
}

.image-small img {
  transition: transform 0.75s ease-out;
  will-change: auto;
}

.image-small:hover img {
  transform: scale(1.1);
}

.image-project {
  width:100%;
  height:auto;
  overflow: hidden;
}

.image-project img {
  transition: transform 0.75s ease-out;
  will-change: auto;

}

.image-project:hover img {
  transform: scale(1.1);
}
</style>

<script>
export default {
  name: 'Work'
}
</script>