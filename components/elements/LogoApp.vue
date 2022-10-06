<template>
  <NuxtLink to="/" class="logo relative block pr-10 mr-5">
    <img
      :src="
        $colorMode.value == 'dark'
          ? 'assets/images/logoAppLight.svg'
          : 'assets/images/logoAppDark.svg'
      "
      alt="Logo Global3"
      width="180"
    />
  </NuxtLink>
</template>

<style scoped>
.logo::after {
  @apply bg-border-color dark:border-border-color-light;
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  height: 50%;
  width: 1px;
  transform: translateY(-50%);
}
</style>
