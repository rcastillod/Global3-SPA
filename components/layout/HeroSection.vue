<template>
  <div class="max-w-screen-2xl mx-auto py-40 px-4 md:px-8 md:py-36 md:pt-[15.625rem]">
    <h1 class="hero-title font-bold lg:text-center">Creamos</h1>
    <div class="max-w-screen-lg mx-auto md:-mt-12 lg:-mt-16">
      <div class="flex flex-col lg:flex-row items-center">
        <div>
          <h3 class="hero-subtitle font-semibold text-white dark:text-primary">
            Para que tu negocio crezca
          </h3>
          <div class="hero-text mt-14 md:pr-60 lg:pr-70">
            <p class="text-white dark:text-primary text-xl font-light">
              Brindamos soluciones digitales modernas y vanguardistas para satisfacer las necesidades de nuestros
              clientes. Nos enfocamos en ofrecer respuestas innovadoras y eficientes a los desafíos digitales actuales.
            </p>
          </div>
        </div>
        <div class="self-end">
          <ElementsButtonRounded class="mt-0 md:-mt-20 lg:mt-0" url="/contacto">Contáctanos</ElementsButtonRounded>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-title {
  background-image: url("/text-bg-mask.jpg");
  background-position: center center;
  background-size: cover;
  font-size: clamp(3.675rem, 15vw, 15.625rem);
  line-height: 0.9375em;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-subtitle {
  font-size: clamp(2.75rem, 8vw, 6.5rem);
  line-height: 0.9375em;
}
</style>
