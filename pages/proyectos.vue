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
const { result, loading, fetchMore } = await useQuery(
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
  variables
)

const projects = computed(() => {
  return result.value.proyectos.data
})

// Load next group of project method
const nextProjects = () => {
  // Scroll to top after update query
  window.scrollTo(0, 400)
  // Use fetchMore to load more results in query
  fetchMore({
    variables: {
      limit: projectsLimit.value,
      start: (projectsStart.value += projectsLimit.value)
    },
    // Update the previous query
    updateQuery(previousResult, { fetchMoreResult }) {
      if (!fetchMoreResult) return previousResult

      // Make a copy of existing data
      const mergedData = {
        ...previousResult
      }
      // Merge query data
      mergedData.proyectos = {
        ...previousResult.proyectos,
        data: [...fetchMoreResult.proyectos.data]
      }
      // Update query meta pagination fields
      mergedData.proyectos.meta = fetchMoreResult.proyectos.meta

      console.log(mergedData)

      return mergedData
    }
  })
}

// Load previous group of project method
const prevProjects = () => {
  // Scroll to top after update query
  window.scrollTo(0, 400)
  // Use fetchMore to load more results in query
  fetchMore({
    variables: {
      limit: projectsLimit.value,
      start: (projectsStart.value -= projectsLimit.value)
    },
    updateQuery(previousResult, { fetchMoreResult }) {
      // Make a copy of existing data
      const mergedData = {
        ...previousResult
      }
      // Merge query data
      mergedData.proyectos = {
        ...previousResult.proyectos,
        data: [...fetchMoreResult.proyectos.data]
      }

      // Update query meta pagination fields
      mergedData.proyectos.meta = fetchMoreResult.proyectos.meta

      return mergedData
    }
  })
}
</script>

<template>
  <div>
    <section class="w-full md:mt-10 px-4 md:px-8">
      <LayoutSiteSection
        :full="true"
        subtitle="Descubre nuestros casos"
        title="Últimos proyectos"
      >
        <div
          class="proyectos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-14"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <LayoutSkeletonProjectCard v-if="loading" v-for="items in 10" />
          <LayoutProjectCard
            v-else
            v-for="(project, index) in projects"
            :key="project.attributes.id"
            :project="project"
          />
        </div>
        <div class="w-full flex justify-center mt-20 gap-4">
          <button
            v-if="result.proyectos.meta.pagination.page > 1"
            @click="prevProjects"
            class="inline-block bg-gradient-to-r from-orange-1 via-orange-2 to-orange-3 text-white py-2 px-5 rounded hover:shadow-lg hover:shadow-orange-1/40 transition-all ease-in-out duration-500 link"
          >
            Anterior
          </button>
          <button
            v-if="
              result.proyectos.meta.pagination.page <
              result.proyectos.meta.pagination.pageCount
            "
            @click="nextProjects"
            class="inline-block bg-gradient-to-r from-orange-1 via-orange-2 to-orange-3 text-white py-2 px-5 rounded hover:shadow-lg hover:shadow-orange-1/40 transition-all ease-in-out duration-500 link"
          >
            Siguiente
          </button>
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
