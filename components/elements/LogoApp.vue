<template>
  <NuxtLink :to="{ name: 'index' }" class="logo relative block pr-10 mr-5 link">
    <img :src="logoSrc" alt="Logo Global3" width="180" />
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";
import logoUrlDark from "~/assets/images/logoAppDark.svg";
import logoUrlLight from "~/assets/images/logoAppLight.svg";

const colorMode = useColorMode();

const logoSrc = computed(() => {
  if (colorMode.preference == "dark") {
    return logoUrlLight;
  }
  return logoUrlDark;
});
</script>
