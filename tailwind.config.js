/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'light-blue': '#B4D4FF',
        'mint-green': '#A1EEBD',
        'royal-blue': '#38419D',
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

