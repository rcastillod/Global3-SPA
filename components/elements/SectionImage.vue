<template>
  <img :src="`${img}`" :alt="img" :class="class" />
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    class: {
      type: String,
      default: "",
    },
  },
};
</script>
