<script setup lang="ts">
import { Tooltip } from 'flowbite'
import { skills } from '@/data/Data'

const showTooltip = (targetElId: string, triggerType: any, event: any) => {
  const targetEl = document.getElementById(targetElId)
  const tooltip = new Tooltip(targetEl, event.target, { triggerType })
  tooltip.init()
}
</script>

<template>
  <div class="flex max-w-96 flex-wrap w-full justify-center gap-2">
    <div v-for="skill in skills" :key="skill.icon">
      <img
        class="hover:scale-110 transition-all duration-200"
        @mouseover="showTooltip(`tooltip-${skill.name}`, 'hover', $event)"
        :src="'https://skillicons.dev/icons?i=' + skill.icon"
        :alt="skill.name + '-logo'"
      />
      <div
        :id="'tooltip-' + skill.name"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {{ skill.name }}
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>
</template>
