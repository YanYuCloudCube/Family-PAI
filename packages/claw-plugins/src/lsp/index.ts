/**
 * @file LSP插件定义
 * @description 定义 4 个语言服务器协议（LSP）插件
 * @module @family-ai/plugins/lsp
 * @author YYC
 */

/**
 * LSP插件配置接口
 */
export interface LSPPluginConfig {
  id: string
  name: string
  displayName: string
  language: string
  server: string
  package: string
  description: string
  capabilities: string[]
  installation: {
    command: string
    args?: string[]
  }
  configuration: Record<string, unknown>
}

/**
 * Python LSP 插件
 */
export const PythonLSPPlugin: LSPPluginConfig = {
  id: 'lsp-python',
  name: 'PythonLSP',
  displayName: 'Python Language Server',
  language: 'python',
  server: 'pyright',
  package: '@family-ai/lsp-python',
  description: 'Python语言服务器，提供智能补全、类型检查、重构等功能',
  capabilities: [
    '智能代码补全',
    '类型检查和推断',
    '函数签名提示',
    '代码重构',
    '查找引用',
    '跳转定义',
    '错误诊断',
  ],
  installation: {
    command: 'npm',
    args: ['install', '@family-ai/lsp-python'],
  },
  configuration: {
    typeCheckingMode: 'basic',
    pythonPath: '/usr/bin/python3',
    venvPath: '${workspaceFolder}/.venv',
    analysis: {
      autoSearchPaths: true,
      diagnosticMode: 'workspace',
      useLibraryCodeForTypes: true,
    },
  },
}

/**
 * Ruby LSP 插件
 */
export const RubyLSPPlugin: LSPPluginConfig = {
  id: 'lsp-ruby',
  name: 'RubyLSP',
  displayName: 'Ruby Language Server',
  language: 'ruby',
  server: 'ruby-lsp',
  package: '@family-ai/lsp-ruby',
  description: 'Ruby语言服务器，提供智能补全、代码导航、重构等功能',
  capabilities: [
    '智能代码补全',
    '代码导航',
    '重构支持',
    '文档高亮',
    '诊断信息',
    '格式化',
    '语义高亮',
  ],
  installation: {
    command: 'gem',
    args: ['install', 'ruby-lsp'],
  },
  configuration: {
    rubyVersionManager: 'rbenv',
    formatter: 'rubocop',
    linters: ['rubocop', 'standard'],
    solargraph: {
      diagnostics: true,
      formatting: true,
    },
  },
}

/**
 * Rust LSP 插件
 */
export const RustLSPPlugin: LSPPluginConfig = {
  id: 'lsp-rust',
  name: 'RustLSP',
  displayName: 'Rust Language Server',
  language: 'rust',
  server: 'rust-analyzer',
  package: '@family-ai/lsp-rust',
  description: 'Rust语言服务器，提供智能补全、类型推断、重构等功能',
  capabilities: [
    '智能代码补全',
    '类型推断',
    '代码重构',
    '内联提示',
    '宏展开',
    'Cargo集成',
    '测试运行器',
    '调试支持',
  ],
  installation: {
    command: 'rustup',
    args: ['component', 'add', 'rust-analyzer'],
  },
  configuration: {
    cargo: {
      autoreload: true,
      buildScripts: {
        enable: true,
      },
    },
    procMacro: {
      enable: true,
    },
    checkOnSave: {
      command: 'clippy',
    },
    inlayHints: {
      chainingHints: {
        enable: true,
      },
      parameterHints: {
        enable: true,
      },
    },
  },
}

/**
 * Swift LSP 插件
 */
export const SwiftLSPPlugin: LSPPluginConfig = {
  id: 'lsp-swift',
  name: 'SwiftLSP',
  displayName: 'Swift Language Server',
  language: 'swift',
  server: 'sourcekit-lsp',
  package: '@family-ai/lsp-swift',
  description: 'Swift语言服务器，提供智能补全、代码导航、重构等功能',
  capabilities: [
    '智能代码补全',
    '代码导航',
    '重构支持',
    'SwiftPM集成',
    '调试支持',
    '语义高亮',
    '文档生成',
  ],
  installation: {
    command: 'xcode-select',
    args: ['--install'],
  },
  configuration: {
    swiftPath: '/usr/bin/swift',
    sourcekitdPath: '/usr/lib/sourcekitd.framework/sourcekitd',
    buildSystem: 'swiftPM',
    diagnostics: {
      enable: true,
    },
    indexing: {
      enable: true,
    },
  },
}

/**
 * 所有LSP插件定义
 */
export const LSPPluginDefinitions = {
  python: PythonLSPPlugin,
  ruby: RubyLSPPlugin,
  rust: RustLSPPlugin,
  swift: SwiftLSPPlugin,
}

/**
 * 获取所有LSP插件列表
 */
export function getAllLSPPlugins(): LSPPluginConfig[] {
  return Object.values(LSPPluginDefinitions)
}

/**
 * 根据语言获取LSP插件
 */
export function getLSPPluginByLanguage(language: string): LSPPluginConfig | undefined {
  const pluginMap: Record<string, LSPPluginConfig> = {
    python: PythonLSPPlugin,
    ruby: RubyLSPPlugin,
    rust: RustLSPPlugin,
    swift: SwiftLSPPlugin,
  }
  return pluginMap[language.toLowerCase()]
}
