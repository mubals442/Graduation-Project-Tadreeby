/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
      colors : {
        Green : '#7ED957 ',
        Blue  : '#00B5AC',
        Gold  : '#FFBD59',
        Back  : '#F8EDE3',
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

