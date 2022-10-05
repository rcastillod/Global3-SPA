<template>
  <button
    class="rounded-full h-10 w-10 border border-border-color dark:border-border-color-light flex items-center justify-center"
    @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
  >
    <svg
      v-if="$colorMode.value == 'light'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V2M12 22V21M21 12H22M2 12H3M18.5 5.5L20 4M4 20L5.5 18.5M4 4L5.5 5.5M18.5 18.5L20 20"
        stroke="white"
        stroke-opacity="0.35"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        stroke="white"
        stroke-opacity="0.35"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <svg
      v-else
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 1.5C6.75 1.5 2.25 5.25 2.25 11.25C2.25 17.25 6.75 21.75 12.75 21.75C18.75 21.75 22.5 17.25 22.5 13.5C14.25 18.75 5.25 9.75 10.5 1.5Z"
        stroke="#65676B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>
