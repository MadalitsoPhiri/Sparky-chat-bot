module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     },
    },
  },
  variants: {
    extend: {},
    scrollbar: ['dark','rounded']
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
