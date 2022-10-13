import { defineStore } from 'pinia'

export const servicesStore = defineStore('services', {
  state: () => ({
    services: null,
  }),
  actions: {
    async setServices() {
      try {
        const { data } = await useFetch('http://global3headless.local/wp-json/wp/v2/servicios?page=1&per_page=100&_embed=1?_fields=acf&acf_format=standard')
        const servicesFields = data.value.map(({ id, slug, title, content, excerpt, acf }) => ({
          id,
          slug,
          title,
          content,
          excerpt,
          acf,
        }));
        this.services = servicesFields
      } catch (error) {
        console.log(error)
        // let the form component display the error
        return error
      }
    },
  },
})