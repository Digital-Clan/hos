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
        "btn-2x": ["30px", "48px"],
        "bt-m": ["15px", "24px"],
        "bt-d": ["23px", "20px"],
        "xs-m": ["12px", "19px"],
        "xs-d": ["20px", "36px"],
        "sm-m": ["14px", "21px"],
        "sm-t": ["16px", "24px"],
        "sm-d": ["26px", "31px"],
        "p1-m": ["15px", "25px"],
        "p1-t": ["18px", "28px"],
        "p1-d": ["24px", "38px"],
        "h1-m": ["26px", "32px"],
        "h1-t": ["40px", "48px"],
        "h1-d": ["56px", "65px"],
        "h2-m": ["22px", "30px"],
        "h2-t": ["24px", "32px"],
        "h2-d": ["40px", "53px"],
        "h3-m": ["18px", "24px"],
        "h3-t": ["20px", "28px"],
        "h3-d": ["40px", "53px"],
      },
      backgroundImage: {
        "memoriam-home-pc":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686698208/hos/memoriam-img-pc_aaz5j8.png')",
        "memoriam-home-mobile":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686664429/hos/memoriam-img-mobile_sasva8.png')",
        bio: "url('https://res.cloudinary.com/dljsalifp/image/upload/v1687171360/hos/pastor-bio-bg_gbd4nq.png')",
        interview:
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1687171361/hos/pastor-interview-bg_ymykgk.png')",
      },
    },
  },
  plugins: [],
};
