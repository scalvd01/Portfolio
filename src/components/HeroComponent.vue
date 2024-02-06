<script setup lang="ts">
import LocationIcon from '@/components/icons/LocationIcon.vue'
import GraduateIcon from '@/components/icons/GraduateIcon.vue'
import SkillsGridComponent from '@/components/SkillsGridComponent.vue'

import { ref, type Ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const inicio = ref(null)
const isInicioVisible = useElementVisibility(inicio)

const emit = defineEmits<{
  isInicioVisible: [val: Ref<boolean>]
}>()

watch(isInicioVisible, () => {
  emit('isInicioVisible', isInicioVisible)
  // console.log('Hero ', isHeroVisible.value)
})

const firstTiming = '200'
const secondTiming = '400'
const thirdTiming = '600'
</script>

<template>
  <section
    id="Inicio"
    class="max-w-screen-lg z-30 relative flex flex-col justify-center items-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-90px)] mx-auto p-6 select-none"
  >
    <div
      ref="inicio"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      :data-aos-delay="firstTiming"
      class="w-full flex flex-col justify-center items-center z-30"
    >
      <h1 class="text-6xl sm:text-8xl leading-none font-bold text-primary text-center font-serif">
        Hola, soy Santiago
      </h1>
      <p class="text-primary text-3xl sm:text-5xl text-center mt-4 z-30 font-mono">
        un
        <span class="text-accent font-bold">Desarrollador FullStack</span>
      </p>
    </div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      :data-aos-delay="secondTiming"
      class="w-full flex flex-col justify-center items-center mt-12 z-30"
    >
      <p
        class="inline-flex items-center text-lg sm:text-2xl text-primary text-center gap-1 sm:gap-2"
      >
        <span><LocationIcon /></span>
        Situado en León, España
      </p>
      <p
        class="inline-flex sm:items-center text-lg sm:text-2xl text-primary text-center gap-1 sm:gap-2"
      >
        <span><GraduateIcon /></span>
        <span>Graduado en Ingeniería Informática</span>
      </p>
    </div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      :data-aos-delay="thirdTiming"
      class="w-full flex flex-col justify-center items-center mt-12 z-30"
    >
      <h1
        class="inline-flex items-center font-semibold text-lg sm:text-2xl text-primary text-center"
      >
        Habilidades
      </h1>
      <SkillsGridComponent class="mt-4" />
    </div>
    <div id="blurred-blob-1" class="absolute z-10 top-10 left-0">
      <div
        class="size-64 opacity-50 md:size-80 md:opacity-40 bg-orange-400 rounded-full blur-3xl"
      ></div>
    </div>
    <div id="blurred-blob-2" class="absolute z-10 right-0 xl:-right-20">
      <div
        class="size-40 opacity-80 md:size-96 md:opacity-40 bg-blue-500 rounded-full blur-3xl"
      ></div>
    </div>
    <div id="blurred-blob-3" class="absolute z-10 bottom-10 left-20">
      <div
        class="size-40 opacity-80 md:size-80 md:opacity-30 bg-green-500 rounded-full blur-3xl"
      ></div>
    </div>
  </section>
</template>
