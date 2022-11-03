<template>
  <NuxtLink
    :to="{ name: 'index' }"
    class="logo relative block pr-10 mr-5 link shrink-0"
  >
    <img :src="logoSrc" alt="Logo Global3" width="180" />
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";

const colorMode = useColorMode();
const src = ref("");

const logoSrc = computed(() => {
  if (colorMode.preference == "dark") {
    return (src.value = "/logoAppLight.svg");
  }
  return (src.value = "/logoAppDark.svg");
});
</script>
