const path = require('path')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const angularAppPath = path.join(__dirname, '/src/angular-app')
const reactAppPath = path.join(__dirname, '/src/react-app')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new ModuleReferencePlugin({
      remoteType: 'global',
      remotes: ['angular-app', 'react-app'],
    }),
  ],
}
