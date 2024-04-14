/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-1": "url('./src/assets/images/1.jpg')",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      merriweather: ["Merriweather", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
