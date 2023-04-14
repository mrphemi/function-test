/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "function-green": "#19291C",
        "function-blue": "#282B3A",
        "function-light-grey": {
          default: "#F1F1F2",
          alt: "#808080",
        },
        "function-dark-grey": {
          default: "#6B6D7A",
          alt: "#91939F",
        },
      },
    },
  },
  plugins: [],
};
