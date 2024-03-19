const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions :{
          plugins: [
            require('postcss-pxtorem')({
                rootValue: 192,
                unitPrecision: 5,
                propList: ['*'],
                selectorBlackList: [],
                replace: true,
                mediaQuery: false,
                minPixelValue: 0,
                exclude: /node_modules/i
            }),
          ]
        }

      }
    }
  },
  devServer: {
    proxy: {
      // 对请求路径中包含 '/api' 前缀的请求进行代理
      '/user': {
        target: 'http://192.168.31.26:3000',  // 设置代理目标地址
        changeOrigin: true,  // 是否改变请求头中的 Origin 属性，默认为 true，即改为代理目标地址
        // pathRewrite: {
        //   '^/user': 'user'  // 重写请求路径，如果后端接口地址中不包含 '/api' 前缀，可将此项设置为空字符串
        // }
      }
    }
  }
})
