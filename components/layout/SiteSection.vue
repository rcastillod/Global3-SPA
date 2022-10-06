<template>
  <div class="py-12 md:py-36">
    <p
      v-if="subtitle"
      :class="subtitleAlignment"
      class="text-grey-dark dark:text-grey-light text-xl"
    >
      {{ subtitle }}
    </p>
    <h3
      v-if="title"
      :class="titleAlignment"
      class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
    >
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
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
  },
  computed: {
    subtitleAlignment() {
      if (this.subtitleAlign == "center") {
        return "text-center";
      } else if (this.subtitleAlign == "right") {
        return "text-right";
      }
    },
    titleAlignment() {
      if (this.titleAlign == "center") {
        return "text-center";
      } else if (this.titleAlign == "right") {
        return "text-right";
      }
    },
  },
};
</script>
