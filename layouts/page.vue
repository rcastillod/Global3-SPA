<template>
  <div>
    <Header />
    <div
      class="page-header flex items-center justify-center relative -z-10 w-full h-[25rem] bg-cover bg-no-repeat bg-center bg-top"
      :style="pageTitleBg"
    >
      <LayoutPageHeader :pageTitle="pageName" />
    </div>
    <main>
      <slot />
    </main>
    <ElementsPreloader v-if="preloader" />
    <Footer />
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeMount } from "vue";

// Preloader
let preloader = ref("true");

onBeforeMount(() => {
  preloader.value = true;
}),
  onMounted(() => {
    preloader.value = false;
  });

const route = useRoute();

// Page Header Title
const pageName = computed(() => {
  return route.name;
});

// Page Header Images
const pageTitleBg = computed(() => {
  if (route.name == "agencia") {
    return "background-image:url(./agencia-page-title.jpg)";
  } else if (route.name == "servicios") {
    return "background-image:url(./servicios-page-title.jpg)";
  } else if (route.name == "proyectos") {
    return "background-image:url(./proyectos-page-title.jpg)";
  } else if (route.name == "soporte") {
    return "background-image:url(./soporte-page-title.jpg)";
  } else if (route.name == "contacto") {
    return "background-image:url(./contacto-page-title.jpg)";
  }
});
</script>
