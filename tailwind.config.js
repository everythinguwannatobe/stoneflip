/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '639px', 'min': '480px'},
        'tablet': {'max': '1025px', 'min': '640px'},
        'laptop': {'max': '1200px', 'min': '1030px'},
        'desktop': {'max': '2000px', 'min': '1300px'},
        'tablet-laptop-desktop': {'min': '640px'}
      },
      backgroundImage: {
        'waterflow': "url('../public/image2.png')",
        'waterslide': "url('../public/image 11.png')"
      },
      fontFamily: {
        'libre-franklin': 'Libre Franklin',
      },
      lineHeight: {
        '16': '9rem'
      }
    },
  },
  plugins: [],
}
