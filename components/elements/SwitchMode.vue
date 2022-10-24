<template>
  <button
    v-if="$colorMode.preference === 'dark'"
    class="rounded-full h-10 w-10 border border-border-color dark:border-border-color-light flex items-center justify-center link"
    @click="setColorTheme('light')"
  >
    <img :src="darkIconSrc" width="24" alt="Moon Icon" />
  </button>
  <button
    v-else
    class="rounded-full h-10 w-10 border border-border-color dark:border-border-color-light flex items-center justify-center link"
    @click="setColorTheme('dark')"
  >
    <img :src="lightIconSrc" width="24" alt="Moon Icon" />
  </button>
</template>

<script setup>
import { computed } from "vue";
import darkIcon from "~/assets/images/dark.svg";
import lightIcon from "~/assets/images/light.svg";

const colorMode = useColorMode();

const setColorTheme = (modeSel) => {
  colorMode.preference = modeSel;
};

const darkIconSrc = computed(() => darkIcon);
const lightIconSrc = computed(() => lightIcon);
</script>
