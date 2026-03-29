/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'huawei-red': '#4A7C59',
        'huawei-black': '#000000',
        'huawei-white': '#FFFFFF',
        'huawei-dark-gray': '#1A1A1A',
        'huawei-medium-gray': '#333333',
        'huawei-light-gray': '#F5F5F5',
      }
    },
  },
  plugins: [],
}
