/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg-desktop': "url('/src/assets/img/header-bg.png')",
        'home-bg-mobile': "url('/src/assets/img/header-bg-mobile.png')",
      },
      colors: {
        primary: '#172B4D',
        secondary: '#6070FF',
        tertiary: '#7F8CFF',
        quaternary: '#505F79',
      },
      lineHeight: {
        52: '3.25rem',
      },
      fontSize: {
        40: '2.5rem',
      },
    },
  },
  plugins: [],
};
