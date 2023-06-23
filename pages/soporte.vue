<template>
  <div>
    <!-- Empresa -->
    <section class="w-full md:mt-10">
      <LayoutPageSection class="items-center">
        <div class="col-span-12 md:col-span-6 mt-10 md:mt-0" data-aos="fade-right" data-aos-duration="1000">
          <ElementsSectionImage img="soporte.jpg" class="w-full" />
        </div>
        <div class="col-span-12 md:col-span-6 space-y-6 md:ml-14 mt-10 md:mt-0" data-aos="fade-left"
          data-aos-duration="1000">
          <p class="text-grey-dark dark:text-grey-light text-xl" data-aos="flip-down" data-aos-duration="1000">
            Comprometidos con nuestros Clientes
          </p>
          <h3 class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider" data-aos="flip-up"
            data-aos-duration="1000">
            Soporte Online y Presencial
          </h3>
          <div class="space-y-6 mr-0 md:mr-10">
            <p class="text-grey-dark dark:text-grey-light">
              Nuestro equipo de soporte está disponible para su atención a
              través de 3 plataformas. Todos nuestros proyectos son entregados
              con documentación digital e impresa para la autoadministración de
              los sitios.
            </p>
          </div>
        </div>
      </LayoutPageSection>
      <LayoutPageSection class="gap-8 gap-y-14">
        <LayoutSupportCard class="col-span-12 md:col-span-6 lg:col-span-4" v-for="(support, index) in supports"
          :key="index" :support="support" data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="`${index}00`" />
      </LayoutPageSection>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
definePageMeta({ layout: "page" });

const supports = ref([
  {
    title: "Presencial",
    content:
      "¡Nos preocupamos de nuestros clientes! Si requiere de soporte presencial puede ser solicitado por teléfono o correo electrónico.",
    icono: "../face-to-face.png",
    link: "",
    target: "",
  },
  {
    title: "Teamwiewer",
    content:
      "El soporte o capacitación virtual nos permite tomar control de los equipos remotos y explicar o solucionar el problema que puedan tener.",
    icono: "../teamviewer.png",
    link: "https://get.teamviewer.com/pxp53p8",
    target: "_blank",
  },
  {
    title: "Telefónico / Email",
    content:
      "La forma más rápida y sencilla de solucionar tus dudas. Contáctanos a través de nuestro sitio o llámanos por teléfono para aclarar tus dudas.",
    icono: "../online.png",
    link: "",
    target: "",
  },
]);
</script>
