const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html',
    }),
  ],
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
  devtool: 'inline-source-map'
  // resolve: {
  //   extensions: ['.js', '.jsx']
  // },  
  // devServer: {
  //   contentBase: __dirname + '/build'
  // },
};