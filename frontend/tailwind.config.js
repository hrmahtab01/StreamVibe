/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        Container: "1596px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primaryColor: "#FFFFFF",
        SecondaryColor: "#E50000",
        thirdColor: "#999999",
        mainBlack: "#0F0F0F",
      },
      backgroundImage:{
        'bannerimage': "url('./src/assets/banner .png')",
      }
    },
  },
  plugins: [],
};
