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
        "color-green-os": "#A5FFBF",
        "color-purple": "#435CBE",
        'color-black': '#162129',
        'color-gray': '#757575',
        'color-gray-f5': '#F5F5F5',
        'color-gray-61': '#616161'
      },
      fontSize:{
        "size-10": "10px",
        "size-12": "12px",
        "size-16": "16px",
        "size-32": "32px",
        "size-31": "31px",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
