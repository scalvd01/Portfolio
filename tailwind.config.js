/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#0C356A',
      'secondary': '#19376D',
      'accent': '#FE7A36',
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
],
}