/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        basement: ["var(--font-basement-grotesque)"],
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
