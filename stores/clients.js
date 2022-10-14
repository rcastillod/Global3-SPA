import { defineStore } from 'pinia'

export const clientStore = defineStore('clients', {
  state: () => ({
    clients: null
  }),
  actions: {
    async setClients() {
      try {
        const query = gql`
          query clientes {
            clientes(first: 1000) {
              nodes {
                clienteId
                title(format: RENDERED)
                clientes {
                  logo {
                    sourceUrl
                  }
                }
              }
            }
          }
        `;
        const { data } = await useAsyncQuery(query);
        this.clients = data.value.clientes.nodes
      } catch (error) {
        return error
      }
    }
  }
})