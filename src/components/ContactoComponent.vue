<script setup lang="ts">
import TelephoneIcon from './icons/TelephoneIcon.vue'
import EnvelopeIcon from './icons/EnvelopeIcon.vue'
import LinkedInIcon from './icons/LinkedInIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import { ref, type Ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const contacto = ref(null)
const isContactoVisible = useElementVisibility(contacto)

const emit = defineEmits<{
  isContactoVisible: [val: Ref<boolean>]
}>()

watch(isContactoVisible, () => {
  emit('isContactoVisible', isContactoVisible)
  // console.log('Contacto ',isContactoVisible.value)
})
</script>

<template>
  <section
    id="Contacto"
    class="max-w-screen-lg z-30 relative flex flex-col justify-center items-center mx-auto p-6 pt-24"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-delay="200"
  >
    <h1
      class="inline-flex font-semibold sm:items-center text-lg sm:text-2xl text-primary text-center gap-1 sm:gap-2 mb-10 select-none"
    >
      <span><TelephoneIcon class="size-6" /></span>
      <span ref="contacto">Contacto</span>
    </h1>
    <div class="flex gap-16">
      <a
        href="mailto:santicalvo1@gmail.com"
        class="my-1 text-lg font-semibold text-gray-900 inline-flex items-center"
        ><EnvelopeIcon class="size-8 mr-2 hover:text-orange-500"
      /></a>
      <a
        href="www.linkedin.com/in/santiago-calvo-de-la-fuente-347a44293"
        class="my-1 text-lg font-semibold text-gray-900"
        ><LinkedInIcon class="size-8 mr-2 hover:text-blue-700" />
      </a>
      <a href="https://github.com/scalvd01" class="my-1 text-lg font-semibold text-gray-900"
        ><GithubIcon class="size-8 mr-2 hover:text-green-600" />
      </a>
    </div>
  </section>
</template>
