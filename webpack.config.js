const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/inline',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
  ]
};
