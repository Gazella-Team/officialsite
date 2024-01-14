/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        navigation: "box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
        navbar: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      fontFamily: {
        mainFont: "Oxygen",
      },
      colors: {
        main: "#051d40",
      },
      gridTemplateColumns: {
        main: "40% 1fr",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        leg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mid: { max: "867px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        small: { max: "1278px" },
        smaller: { min: "1278px" },
        footer: { max: "1130px" },
        navigation: { max: "900px" },
      },
      maxWidth: {
        main: "1300px",
      },
      gridTemplateColumns: {
        contact: "40% 1fr",
        footer: "16% 1fr",
        cases: "50% 1fr",
        menu: "60% 1fr",
      },
    },
  },
  plugins: [],
};
