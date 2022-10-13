import { defineStore } from 'pinia'

export const projectStore = defineStore('projects', {
  state: () => ({
    projects: null
  }),
  actions: {
    async setProjects() {
      try {
        const { data } = await useFetch('http://global3headless.local/wp-json/wp/v2/proyectos?page=1&per_page=100&_embed=1?_fields=acf&acf_format=standard')
        const projectsFields = data.value.map(({ id, slug, title, acf }) => ({
          id,
          slug,
          title,
          acf,
        }));
        this.projects = projectsFields
      } catch (error) {
        console.log(error)
        // let the form component display the error
        return error
      }
    },
  },
})