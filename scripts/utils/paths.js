const path = require('path')
const pkg = require('../../package.json')

const rootPath = path.resolve(__dirname, '../../')
const srcPath = path.resolve(rootPath, 'src')
const distPath = path.resolve(rootPath, 'dist')
const publicPath = path.resolve(srcPath, 'public')
const iconsPath = path.resolve(srcPath, 'icons')
const dllOutputPath = path.join(rootPath, `node_modules/dlls-${pkg.name}`)
const dllDependenciesPath = path.resolve(dllOutputPath, 'dependencies.json')

module.exports = {
  rootPath,
  srcPath,
  distPath,
  publicPath,
  iconsPath,
  dllOutputPath,
  dllDependenciesPath
}
