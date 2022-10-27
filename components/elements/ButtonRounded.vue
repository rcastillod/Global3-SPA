<template>
  <NuxtLink
    :to="url"
    class="btn-rounded w-[200px] h-[200px] rounded-full flex items-center justify-center text-white text-xl bg-cover bg-center bg-no-repeat relative z-[1] link link-anim"
    :style="`background-image:url(${image})`"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "./btn-bg.jpg",
  },
});
</script>

<style scoped>
.btn-rounded::after {
  content: "";
  @apply bg-primary transition-all duration-500 ease-in absolute top-0 left-0 w-full h-full z-[-1] rounded-full;
}
.btn-rounded:hover::after {
  @apply bg-primary/80;
}
</style>
