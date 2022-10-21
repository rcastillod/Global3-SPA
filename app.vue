<template>
  <Body :style="{ 'background-image': 'url(' + pageTitleBg + ')' }">
    <NuxtLayout>
      <NuxtPage />
      <ElementsCustomCursor
        scaleElement="logo"
        dotColor="#FF6100"
        borderColor="#FF6100"
      />
    </NuxtLayout>
  </Body>
</template>

<script setup>
import { ref, onMounted } from "vue";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({ disable: "phone" });
});

// Page Header Images
let pageTitleBg = ref("");
const route = useRoute();
if (route.name == "agencia") {
  pageTitleBg = "./agencia-page-title.jpg";
} else if (route.name == "servicios") {
  pageTitleBg = "./servicios-page-title.jpg";
} else if (route.name == "proyectos") {
  pageTitleBg = "./servicios-page-title.jpg";
} else if (route.name == "contacto") {
  pageTitleBg = "./contacto-page-title.jpg";
}
</script>

<style>
/* -------------------------------------------------------------------------- */
/*                               TRANSITION PAGE                               */
/* -------------------------------------------------------------------------- */
/* .layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
/* -------------------------------------------------------------------------- */
/*                                   GLOBAL                                   */
/* -------------------------------------------------------------------------- */
html,
body {
  min-height: 100vh;
}
body {
  @apply bg-primary dark:bg-background-color-light relative;
  @apply bg-cover bg-no-repeat bg-center bg-top;
}
body::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(./assets/images/noise.gif);
  z-index: -1;
  opacity: 0.05;
}

/* Page Header */
.page-header::after {
  @apply bg-gradient-to-t from-primary dark:from-background-color-light;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30%;
  width: 100%;
}
</style>
