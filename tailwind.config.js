/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#F9F5EB",
        primary: "#000000",
      },
      fontFamily: {
        body: ["Chathura", "sans-serif"],
        heading: ["Bebas Neue", "cursive"],
      },
      container: {
        center: true,
      },
      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
