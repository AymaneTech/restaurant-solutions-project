/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['"Merriweather"', 'serif'],
      },
      //alwan machi homa ta nbedlohommen palet amber
      colors: {
        primary: {
          light: '#D6E4FF',
          DEFAULT: '#1D4ED8',
          dark: '#1E40AF',
        },
        secondary: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        accent: '#D97706',
      },
    },
  },
  plugins: [],
}

