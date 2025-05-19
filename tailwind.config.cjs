/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'eva01': '#4B3F72', // Main Eva-01 purple
        'eva01-accent': '#8BE9FD', // Neon blue accent
        'eva01-green': '#39FF14', // Eva-01 green
        'eva01-yellow': '#FFD600', // Eva-01 yellow
        'eva01-dark': '#191724', // Background dark
      },
      fontFamily: {
        mecha: ['"Orbitron"', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
