module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark-blue': '#0A2463 !important',
      white: '#ffffff',
      indigo: '#4079C6',
      'light-gray': '#F6F6F6',
      'dark-cyan-blue': '#091C35',
      'light-cyan-blue': '#F1F3F6',
      'fun-blue': '#255CA7',
      'very-light-gray': '#C7CEDE',
    },
  },
  plugins: [],
}
