<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <ElementsCustomCursor
        scaleElement="logo"
        dotColor="#FF6100"
        borderColor="#FF6100"
      />
    </NuxtLayout>
  </div>
</template>

<script>
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init({ disable: "phone" });
  },
};
</script>

<style>
/* -------------------------------------------------------------------------- */
/*                               TANSITION PAGE                               */
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
