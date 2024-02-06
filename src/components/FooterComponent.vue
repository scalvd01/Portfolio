<script setup lang="ts">
import VueIcon from './icons/VueIcon.vue'
</script>

<template>
  <section
    class="max-w-screen-lg z-30 relative flex flex-col justify-center items-center mx-auto p-6 pt-24  "
  >
  <div class="w-full border-t-2"></div>
    <div class="flex flex-col items-center gap-y-1 pt-6  ">
      <div class="flex flex-col sm:flex-row justify-center">
        <span> © 2024 Santiago Calvo </span>
        <span class="hidden sm:block mx-1 opacity-50">|</span>
        <span class="flex flex-wrap justify-center items-center whitespace-pre">
          Made with ❤️ and <span><VueIcon /></span>.
        </span>
      </div>
      <span class="text-black text-xs"> v1.0.0 </span>
    </div>
  </section>
</template>
