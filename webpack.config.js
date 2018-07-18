const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      // There is a bug and cannot use sourceMap Details:
      // https://github.com/NMFR/optimize-css-assets-webpack-plugin/issues/53
      // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/141
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
          }
        }, {
          loader: 'eslint-loader',
        }]
      },
        {
        test: /\.scss$/,
        use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: 'inline' } },
        ]
      },
      {
        // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        // 如下配置，将小于8192byte的图片转成base64码
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=8192&name=../images/[name].[ext]?[hash]',
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/assets/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: 'src/assets/test.html',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "[name].css",
      // chunkFilename: "[id].css"
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

