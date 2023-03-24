import { defineStore } from 'pinia'
import gql from 'graphql-tag'

export const projectStore = defineStore('projects', {
  state: () => ({
    projects: null,
    projectsMeta: null,
    limit: 20,
  }),
  actions: {
    async setProjects() {
      try {
        const query = gql`
          query ($limit: Int, $start: Int) {
            proyectos(pagination: { limit: $limit, start: $start }) {
              data {
                id
                attributes {
                  nombre
                  imagen {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
              meta {
                pagination {
                  total
                  page
                  pageSize
                  pageCount
                }
              }
            }
          }
        `
        const variables = { limit: this.limit }
        const { data, pending, refresh } = await useAsyncQuery(query, variables);
        this.projects = data.value.proyectos.data
        this.projectsMeta = data.value.proyectos.meta

      } catch (error) {
        console.log(error)
        return error
      }
    },
  },
})