/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: { primary: '#1890ff', secondary: '#096dd9', tertiary: '#0050b3' },
        gray: { primary: '#f5f5f5', secondary: '#f0f0f0', tertiary: '#d9d9d9' },
      },
    },
  },
  plugins: [],
}
