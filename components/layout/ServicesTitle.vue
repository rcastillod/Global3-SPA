<template>
  <div class="flex gap-0 md:gap-x-3 md:gap-y-5 flex-wrap mt-14">
    <h2 v-for="(service, index) in services" :key="index"
      class="service-title font-arimo uppercase text-white dark:text-primary tracking-wide font-medium"
      data-aos="flip-down" data-aos-duration="1000">
      {{ service.title }} /
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  services: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.service-title {
  font-size: clamp(2rem, 5vw, 2.7rem);
}
</style>
