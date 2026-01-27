const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    },
    configure: (webpackConfig) => {
      // 1. 找到 CRA 默认的 file-loader 规则，排除 SVG
      const fileLoaderRule = webpackConfig.module.rules.find(
        (rule) => rule.test && rule.test.test('.svg')
      )
      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/
      }

      // 2. 新增 SVG 解析规则（用 react-svg-loader）
      webpackConfig.module.rules.push({
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash:8].[ext]' // 输出路径
        }
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: 'static/media/[name].[hash:8].[ext]',
        //       esModule: false
        //     }
        //   }
        // ]
      })

      webpackConfig.module.rules.push({
        test: /\.(png|jpg|jpeg)$/,
        include: resolve('src'),
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash:8].[ext]',
        },
      });

      return webpackConfig
    }
  }
}
