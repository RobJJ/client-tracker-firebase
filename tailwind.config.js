/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // content: [
  //   // point the JIT to the fully compiled css file
  //   // to ensure all classes are included
  //   require.resolve("react-widgets/styles.css"),
  // ],
  theme: {
    extend: {},
  },
  // plugins: [require("react-widgets-tailwind")],
  plugins: [],
};
