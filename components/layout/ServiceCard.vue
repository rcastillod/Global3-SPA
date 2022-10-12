<template>
  <div
    class="card py-20 px-8 bg-white/5 dark:bg-white rounded-xl relative transition-all ease-in-out duration-700 group"
  >
    <div clas="card-inner">
      <div class="card-icon">
        <ElementsImageBlur
          :src="service.icon"
          :alt="service.title"
          :width="70"
        />
      </div>
      <div class="card-title mb-5">
        <div
          class="text-xl text-white dark:text-primary transition-colors duration-300 ease-in-out group-hover:text-orange-2"
        >
          {{ service.title }}
        </div>
      </div>
      <div class="card-description">
        <p class="text-grey-dark dark:text-grey-light">
          {{ description == true ? service.description : service.excerpt }}
        </p>
      </div>
      <nuxt-link
        to="/"
        class="absolute bottom-7 right-8 text-white group-hover:text-orange-2 transition-all duration-1000 ease-in-out"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  service: {
    type: Object,
  },
  description: {
    type: Boolean,
    default: false,
  },
});
</script>
