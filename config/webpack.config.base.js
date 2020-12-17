const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    'lib/index': path.resolve(__dirname, '../src/index.tsx'),
    'lib/Button/Button': path.resolve(__dirname, '../src/components/Button/index.tsx')
  },
  output: {
    filename: '[name].js',
    path:  path.resolve(__dirname, '../dist'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, 
        exclude: ['/node_modules/', '/src/scss/'],
        enforce: 'pre',
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
          },
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
      ]},
      {
        test: /\.js$/,
        exclude: ['/node_modules/', '/src/scss/'],
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'],
          }
        }
      },
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
             options: {
                name: '[path][name].[ext]',
                // publicPath: 'assets',
              },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my app',
      filename: 'index.html',
      template: 'public/index.html'
    }),
  ],
};

module.exports = config;