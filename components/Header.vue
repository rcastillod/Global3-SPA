<template>
  <header
    class="backdrop-blur-md w-full fixed top-0 z-10 py-3 border-b border-border-color dark:border-border-color-light"
  >
    <div class="container mx-auto px-4 md:px-0">
      <div class="header-inner flex items-center justify-between">
        <div
          class="header-left flex items-center justify-between md:justify-start lg:basis-[55%] w-full"
        >
          <ElementsLogoApp />
          <div class="flex gap-5">
            <LayoutNavBar></LayoutNavBar>
            <ElementsSwitchMode class="flex order-first md:hidden" />
          </div>
        </div>
        <div
          class="header-right hidden md:flex items-center justify-end lg:basis-[45%] gap-8"
        >
          <ElementsButtonGradient class="hidden md:block" link="contacto"
            >Contáctanos</ElementsButtonGradient
          >
          <ElementsSwitchMode class="hidden md:flex" />
        </div>
      </div>
    </div>
  </header>
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
