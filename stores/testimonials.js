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
          query testimonios {
            testimonios {
              nodes {
                databaseId
                content(format: RENDERED)
                title(format: RENDERED)
              }
            }
          }
        `
        const { data } = await useAsyncQuery(query)
        this.testimonials = data.value.testimonios.nodes
      } catch (error) {
        return error
      }
    }
  }
})