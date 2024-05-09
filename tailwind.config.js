/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
      Keyframes: {
        'opem-menu': {
          '0%': {transform : 'scaleY(0)'}, 
          '80%': {transform : 'scaleY(1.2)'}, 
          '100%': {transform : 'scaleY(1)'}, 
        },
      },
      animation:{
        'open-menu' : 'opem-menu 0.5s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

