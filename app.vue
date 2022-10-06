<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <ElementsCustomCursor
        scaleElement="logo"
        dotColor="#FF6100"
        borderColor="#FF6100"
      />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  min-height: 100vh;
}
body {
  @apply bg-primary dark:bg-background-color-light relative;
}
body::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(./assets/images/noise.gif);
  z-index: -1;
  opacity: 0.05;
}
</style>
