<template>
  <div class="flex justify-center py-20 z-1 relative">
    <h1 class="text-white text-6xl tracking-wider">{{ pageTitle }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
