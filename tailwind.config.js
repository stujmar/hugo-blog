module.exports = {
  purge: {
    enabled: true,
    content: [
      './themes/**/*.html',
      './themes/basic/partials/**/*.html',
      './layouts/**/*.html',
    ] 
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
