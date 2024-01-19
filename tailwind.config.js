/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'text-color': '#000',
          'btn-bg' : '#E76F51',
          'gray-text' : 'rgba(0, 0, 0, 0.80)',
        },
      },
    },
    plugins: [],
  }