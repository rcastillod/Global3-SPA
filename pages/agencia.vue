<template>
  <LayoutPageHeader pageTitle="Agencia" />
  <section class="w-full">
    <!-- Empresa -->
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
        <div class="space-y-6">
          <p class="text-grey-dark dark:text-grey-light">
            Global3 es una empresa de consultoría profesional especializada en
            Diseño Web, Posicionamiento en Buscadores SEO, Comercio Electrónico
            y Desarrollo Web Avanzado. Utilizando las últimas tecnologías, junto
            con una buena dosis de creatividad y profesionalismo, vamos a
            trabajar estrechamente con usted para proporcionar una solución
            completa e íntegra a su web, la impresión y las necesidades de
            comunicación visual.
          </p>
          <p class="text-grey-dark dark:text-grey-light">
            A diferencia de muchas empresas de diseño web, nos esforzamos en
            crear un retorno positivo sobre la inversión para nuestros clientes.
            Hemos dedicado años de esfuerzo para comprender las muchas variables
            implicadas en la optimización de motores de búsqueda. Nuestro equipo
            de diseñadores web experimentados y creativos, desarrolladores y
            escritores de contenido le ayudarán a aumentar la exposición de su
            sitio web y maximizar su ganancia real de poder o de tráfico.
          </p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 space-y-6">
        <ElementsSectionImage img="agencia.jpg" />
      </div>
    </LayoutPageSection>
    <!-- Divider -->
    <section class="max-w-screen-2xl mx-auto">
      <ElementsSectionDivider />
    </section>
    <!-- Services -->
    <!-- Text Marquee -->
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
  </section>
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
  left: 0;
  background-image: linear-gradient(270deg, #18181800 50%, #181818eb 100%);
}
.marquee-wrapper::after {
  right: 0;
  background-image: linear-gradient(90deg, #18181800 50%, #181818eb 100%);
}
</style>
