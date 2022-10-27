<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="w-full" data-aos="fade-up" data-aos-duration="1000">
      <LayoutHeroSection />
    </section>
    <!-- Divider -->
    <section class="max-w-screen-2xl mx-auto">
      <ElementsSectionDivider />
    </section>
    <!-- Services -->
    <section class="w-full">
      <LayoutSiteSection subtitle="Que es lo que ofrecemos">
        <LayoutServicesTitle :services="storeServices.services" />
        <div
          class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14 mt-14 md:mt-36"
        >
          <LayoutServiceCard
            v-for="(service, index) in storeServices.services"
            :key="index"
            :service="service"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="`${index}00`"
          />
        </div>
      </LayoutSiteSection>
    </section>
    <!-- Text Marquee -->
    <section class="w-full">
      <ElementsTextMarquee
        :texts="['Soluciones', 'Digitalización', 'Trabajo en Equipo']"
      />
    </section>
    <!-- Proyects -->
    <section
      class="bg-grayscale w-full bg-[url('/bg-proyects.jpg')] bg-cover bg-no-repeat bg-center"
    >
      <LayoutSiteSection class="flex justify-center md:justify-start">
        <ElementsButtonTextAnim
          text="Ver Proyectos  Ver Proyectos  Ver Proyectos"
        />
      </LayoutSiteSection>
    </section>
    <!-- Testimonials -->
    <section class="w-full">
      <LayoutSiteSection>
        <LayoutTestimonials data-aos="fade-up" data-aos-duration="1000" />
      </LayoutSiteSection>
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

<script setup>
import { servicesStore } from "~/stores/services";

const storeServices = servicesStore();
// Call servicesStore action
storeServices.setServices();
</script>
