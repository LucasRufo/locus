module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins'],
    },
    extend: {
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(20px, -20px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
