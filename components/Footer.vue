<template>
    <footer class="col-12 col-lg-12">
        <div class="col-12 col-lg-12">
            <div class="d-flex justify-content-center">
             <LogoLight/>
            </div>
        
        <div class="col-12 col-lg-12 mt-4 d-lg-flex justify-content-center">

            <div class="col-12 col-lg-4 d-lg-flex justify-content-center">
            <p>Contrada Santa Chiara, 36<br>Brescia</p>
            </div>
             
            <div class="col-12 col-lg-4 d-lg-flex text-center justify-content-center">
            <a href = "mailto:hello@francescazarba.it" class="lg-mt-1 email">hello@francescazarba.it</a>
            </div>

            <div class="col-12 col-lg-4 d-lg-flex justify-content-center">
            <p href="#" class="xs-mt-5 xs-pt-5 lg-pt-5 lg-mt-1"><b>SOCIAL</b><SocialIcons/></p>
            </div>
        </div>

        <div class="col-12 col-sm-12 d-lg-flex justify-content-center copy">
            <h6>©Francesca Zarba 2022 | <a href="#" class="policy">Policy Privacy</a></h6>
        </div>
       </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: 62vh;
    background-color: var(--dark-color);
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
}

h1 {
    font-family: 'Lora', serif;
    font-weight:500;
    font-size: 5rem;
}

a {
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1.7rem;
    font-weight: 600;
    margin-top: 10rem;
    color: var(--light-color);
}

p {
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 0.5rem;
    color: var(--light-color);
}

h6, .policy {
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 7rem;
    color: var(--light-color);
    opacity:0.7;
}

.email {
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 10rem;
    color: var(--light-color);
    padding-top:0rem;
}

.line {
    border: 0.5px solid #faf1f1;
    width:100%;
    margin-bottom: 3rem;
}

@media (max-width:860px) {
    .copy {
    margin-top:4rem;
}

  h6 {
    margin-top: 2rem;
    text-align: center;
}

p {
    text-align: center;
    margin-bottom: 2rem;
    margin-top:2rem;
}

.email {
    padding-top:4rem;
    margin-top:6rem;
}

footer {
    height: 60vh;
}

  }

</style>