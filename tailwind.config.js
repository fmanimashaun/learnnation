/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      spacing: {
        '-1/2': '-50%',
      },
      screens: {
        'custom': '992px',
      },
      fontFamily: {
        'Poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'light-blue': '#B4D4FF',
        'mint-green': '#A1EEBD',
        'royal-blue': '#4272D7',
        'charcoal-black': '#0F0F0F',
        'light-gray': '#474646',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

