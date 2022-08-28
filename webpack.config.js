const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    entry: ['./src/index.ts', './src/global.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js'
    },
    module: {
      rules: [
        {
          test: /.html$/i,
          loader: 'html-loader',
        },        
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
          ]
        },
        { 
          test: /\.ts$/i, use: 'ts-loader' 
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          type: "asset/resource",
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new EslingPlugin({ 
        extensions: 'ts',
      })
    ]
  }

  return config;
}