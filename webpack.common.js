const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = {
  entry:{
    index:{import:'./src/js/index.js',dependOn:'shared'},
    sum:{import:'./src/js/sum.js',dependOn:'shared'},
    shared:'lodash'
  } ,
  module:{
    rules: [
        // anytime webpack finds a file with .js extension excluding the node_modules
        // it should run it through the babel-loader
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    ]
  },
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  plugins:[
      new HtmlWebpackPlugin()
  ],
  output: {
    filename: '[name].js',
    // stick everything inside folder called dist, inside
    // the current directory (__dirname)
    path: path.resolve(__dirname,'dist'),
  },
};
