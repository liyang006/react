
var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer');


module.exports = {
  entry: {
    app: [
      './js/main.jsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
      test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader")},
      { test: /\.scss$/, loader: "style!css!sass" }, 
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
  //new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('app.min.css')
  ]
};