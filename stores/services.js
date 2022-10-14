import { defineStore } from 'pinia'

export const servicesStore = defineStore('services', {
  state: () => ({
    services: null,
  }),
  actions: {
    async setServices() {
      try {
        const query = gql`
          query servicios {
            servicios {
              nodes {
                databaseId
                title(format: RENDERED)
                content(format: RENDERED)
                excerpt(format: RENDERED)
                iconoServicios {
                  icono {
                    sourceUrl
                  }
                }
              }
            }
          }
        `
        const { data } = await useAsyncQuery(query)
        this.services = data.value.servicios.nodes
      } catch (error) {
        console.log(error)
        // let the form component display the error
        return error
      }
    },
  },
})