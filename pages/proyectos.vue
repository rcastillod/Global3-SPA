<script setup>
import { ref, computed, onMounted } from "vue";
import gql from "graphql-tag";

definePageMeta({ layout: "page" });

const query = gql`
query proyectos($limit: Int) {
      proyectos(first: $limit) {
        nodes {
          databaseId
          imagenProyecto {
            imagen {
              sourceUrl
            }
          }
          title
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
`

const variables = ref({
  limit: 20,
})

const { data, pending, refresh } = await useAsyncQuery(query, variables.value);

const projects = computed(() => {
  if (data && data.value && data.value.proyectos) {
    return data.value.proyectos.nodes;
  } else {
    return [];
  }
});

const loadMoreProjects = () => {
  if (data.value.proyectos.pageInfo.hasNextPage) {
    variables.value.limit = variables.value.limit + 20;
    refresh(variables.value);
  }
};

</script>

<template>
  <div>
    <section class="w-full md:mt-10 px-4 md:px-8">
      <LayoutSiteSection :full="true" subtitle="Descubre nuestros casos" title="Últimos proyectos">
        <div class="proyectos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-14"
          data-aos="fade-up" data-aos-duration="1000">
          <LayoutProjectCard v-for="(project, index) in projects" :key="project.id" :project="project" />
          <LayoutSkeletonProjectCard v-if="pending" v-for="items in 20" />
        </div>
        <div class="w-full flex justify-center mt-20 gap-4">
          <ElementsButtonTextAnim v-if="data.proyectos.pageInfo.hasNextPage" @click="loadMoreProjects"
            text="Cargar Más Cargar Más Cargar Más Cargar Más" :projects="true" />
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
