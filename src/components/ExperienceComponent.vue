<script setup lang="ts">
import CalendarIcon from './icons/CalendarIcon.vue'
import BriefcaseIcon from './icons/BriefcaseIcon.vue'
import ArrowTopRightOnSquare_Icon from './icons/Arrow-top-right-on-square_Icon.vue'

import { experienceList } from '@/data/Data'

import { ref, type Ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const experience = ref(null)
const isExperienceVisible = useElementVisibility(experience)

const emit = defineEmits<{
  isExperienceVisible: [val: Ref<boolean>]
}>()

watch(isExperienceVisible, () => {
  emit('isExperienceVisible', isExperienceVisible)
  // console.log('Experience ',isExperienceVisible.value)
})
</script>

<template>
  <section
    id="Experiencia"
    class="max-w-screen-lg z-30 relative flex flex-col justify-center items-center mx-auto p-6 pt-24"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-delay="200"
  >
    <h1
      class="inline-flex font-semibold sm:items-center text-lg sm:text-2xl text-primary text-center gap-1 sm:gap-2 mb-10 select-none"
    >
      <span><BriefcaseIcon /></span>
      <span ref="experience">Experiencia</span>
    </h1>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li
        class="mb-10 ms-6"
        v-for="(exp, index) in experienceList"
        :key="index"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        :data-aos-delay="200 + index * 100"
      >
        <span
          class="absolute flex items-center justify-center size-6 bg-blue-100 rounded-full -start-9 ring-8 ring-white"
        >
          <CalendarIcon class="size-4 text-blue-800" />
        </span>
        <a
          :href="exp.link"
          class="my-1 text-lg font-semibold text-gray-900 inline-flex items-center group/expTitle"
          :class="exp.link ? 'hover:underline' : ''"
        >
          {{ exp.company }}
          <ArrowTopRightOnSquare_Icon
            v-if="exp.link"
            class="size-4 inline ml-1 invisible group-hover/expTitle:visible"
          />
        </a>
        <h3 class="flex items-center mb-1 text-base font-semibold text-gray-900/90">
          {{ exp.role }}
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400">{{
          exp.date
        }}</time>
        <p class="mb-4 text-base font-normal text-gray-500">
          {{ exp.description }}
        </p>
        <div v-if="exp.technologies">
          <div
            v-for="(tech, index) in exp.technologies"
            :key="index"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            :data-aos-delay="200 + index * 100"
            class="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg mr-3 mb-3"
          >
            {{ tech }}
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
