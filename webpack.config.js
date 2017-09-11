const path = require('path');

module.exports = {
    entry: ['./app/app.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules')
      },
      
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      } 
      
      ]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}