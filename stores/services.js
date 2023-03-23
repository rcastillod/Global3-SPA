import { defineStore } from 'pinia'
import gql from 'graphql-tag'

export const servicesStore = defineStore('services', {
  state: () => ({
    services: null,
  }),
  actions: {
    async setServices() {
      try {
        const query = gql`
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
        const { data } = await useAsyncQuery(query)
        this.services = data.value.servicios.data
      } catch (error) {
        console.log(error)
        // let the form component display the error
        return error
      }
    },
  },
})