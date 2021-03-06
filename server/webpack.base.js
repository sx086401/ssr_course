module.exports = {
    // The webpack to run babel on every file it runs through
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_moudle/,
          options: {
            presets: [
              'react', 'stage-0', ['env', { targets: { browser: ['last 2 versions'] } }]
            ]
          }
        }
      ]
    }
}
