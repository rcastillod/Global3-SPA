import { defineStore } from 'pinia'
import gql from 'graphql-tag'

export const clientStore = defineStore('clients', {
  state: () => ({
    clients: null
  }),
  actions: {
    async setClients() {
      try {
        const query = gql`
          query {
            clientes {
              data {
                attributes {
                  nombre
                  logo {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `;
        const { data } = await useAsyncQuery(query);
        this.clients = data.value.clientes.data
      } catch (error) {
        return error
      }
    }
  }
})