const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: {
    'lib/app': path.resolve(__dirname, '../src/App.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
           {
             loader: "style-loader",
           },
           "css-loader"
          ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
         {
          loader:  "style-loader",
          options: {
          }
         },
          // Translates CSS into CommonJS
          "css-loader",
          "resolve-url-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  mode: 'development',
  devtool: false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    open: 'Google Chrome',
    port: 4000,
    overlay: true,
    quiet: true,
  },
};