const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      browsers: "last 2 versions",
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
  },
};
