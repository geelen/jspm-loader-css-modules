import { CSSLoader, Plugins } from 'jspm-loader-css'

const loader =  new CSSLoader([
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName)

const { fetch } = loader

export default loader
export { fetch }
