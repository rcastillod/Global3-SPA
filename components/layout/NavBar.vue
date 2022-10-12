<template>
  <nav>
    <div
      :class="[
        open
          ? 'flex flex-col absolute top-full left-0 mt-1 bg-primary dark:bg-background-color-light'
          : 'hidden md:flex',
      ]"
      class="w-full"
    >
      <NuxtLink
        to="/agencia"
        class="nav-link block text-grey-dark dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-white transition-all ease-in-out duration-300"
        >Agencia</NuxtLink
      >
      <NuxtLink
        to="/servicios"
        class="block text-grey-dark dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-white transition-all ease-in-out duration-300"
        >Servicios</NuxtLink
      >
      <NuxtLink
        to="/proyectos"
        class="block text-grey-dark dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-white transition-all ease-in-out duration-300"
        >Proyectos</NuxtLink
      >
      <NuxtLink
        to="/"
        class="block text-grey-dark dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-white transition-all ease-in-out duration-300"
        >Soporte</NuxtLink
      >
    </div>
    <button
      class="md:hidden rounded-full h-10 w-10 border border-border-color dark:border-border-color-light flex items-center justify-center"
      @click="open = !open"
    >
      <ElementsOpenMenuIcon v-if="!open" :size="24" />
      <ElementsCloseMenuIcon v-else :size="24" />
    </button>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
const dropdownNavbar = ref(false);
</script>
