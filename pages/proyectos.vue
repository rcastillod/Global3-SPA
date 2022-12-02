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
        >
          <LayoutProjectCard
            v-for="(project, index) in projects"
            :key="project.id"
            :project="project"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="`${index}00`"
          />

          <!-- <p v-if="loading">loading...</p>
          <pre v-else>{{ result }}</pre> -->
        </div>
        <button
          class="bg-green-200 hover:bg-green-300 p-2 rounded"
          @click="loadMore"
        >
          Load More
        </button>
      </LayoutSiteSection>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import gql from "graphql-tag";

definePageMeta({ layout: "page" });

const numberOfProjects = ref(20);

const { result, loading, fetchMore } = await useQuery(
  gql`
    query proyectos($first: Int!, $endCursor: String) {
      proyectos(first: $first, after: $endCursor) {
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

const endCursor = computed(() => {
  return result.value.proyectos.pageInfo.endCursor;
});

const loadMore = () => {
  fetchMore({
    variables: {
      first: numberOfProjects.value,
      endCursor: endCursor.value,
    },
    updateQuery(prev, { fetchMoreResult }) {
      // Make a copy of existing data
      console.log(fetchMoreResult);
      const mergedData = {
        ...prev,
      };

      // Merge nodes
      mergedData.proyectos = {
        ...prev.proyectos,
        nodes: [...prev.proyectos.nodes, ...fetchMoreResult.proyectos.nodes],
      };

      // Update endCursor
      mergedData.proyectos.pageInfo = fetchMoreResult.proyectos.pageInfo;

      return mergedData;
    },
  });
};

// const fetchProjects = gql`
//   query proyectos($first: Int!, $endCursor: String) {
//     proyectos(first: $first, after: $endCursor) {
//       nodes {
//         databaseId
//         imagenProyecto {
//           imagen {
//             sourceUrl
//           }
//         }
//         title
//       }
//       pageInfo {
//         endCursor
//         hasNextPage
//         hasPreviousPage
//         startCursor
//       }
//     }
//   }
// `;
// const variables = {
//   first: numberOfProjects.value,
//   offset: endCursor.value,
// };
// const { result, fetchMore } = useQuery(fetchProjects, variables);
</script>
