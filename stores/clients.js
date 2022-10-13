import { defineStore } from 'pinia'

export const clientStore = defineStore('clients', {
  state: () => ({
    clients: null
  }),
  actions: {
    async setClients() {
      try {
        const { data } = await useFetch('https://v2.global3.cl/wp-json/wp/v2/clientes?page=1&per_page=100&_embed=1_fields=acf&acf_format=standard')
        const clientFields = data.value.map(({ id, title, acf }) => ({
          id, title, acf
        }))
        this.clients = clientFields
      } catch (error) {
        return error
      }
    }
  }
})