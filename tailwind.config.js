/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        danger_stripe:"repeating-linear-gradient(45deg, rgb(234,179,8), rgb(234,179,8) 10% ,gray 10%, gray 20% )",
      }
    },
  },
  plugins: [],
}
