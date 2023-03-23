<script setup>
import { ref } from 'vue'
import gql from 'graphql-tag'
definePageMeta({ layout: 'page' })

const config = useRuntimeConfig()
const api_url = config.strapiBaseUri

const query = gql`
  query {
    soporte {
      data {
        attributes {
          bloquesoporte {
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
  return data.value.soporte.data.attributes
})

const supports = ref([
  {
    title: 'Presencial',
    content:
      '¡Nos preocupamos de nuestros clientes! Si requiere de soporte presencial puede ser solicitado por teléfono o correo electrónico.',
    icono: 'face-to-face.png',
    link: '',
    target: ''
  },
  {
    title: 'teamwiewer',
    content:
      'El soporte o capacitación virtual nos permite tomar control de los equipos remotos y explicar o solucionar el problema que puedan tener.',
    icono: 'teamviewer.png',
    link: 'https://get.teamviewer.com/pxp53p8',
    target: '_blank'
  },
  {
    title: 'Telefónico / Email',
    content:
      'La forma más rápida y sencilla de solucionar tus dudas. Contáctanos a través de nuestro sitio o llámanos por teléfono para aclarar tus dudas.',
    icono: 'online.png',
    link: '',
    target: ''
  }
])
</script>

<template>
  <div>
    <!-- Empresa -->
    <section class="w-full md:mt-10">
      <LayoutPageSection class="items-center">
        <div
          class="col-span-12 md:col-span-6 mt-10 md:mt-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <ElementsSectionImage img="soporte.jpg" />
        </div>
        <div
          class="col-span-12 md:col-span-6 space-y-6 md:ml-14 mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p
            class="text-grey-dark dark:text-grey-light text-xl"
            data-aos="flip-down"
            data-aos-duration="1000"
          >
            {{ reduceQuery.bloquesoporte.antetitulo }}
          </p>
          <h3
            class="text-white dark:text-primary text-4xl font-arimo uppercase mt-8 tracking-wider"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            {{ reduceQuery.bloquesoporte.titulo }}
          </h3>
          <div class="space-y-6 mr-0 md:mr-10">
            <p
              class="text-grey-dark dark:text-grey-light"
              v-html="reduceQuery.bloquesoporte.texto"
            ></p>
          </div>
        </div>
      </LayoutPageSection>
      <LayoutPageSection class="gap-8 gap-y-14">
        <LayoutSupportCard
          class="col-span-12 md:col-span-6 lg:col-span-4"
          v-for="(support, index) in supports"
          :key="index"
          :support="support"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="`${index}00`"
        />
      </LayoutPageSection>
    </section>
  </div>
</template>
