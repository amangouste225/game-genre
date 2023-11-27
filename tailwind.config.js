/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ['light', 'dark'],
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
