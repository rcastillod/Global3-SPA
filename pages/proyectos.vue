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
        </div>
        <button
          class="bg-green-200 hover:bg-green-300 p-2 rounded"
          @click="loadMore"
        >
          Load More
        </button>
        <!-- <Pagination
          :posts="data"
          :postsQuery="query"
          @updatePosts="updatePosts"
          :limit="10"
        /> -->
      </LayoutSiteSection>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { projectStore } from "~/stores/projects";
import gql from "graphql-tag";

definePageMeta({ layout: "page" });

const storeProjects = projectStore();
// // Call projectStore action
storeProjects.setProjects();

const projects = computed(() => {
  return data.value.proyectos.nodes;
});

const endCursor = computed(() => {
  return data.value.proyectos.pageInfo.endCursor;
});

const loadMore = () => {
  fetchMore({
    variables: {
      // Update the endCursor
      endCursor: endCursor.value,
    },
    updateQuery(prev, { fetchMoreResult }) {
      console.log(fetchMoreResult);
    },
  });
};

const query = gql`
  query proyectos($first: Int!) {
    proyectos(first: $first) {
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
`;
const { data } = await useAsyncQuery(query, { first: 2 });
console.log(data);

// const queryTest = async () => {
//   try {
//     const query = gql`
//       query proyectos($first: Int!) {
//         proyectos(first: $first) {
//           edges {
//             cursor
//             node {
//               databaseId
//               imagenProyecto {
//                 imagen {
//                   sourceUrl
//                 }
//               }
//               title
//             }
//           }
//           pageInfo {
//             endCursor
//             hasNextPage
//             hasPreviousPage
//             startCursor
//           }
//         }
//       }
//     `;
//     const variables = {
//       first: 5,
//     };
//     const { data, fetchMore } = await useAsyncQuery(query, variables);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// onMounted(() => {
//   queryTest();
// });
</script>
