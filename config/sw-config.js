module.exports = {
  cache: {
    cacheId: "82techmeds",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "82techmeds",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
