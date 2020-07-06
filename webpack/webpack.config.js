const modoDev = process.env.NODE_DEV !== 'production'
const webpack = require('webpack')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: "./public",
    port:9000
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]  
  },
  plugins: [
    new MiniExtractPlugin({
      filename: "estilo.css"
    }),
    new TerserPlugin({
      parallel:true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
  module: {
    rules: [{
      // test: /\.css$/,
      test: /\.s?[ac]ss$/,
      use: [
        MiniExtractPlugin.loader, //Extract css into files
        //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
        'css-loader', //interpreta @import, url()
        'sass-loader'
      ]
    }, {
      test:/\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }]
  }
}