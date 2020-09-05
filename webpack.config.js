const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: false,
            },
          },
        ],
      },
    ],
  },
};

// module.exports = {
//   module: {
//     rules: [
//       { test: /\.txt$/, use: 'raw-loader' }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({template: './src/odmitHtml/index.html'})
//   ]
// };