<template>
<div class="d-lg-none">
    
 <div class="xs-hide col-12 d-flex">
    <ul class="nav">
    <li class="col-4 nav-item">
      <NuxtLink to="/" class="nav-link active">WORK</NuxtLink>
    </li>
    <li class="col-4 nav-item">
      <NuxtLink to="/about" class="nav-link">ABOUT</NuxtLink>
    </li>
    <li class="col-4 nav-item">
      <NuxtLink to="/contact" class="nav-link">CONTACT</NuxtLink>
    </li>
  </ul>
  </div> 

  </div>
</template>

<style scoped>

div a{
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.6rem;
  color: #817CDD;
  text-align: center;
}

a.active {
  font-weight: 600;
  text-decoration: default;
}

a.active:hover {
  font-weight: 600;
}

nav a:hover {
  text-decoration: line-through;
  color: #D887BD;
  font-weight: 500;
}

li:first-child{
    padding-left:0;
}

</style>
