/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'base': 'Poppins, sans-serif',
        'krona': "'Krona One', sans-serif",
      }
    },
  },
  plugins: [],
}

