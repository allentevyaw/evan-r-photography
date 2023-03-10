/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fleur-de': ['"Fleur De Leah"', 'cursive'],
        'source-pro': ['"Source Code Pro"', 'monospace'],
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'shoreline' : "url('./src/assets/shoreline.png')",
      },
    },
  },
  plugins: [],
}