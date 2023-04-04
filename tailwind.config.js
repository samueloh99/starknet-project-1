/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Alegreya Sans", "sans-serif"],
        logo: ["Cinzel", "serif"],
      },
      colors: {
        primary: "#9DC08B",
        secondary: "#609966",
        lightBase: "#EDF1D6",
        darkBase: "#40513B",
      },
      backgroundColor: {
        "start-gradient": "#85FFBD",
        "end-gradient": "#FFFB7D",
      },
      backgroundImage: (theme) => ({
        "custom-gradient": `linear-gradient(45deg, ${theme(
          "backgroundColor.start-gradient"
        )} 0%, ${theme("backgroundColor.end-gradient")} 100%)`,
      }),
    },
  },
  plugins: [],
};
