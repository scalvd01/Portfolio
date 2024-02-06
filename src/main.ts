import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// import { initFlowbite } from 'flowbite'
// initFlowbite()

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

createApp(App).mount('#app')
