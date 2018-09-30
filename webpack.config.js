module.exports = {
  mode: 'development',
  entry: './app/static/js/index.js',
  output: {
    publicPath: 'http://127.0.0.1:8080/'
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}
