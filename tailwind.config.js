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
        'contact-bg': "url('/src/assets/img/contact-form-bg.png')",
        'contact-bg-mobile': "url('/src/assets/img/contact-form-bg-mobile.png')",
      },
      colors: {
        primary: '#172B4D', // homepage heading color
        secondary: '#6070FF', // blue hover effect
        tertiary: '#7F8CFF', // light blue
        quaternary: '#505F79', // icon color
        bgGray: '#F4F5F7',
      },
      lineHeight: {
        52: '3.25rem',
        44: '2.75rem',
      },
      fontSize: {
        40: '2.5rem',
        32: '2rem',
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
    },
  },
  plugins: [],
};
