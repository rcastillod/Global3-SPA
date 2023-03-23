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
    '@nuxtjs/apollo',
    '@nuxt/image-edge',
  ],
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://global3headless.local/graphql',
      strapiBaseUri: process.env.API_URL || "http://localhost:1337"
    }
  },
  routeRules: {
    '/**': {
      cors: true
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql",
        // httpEndpoint: 'http://global3headless.local/graphql',
        httpLinkOptions: {
          credentials: 'include'
        }
      }
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
    fallback: 'dark',
  },
})
