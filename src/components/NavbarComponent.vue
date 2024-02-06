<script setup lang="ts">
import LogoIcon from './icons/LogoIcon.vue'

const props = defineProps<{ visibleSection?: string }>()

const botones: string[] = ['Inicio', 'Experiencia', 'Proyectos', 'Contacto']

function scrollToSection(section: string) {
  const element = document.getElementById(section)
  if (element) {
    if (section === 'Inicio') {
      window.scrollTo({ top: 0 })
    } else {
      element.scrollIntoView()
    }
  }
}
</script>

<template>
  <nav class="z-50 sticky top-0 start-0 backdrop-blur-lg">
    <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <LogoIcon class="h-14 opacity-90" />
      </a>

      <div class="text-center">
        <button
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 bg-white/30 md:bg-transparent"
        >
          <li v-for="(boton, index) in botones" :key="index">
            <a
              @click="scrollToSection(boton)"
              class="cursor-pointer block py-2 px-3 rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0"
              :class="props.visibleSection === boton ? 'text-accent font-bold ' : 'text-gray-800'"
              >{{ boton }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div
    id="drawer-right-example"
    class="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80"
    tabindex="-1"
    aria-labelledby="drawer-right-label"
  >
    <div class="flex items-center justify-end">
      <button
        type="button"
        data-drawer-hide="drawer-right-example"
        aria-controls="drawer-right-example"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="w-full">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 bg-white/30 md:bg-transparent"
      >
        <li v-for="(boton, index) in botones" :key="index">
          <a
            @click="scrollToSection(boton)"
            data-drawer-hide="drawer-right-example"
            class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0"
            :class="props.visibleSection === boton ? 'text-accent font-bold ' : 'text-gray-800'"
            >{{ boton }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- <nav class="z-50 sticky top-0 start-0 backdrop-blur-lg">
    <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <LogoIcon class="h-14 opacity-90" />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 bg-white/30 md:bg-transparent"
        >
          <li v-for="(boton, index) in botones" :key="index">
            <a
              data-collapse-toggle="navbar-default"
              :href="'#' + boton"
              class="block py-2 px-3 rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0"
              :class="props.visibleSection === boton ? 'text-accent font-bold ' : 'text-gray-800'"
              >{{ boton }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav> -->

<style scoped>
.hover-underline-animation {
  position: relative;
  color: black;
  /* padding-bottom: 2px; */
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
