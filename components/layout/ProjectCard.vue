<script setup>
import { computed, ref, onMounted } from "vue";

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

const cardWidth = ref(0);
const cardHeight = ref(0);

onMounted(() => {
  const cardElement = document.querySelectorAll('.card');
  cardElement.forEach((card) => {
    cardWidth.value = card.offsetWidth;
    cardHeight.value = card.offsetHeight;
    card.addEventListener('mousemove', e => {
      const cardRect = e.target.getBoundingClientRect();
      const offsetX = e.clientX - cardRect.left;
      const offsetY = e.clientY - cardRect.top;
      card.style.setProperty("--mouse-x", `${offsetX}px`)
      card.style.setProperty("--mouse-y", `${offsetY}px`)
    });
  })
});

</script>

<template>
  <div
    class="card pt-2 pb-10 px-2 bg-white/5 dark:bg-white rounded-xl relative transition-all ease-in-out duration-700 group link">
    <div class="card-inner">
      <div class="card-image w-full h-52">
        <ElementsSectionImage :img="projectImage" class="rounded-md object-cover w-full h-full" />
      </div>
      <div class="card-title mt-5 px-5">
        <div class="text-xl text-white dark:text-primary">
          {{ project.title }}
        </div>
      </div>
    </div>
    <div class="card-radial-gradient rounded-xl"></div>
  </div>
</template>

<style scoped>
.card-radial-gradient {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.card-radial-gradient::before,
.card-radial-gradient::after {
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: opacity .5s;
  width: 100%;
}
.card-radial-gradient::before {
  background: radial-gradient(var(--circle-size, 600px) circle at var(--mouse-x) var(--mouse-y),rgba(255,255,255,.06),transparent 40%);
  z-index: 2;
}

.card-radial-gradient::after {
  background: radial-gradient(var(--circle-size, 600px) circle at var(--mouse-x) var(--mouse-y),rgba(255,255,255,.4),transparent 40%);
  z-index: 1;
}

.card-radial-gradient:is(:hover, :focus)::before,
.card-radial-gradient:is(:hover, :focus)::after {
  opacity: 0.2;
}

</style>