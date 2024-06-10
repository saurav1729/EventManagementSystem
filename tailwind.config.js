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
      },
      boxShadow: {
        'signup': '10px 10px 15px 2px rgba(0,0,0,0.45)'
      }
    },
  },
  plugins: [],
}

