<script setup>
definePageMeta({ layout: "page" });

const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: "post",
  body: {
    query: `
      query agenciaPage {
        page(id: 606, idType: DATABASE_ID) {
          id
          title
          databaseId
          uri
          empresa {
            nuestraEmpresa {
              anteTitulo
              titulo
              descripcion
              imagen {
                sourceUrl
              }
            }
            filosofia {
              anteTitulo
              titulo
              descripcion
              imagen {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  },
  transform(data) {
    return data.data.page.empresa;
  },
});
</script>

<template>
  <div>
    <!-- Empresa -->
    <section class="w-full md:mt-10">
      <LayoutPageSection class="items-center">
        <div
          class="col-span-12 md:col-span-6 space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p
            class="text-grey-dark dark:text-grey-light text-xl"
            data-aos="flip-down"
            data-aos-duration="1000"
          >
            {{ data.nuestraEmpresa.anteTitulo }}
          </p>
          <h3
            class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            {{ data.nuestraEmpresa.titulo }}
          </h3>
          <div class="space-y-6 mr-0 md:mr-10">
            <p
              class="text-grey-dark dark:text-grey-light"
              v-html="data.nuestraEmpresa.descripcion"
            ></p>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-6 mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ElementsSectionImage :img="data.nuestraEmpresa.imagen.sourceUrl" />
        </div>
      </LayoutPageSection>
    </section>
    <!-- Services -->
    <section class="marquee-wrapper w-full relative">
      <ElementsTextMarquee
        :texts="['Desarrollo Web', 'Diseño', 'Intranet', 'Ecoommerce']"
      />
      <ElementsTextMarquee
        :texts="['Aplicaciones Moviles', 'Community Manager', 'SEO']"
        direction="left"
        :bordered="true"
      />
    </section>
    <!-- Filosofy -->
    <section class="w-full">
      <LayoutPageSection class="items-center">
        <div
          class="col-span-12 md:col-span-6 mb-10 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <ElementsSectionImage :img="data.filosofia.imagen.sourceUrl" />
        </div>
        <div
          class="col-span-12 md:col-span-6 space-y-6 ml-0 md:ml-14"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p class="text-grey-dark dark:text-grey-light text-xl">
            {{ data.filosofia.anteTitulo }}
          </p>
          <h3
            class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
          >
            {{ data.filosofia.titulo }}
          </h3>
          <div class="space-y-6 mr-0 md:mr-10">
            <p
              class="text-grey-dark dark:text-grey-light"
              v-html="data.filosofia.descripcion"
            ></p>
          </div>
        </div>
      </LayoutPageSection>
    </section>
    <!-- Business -->
    <section class="w-full">
      <p class="text-grey-dark dark:text-grey-light text-xl text-center">
        Hemos trabajado con
      </p>
      <LayoutBusiness />
    </section>
  </div>
</template>

<style scoped>
.marquee-wrapper::before,
.marquee-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  width: 40%;
  height: 100%;
  z-index: 2;
}
.marquee-wrapper::before {
  @apply bg-gradient-to-r from-primary dark:from-background-color-light;
  left: 0;
}
.marquee-wrapper::after {
  @apply bg-gradient-to-l from-primary dark:from-background-color-light;
  right: 0;
}
</style>
