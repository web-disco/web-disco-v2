/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "1800px",
        md: "1800px",
        lg: "1800px",
        xl: "1800px",
        "2xl": "2400px",
      },
    },
    extend: {
      fontFamily: {
        basement: ["Basement Grotesque", "sans-serif"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        orange: "#FF4D00",
        black: "#121212",
        grey: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
