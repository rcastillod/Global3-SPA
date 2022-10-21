<template>
  <div>
    <Header />
    <div
      class="page-header flex items-center justify-center -z-10 absolute top-0 left-0 w-full h-[25rem] bg-cover bg-no-repeat bg-center bg-top"
    >
      <LayoutPageHeader pageTitle="Agencia" />
    </div>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from "vue";

const route = useRoute();

const pageName = computed(() => {
  const name = first.toUppercase(route.name);
  return name;
});
</script>
