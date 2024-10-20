/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'linear-gradient(180deg, #9747FF 0%, #39337A 100%)',
        secondary: '#2B0B3A',
      },
    },
  },
  plugins: [],
}

