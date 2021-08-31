const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   white: colors.white,
    //   gray: "#252525",
    //   "dark-gray": "#121212",
    //   purple: "#6930c3"
    // },
    container: {
      center: true,
      padding: "1rem"
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
