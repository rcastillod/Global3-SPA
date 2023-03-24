<template>
  <NuxtLink to="/proyectos"
    class="h-[200px] w-[200px] flex items-center justify-center relative rounded-full link link-anim" data-aos="fade-down"
    data-aos-duration="1000">
    <div
      class="h-3/4 w-3/4 flex items-center justify-center bg-gradient-to-r from-orange-1 to-orange-2 to-orange-3 rounded-full"
      :class="{ 'rotate-90': projects }">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-10 h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
    <div class="text h-full w-full absolute">
      <p>
        <span v-for="(split, index) in textSplit" class="absolute left-2/4 text-white"
          :style="[`transform: rotate(${index * 8.1}deg)`]">
          {{ split }}
        </span>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  projects: {
    type: Boolean
  }
});

const textSplit = computed(() => {
  let text = props.text;
  let splited = text.split("");
  return splited;
});
</script>

<style scoped>
@media (min-width: 1024px) {
  a svg {
    transition: transform 300ms ease-in-out;
  }
  a:hover svg {
    transform: scale(0);
  }
}
.text {
  animation: textRotate 10s linear infinite;
}
.text span {
  transform-origin: 0 100px;
}
@keyframes textRotate {
  0% {
    transform: rotate(360deg);
  }
}
</style>
