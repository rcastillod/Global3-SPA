<template>
  <div
    class="card py-20 px-8 bg-white/5 dark:bg-white rounded-xl relative hover:py-10 transition-all ease-in-out duration-700 group"
  >
    <div clas="card-inner">
      <div class="card-icon">
        <img
          :src="service.icon"
          :alt="service.title"
          width="90"
          class="absolute z-10 -top-8 -right-4"
        />
        <img
          :src="service.icon"
          :alt="service.title"
          width="90"
          class="absolute z-10 -top-5 -right-7 blur-lg -z-[1px] opacity-40"
        />
      </div>
      <div class="card-title mb-5">
        <div
          class="text-xl text-white dark:text-primary transition-colors duration-300 ease-in-out group-hover:text-orange-2"
        >
          {{ service.title }}
        </div>
      </div>
      <div class="card-description">
        <p class="text-grey-dark dark:text-grey-light">
          {{ service.excerpt }}
        </p>
      </div>
      <nuxt-link
        to="/"
        class="absolute bottom-3 left-8 opacity-0 group-hover:opacity-100 transform -translate-y-10 group-hover:-translate-y-2 transition-all duration-1000 ease-in-out"
        >hola</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>

<!-- <script setup>
// Define params wherever, through `defineProps()`, `useRoute()`, etc.
const { data: services } = await useFetch("/services.json");
// const { data: service, refresh } = await useAsyncData("service", () =>
//   $fetch("/services.json")
// );
console.log(services);
</script> -->
