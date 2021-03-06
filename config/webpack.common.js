const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // SCSS
    paths.src + '/styles/index.scss',
    // JS
    paths.src + '/index.js',
  ],
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
  },
  resolve: {
    alias: {
      src: paths.src,
      app: paths.src,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: paths.static,
          to: '',
        }
      ],
    }),

    new HtmlWebpackPlugin({
      template: paths.assets + '/index.html',
    }),
  ],

  module: {
    rules: [
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },

      // Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
        },
      },
       // Documents
       {
        test: /\.pdf$/,
        loader: 'file-loader',
        options: {
          outputPath: 'documents/',
        },
      },
      // Images
      {
        test: /\.(ico|jpg|gif|png|jpe?g|webp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { 
              outputPath: 'images/',
             },
          },
        ],
      },
      
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          outputPath: 'sound/',
          name: '[path][name].[ext]',
        },
      },
       // Videos
      {
        test: /\.mp4$/,
        use: [
            {
              loader: 'file-loader',
              options: { outputPath: 'videos/' },
            },
          ],
      },
    ],
  },
};









