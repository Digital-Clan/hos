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
        "xs-t": ["14px", "21px"],
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
        "h4-m": ["16px", "20px"],
        "h4-t": ["18px", "24px"],
        "h4-d": ["28px", "36px"],
      },
      backgroundImage: {
        "memoriam-home-d":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1687199596/hos/memoriam-img-desktop_xpm5ha.png')",
        "memoriam-home-m":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686664429/hos/memoriam-img-mobile_sasva8.png')",
        bio: "url('https://res.cloudinary.com/dljsalifp/image/upload/v1687171360/hos/pastor-bio-bg_gbd4nq.png')",
        interview:
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1687171361/hos/pastor-interview-bg_ymykgk.png')",
        "media-m":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686926800/hos/media-hero-mobile-bg_ztkmuv.png')",
        "media-d": "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686926807/hos/media-hero-bg_b7ludx.png')",
        about: "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686975511/hos/about-hero-bg_nurzs2.png')",
        blog: "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686974388/hos/blog-hero-bg_hard2p.png')",
        "events-m":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686916798/hos/events-hero-mobile-bg_q2bhpn.png')",
        "events-d":
          "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686909635/hos/events-hero-bg_giheqn.png')",
        donate: "url('https://res.cloudinary.com/dljsalifp/image/upload/v1686658930/hos/home-hero-bg_pnpz3s.png')",
      },
    },
  },
  plugins: [],
};
