<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// AOS
onMounted(() => {
  AOS.init({
    disable: "false",
    once: true,
  });
});

defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<template>
  <section class="w-full h-screen">
    <LayoutPageSection class="items-center h-full">
      <Elements404Svg class="col-span-8" data-aos="zoom-in" data-aos-duration="500" />
      <div class="col-span-4" data-aos="fade-up" data-aos-duration="1000">
        <h3 class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider mb-10">
          Lo sentimos pero esta pagina no existe.
        </h3>
        <a class="inline-block bg-gradient-to-r from-orange-1 via-orange-2 to-orange-3 text-white py-2 px-5 rounded hover:shadow-lg hover:shadow-orange-1/40 transition-all ease-in-out duration-500 link"
          @click="handleClearError">Volver al Home</a>
      </div>
    </LayoutPageSection>
  </section>
  <ElementsCustomCursor scaleElement="link" dotColor="#FF6100" borderColor="#FF6100" />
</template>