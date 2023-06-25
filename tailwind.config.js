/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'primary': '#ffffff',
        'secondary': '#f3f4f6',
        // Dark mode colors
        'dark-primary': '#1f2937',
        'dark-secondary': '#374151',
      },

    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

