const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer:{
    host:'0.0.0.0',
    port:9999,
    open:true,
    proxy:{
      '/fapi':{
        target:'http://10.100.164.30:9999',
        changeOrigin:true,
        pathRewrite: {
          "^/fapi": "",
        }
      }
    }
  }
})
