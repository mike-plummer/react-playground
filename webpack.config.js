module.exports = options => {
  return {
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /.js[x]?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        }
      ]
    }
  }
};
