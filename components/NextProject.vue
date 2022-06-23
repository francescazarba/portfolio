<template>
    <div class="col-lg-12 d-flex indicators">
        <div class="col-lg-6">
            <div class="d-flex preview"> 
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" class="left" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.20003 16L11.7334 24.5333M3.20003 16L11.7334 7.46666M3.20003 16L29.8667 16" stroke="#7879F1" stroke-width="2"/>
            </svg>
            <NuxtLink to="/" class="indicators-link">PREVIEW</NuxtLink>
            </div>
        </div>

         <div class="col-lg-6">
            <div class="d-flex float-right next"> 
            <NuxtLink to="/fondazionenegri" class="indicators-link">NEXT</NuxtLink>
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" class="right" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.8 16L20.2666 7.46667M28.8 16L20.2666 24.5333M28.8 16H2.1333" stroke="#7879F1" stroke-width="2"/>
            </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>

.indicators {
    padding-left: 10%;
    padding-right: 13%;
    margin-top: 6rem;
    margin-bottom: 6rem;
}

svg.left, svg.right {
    margin-top:10px;
    transition: all 0.75s ease-in-out;
    will-change: auto;
}

.preview, .next {
    transition: all 0.75s ease-in-out;
    will-change: auto;
}

.preview:hover {
    margin-left: -20px;
}

.next:hover {
    margin-right: -20px;
}

.indicators-link {
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  padding: 0rem 0.8rem;
  color: #7879F1;
  transition: all 0.75s ease-in-out;
  will-change: auto;
}

.indicators-link:hover {
    text-decoration: none;
}

</style>