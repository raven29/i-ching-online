const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isProdEnv = process.argv.indexOf('-p') !== -1;
const isDevEnv = process.argv.indexOf('-d') !== -1;

const plugins = [
  new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
  }),
];

if (isProdEnv) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    // compress: {
    //   warnings: false,
    //   comparisons: false,
    // },        
    output: {
      comments: false,
      // ascii_only: true,
    },
    // sourceMap: true,
  }));
};

const devtool = isProdEnv ? false : 'inline-source-map';

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        enforce: "pre",
        // options: {
        //   configPath: __dirname + "/.eslintrc.js"
        // }
      }
    ]
  },
  devtool,
  // resolve: {
  //   extensions: ['.js', '.jsx']
  // },  
  // devServer: {
  //   contentBase: __dirname + '/build',
  //   watchContentBase: true,
  // },
};
