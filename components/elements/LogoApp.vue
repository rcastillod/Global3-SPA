<template>
  <NuxtLink to="/" class="logo relative block pr-10 mr-5">
    <img :src="logoSrc" alt="Logo Global3" width="180" />
  </NuxtLink>
</template>

<script>
import logoUrlDark from "~/assets/images/logoAppDark.svg";
import logoUrlLight from "~/assets/images/logoAppLight.svg";
export default {
  computed: {
    logoSrc() {
      if (this.$colorMode.value == "dark") {
        return logoUrlLight;
      }
      return logoUrlDark;
    },
  },
};
</script>
