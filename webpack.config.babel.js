import path from 'path'
import BundleTracker from 'webpack-bundle-tracker'

var app_dir = path.resolve(__dirname, 'reactjs/')
console.log(app_dir);

module.exports = env => {

  const config = {
    entry: {
      App: "./reactjs/App.jsx"
    },
    output: {
      path: path.resolve('./helpr/assets/bundles/'),
      filename: "[name]-[hash].js",
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          include: app_dir,
          use:[
            {
              loader: 'babel-loader',
            },
          ]
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new BundleTracker({path: __dirname, filename: "./webpack-stats.json"})
    ],
    resolve:{
      extensions: [".js", ".jsx", ".css"],
    }
  }

  return config
}
