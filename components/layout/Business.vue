<template>
  <div
    class="flex overflow-hidden py-5 mt-14 border-y border-border-color dark:border-border-color-light"
  >
    <div class="anim-wrapper flex whitespace-nowrap relative gap-14 md:gap-52">
      <img v-for="logo in logos" :src="logo" alt="" width="100" class="" />
    </div>
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
  animation: logo-marquee-right 57s linear infinite;
  padding-right: 1.5625rem;
  transform: translate3d(0%, 0, 0);
}
@keyframes logo-marquee-right {
  0% {
    transform: translate3d(0%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
