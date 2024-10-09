/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        readexPro: ["'Readex Pro'", "sans-serif"],
      },
      colors: {
        Gainsboro: "#FAFAFA",
      },
      backgroundImage: () => ({
        gradientDesktop:
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 62%)",
        gradientMobile:
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 32%)",
      }),
    },
  },
  plugins: [require("daisyui")],
};
