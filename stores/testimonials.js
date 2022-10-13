import { defineStore } from 'pinia'

export const testimonialStore = defineStore('testimonials', {
  state: () => ({
    testimonials: null
  }),
  actions: {
    async setTestimonials() {
      try {
        const { data } = await useFetch('https://v2.global3.cl/wp-json/wp/v2/testimonios?page=1&per_page=100&_embed=1')
        const testimonialFields = data.value.map(({ id, title, content }) => ({
          id, title, content
        }))
        this.testimonials = testimonialFields
      } catch (error) {
        return error
      }
    }
  }
})