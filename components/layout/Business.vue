<script setup>
import { clientStore } from '~/stores/clients'

const storeClients = clientStore()
// call clientStore action
storeClients.setClients()

const config = useRuntimeConfig()
const api_url = config.strapiBaseUri
</script>

<template>
  <div
    class="flex overflow-hidden py-16 mt-14 border-y border-border-color dark:border-border-color-light"
  >
    <div class="clients flex relative overflow-hidden select-none">
      <div class="anim-wrapper flex shrink-0 justify-around min-w-full">
        <div v-for="client in storeClients.clients" :key="client.attributes.id">
          <img
            :src="api_url + client.attributes.logo.data.attributes.url"
            :alt="client.attributes.nombre"
          />
        </div>
      </div>
      <div class="anim-wrapper flex shrink-0 justify-around min-w-full">
        <div v-for="client in storeClients.clients" :key="client.attributes.id">
          <img
            :src="api_url + client.attributes.logo.data.attributes.url"
            :alt="client.attributes.nombre"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --gap: 13rem;
}
@media (max-width: 768px) {
  :root {
    --gap: 3.5rem;
  }
}
.clients {
  gap: var(--gap);
}
.anim-wrapper {
  animation: logo-marquee-right 100s linear infinite;
  gap: var(--gap);
}

@keyframes logo-marquee-right {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
