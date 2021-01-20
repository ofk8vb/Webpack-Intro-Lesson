const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  module:{
    rules: [
        {
            test:/\.scss$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                // ordering of loaders is important
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }
    ]
  },
  plugins:[
      new MiniCssExtractPlugin({
          //[name] means css files will keep their original name
          filename: '[name].css'
      })
  ],
};
