<template>
  <div class="grid grid-cols-4">
    <div class="hidden md:flex relative col-span-1 items-center justify-center">
      <ElementsImageBlur
        :src="quoteImage"
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
        pauseOnMouseEnter: true,
      }"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(text, index) in swiperTextBase" :key="index">
        <div>
          <p class="text-white dark:text-primary text-md md:text-xl mb-5">
            {{ text.testimonio }}
          </p>
          <span
            class="text-grey-dark dark:text-grey-light uppercase font-arimo tracking-wide italic"
            >{{ text.name }}</span
          >
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import quoteImage from "~/assets/images/quote.png";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    quoteImage() {
      return quoteImage;
    },
  },
  setup() {
    const swiperTextBase = ref([
      {
        testimonio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sollicitudin tempor nullam risus nulla. Pellentesque tortor aliquet curabitur suscipit amet. Integer arcu sit pellentesque arcu. Lacus viverra tortor dolor sed. Nibh nunc venenatis risus id.",
        name: "Evan You",
      },
      {
        testimonio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sollicitudin tempor nullam risus nulla. Pellentesque tortor aliquet curabitur suscipit amet. Integer arcu sit pellentesque arcu. Lacus viverra tortor dolor sed. Nibh nunc venenatis risus id.",
        name: "Felipe Morales",
      },
      {
        testimonio:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sollicitudin tempor nullam risus nulla. Pellentesque tortor aliquet curabitur suscipit amet. Integer arcu sit pellentesque arcu. Lacus viverra tortor dolor sed. Nibh nunc venenatis risus id.",
        name: "Rodrigo Castillo",
      },
    ]);
    return { modules: [Pagination, Autoplay], swiperTextBase };
  },
};
</script>

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
