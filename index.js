import { CSSLoader, Core } from 'jspm-loader-css'

export default new CSSLoader([
  Core.localByDefault,
  Core.extractImports,
  Core.scope
], __moduleName)
