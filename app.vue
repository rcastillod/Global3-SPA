<template>
  <NuxtLayout>
    <NuxtPage />
    <ElementsCustomCursor scaleElement="link" dotColor="#FF6100" borderColor="#FF6100" />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// AOS
onMounted(() => {
  AOS.init({
    disable: "false",
    once: true,
  });
});

// Scroll to top when navigate through pages
const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});
</script>

<style>
/* -------------------------------------------------------------------------- */
/*                                   GLOBAL                                   */
/* -------------------------------------------------------------------------- */
html,
body {
  min-height: 100vh;
  scroll-behavior: smooth;
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
  background-image: url(/noise.gif);
  z-index: -1;
  opacity: 0.05;
}
@media (max-width: 1024px) {
  body #__nuxt {
    overflow: hidden;
  }
}

/* Page Header */
.page-header::after {
  @apply bg-gradient-to-t from-primary dark:content-none;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30%;
  width: 100%;
}
</style>
