<template>
  <div>
    <LayoutPageHeader pageTitle="Servicios" />
    <section class="w-full md:mt-10">
      <LayoutPageSection>
        <div class="col-span-12 md:col-span-4 space-y-6">
          <div class="md:sticky md:top-40">
            <p class="text-grey-dark dark:text-grey-light text-xl">Servicios</p>
            <h3
              class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
            >
              Herramientas digitales para soluciones integrales
            </h3>
          </div>
        </div>
        <div class="col-span-12 md:col-span-8 mt-10 md:mt-0 space-y-20">
          <LayoutServiceCard
            v-for="(service, index) in storeServices.services"
            :key="index"
            :service="service"
            :description="true"
          />
        </div>
      </LayoutPageSection>
    </section>
  </div>
</template>

<script setup>
import { servicesStore } from "~/stores/services";

definePageMeta({ layout: "page" });

const storeServices = servicesStore();
</script>
