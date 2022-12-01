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
          query proyectos($numProjects: Int!, $cursor: String) {
            proyectos(first: $numProjects, after: $cursor) {
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
        const variables = { numProjects: 5, cursor: null }
        const { data } = await useAsyncQuery(query, variables);
        this.projects = data.value.proyectos.nodes
      } catch (error) {
        console.log(error)
        return error
      }
    },
  },
})