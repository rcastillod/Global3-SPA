<template>
  <div
    class="flex gap-14 md:gap-52 overflow-hidden whitespace-nowrap py-5 mt-14 border-y border-border-color dark:border-border-color-light"
  >
    <img
      v-for="logo in logos"
      :src="logo"
      class="anim-wrapper"
      alt=""
      width="100"
    />
  </div>
</template>

<script>
import logo1 from "~/assets/images/logo1.svg";
import logo2 from "~/assets/images/logo2.svg";
import logo3 from "~/assets/images/logo3.svg";
import logo4 from "~/assets/images/logo4.svg";
export default {
  computed: {
    logos() {
      return [logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4];
    },
  },
};
</script>

<style scoped>
.anim-wrapper {
  animation: logo-marquee-right 10s linear infinite;
  padding-right: 1.5625rem;
}
@keyframes logo-marquee-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
