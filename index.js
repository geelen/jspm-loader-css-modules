import { CSSLoader, Plugins } from 'jspm-loader-css'

export default new CSSLoader([
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName)
