/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-ochre': '#CB9D06',
      },
      fontFamily: {
        'freeman': ["Freeman", "sans-serif"]
      }
    },
  },
  plugins: [],
}

