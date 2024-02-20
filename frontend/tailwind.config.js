/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/layout/*.{jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        my_font: ["Oswald", "sans-serif"],
        roboto_font: ["Roboto", "sans-serif"]
      },
      backgroundImage: {
        'header': "url('./public/header.svg')",
        "sideImg": "url('./public/contact_left.svg')",
      },
      colors: {
        "bg_color": "#fdfdfd"
      }
    },
  },
  plugins: [],
}