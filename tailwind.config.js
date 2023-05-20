module.exports = {
  important: true,
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Gsans: ['Gsans', 'sans-serif'],
        'sans': ['Gsans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
