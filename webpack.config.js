const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: 'production',
  entry: {
    home: './home/src/index.js',
    description: './description/src/index.js',
    rateus: './rateus/src/index.js',
    payment: "./payment/src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_MIDTRANS_SERVER_KEY': JSON.stringify(process.env.REACT_APP_MIDTRANS_SERVER_KEY),
      'process.env.REACT_APP_MIDTRANS_CLIENT_KEY': JSON.stringify(process.env.REACT_APP_MIDTRANS_CLIENT_KEY),
    }),
  ],
};