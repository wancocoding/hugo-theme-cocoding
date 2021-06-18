const themeDir = __dirname + "/../../";

const layoutDir = themeDir + "layouts/**/*.html";

module.exports = {
  purge: {
    enabled: true,
    content: [layoutDir],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // ...
    // listStyleType: false,
    // preflight: false,
  },
};
