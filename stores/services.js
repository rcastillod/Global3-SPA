import { defineStore } from 'pinia'
import gql from 'graphql-tag'

const SERVICES_QUERY = gql`
query {
  servicios {
    data {
      attributes {
        titulo
        resumen
        descripcion
        icono {
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
`

export const servicesStore = defineStore('services', {
  state: () => ({
    services: null,
  }),
  actions: {
    async setServices() {
      try {
        const { data } = await useAsyncQuery(SERVICES_QUERY)
        this.services = data.value.servicios.data
      } catch (error) {
        console.error(error)
        // let the form component display the error
        return error
      }
    },
  },
})