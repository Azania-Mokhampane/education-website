module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        78: "300px",
        105: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    //....
    // require("@tailwindcss/forms"),
  ],
};
