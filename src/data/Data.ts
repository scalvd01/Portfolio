export const skills: Array<{ icon: string; name: string }> = [
  { icon: 'html', name: 'HTML' },
  { icon: 'css', name: 'CSS' },
  { icon: 'javascript', name: 'JavaScript' },
  { icon: 'tailwind', name: 'Tailwind' },
  { icon: 'vue', name: 'Vue.js' },
  { icon: 'nodejs', name: 'Node.js' },
  { icon: 'py', name: 'Python' },
  { icon: 'tensorflow', name: 'TensorFlow' },
  { icon: 'mongodb', name: 'MongoDB' },
  { icon: 'figma', name: 'Figma' },
  { icon: 'xd', name: 'Adobe XD' },
  { icon: 'photoshop', name: 'Photoshop' },
  { icon: 'blender', name: 'Blender' }
]

export const experienceList: Array<{
  company: string
  role: string
  date: string
  link?: string
  description: string
  technologies?: string[]
}> = [
  {
    company: 'Proconsi S.L.',
    role: 'Estudiante de prácticas externas',
    date: ' 01/2022 – 06/2022',
    link: 'https://www.proconsi.com/',
    description:
      'Visión artificial y Conteo de vehículos. Investigación de algoritmos de detección de OpenCV. Ejecución del flujo completo de entrenamiento de un clasificador.',
    technologies: ['Python', 'OpenCV', 'Tensorflow', 'YOLOv3']
  }
]

export type Project = {
  name: string
  description: string
  technologies: string[]
  pageLink?: string
  githubLink?: string
  image: string
}

export const projectsList: Array<Project> = [
  {
    name: 'Trabajo Fin De Grado',
    description:
      'Implementación de múltiples arquitecturas de CNN. Entrenamiento y aplicación de distintos algoritmos para la detección y clasificación morfológica de auroras boreales en las imágenes del instrumento FAI a bordo del satélite CASSIOPE/e-POP (ESA).',
    technologies: ['Python', 'Tensorflow', 'keras'],
    image: '/projectsImages/tfg_project_image.webp'
  },
  {
    name: 'Paperclips',
    description:
      'Juego web autoincremental de gestión de recursos con mejoras y complejidad ascendente. Con internacionalización completa de la aplicación.',
    technologies: ['Vue', 'Tailwind', 'Flowbite', 'VueUse', 'i18n', 'Pinia'],
    pageLink: 'https://paperclips-game.netlify.app/',
    githubLink: 'https://github.com/scalvd01/Paperclips-game',
    image: '/projectsImages/paperclips_project.webp'
  },
  {
    name: 'The Binding of Isaac Items Wiki',
    description:
      'Wiki en la que se detalla la información de los ítems y objetos del juego The Binding of Isaac y sus expansiones.',
    technologies: ['Vue', 'Vue Router', 'Tailwind', 'Flowbite', 'VueUse'],
    pageLink: 'https://tboi-items-wiki.netlify.app/#/',
    githubLink: 'https://github.com/scalvd01/tboi-items-wiki',
    image: '/projectsImages/tboi_items_wiki_project.webp'
  },
  {
    name: 'THE BUTTON',
    description: 'Mini juego basado en la probabilidad con logros incluidos.',
    technologies: ['Vue', 'Tailwind', 'Flowbite', 'VueUse', 'Vue Sonner'],
    pageLink: 'https://the-button-game.netlify.app/',
    githubLink: 'https://github.com/scalvd01/The-Button',
    image: '/projectsImages/the_button_project.webp'
  }
]

export const educationList: Array<{
  place: string
  role: string
  date: string
  link?: string
  description: string
  technologies?: string[]
}> = [
  {
    place: 'Proconsi S.L.',
    role: 'Estudiante de prácticas externas',
    date: ' 01/2022 – 06/2022',
    link: 'https://www.proconsi.com/',
    description:
      'Visión artificial y Conteo de vehículos. Investigación de algoritmos de detección de OpenCV. Ejecución del flujo completo de entrenamiento de un clasificador.',
    technologies: ['Python', 'OpenCV', 'Tensorflow', 'YOLOv3']
  }
]
