/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        themes: {
          'base-100': '#fff',
          'base-0': '#000',
        },
      },
      'light',
      'dark',
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
