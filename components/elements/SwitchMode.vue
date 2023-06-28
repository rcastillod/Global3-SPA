<template>
  <button v-if="$colorMode.preference === 'dark'"
    class="rounded-full h-10 w-10 border border-white dark:border-primary flex items-center justify-center link"
    @click="setColorTheme('light')">
    <img :src="src" width="24" alt="Moon Icon" />
  </button>
  <button v-else
    class="rounded-full h-10 w-10 border border-white dark:border-primary flex items-center justify-center link"
    @click="setColorTheme('dark')">
    <img :src="src" width="24" alt="Moon Icon" />
  </button>
</template>

<script setup>
import { computed } from "vue";
import darkIcon from "/dark.svg";
import lightIcon from "/light.svg";

const colorMode = useColorMode();
const src = ref('')

const setColorTheme = (modeSel) => {
  colorMode.preference = modeSel;
};

const darkIconSrc = computed(() => darkIcon);
const lightIconSrc = computed(() => lightIcon);

const buttonSource = computed(() => {
  if (colorMode.preference == "dark") {
    return (src.value = "/dark.svg");
  }
  return (src.value = "/light.svg");
})

onMounted(() => {
  src.value = buttonSource.value; // Set initial value
});

// Watch for color mode changes
watch(() => colorMode.preference, () => {
  src.value = buttonSource.value; // Update src value when color mode changes
});
</script>
