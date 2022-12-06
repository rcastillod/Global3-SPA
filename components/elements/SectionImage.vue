<template>
  <nuxt-img
    format="webp"
    loading="lazy"
    :src="`${img}`"
    :alt="img"
    :class="class"
  />
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
});
</script>
