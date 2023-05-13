/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['roboto', 'sans-serif']
      },
      colors:{
        cyan:{
          500:'#D9F5FF',
          600:'#00B1FF',
          700:'#0074DC'
        }
      }
    },
  },
  plugins: [],
}
