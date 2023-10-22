/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,png}"],
  theme: {
    extend: {
      colors: {
        "ca-page-btn-color": "#D7DA5E",
      },
      // backgroundImage: {
      //   "containerBg-image": "url('./src/components/svgfiles/image6.png')",
      // },
      backgroundColor: {
        colorOfbg: "#4A1132",
        colorOfLamp: "#00888D",
      },
    },
    screens: {
      xs: { max: "440px" },
      sm: [{ min: "441px", max: "640px" }],
      md: [{ min: "641px", max: "768px" }],
      mdl: [{ min: "768px", max: "1024px" }],
      lg: [{ min: "1025px", max: "1280px" }],
      xlg: [{ min: "1280px" }],
    },
  },
  plugins: [],
};
