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
        //const { data } = await useFetch('http://global3headless.local/wp-json/wp/v2/clientes?page=1&per_page=100&_embed=1_fields=acf&acf_format=standard')
        // const clientFields = data.value.map(({ id, title, acf }) => ({
        //   id, title, acf
        // }))
        this.clients = data.value.clientes.nodes
      } catch (error) {
        return error
      }
    }
  }
})