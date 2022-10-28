<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <ElementsPreloader v-if="preloader" />
    <div id="aside"></div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";

// Preloader
let preloader = ref("true");

onBeforeMount(() => {
  preloader.value = true;
}),
  onMounted(() => {
    preloader.value = false;
  });
</script>
