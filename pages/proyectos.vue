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
            v-for="(project, index) in storeProjects.projects"
            :key="project.id"
            :project="project"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="`${index}00`"
          />
        </div>

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
import { onMounted } from "vue";
import { projectStore } from "~/stores/projects";
import gql from "graphql-tag";

definePageMeta({ layout: "page" });

const storeProjects = projectStore();
// // Call projectStore action
storeProjects.setProjects();

const projects = ref(5);
const cursor = null;

const queryTest = async () => {
  try {
    const query = gql`
      query proyectos($first: Int!, $endCursor: String, $startCursor: String) {
        proyectos(first: $first, after: $endCursor, before: $startCursor) {
          edges {
            cursor
            node {
              databaseId
              imagenProyecto {
                imagen {
                  sourceUrl
                }
              }
              title
            }
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
    const variables = {
      first: 1,
      after: "YXJyYXljb25uZWN0aW9uOjUwOQ==",
      before: "YXJyYXljb25uZWN0aW9uOjUyNw==",
    };
    const { data } = await useAsyncQuery(query, variables);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  queryTest();
});
</script>
