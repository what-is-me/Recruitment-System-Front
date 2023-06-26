const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer:{
    host:'0.0.0.0',
    port:8848,
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
  },
  chainWebpack: config =>{
    config.plugin('html').tap(args => {
      args[0].title = 'Find A Job';
      return args;
    })
  },
})
