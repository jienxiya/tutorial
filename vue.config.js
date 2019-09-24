// vue.config.js
const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "src": path.resolve(__dirname, 'src'),
        "assets": path.resolve(__dirname, 'src/assets'),
        "components": path.resolve(__dirname, 'src/components'),
        "modules": path.resolve(__dirname, 'src/modules'),
        "router": path.resolve(__dirname, 'src/router'),
        "services": path.resolve(__dirname, 'src/services')   
      }
    }
  }
}