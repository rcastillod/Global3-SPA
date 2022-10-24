<template>
  <div
    class="mx-auto py-20 md:py-36"
    :class="full == true ? 'w-full px-0' : 'max-w-screen-xl px-4 md:px-8'"
  >
    <p
      v-if="subtitle"
      :class="subtitleAlignment"
      class="text-grey-dark dark:text-grey-light text-xl"
      data-aos="flip-down"
      data-aos-duration="1000"
    >
      {{ subtitle }}
    </p>
    <h3
      v-if="title"
      :class="titleAlignment"
      class="text-white dark:text-primary text-4xl font-arimo uppercase mt-5 tracking-wider"
      data-aos="flip-up"
      data-aos-duration="1000"
    >
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  full: {
    type: Boolean,
  },
  subtitle: {
    type: String,
    required: false,
  },
  subtitleAlign: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  titleAlign: {
    type: String,
    required: false,
  },
});

const subtitleAlignment = computed(() => {
  if (props.subtitleAlign == "center") {
    return "text-center";
  } else if (props.subtitleAlign == "right") {
    return "text-right";
  }
});

const titleAlignment = computed(() => {
  if (props.titleAlign == "center") {
    return "text-center";
  } else if (props.titleAlign == "right") {
    return "text-right";
  }
});
</script>
