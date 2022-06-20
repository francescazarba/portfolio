<template>
    <footer class="col-lg-12">
        <div class="col-12">
            <div class="d-flex justify-content-center">
             <LogoLight/>
            </div>
        
        <div class="col-lg-12 mt-4 d-flex justify-content-center">

            <div class="col-lg-4 d-flex justify-content-center">
            <p>Contrada Santa Chiara, 36<br>Brescia</p>
            </div>
            
             
            <div class="col-lg-4 d-flex justify-content-center">
            <a href = "mailto:hello@francescazarba.it" class="mt-1 email">hello@francescazarba.it</a>
            </div>

            <div class="col-lg-4 d-flex justify-content-center">
            <p href="#" class="mt-1"><b>SOCIAL</b> <SocialIcons/> </p>
            </div>
        </div>

        <div class="col-12 d-flex justify-content-center">
            <h6>©Francesca Zarba 2022 | <a href="#" class="policy">Policy Privacy</a></h6>
        </div>
       </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: 50vh;
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
}

.line {
    border: 0.5px solid #faf1f1;
    width:100%;
    margin-bottom: 3rem;
}

</style>