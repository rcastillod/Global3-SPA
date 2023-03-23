<script setup>
import gql from 'graphql-tag'
definePageMeta({ layout: 'page' })

const config = useRuntimeConfig()
const api_url = config.strapiBaseUri
const query = gql`
  query {
    agencia {
      data {
        attributes {
          bloqueempresa {
            antetitulo
            titulo
            texto
            imagen {
              data {
                attributes {
                  url
                }
              }
            }
          }
          bloquefilosofia {
            antetitulo
            titulo
            texto
            imagen {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
const { data } = await useAsyncQuery(query)
const reduceQuery = computed(() => {
  return data.value.agencia.data.attributes
})
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
            {{ reduceQuery.bloqueempresa.antetitulo }}
          </p>
          <h3
            class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            {{ reduceQuery.bloqueempresa.titulo }}
          </h3>
          <div class="space-y-6 mr-0 md:mr-10">
            <p
              class="text-grey-dark dark:text-grey-light"
              v-html="reduceQuery.bloqueempresa.texto"
            ></p>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-6 mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ElementsSectionImage
            :img="
              api_url + reduceQuery.bloqueempresa.imagen.data.attributes.url
            "
          />
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
          <ElementsSectionImage
            :img="
              api_url + reduceQuery.bloquefilosofia.imagen.data.attributes.url
            "
          />
        </div>
        <div
          class="col-span-12 md:col-span-6 space-y-6 ml-0 md:ml-14"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p class="text-grey-dark dark:text-grey-light text-xl">
            {{ reduceQuery.bloquefilosofia.antetitulo }}
          </p>
          <h3
            class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
          >
            {{ reduceQuery.bloquefilosofia.titulo }}
          </h3>
          <div class="space-y-6 mr-0 md:mr-10">
            <p
              class="text-grey-dark dark:text-grey-light"
              v-html="reduceQuery.bloquefilosofia.texto"
            ></p>
          </div>
        </div>
      </LayoutPageSection>
    </section>
    <!-- Business -->
    <!-- <section class="w-full">
      <p class="text-grey-dark dark:text-grey-light text-xl text-center">
        Hemos trabajado con
      </p>
      <LayoutBusiness />
    </section> -->
  </div>
</template>

<style scoped>
.marquee-wrapper::before,
.marquee-wrapper::after {
  content: '';
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
