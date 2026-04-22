# @yyc3/plugins

**YYC³ AI Family 插件集合** — LSP 语言服务器插件、内容处理插件

[![npm version](https://img.shields.io/npm/v/@yyc3/plugins.svg)](https://www.npmjs.com/package/@yyc3/plugins)
[![license](https://img.shields.io/npm/l/@yyc3/plugins.svg)](https://github.com/YanYuCloudCube/Family-PAI/blob/main/packages/family-plugins/LICENSE)
[![peer](https://img.shields.io/badge/react-%3E%3D18.0.0-61dafb.svg)](https://reactjs.org/)
[![tests](https://img.shields.io/badge/tests-5%20passed-green.svg)](https://github.com/YanYuCloudCube/Family-PAI)

---

## 模块概览

| 子路径 | 内容 | 说明 |
|--------|------|------|
| `@yyc3/plugins` | 主入口 | 全部导出 |
| `@yyc3/plugins/content` | 内容处理插件 | Emmet / Marked / Handlebars / Ionic |
| `@yyc3/plugins/lsp` | 语言服务器插件 | Python / Ruby / Rust / Swift |

---

## 安装

```bash
pnpm add @yyc3/plugins @yyc3/core react react-dom
```

---

## 快速开始

### LSP 语言服务器插件

```typescript
import {
  getAllLSPPlugins,
  getLSPPluginByLanguage,
  PythonLSPPlugin,
  RustLSPPlugin,
} from '@yyc3/plugins'
// 或 import { ... } from '@yyc3/plugins/lsp'

const allLSP = getAllLSPPlugins()
// → [PythonLSPPlugin, RubyLSPPlugin, RustLSPPlugin, SwiftLSPPlugin]

const python = getLSPPluginByLanguage('python')
// → PythonLSPPlugin { id: 'lsp-python', server: 'pyright', ... }

console.log(PythonLSPPlugin.installation)
// → { command: 'npm', args: ['install', '@yyc3/lsp-python'] }
```

### 内容处理插件

```typescript
import {
  getAllContentPlugins,
  getContentPluginByName,
  EmmetPlugin,
  MarkedPlugin,
} from '@yyc3/plugins'
// 或 import { ... } from '@yyc3/plugins/content'

const allContent = getAllContentPlugins()
// → [EmmetPlugin, MarkedPlugin, HandlebarsPlugin, IonicPlugin]

const md = getContentPluginByName('marked')
// → MarkedPlugin { id: 'content-marked', version: '12.0.0', ... }
```

---

## 插件清单

### LSP 语言服务器 (4个)

| 插件 | 语言 | 服务器 | 安装方式 |
|------|------|--------|----------|
| **PythonLSP** | Python | Pyright | `npm i @yyc3/lsp-python` |
| **RubyLSP** | Ruby | ruby-lsp | `gem install ruby-lsp` |
| **RustLSP** | Rust | rust-analyzer | `rustup component add rust-analyzer` |
| **SwiftLSP** | Swift | sourcekit-lsp | `xcode-select --install` |

每个 LSP 插件包含：智能补全、类型检查、代码重构、跳转定义等能力配置。

### 内容处理 (4个)

| 插件 | 用途 | 版本 |
|------|------|------|
| **Emmet** | HTML/CSS 缩写展开 | v2.0.0 |
| **Marked** | Markdown 解析渲染 | v12.0.0 |
| **Handlebars** | 模板引擎 | v4.7.8 |
| **Ionic** | 跨平台移动框架 | v7.0.0 |

每个内容插件包含：安装命令、能力列表、详细配置项。

---

## API 导出索引

```typescript
// 主入口
import {
  // LSP 插件
  LSPPluginDefinitions,
  getAllLSPPlugins,
  getLSPPluginByLanguage,
  PythonLSPPlugin, RubyLSPPlugin, RustLSPPlugin, SwiftLSPPlugin,
  // 内容插件
  ContentPluginDefinitions,
  getAllContentPlugins,
  getContentPluginByName,
  EmmetPlugin, MarkedPlugin, HandlebarsPlugin, IonicPlugin,
  // 元信息
  PLUGIN_VERSION,
  PLUGIN_NAME,
} from '@yyc3/plugins'

// 子路径导入
import { PythonLSPPlugin, getAllLSPPlugins } from '@yyc3/plugins/lsp'
import { EmmetPlugin, getAllContentPlugins }      from '@yyc3/plugins/content'
```

---

## 依赖关系

```
@yyc3/plugins         ← 本包
├── @yyc3/core ^1.1.0  ← 核心引擎 (运行时依赖)
├── react >=18.0.0      ← Peer Dependency
└── react-dom >=18.0.0  ← Peer Dependency
```

---

## License

MIT © [YYC³ AI Team](https://github.com/YanYuCloudCube/Family-PAI)

---

*YYC³ AI Family — 八位拟人化AI家人的智能中枢*
