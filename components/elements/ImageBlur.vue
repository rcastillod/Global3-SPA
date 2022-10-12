<template>
  <div
    class="blur-image"
    :class="
      position == 'relative'
        ? 'relative'
        : `absolute w-[${width + 'px'} z-[1] -top-8 right-4 md:-right-4]`
    "
  >
    <img v-for="n in 2" :src="src" :alt="alt" :width="width" />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  position: {
    type: String,
  },
  width: {
    type: [String, Number],
    required: true,
  },
});
</script>

<style scoped>
.blur-image img:nth-child(1) {
  z-index: 1;
}
.blur-image img:nth-child(2) {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  filter: blur(14px);
  opacity: 0.4;
  z-index: -1;
}
@media (min-width: 992px) {
  .blur-image img:nth-child(2) {
    top: 1.25rem;
    right: -0.95rem;
  }
}
</style>
