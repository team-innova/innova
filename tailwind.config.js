/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 0px 30px 0px #763CAC',
      },
      colors: {
        primary: '#CCD6F6F2',
        secondary: '#2B0B3A',
      },
    },
  },
  plugins: [],
}