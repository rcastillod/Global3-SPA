<template>
  <NuxtLink
    to="/"
    class="w-[200px] h-[200px] rounded-full bg-primary-shade flex items-center justify-center text-white text-xl"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  mounted() {
    this.setRotationOnLoad();
  },
  methods: {
    setRotationOnClick() {
      this.$gsap.to(".title2", { rotation: 90, x: 100, duration: 2 });
    },
    setRotationOnLoad() {
      this.$gsap.to(".title1", { rotation: 27, x: 100, duration: 1 });
    },
  },
};
</script>
