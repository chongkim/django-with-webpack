module.exports = {
  mode: 'development',
  entry: './app/static/js/index.js',
  output: {
    publicPath: 'http://127.0.0.1:8080/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
    ],
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}
