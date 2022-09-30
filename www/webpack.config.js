const path = require('path');

module.exports = 
{
  entry: './src/index.jsx',
  output: 
  {
    filename: 'ld51.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module:
  {
    rules:
    [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: 
  {
    static: 
    {
      directory: path.join(__dirname, 'public'),
    },
    devMiddleware:
    {
      writeToDisk: true,
    },
    compress: true,
    port: 9000,
  },
};