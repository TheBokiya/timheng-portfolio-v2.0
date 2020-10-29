module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    colors: {
      navy: {
        light: "#0f4c75",
        default: "#1d2d50",
      },
      grey: {
        dark: "#373a40",
        light: "#f1f6f9",
      },
      white: "#f9fcfb",
      red: "#fc5c7d",
      blue: "#6a82fb",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
