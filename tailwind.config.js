/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      screens: {
        'xxs': '320px', // Extra extra small
        'xs': '375px',
        'xmd': '900px',  // extra small
      },
    },
  },
  plugins: [],
}