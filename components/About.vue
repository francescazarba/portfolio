<template>
     <section class="col-12 col-lg-12 section--about d-lg-flex justify-content-start">
       
        <div class="col-12 col-lg-6">
        <h2 class="citazione">Leave a little <i>digital sparkle</i> everywhere around you.</h2>
        <h4 class="sub-citazione">Tell me your idea. <br> I will make it come true.</h4>
        </div>

        <div class="col-12 col-lg-5 section--skills justify-content-end">
        <h6 class="d-md-none pt-5">Skills</h6>
        <h3 class="lg-mt-5 lg-pt-5 title-skills">WEB DESIGN</h3>
        <h5 class="pb-5 subtitle-skills">Design and development website, web-app and digital interface.<br></h5>

        <h3 class="title-skills">MOBILE APP</h3>
        <h5 class="pb-5 subtitle-skills">Analysis, design mobile applications and prototyping with XD, Figma, Protopie.</h5>

        <h3 class="title-skills">UI/UX DESIGN</h3>
        <h5 class="pb-5 subtitle-skills">User flow design, user stories, evaluation and consulting.</h5>

        <h3 class="title-skills">GRAPHIC DESIGN</h3>
        <h5 class="pb-5 subtitle-skills">Digital publishing, editorial project and social channels graphics. </h5>

        </div>
      </section>
</template>

<style scoped>

.section--about {
  padding-left: 15%;
  padding-right: 15%;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  }

.section--skills {
    padding-left: 4rem;
    margin-top: 9rem;
    opacity:1;
}

h2 {
  font-family: 'Lora', serif;
  font-weight: 400;
  color: var(--primary-color);
  font-size: calc(2rem + 2vh);
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 3rem;
}

h6 {
  font-family: 'Lora', serif;
  font-weight: 400;
  color: var(--primary-color);
  font-size: calc(2rem + 1vh);
  line-height: 1.2;
  font-weight: 300;
  margin-bottom:1rem;
}

h3 {
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 400;
  color: var(--secondary-color);
  font-size: calc(1rem + 1vh);
  line-height: 1.2;
  font-weight: 700;
}

h4 {
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 400;
  color: var(--dark-color);
  font-size: calc(1.5rem + 1vh);
  line-height: 1.2;
  font-weight: 500;
}

h5 {
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 400;
  color: var(--dark-color);
  font-size: calc(1rem + 1vh);
  line-height: 1.2;
  font-weight: 500;
}

.title-skills, .subtitle-skills {
  opacity:1;
}

@media (max-width:860px) {
.section--about {
  padding-left: 10%;
  }

.section--skills {
    padding-left: 1rem;
    margin-top: 3rem;
}

  }

</style>

