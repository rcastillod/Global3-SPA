<template>
  <div
    class="card pt-2 pb-10 px-2 bg-white/5 dark:bg-white rounded-xl relative transition-all ease-in-out duration-700 group"
  >
    <div class="card-inner">
      <div class="card-image w-full h-52">
        <ElementsSectionImage
          :img="projectImage"
          class="rounded-md object-cover w-full h-full"
        />
      </div>
      <div class="card-title mt-5 px-5">
        <div
          class="text-xl text-white dark:text-primary transition-colors duration-300 ease-in-out group-hover:text-orange-2"
        >
          {{ project.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
  },
});

const projectImage = computed(() => {
  if (props.project.imagenProyecto.imagen != null) {
    return props.project.imagenProyecto.imagen.sourceUrl;
  } else {
    return "/bg-proyects.jpg";
  }
});
</script>
