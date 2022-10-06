<template>
  <div class="w-full">
    <section class="container mx-auto">
      <LayoutHeroSection />
    </section>
    <section class="container mx-auto">
      <ElementsSectionDivider />
    </section>
    <section class="max-w-screen-lg mx-auto">
      <LayoutSiteSection subtitle="Que es lo que ofrecemos">
        <LayoutServicesTitle
          :services="[
            'Desarrollo Web',
            'Diseño',
            'Intranet',
            'Ecommerce',
            'Aplicaciones Moviles',
            'Community Manager',
            'SEO',
          ]"
        />
      </LayoutSiteSection>
      <LayoutServiceCard />
    </section>
  </div>
</template>
