/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a2540', // Dark Navy Blue
        },
        teal: {
          500: '#20c997', // Teal
        },
        orange: {
          400: '#fd7e14', // Orange
        },
      },
    },
  },
  plugins: [],
};
