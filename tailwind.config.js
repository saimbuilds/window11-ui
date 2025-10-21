/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // 1. Tell Tailwind where to find your classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 2. Define the custom font stack for 'font-sans'
      fontFamily: {
        'sans': ["Segoe UI 4", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}