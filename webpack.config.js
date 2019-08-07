var path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  //...
  entry: path.join(__dirname, '/src/index.js'),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module:{
        rules:[{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
        }]
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname,'/src/index.html')}
        )
    ]
};
