/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        gray: {
          200: '#E1E1E6',
          400: '#C4C4CC',
          900: '#0F0D13'
        },
        violet: {
          900: '#2A2141'
        }
      }
    }
  },
  plugins: []
}
