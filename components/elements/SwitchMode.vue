<template>
  <button
    class="rounded-full h-10 w-10 border border-border-color dark:border-border-color-light flex items-center justify-center"
    @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
  >
    <img
      v-if="$colorMode.value == 'light'"
      :src="darkIconSrc"
      width="24"
      alt="Moon Icon"
    />
    <img v-else :src="lightIconSrc" width="24" alt="Sun Icon" />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
import darkIcon from "~/assets/images/dark.svg";
import lightIcon from "~/assets/images/light.svg";

export default {
  setup() {
    type Theme = "light" | "dark";

    const setColorTheme = (newTheme: Theme) => {
      useColorMode().preference = newTheme;
    };

    const darkIconSrc = computed(() => darkIcon);
    const lightIconSrc = computed(() => lightIcon);

    return { setColorTheme, darkIconSrc, lightIconSrc };
  },
};
</script>
