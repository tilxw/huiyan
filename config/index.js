const path = require("path")

const config = {
  projectName: "huiyan-taro-miniapp",
  date: "2026-05-11",
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  alias: {
    "@": path.resolve(__dirname, "..", "src")
  },
  framework: "react",
  compiler: "webpack5",
  cache: {
    enable: false
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false,
        config: {
          namingPattern: "module",
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {}
}

module.exports = function () {
  return config
}
