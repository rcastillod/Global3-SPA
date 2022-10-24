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
      </LayoutSiteSection>
    </section>
  </div>
</template>

<script setup>
import { projectStore } from "~/stores/projects";

definePageMeta({ layout: "page" });

const storeProjects = projectStore();
// // Call projectStore action
storeProjects.setProjects();
</script>
