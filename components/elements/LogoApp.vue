<script setup>
import { computed, onMounted, watch } from "vue";

const colorMode = useColorMode();
const src = ref("");

const logoSrc = computed(() => {
  if (colorMode.preference == "dark") {
    return (src.value = "/logoAppLight.svg");
  }
  return (src.value = "/logoAppDark.svg");
});

onMounted(() => {
  src.value = logoSrc.value; // Set initial value
});

// Watch for color mode changes
watch(() => colorMode.preference, () => {
  src.value = logoSrc.value; // Update src value when color mode changes
});

</script>

<template>
  <NuxtLink :to="{ name: 'index' }" class="logo relative block pr-10 mr-5 link shrink-0">
    <img :src="src" alt="Logo Global3" width="180" />
  </NuxtLink>
</template>


