/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./script/*.js"],
  theme: {
    // Screens (breakpoints) padrão do Tailwind
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        colorHeader: "#E3E3E3",
      },
      spacing: {
        15: "15px",
        1: "1px",
        500: "500px",
        90: "17rem",

        200: "33.75rem"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        md32: "32px",
      },
    },
  },
  plugins: [],
};
