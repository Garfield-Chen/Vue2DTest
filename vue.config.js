const CompressionWebpackPlugin = require("compression-webpack-plugin");
const webpack = require('webpack')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require('postcss-pxtorem')({ // 把px单位换算成rem单位
                rootValue: 100, // vant官方使用的是37.5
                selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
                propList: ['*']
              })
            ]
          }
        }
    },
    configureWebpack: {
        plugins: [
            new CompressionWebpackPlugin({
                filename: '[path][base].gz',
                algorithm: 'gzip',
                test: /\.(js|css)(\?.*)?$/i,
                threshold: 10240, // 对超过10k的数据进行压缩
                minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                // deleteOriginalAssets: true, // 删除原文件
            }),
        ],
    },
    chainWebpack: config => {
      config.plugin('provide').use(webpack.ProvidePlugin, [{
        $: 'jquery',
        jquery: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }])
    }
}