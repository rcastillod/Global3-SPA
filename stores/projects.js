import { defineStore } from 'pinia'
import gql from 'graphql-tag'

export const projectStore = defineStore('projects', {
  state: () => ({
    projects: null,
    loader: true,
    after: null
  }),
  actions: {
    async setProjects() {
      try {
        const query = gql`
          query proyectos {
            proyectos(first: 20) {
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
        this.projects = data.value.proyectos.nodes
      } catch (error) {
        console.log(error)
        return error
      }
    },
  },
})