/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          primary:"#4080b0"
        },
        gray:{
          primary:"#f8ffff"
        }
      }
    },
  },
  plugins: [],
}

