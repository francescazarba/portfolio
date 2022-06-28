<template>
    <div class="marquee">
        <ul class="marquee-content">
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>

            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>

            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
            <li><i>work</i></li>
            <li>work</li>
        </ul>
    </div>
</template> 

<style scoped>

.marquee {
    width: 100vw;
    height: 20vh;
    background-color:var(--primary-color);
    color:var(--light-color);
    overflow: hidden;
    text-align:center;
    padding-top: 2rem;
    position: relative;
}

.marquee-content {
    list-style: none;
    height: 100%;
    display: flex;
    animation: scrolling 35s linear infinite;
}

@keyframes scrolling {
    0% {transform: translateX(0); }
    100% {transform: translateX(-180vw); }
}

.marquee-content li {
    font-family: 'Lora', serif;
    font-weight:500;
    font-size: 5rem;
    white-space: nowrap;
    width:20vw;
    flex-shrink: 0;
}

@media (max-width:860px) {
    .marquee-content li {
    width:50vw;
}
  }

</style>