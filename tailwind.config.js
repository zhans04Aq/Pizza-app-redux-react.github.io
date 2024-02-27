/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBg:"#FFDF8C",
        customOrange:"#FE5F1E",
        vrBg:"rgba(255, 255, 255, 0.75)",
        filterBgPassive:"#F9F9F9",
        filterBgActive:"#282828",
        sortHoverBg:"rgba(254, 95, 30, 0.05)",
        pizzaFilterBg:"#F3F3F3",
        pizzaFilterActiveText:"#2C2C2C",

      },
      flex:{
        limit4:'1 1 20%'
      },
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1440px"
      },
    },
  },
  plugins: [],
}

