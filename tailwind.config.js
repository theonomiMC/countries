module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', "sans - serif"],
        poppins: ['Poppins'],
        playfair: ['Playfair Display']
      }
    },
    typography: (theme) => ({
      dark: {
        css: {
          color: theme('colors.gray.300'),
          h1: {
            color: theme('colors.gray.100'),
          },
          h2: {
            color: theme('colors.gray.100'),
          },
        },
      },
    }),
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [],
}


