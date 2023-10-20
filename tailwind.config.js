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
  },
  plugins: [],
};
