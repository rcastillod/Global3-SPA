<script setup>
const config = useRuntimeConfig()
const api_url = config.strapiBaseUri
const props = defineProps({
  service: {
    type: Object
  },
  description: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="card py-20 px-8 bg-white/5 dark:bg-white rounded-xl relative transition-all ease-in-out duration-700 group link"
  >
    <div clas="card-inner">
      <div class="card-icon">
        <ElementsImageBlur
          :src="api_url + service.attributes.icono.data.attributes.url"
          :alt="service.attributes.titulo"
          :width="70"
        />
      </div>
      <div class="card-title mb-5">
        <div
          class="text-xl text-white dark:text-primary transition-colors duration-1000 ease-in-out group-hover:text-orange-2"
        >
          {{ service.attributes.titulo }}
        </div>
      </div>
      <div class="card-description">
        <p class="text-grey-dark dark:text-grey-light">
          {{
            description == true
              ? service.attributes.descripcion
              : service.attributes.resumen
          }}
        </p>
      </div>
    </div>
  </div>
</template>
