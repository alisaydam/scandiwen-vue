const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/scss/_reset.scss";
        @import "@/scss/_variables.scss";
        `,
      },
    },
  },
};

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://product-api-sw.herokuapp.com",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
};
