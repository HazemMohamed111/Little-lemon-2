/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/About.js",
    "./src/components/Card.js",
    "./src/components/Footer.js",
    "./src/components/Header.js",
    "./src/components/Testm.js",
    "./src/components/Undernav.js",
    "./src/pages/BookingPage.js",
    "./src/pages/HomePage.js",
    "./src/components/BookingForm.js",
    "./src/components/API.js",

  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#F4CE14',
        'primary-2': '#495E57',
        'Highlight-1': '#EDEFEE',
        'Highlight-2': '#333333',
        "Secondary-1": '#EE9972',
      },
    },
    fontFamily: {
      'main': ['Markazi Text'],
      'second': ['Karla'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}