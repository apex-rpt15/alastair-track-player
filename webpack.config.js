const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = {
  entry: __dirname + '/client/components/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|server|db)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin(), 
    new BrotliPlugin()
  ]
}