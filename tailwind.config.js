/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '200px',
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

