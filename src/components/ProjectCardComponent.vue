<script setup lang="ts">
import type { Project } from '@/data/Data'
import LinkIcon from './icons/LinkIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'

const props = defineProps<{ project: Project }>()
</script>

<template>
  <div
    class="flex flex-col items-center bg-white rounded-lg shadow-xl shadow-primary/30 md:flex-row md:p-4"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:object-contain md:h-auto md:w-48 md:rounded-lg"
      :src="props.project.image"
      :alt="props.project.name + '-image'"
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold font-serif tracking-tight text-secondary">
        {{ props.project.name }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ props.project.description }}
      </p>
      <div>
        <div
          v-for="(tech, index) in props.project.technologies"
          :key="index"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          :data-aos-delay="200 + index * 100"
          class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg mr-3 mb-3"
        >
          {{ tech }}
        </div>
      </div>
      <div class="flex">
        <div
          v-if="props.project.pageLink"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
        >
          <a
            :href="props.project.pageLink"
            class="inline-flex items-center px-3 py-1 text-lg font-semibold shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg mr-3 mb-3 shadow-accent/40 transition ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-accent/30 duration-200"
          >
            Ver <span><LinkIcon class="size-5 ml-2" /></span>
          </a>
        </div>
        <div
          v-if="props.project.githubLink"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="300"
        >
          <a
            :href="props.project.githubLink"
            class="inline-flex items-center px-3 py-1.5 font-semibold shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg mr-3 mb-3 shadow-blue-500/40 transition ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 duration-200"
          >
            <span><GithubIcon class="size-6" /></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
