<template>
  <div class="flex gap-x-3 gap-y-5 flex-wrap mt-14">
    <h2
      v-for="(service, index) in services"
      :key="index"
      class="font-arimo uppercase text-white dark:text-primary text-5xl tracking-wide font-light"
    >
      {{ service }} /
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
};
</script>
