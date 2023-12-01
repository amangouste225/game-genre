/** @type {import('tailwindcss').Config} */

export default {
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          '.logo': {
            filter: 'invert(100%)',
            fill: '#000',
          },
          '.genresTitle': {
            color: '#000',
          },
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          '.logo': {
            filter: 'invert(0%)',
            fill: '#000',
          },
          '.genresTitle': {
            color: '#fff',
          },
        },
      },
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1436px',
        '3xl': '1786px',
        '4xl': '1886px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
