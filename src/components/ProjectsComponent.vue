<script setup lang="ts">
import CodeIcon from './icons/CodeIcon.vue'
import ProjectCardComponent from './ProjectCardComponent.vue'
import { projectsList } from '@/data/Data'

import { ref, type Ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const projects = ref(null)
const isProjectsVisible = useElementVisibility(projects)

const emit = defineEmits<{
  isProjectsVisible: [val: Ref<boolean>]
}>()

watch(isProjectsVisible, () => {
  emit('isProjectsVisible', isProjectsVisible)
  // console.log('Projects ',isProjectsVisible.value)
})
</script>

<template>
  <section
    id="Proyectos"
    class="max-w-screen-lg z-30 relative flex flex-col justify-center items-center mx-auto p-6 pt-20"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-delay="200"
  >
    <h1
      class="inline-flex font-semibold sm:items-center text-lg sm:text-2xl text-primary text-center gap-1 sm:gap-2 mb-10 select-none"
    >
      <span><CodeIcon /></span>
      <span ref="projects">Proyectos</span>
    </h1>
    <div class="grid grid-cols-1 gap-8 z-30">
      <div v-for="(project, index) in projectsList" :key="index">
        <ProjectCardComponent
          :project="project"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
        />
      </div>
    </div>
  </section>
</template>

