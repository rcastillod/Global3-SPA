import { defineStore } from 'pinia'
import gql from 'graphql-tag'

export const testimonialStore = defineStore('testimonials', {
  state: () => ({
    testimonials: null
  }),
  actions: {
    async setTestimonials() {
      try {
        const query = gql`
          query {
            testimonios {
              data {
                attributes {
                  nombre
                  texto
                }
              }
            }
          }
        `
        const { data } = await useAsyncQuery(query)
        this.testimonials = data.value.testimonios.data
      } catch (error) {
        return error
      }
    }
  }
})