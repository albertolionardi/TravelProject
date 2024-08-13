const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: 'production',
  entry: {
    home: './home/src/index.tsx',
    description: './description/src/index.tsx',
    rateus: './rateus/src/index.tsx',
    payment: "./payment/src/index.tsx",
    aboutus: "./aboutus/src/index.tsx"

  },
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Handles image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'images/',
              publicPath: 'static/frontend/images/', // Adjust according to your output structure
            },
          },
        ],
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