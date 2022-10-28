// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Global3',
      titleTemplate: '%s - Desarrollo Web, Aplicaciones Móviles, Comercio Electrónico',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },
  build: { transpile: ['yup', '@vee-validate/rules', 'gsap'] },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/color-mode', 
    '@pinia/nuxt',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://v2.global3.cl/graphql',
      }
    },
  },
  tailwindcss: {
    cssPath: '~/assets/ss/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },
  colorMode: {
    preference: 'system',
    classSuffix: '',
    fallback: 'dark',
  },
})
