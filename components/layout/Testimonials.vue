<script setup>
import { ref, computed } from 'vue'
import { testimonialStore } from '~/stores/testimonials'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
const onSwiper = (swiper) => {
  //console.log(swiper);
}
const onSlideChange = () => {
  //console.log("slide change");
}
const modules = computed(() => [Pagination, Autoplay])

const storeTestimonials = testimonialStore()
// Call testimonialStore action
storeTestimonials.setTestimonials()
</script>

<template>
  <div class="grid grid-cols-4">
    <div class="hidden md:flex relative col-span-1 items-center justify-center">
      <ElementsImageBlur
        src="/quote.png"
        alt="Quote"
        position="relative"
        width="150"
      />
    </div>
    <swiper
      class="h-52 pr-5 md:pl-14 md:pr-32 overflow-hidden col-span-full md:col-span-3"
      :modules="modules"
      :speed="1000"
      :space-between="50"
      :loop="true"
      :direction="'vertical'"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(text, index) in storeTestimonials.testimonials"
        :key="index"
      >
        <div>
          <p class="text-white dark:text-primary text-md md:text-xl mb-5">
            {{ text.attributes.texto }}
          </p>
          <span
            class="text-grey-dark dark:text-grey-light uppercase font-arimo tracking-wide italic"
            >{{ text.attributes.nombre }}</span
          >
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-pagination {
  @apply flex flex-col items-center justify-center;
}
.swiper-pagination-bullet {
  @apply bg-white/30 dark:bg-primary w-2 h-2;
}
.swiper-pagination-bullet-active {
  @apply bg-orange-3 dark:!bg-orange-3 w-3 h-3;
}
</style>
