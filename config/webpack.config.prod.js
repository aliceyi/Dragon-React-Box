// const { Configuration } = require( "webpack");
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const WebpackBar = require('webpackbar')

module.exports = {
   output: {
    filename: '[name].js',
    path:  path.resolve(__dirname, '../dist'),
    library: 'dragonReactBox',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
           MiniCssExtractPlugin.loader,
           "css-loader"
          ],
      },
       {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
         {
          loader: MiniCssExtractPlugin.loader,
          options: {
             publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
          }
         },
          // Translates CSS into CommonJS
          "css-loader",
          "resolve-url-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
   plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new WebpackBar(),
  ],
  mode: 'production',
  optimization: {
     minimize: true,
    //  minimizer: [
    //     new TerserPlugin(),
    //  ]
  }
};