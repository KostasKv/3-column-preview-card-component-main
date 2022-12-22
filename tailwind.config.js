/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
    colors: {
      'bright-orange': 'hsl(31, 77%, 52%)',
      'dark-cyan': 'hsl(184, 100%, 22%)',
      'very-dark-cyan': 'hsl(179, 100%, 13%)',
      'transparent-white': 'hsl(0, 0%, 100%, 0.75)',
      'very-light-gray': 'hsl(0, 0%, 95%)',
    },
    fontFamily: {
      'big-shoulders': ['Big Shoulders Display', 'cursive'],
      'serif': ['Lexend Deca', 'sans-serif'],
    },
  },
  plugins: [],
}
