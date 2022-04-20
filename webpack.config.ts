import path from 'path'
import { webpackConfig } from '@bondi-js/config'
import { merge } from 'webpack-merge'
import Webpack from 'webpack'
// @ts-ignore
import packageJson from './package.json'

const { ModuleFederationPlugin } = Webpack.container
const name = 'pmc'
const APP_MODULE = '@pmc/ui-container'
const filename = 'ui-container.js'

const moduleFederationConfig = {
  name,
  exposes: {
    [APP_MODULE]: './src/app.tsx',
  },
  filename,
  shared: {
    react: {
      import: 'react',
      shareKey: 'react',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies.react,
    },
    'react-dom': {
      import: 'react-dom',
      shareKey: 'react-dom',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies['react-dom'],
    },
    'react-router-dom': {
      import: 'react-router-dom',
      shareKey: 'react-router-dom',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies['react-router-dom'],
    },
  },
}

const moduleFederationPlugin = new ModuleFederationPlugin(moduleFederationConfig)

const definePlugin = new Webpack.DefinePlugin({})

const projectConfig: ReturnType<typeof merge> = {
  entry: './src/index.tsx',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [moduleFederationPlugin, definePlugin],
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}

const config: any = merge(webpackConfig, projectConfig)

export default config
