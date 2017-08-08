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
      ]
    },
    plugins: [
      new BundleTracker({path: __dirname, filename: "./webpack-stats.json"})
    ]
  }

  return config
}
