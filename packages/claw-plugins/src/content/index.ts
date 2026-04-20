/**
 * @file 内容处理插件定义
 * @description 定义内容处理相关插件
 * @module @family-ai/plugins/content
 * @author YYC
 */

/**
 * 内容处理插件配置接口
 */
export interface ContentPluginConfig {
  id: string
  name: string
  displayName: string
  package: string
  description: string
  capabilities: string[]
  version: string
  installation: {
    command: string
    args?: string[]
  }
  configuration: Record<string, unknown>
}

/**
 * Emmet 插件
 */
export const EmmetPlugin: ContentPluginConfig = {
  id: 'content-emmet',
  name: 'Emmet',
  displayName: 'Emmet Syntax Support',
  package: '@family-ai/emmet',
  description: 'Emmet语法支持，快速编写HTML和CSS代码',
  capabilities: [
    'HTML缩写展开',
    'CSS缩写展开',
    '自定义片段',
    '多光标支持',
    '实时预览',
  ],
  version: '2.0.0',
  installation: {
    command: 'npm',
    args: ['install', '@family-ai/emmet'],
  },
  configuration: {
    syntaxProfiles: {
      html: {
        attr_quotes: 'double',
      },
      css: {
        vendor_prefixes: true,
      },
    },
    snippets: {
      html: {
        'html:5': '!!!+html[lang=en]>head>meta[charset=UTF-8]+title{Document}+body',
      },
    },
    variables: {
      lang: 'en',
      charset: 'UTF-8',
    },
  },
}

/**
 * Marked 插件
 */
export const MarkedPlugin: ContentPluginConfig = {
  id: 'content-marked',
  name: 'Marked',
  displayName: 'Markdown Parser',
  package: '@family-ai/marked',
  description: 'Markdown解析器，支持实时渲染和扩展语法',
  capabilities: [
    'Markdown解析',
    '实时渲染',
    '扩展语法支持',
    '代码高亮',
    '表格支持',
    '任务列表',
    '数学公式',
  ],
  version: '12.0.0',
  installation: {
    command: 'npm',
    args: ['install', '@family-ai/marked'],
  },
  configuration: {
    gfm: true,
    breaks: true,
    pedantic: false,
    silent: false,
    highlight: (code: string, lang: string) => {
      return `<pre><code class="language-${lang}">${code}</code></pre>`
    },
    renderer: {
      heading: (text: string, level: number) => {
        return `<h${level} id="${text.toLowerCase().replace(/\s+/g, '-')}">${text}</h${level}>`
      },
    },
  },
}

/**
 * Handlebars 插件
 */
export const HandlebarsPlugin: ContentPluginConfig = {
  id: 'content-handlebars',
  name: 'Handlebars',
  displayName: 'Handlebars Template Engine',
  package: '@family-ai/handlebars',
  description: 'Handlebars模板引擎，支持逻辑模板和自定义助手',
  capabilities: [
    '模板编译',
    '自定义助手',
    '部分模板',
    '条件渲染',
    '循环渲染',
    '数据绑定',
    '预编译',
  ],
  version: '4.7.8',
  installation: {
    command: 'npm',
    args: ['install', '@family-ai/handlebars'],
  },
  configuration: {
    data: {},
    compat: true,
    knownHelpers: {},
    knownHelpersOnly: false,
    noEscape: false,
    strict: false,
    assumeObjects: false,
    preventIndent: false,
    ignoreStandalone: false,
    explicitPartialContext: false,
  },
}

/**
 * Ionic 插件
 */
export const IonicPlugin: ContentPluginConfig = {
  id: 'content-ionic',
  name: 'Ionic',
  displayName: 'Ionic Framework',
  package: '@family-ai/ionic',
  description: 'Ionic框架支持，用于构建跨平台移动应用',
  capabilities: [
    '组件库',
    '主题定制',
    '图标系统',
    '手势支持',
    '路由导航',
    '原生API集成',
    'CLI工具',
  ],
  version: '7.0.0',
  installation: {
    command: 'npm',
    args: ['install', '@family-ai/ionic'],
  },
  configuration: {
    mode: 'md',
    theme: {
      primary: '#3880ff',
      secondary: '#5260ff',
      tertiary: '#6a64ff',
      success: '#2dd36f',
      warning: '#ffc409',
      danger: '#eb445a',
      dark: '#222428',
      medium: '#92949c',
      light: '#f4f5f8',
    },
    rippleEffect: true,
    inputShims: true,
    statusTap: true,
  },
}

/**
 * 所有内容处理插件定义
 */
export const ContentPluginDefinitions = {
  emmet: EmmetPlugin,
  marked: MarkedPlugin,
  handlebars: HandlebarsPlugin,
  ionic: IonicPlugin,
}

/**
 * 获取所有内容处理插件列表
 */
export function getAllContentPlugins(): ContentPluginConfig[] {
  return Object.values(ContentPluginDefinitions)
}

/**
 * 根据名称获取内容处理插件
 */
export function getContentPluginByName(name: string): ContentPluginConfig | undefined {
  const pluginMap: Record<string, ContentPluginConfig> = {
    emmet: EmmetPlugin,
    marked: MarkedPlugin,
    handlebars: HandlebarsPlugin,
    ionic: IonicPlugin,
  }
  return pluginMap[name.toLowerCase()]
}
