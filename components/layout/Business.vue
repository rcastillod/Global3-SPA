<template>
  <div
    class="flex overflow-hidden py-16 mt-14 border-y border-border-color dark:border-border-color-light"
  >
    <div class="anim-wrapper flex whitespace-nowrap relative gap-14 md:gap-52">
      <div
        v-for="client in storeClients.clients"
        :key="client.id"
        class="w-[180px]"
      >
        <img :src="client.acf.logo.sizes.large" :alt="client.title.rendered" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { clientStore } from "~/stores/clients";
import { computed } from "vue";

const storeClients = clientStore();

// call clientStore action
storeClients.setClients();
</script>

<style scoped>
.anim-wrapper {
  animation: logo-marquee-right 100s linear infinite;
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
