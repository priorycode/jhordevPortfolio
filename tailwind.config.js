/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "color-yellow": "#FAFE43",
        "color-green": "#82F9A1",
        "color-purple": "#435CBE",
        'color-black': '#162129',
      },
      fontSize:{
        "size-16": "16px",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
