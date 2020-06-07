const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { "@primary-color": "#0074D9" },
          javascriptEnabled: true
        }
      }
    }
  ]
};
