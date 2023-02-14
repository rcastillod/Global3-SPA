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
          <LayoutSkeletonProjectCard v-if="loading" v-for="items in 20" />
          <LayoutProjectCard
            v-else
            v-for="(project, index) in projects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div class="w-full flex justify-center mt-20 gap-4">
          <button
            v-if="result.proyectos.pageInfo.hasPreviousPage"
            @click="prevProjects"
            class="inline-block bg-gradient-to-r from-orange-1 via-orange-2 to-orange-3 text-white py-2 px-5 rounded hover:shadow-lg hover:shadow-orange-1/40 transition-all ease-in-out duration-500 link"
          >
            Anterior
          </button>
          <button
            v-if="result.proyectos.pageInfo.hasNextPage"
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

<script setup>
import { ref, computed, onMounted } from "vue";
import gql from "graphql-tag";

definePageMeta({ layout: "page" });

const numberOfProjects = ref(20);

const { result, loading, fetchMore } = await useQuery(
  gql`
    query proyectos($first: Int, $last: Int, $after: String, $before: String) {
      proyectos(first: $first, last: $last, after: $after, before: $before) {
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
  `,
  {
    first: numberOfProjects.value,
  }
);

const projects = computed(() => {
  return result.value.proyectos.nodes;
});

const startCursor = computed(() => {
  return result.value.proyectos.pageInfo.startCursor;
});
const endCursor = computed(() => {
  return result.value.proyectos.pageInfo.endCursor;
});

const nextProjects = () => {
  // Scroll to top after update query
  window.scrollTo(0, 400);

  fetchMore({
    variables: {
      first: numberOfProjects.value,
      after: endCursor.value,
    },
    updateQuery(prev, { fetchMoreResult }) {
      // Make a copy of existing data
      const mergedData = {
        ...prev,
      };

      // Merge nodes
      mergedData.proyectos = {
        ...prev.proyectos,
        nodes: [...fetchMoreResult.proyectos.nodes],
      };

      // Update endCursor
      mergedData.proyectos.pageInfo = fetchMoreResult.proyectos.pageInfo;

      return mergedData;
    },
  });
};

const prevProjects = () => {
  // Scroll to top after update query
  window.scrollTo(0, 400);

  fetchMore({
    variables: {
      first: null,
      after: null,
      last: numberOfProjects.value,
      before: startCursor.value,
    },
    updateQuery(prev, { fetchMoreResult }) {
      // Make a copy of existing data
      const mergedData = {
        ...prev,
      };

      // Merge nodes
      mergedData.proyectos = {
        ...prev.proyectos,
        nodes: [...fetchMoreResult.proyectos.nodes],
      };

      // Update endCursor
      mergedData.proyectos.pageInfo = fetchMoreResult.proyectos.pageInfo;

      return mergedData;
    },
  });
};

// onMounted(() => {});
</script>

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
