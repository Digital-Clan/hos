/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
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
        body: "#777777",
        help: "#909090",
        "inactive-white": "#B1B1B1",
        "body-white": "#CECECE",
      },
      fontFamily: {
        sans: ["Aeonik", defaultTheme.fontFamily.sans],
        "general-sans": ["GeneralSans", "sans-serif"],
      },
      borderRadius: {
        btn: "40px",
      },
      fontSize: {
        "btn-1x": ["23px", "20px"],
        "btn-2x": ["30px", "48px"],
        "sm-1x": ["26px", "31px"],
        "para-1x": ["15px", "25px"],
        "para-2x": ["24px", "38px"],
        "h-3": ["18px", "24px"],
        "h-3-2x": ["40px", "53px"],
        "h-1": ["26px", "32px"],
        "h-1-2x": ["56px", "65px"],
      },
      backgroundImage: {
        "memoriam-home-bg-pc":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686698208/hos/memoriam-img-pc_aaz5j8.png')",
        "memoriam-home-bg-mobile":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686664429/hos/memoriam-img-mobile_sasva8.png')",
      },
    },
  },
  plugins: [],
};
