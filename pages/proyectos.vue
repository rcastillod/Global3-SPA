<template>
  <div>
    <LayoutPageHeader pageTitle="Proyectos" />
    <section class="w-full md:mt-10 px-4 md:px-8">
      <LayoutSiteSection
        :full="true"
        subtitle="Descubre nuestros casos"
        title="Últimos proyectos"
      >
        <div class="proyectos grid grid-cols-5 gap-8 mt-14">
          <LayoutProjectCard v-for="n in 15" />
        </div>
      </LayoutSiteSection>
    </section>
  </div>
</template>

<script>
definePageMeta({ layout: "page" });
</script>
