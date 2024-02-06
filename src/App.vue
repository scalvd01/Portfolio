<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import ContactoComponent from './components/ContactoComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

import { onMounted, ref, watch } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})

const isInicioVisible = ref(false)
const isExperienceVisible = ref(false)
const isProjectsVisible = ref(false)
const isContactoVisible = ref(false)
const sections: string[] = ['Inicio', 'Experiencia', 'Proyectos', 'Contacto']

const visibleSections = ref([
  isInicioVisible,
  isExperienceVisible,
  isProjectsVisible,
  isContactoVisible
])

const visibleSection = ref()

watch(
  visibleSections,
  () => {
    if (sections[visibleSections.value.findIndex((section) => section.value)]) {
      visibleSection.value = sections[visibleSections.value.findIndex((section) => section.value)]
    }
  },
  { deep: true }
)

// setInterval(() => {
// }, 1000)
</script>

<template>
  <NavbarComponent :visible-section="visibleSection" />

  <main>
    <HeroComponent @is-inicio-visible="(val) => (isInicioVisible = val.value)" />
    <ExperienceComponent @is-experience-visible="(val) => (isExperienceVisible = val.value)" />
    <ProjectsComponent @is-projects-visible="(val) => (isProjectsVisible = val.value)" />
    <ContactoComponent @is-contacto-visible="(val) => (isContactoVisible = val.value)" />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped></style>
