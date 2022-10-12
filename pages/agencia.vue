<template>
  <div>
    <LayoutPageHeader pageTitle="Agencia" />
    <!-- Empresa -->
    <section class="w-full md:mt-10">
      <LayoutPageSection class="items-center">
        <div class="col-span-12 md:col-span-6 space-y-6">
          <p class="text-grey-dark dark:text-grey-light text-xl">
            Nuestra Empresa
          </p>
          <h3
            class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
          >
            Ideas únicas para soluciones digitales
          </h3>
          <div class="space-y-6 mr-0 md:mr-10">
            <p class="text-grey-dark dark:text-grey-light">
              Global3 es una empresa de consultoría profesional especializada en
              Diseño Web, Posicionamiento en Buscadores SEO, Comercio
              Electrónico y Desarrollo Web Avanzado. Utilizando las últimas
              tecnologías, junto con una buena dosis de creatividad y
              profesionalismo, vamos a trabajar estrechamente con usted para
              proporcionar una solución completa e íntegra a su web, la
              impresión y las necesidades de comunicación visual.
            </p>
            <p class="text-grey-dark dark:text-grey-light">
              A diferencia de muchas empresas de diseño web, nos esforzamos en
              crear un retorno positivo sobre la inversión para nuestros
              clientes. Hemos dedicado años de esfuerzo para comprender las
              muchas variables implicadas en la optimización de motores de
              búsqueda. Nuestro equipo de diseñadores web experimentados y
              creativos, desarrolladores y escritores de contenido le ayudarán a
              aumentar la exposición de su sitio web y maximizar su ganancia
              real de poder o de tráfico.
            </p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 mt-10 md:mt-0">
          <ElementsSectionImage img="agencia.jpg" />
        </div>
      </LayoutPageSection>
    </section>
    <!-- Services -->
    <section class="marquee-wrapper w-full relative">
      <ElementsTextMarquee
        :texts="['Desarrollo Web', 'Diseño', 'Intranet', 'Ecoommerce']"
      />
      <ElementsTextMarquee
        :texts="['Aplicaciones Moviles', 'Community Manager', 'SEO']"
        direction="left"
        :bordered="true"
      />
    </section>
    <!-- Filosofy -->
    <section class="w-full">
      <LayoutPageSection class="items-center">
        <div class="col-span-12 md:col-span-6 mb-10 md:mb-0">
          <ElementsSectionImage img="filosofia.png" />
        </div>
        <div class="col-span-12 md:col-span-6 space-y-6 ml-0 md:ml-14">
          <p class="text-grey-dark dark:text-grey-light text-xl">
            ¿Por qué elegirnos?
          </p>
          <h3
            class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
          >
            Filosofía de trabajo
          </h3>
          <div class="space-y-6 mr-0 md:mr-10">
            <p class="text-grey-dark dark:text-grey-light">
              La ventaja diferencial de la contratación de nuestros servicios
              para desarrollar la presencia online de su negocio es nuestro
              conocimiento y capacidad, junto con nuestro fuerte enfoque en la
              generación de un retorno positivo sobre la inversión para nuestros
              clientes.
            </p>
          </div>
        </div>
      </LayoutPageSection>
    </section>
    <!-- Business -->
    <section class="w-full">
      <p class="text-grey-dark dark:text-grey-light text-xl text-center">
        Hemos trabajado con
      </p>
      <LayoutBusiness />
    </section>
  </div>
</template>

<script>
definePageMeta({ layout: "page" });
</script>

<style>
.page-header {
  background-image: url("/header.png");
}
.marquee-wrapper::before,
.marquee-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  width: 40%;
  height: 100%;
  z-index: 2;
}
.marquee-wrapper::before {
  @apply bg-gradient-to-r from-primary dark:from-background-color-light;
  left: 0;
}
.marquee-wrapper::after {
  @apply bg-gradient-to-l from-primary dark:from-background-color-light;
  right: 0;
}
</style>
