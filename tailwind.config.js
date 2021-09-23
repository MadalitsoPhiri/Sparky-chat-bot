module.exports = {
  mode: 'jit',
  purge:{ 
  enabled: true,
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
},
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

    screens: {
      'sm': '450px',
      // => @media (min-width: 640px) { ... }
  
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },

  variants: {
    extend: {},
    scrollbar: ['dark','rounded']
  },

  plugins: [
   
  ],
}
