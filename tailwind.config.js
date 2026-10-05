/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
      },
      colors: {
        custom: {
          dark: '#3A3C35',
        }
      }
    },
  },
  plugins: [],
}
