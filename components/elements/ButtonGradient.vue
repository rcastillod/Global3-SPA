<template>
  <NuxtLink
    :to="link"
    :target="target"
    class="inline-block bg-gradient-to-r from-orange-1 via-orange-2 to-orange-3 text-white py-2 px-5 rounded hover:shadow-lg hover:shadow-orange-1/40 transition-all ease-in-out duration-500 link"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    default: "_self",
  },
});
</script>
