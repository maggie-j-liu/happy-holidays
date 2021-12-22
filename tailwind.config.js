module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ["'Imperial Script'", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
