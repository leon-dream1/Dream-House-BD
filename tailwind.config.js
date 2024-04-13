/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "raleway": ["Raleway", "sans-serif"],
      "montserrat": ["Montserrat", "sans-serif"],
      "merriweather": ["Merriweather", "sans-serif"],
      "inter": ["Inter", "sans-serif"],

    }
  },
  plugins: [require("daisyui")],
}