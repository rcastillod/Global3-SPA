<template>
  <div
    class="card py-20 px-8 bg-white/5 dark:bg-white rounded-xl relative transition-all ease-in-out duration-700 group"
  >
    <div clas="card-inner">
      <div class="card-icon">
        <ElementsImageBlur
          :src="support.icono"
          :alt="support.title"
          :width="70"
        />
      </div>
      <div class="card-title mb-5">
        <div
          class="text-xl text-white dark:text-primary transition-colors duration-300 ease-in-out group-hover:text-orange-2"
        >
          {{ support.title }}
        </div>
      </div>
      <div class="card-description">
        <p class="text-grey-dark dark:text-grey-light">
          {{ support.content }}
        </p>
      </div>
      <ElementsButtonGradient
        v-if="support.link != ''"
        class="mt-5"
        :link="support.link"
        :target="support.target"
      >
        Descargar
      </ElementsButtonGradient>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  support: {
    type: Object,
  },
});
</script>
