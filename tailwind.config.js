/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#304098",
        secondary: "#983030",
        black: "#121212",
        body: "#77777",
        help: "#909090",
        "inactive-white": "#B1B1B1",
        "body-white": "#CECECE",
      },
      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
        "general-sans": ["GeneralSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
