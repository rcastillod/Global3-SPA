<template>
  <!-- <div v-for="service in data.data">{{ service.title }}</div> -->
  <span v-for="servicio in service">{{ servicio.title }}</span>
</template>

<script setup>
// Define params wherever, through `defineProps()`, `useRoute()`, etc.
// const { data } = await useFetch("https://api.nuxtjs.dev/posts/1");
const { data: service } = await useAsyncData("service", () =>
  $fetch("/services.json")
);
</script>
