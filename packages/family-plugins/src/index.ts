/**
 * @file YYC³ Plugins 入口
 * @description 导出所有插件模块
 * @module @yyc3/plugins
 * @author YYC
 */

export {
  LSPPluginDefinitions,
  getAllLSPPlugins,
  getLSPPluginByLanguage,
  PythonLSPPlugin,
  RubyLSPPlugin,
  RustLSPPlugin,
  SwiftLSPPlugin,
} from './lsp/index.js'

export type { LSPPluginConfig } from './lsp/index.js'

export {
  ContentPluginDefinitions,
  getAllContentPlugins,
  getContentPluginByName,
  EmmetPlugin,
  MarkedPlugin,
  HandlebarsPlugin,
  IonicPlugin,
} from './content/index.js'

export type { ContentPluginConfig } from './content/index.js'

export const PLUGIN_VERSION = '1.1.0'
export const PLUGIN_NAME = '@yyc3/plugins'
