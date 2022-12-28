/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["var(--font-gelasio)"],
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};