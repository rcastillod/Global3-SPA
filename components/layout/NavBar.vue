<template>
  <nav>
    <div
      :class="[
        open
          ? 'flex flex-col absolute top-full left-0 mt-1 bg-primary dark:bg-background-color-light'
          : 'hidden lg:flex',
      ]"
      class="w-full"
    >
      <NuxtLink
        to="/agencia"
        class="block text-white dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-orange-2 transition-all ease-in-out duration-300 link"
        >Agencia</NuxtLink
      >
      <NuxtLink
        to="/servicios"
        class="block text-white dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-orange-2 transition-all ease-in-out duration-300 link"
        >Servicios</NuxtLink
      >
      <NuxtLink
        to="/proyectos"
        class="block text-white dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-orange-2 transition-all ease-in-out duration-300 link"
        >Proyectos</NuxtLink
      >
      <NuxtLink
        to="/soporte"
        class="block text-white dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-orange-2 transition-all ease-in-out duration-300 link"
        >Soporte</NuxtLink
      >
      <NuxtLink
        to="/contacto"
        class="block text-white dark:text-grey-light p-2 md:py-7 md:px-3 mx-1 border-b border-border-color dark:border-border-color-light md:border-b-0 hover:text-orange-2 transition-all ease-in-out duration-300 link"
        >Contacto</NuxtLink
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

<style>
a.router-link-active {
  @apply text-orange-2;
}
</style>
