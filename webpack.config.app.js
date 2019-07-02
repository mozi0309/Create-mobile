const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index')
  },
  output: {
    filename: 'js/[name]-[chunkhash].js',
    path: path.resolve(__dirname, './distApp'),
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ttf|svg|eot|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/',
              publicPath: './assets/'
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader
            // /*options: {
            //   publicPath: '../assets/'
            // }*/
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:8]'
            }
          },
          'postcss-loader',
          'less-loader'
        ]

      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:8]'
            }
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // 将 var.scss 引入到每个 scss 文件，方便每个文件直接使用变量
              resources: [
                path.resolve(__dirname, './src/styles/func.scss'),
                path.resolve(__dirname, './src/styles/var.scss'),
                path.resolve(__dirname, './src/styles/mixin.scss')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('distApp'),
    new HtmlWebpackPlugin({
      title: 'Create-mobile',
      template: './tmpl/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[chunkhash].css'
    })
  ]
}
