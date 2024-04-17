/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-1": "url('/banner1.jpg')",
        "image-5": "url('/banner5.jpg')",
        "image-3": "url('/banner3.jpg')",
        "image-8": "url('/banner8.jpg')",
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
