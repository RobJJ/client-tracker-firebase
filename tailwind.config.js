/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      pocket: { max: "600px" },
      "pocket-sm": { max: "500px" },
      "pocket-ty": { max: "420px" },
      short: { raw: "(max-height: 750px)" },
    },
    extend: {},
    fontFamily: {
      navBarFont: ["Bebas Neue", "cursive"],
    },
  },
  plugins: [],
};
