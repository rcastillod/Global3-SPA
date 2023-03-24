<script setup>
import { ref, computed, onMounted } from 'vue'
import gql from 'graphql-tag'

definePageMeta({ layout: 'page' })

const projectsLimit = ref(20)
const projectsStart = ref(0)

const variables = ref({
  limit: projectsLimit.value,
  start: projectsStart.value
})
const { data, pending, refresh } = await useAsyncQuery(
  gql`
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
  `,
  variables.value
)

const projects = computed(() => {
  return data.value.proyectos.data
})

// Load more projects method
const loadMoreProjects = () => {
  // Use refresh to load more results in query
  if (
    data.value.proyectos.meta.pagination.page <
    data.value.proyectos.meta.pagination.pageCount
  ) {
    // Reasign limit variable plus 20
    variables.value.limit = variables.value.limit + 20
    // Refresh de data
    refresh()
  }
}
</script>

<template>
  <div>
    <section class="w-full md:mt-10 px-4 md:px-8">
      <LayoutSiteSection :full="true" subtitle="Descubre nuestros casos" title="Últimos proyectos">
        <div class="proyectos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-14">
          <LayoutProjectCard v-for="(project, index) in projects" :key="project.attributes.id" :project="project"
            data-aos="fade-up" data-aos-duration="1000" />
          <LayoutSkeletonProjectCard v-if="pending" v-for="items in 20" />
        </div>
        <div class="w-full flex justify-center mt-20 gap-4">
          <ElementsButtonTextAnim v-if="data.proyectos.meta.pagination.page < data.proyectos.meta.pagination.pageCount"
            @click="loadMoreProjects" text="Cargar Más Cargar Más Cargar Más Cargar Más" :projects="true" />
        </div>
      </LayoutSiteSection>
    </section>
  </div>
</template>

<style scoped>
.loader span {
  font-size: 28px;
  line-height: 0;
  color: #fff;
  animation-name: blink;
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
.loader span:first-child {
  padding-left: 2px;
}
.loader span:nth-child(2) {
  animation-delay: 0.3s;
}
.loader span:nth-child(3) {
  animation-delay: 0.6s;
}
@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
