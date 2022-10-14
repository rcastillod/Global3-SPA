import { defineStore } from 'pinia'

export const projectStore = defineStore('projects', {
  state: () => ({
    projects: null,
    loader: true
  }),
  actions: {
    async setProjects() {
      try {
        const query = gql`
          query proyectos {
            proyectos(first: 500) {
              nodes {
                databaseId
                imagenProyecto {
                  imagen {
                    sourceUrl
                  }
                }
                title
              }
            }
          }
        `
        const { data } = await useAsyncQuery(query);
        console.log(data)
        this.projects = data.value.proyectos.nodes
      } catch (error) {
        console.log(error)
        return error
      }
    },
  },
})