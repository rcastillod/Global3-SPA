<template>
  <div>
    <HeaderApp />
    <div
      class="page-header -z-10 absolute top-0 left-0 w-full h-[25rem] bg-cover bg-no-repeat bg-center bg-top"
    ></div>
    <main>
      <slot />
    </main>
    <FooterApp />
  </div>
</template>
