import { defineStore } from 'pinia'

export const projectStore = defineStore('projects', {
  state: () => ({
    projects: null,
    loader: true
  }),
  actions: {
    async setProjects() {
      try {
        const { data, pending } = await useFetch('https://v2.global3.cl/wp-json/wp/v2/proyectos?page=1&per_page=20&_embed=1?_fields=acf&acf_format=standard')
        const projectsFields = data.value.map(({ id, slug, title, acf }) => ({
          id,
          slug,
          title,
          acf,
        }));
        this.projects = projectsFields
        if (pending.value == true)
          this.loader = false
      } catch (error) {
        console.log(error)
        // let the form component display the error
        return error
      }
    },
  },
})