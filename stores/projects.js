import { defineStore } from 'pinia'

export const projectStore = defineStore('projects', {
  state: () => ({
    projects: null
  }),
  actions: {
    async setProjects() {
      try {
        const { data, pending, error, refresh } = await useFetch('http://global3headless.local/wp-json/wp/v2/proyectos?page=1&per_page=100&_embed=1?_fields=acf&acf_format=standard')
        this.projects = data.value
      } catch (error) {
        console.log(error)
        // let the form component display the error
        return error
      }
    },
  },
})