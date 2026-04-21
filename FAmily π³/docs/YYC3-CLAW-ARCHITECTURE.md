# YYC3-Claw 项目架构全景图

> ***YanYuCloudCube***
> *言启象限 | 语枢未来*
> ***Words Initiate Quadrants, Language Serves as Core for Future***
> *万象归元于云枢 | 深栈智启新纪元*
> ***All things converge in cloud pivot; Deep stacks ignite a new era of intelligence***

---

**文档版本**：v1.0.0  
**发布日期**：2026-03-31  
**文档性质**：YYC3-Claw 项目核心架构展示  
**适用范围**：FAmily π³ 全系列智能应用项目开发

---

## 📋 目录

- [项目总览](#项目总览)
- [目录结构全景](#目录结构全景)
- [九层架构体系](#九层架构体系)
- [核心模块详解](#核心模块详解)
- [技术栈矩阵](#技术栈矩阵)
- [开发路线图](#开发路线图)

---

## 项目总览

### 核心定位

```
┌─────────────────────────────────────────────────────────────────────┐
│                    YYC3-Claw 项目核心定位                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  🎯 项目愿景：打造即拉即用的 AI 智能系统 NPM 包                      │
│                                                                     │
│  📦 核心能力：                                                      │
│     • MCP 协议层 - 标准化 AI 通信协议                               │
│     • Skills 系统 - 可扩展的技能注册与执行                          │
│     • 多模态 API - 图像/音频/文档处理                               │
│     • 统一认证 - OpenAI API + Ollama 本地自动检测                   │
│                                                                     │
│  🧠 智能核心：                                                      │
│     • AI Family - 8 个专业智能体协同工作                            │
│     • 五高五标五化 - 完整的质量保障体系                             │
│     • ABCD 四层架构 - Agent核心/ Web规范/ 工具链/ 工作区           │
│                                                                     │
│  🚀 最终交付：                                                      │
│     • npx @yyc3/web-ui → 即拉即用                                │
│     • 自动检测环境 → 零配置启动                                     │
│     • 宿主方硬件运行 → 轻量级部署                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 项目口号

> **亦师亦友亦伯乐；一言一语一华章**

---

## 目录结构全景

### 一级目录结构

```
YYC3-Claw/
├── 📁 .github/              # GitHub 配置 (CI/CD, ESLint, Prettier)
├── 📁 Mcp集成库/            # MCP 协议集成与 API 文档
├── 📁 UI组件集成/           # YYC3-UI 组件库集成
├── 📁 docs/                 # 项目文档体系
├── 📁 packages/             # 核心包模块
├── 📁 技能知识库/           # Skills 知识库与工具集
├── 📄 .gitignore            # Git 忽略配置
├── 📄 SKILL.md              # 技能系统核心定义
└── 📄 template_config.yaml  # 模板配置文件
```

### 二级目录详解

```
YYC3-Claw/
│
├── 📁 .github/                          # GitHub 工作流配置
│   ├── 📄 .eslintrc.cjs                 # ESLint 配置
│   ├── 📄 .prettierrc                   # Prettier 配置
│   ├── 📄 CI-CD-实施指南.md             # CI/CD 实施指南
│   ├── 📄 CI-CD-快速开始指南.md         # CI/CD 快速开始
│   ├── 📄 package.json                  # 依赖配置
│   ├── 📄 tsconfig.json                 # TypeScript 配置
│   ├── 📄 tsconfig.node.json            # Node TypeScript 配置
│   └── 📄 vite.config.ts                # Vite 构建配置
│
├── 📁 Mcp集成库/                        # MCP 协议集成中心
│   ├── 📁 API文档/                      # 完整 API 文档库
│   │   ├── 📁 MCP调用/                  # MCP 调用文档
│   │   ├── 📁 prompt工程/               # Prompt 工程文档
│   │   ├── 📁 使用指南/                 # 使用指南
│   │   ├── 📁 创意实践/                 # 创意实践案例
│   │   ├── 📁 助理API/                  # 助理 API 文档
│   │   ├── 📁 场景案例/                 # 场景案例文档
│   │   ├── 📁 实时API/                  # 实时 API 文档
│   │   ├── 📁 工具API/                  # 工具 API 文档
│   │   ├── 📁 平台服务/                 # 平台服务文档
│   │   ├── 📁 开发工具/                 # 开发工具文档
│   │   ├── 📁 开发指南/                 # 开发指南
│   │   ├── 📁 批处理API/                # 批处理 API 文档
│   │   ├── 📁 文件API/                  # 文件 API 文档
│   │   ├── 📁 模型API/                  # 模型 API 文档
│   │   ├── 📁 模型介绍/                 # 模型介绍文档
│   │   ├── 📁 模型工具/                 # 模型工具文档
│   │   ├── 📁 模型能力/                 # 模型能力文档
│   │   ├── 📁 知识库API/                # 知识库 API 文档
│   │   ├── 📁 Agent API/                # Agent API 文档
│   │   └── 📁 YYC3-CN/                  # YYC3-CN MCP 集成
│   ├── 📁 GitLab-工具安装/              # GitLab 工具安装脚本
│   ├── 📁 MCP/                          # MCP 配置文件
│   ├── 📁 Zai-Coding-Plugins/           # 编程插件集成
│   └── 📄 YYC3-多行业开发大纲提示词.md   # 多行业开发提示词
│
├── 📁 UI组件集成/                       # UI 组件库集成
│   ├── 📁 ui/                           # 主 UI 组件库
│   │   ├── 📁 apps/v4/                  # V4 版本应用
│   │   │   ├── 📁 app/                  # Next.js App Router
│   │   │   ├── 📁 components/           # React 组件
│   │   │   ├── 📁 content/              # 内容文档
│   │   │   ├── 📁 examples/             # 示例代码
│   │   │   ├── 📁 hooks/                # React Hooks
│   │   │   └── 📁 lib/                  # 工具库
│   │   └── 📄 package.json              # UI 包配置
│   ├── 📁 yyc3-components/              # YYC3 自定义组件
│   └── 📁 yyc3-monorepo/                # YYC3 Monorepo 配置
│
├── 📁 docs/                             # 文档体系
│   ├── 📁 A/                            # A 层文档 (Agent 核心)
│   │   └── 📄 YYC3-Claw-ABCD*.md        # ABCD 集成方案
│   ├── 📁 B/                            # B 层文档 (Web 标准)
│   │   ├── 📁 YYC3-AI-Hub/              # AI Hub 文档
│   │   └── 📄 YYC3-Claw-ABCD*.md        # ABCD 集成方案
│   ├── 📁 D/                            # D 层文档 (工作区)
│   │   ├── 📁 .github/                  # CI/CD 工作流
│   │   ├── 📁 yyc3-core-files/          # 核心文件
│   │   └── 📄 YYC3-Claw-*.md            # Claw 文档
│   ├── 📄 YYC3-AI-Family.md             # AI Family 架构
│   ├── 📄 YYC3-CLAW_DDD.md              # DDD 架构文档
│   ├── 📄 YYC3-CLAW_UI报告.md           # UI 报告文档
│   ├── 📄 YYC3-Claw-深入规划设计方案.md  # 深入规划方案
│   └── 📄 YYC3-五高五标五化五维核心机制.md # 核心机制文档
│
├── 📁 packages/                         # 核心包模块
│   ├── 📁 claw-core/                    # ⭐ Claw 核心包 (已实现)
│   │   ├── 📁 src/auth/                 # 统一认证系统
│   │   │   ├── 📄 unified-auth.ts       # OpenAI + Ollama 自动检测
│   │   │   ├── 📄 openai-provider.ts    # OpenAI 提供商
│   │   │   └── 📄 ollama-provider.ts    # Ollama 提供商
│   │   ├── 📁 src/mcp/                  # MCP 客户端
│   │   │   ├── 📄 client.ts             # MCP 协议客户端
│   │   │   ├── 📄 transport.ts          # 传输层实现
│   │   │   └── 📄 types.ts              # MCP 类型定义
│   │   ├── 📁 src/skills/               # 技能系统
│   │   │   ├── 📄 manager.ts            # 技能管理器
│   │   │   ├── 📄 builtin.ts            # 内置技能
│   │   │   └── 📄 types.ts              # 技能类型定义
│   │   └── 📄 package.json              # @yyc3/core
│   ├── 📁 claw-web-ui/                  # ⭐ Claw Web UI 包 (已实现)
│   │   ├── 📁 src/components/           # React 组件
│   │   │   ├── 📄 claw-chat.tsx         # AI 聊天组件
│   │   │   ├── 📄 claw-provider.tsx     # 上下文提供者
│   │   │   └── 📄 provider-selector.tsx # 提供商选择器
│   │   ├── 📁 src/hooks/                # React Hooks
│   │   │   ├── 📄 use-claw-auth.ts      # 认证 Hook
│   │   │   ├── 📄 use-claw-chat.ts      # 聊天 Hook
│   │   │   └── 📄 use-claw-skills.ts    # 技能 Hook
│   │   ├── 📄 cli.ts                    # CLI 入口
│   │   └── 📄 package.json              # @yyc3/web-ui
│   ├── 📁 containers/                   # 容器化模块
│   │   └── 📁 docker/                   # Docker/Moby 集成
│   ├── 📁 content/                      # 内容处理模块
│   │   ├── 📁 emmet/                    # Emmet 语法
│   │   ├── 📁 handlebars/               # Handlebars 模板
│   │   ├── 📁 ionic/                    # Ionic 框架
│   │   ├── 📁 js-beautify/              # JS 格式化
│   │   └── 📁 marked/                   # Markdown 解析
│   ├── 📁 core/                         # 核心模块
│   │   └── 📁 assert/                   # 断言库
│   ├── 📁 dotnet/                       # .NET 模块
│   │   └── 📁 razor/                    # Razor 模板引擎
│   ├── 📁 i18n/                         # 国际化模块
│   │   └── 📁 icu/                      # ICU 国际化组件
│   ├── 📁 lsp/                          # LSP 服务模块
│   │   ├── 📁 python/                   # Python LSP (Pyright)
│   │   ├── 📁 ruby/                     # Ruby LSP
│   │   ├── 📁 rust/                     # Rust Analyzer
│   │   └── 📁 swift/                    # Swift LSP
│   ├── 📁 shell/                        # Shell 模块
│   │   ├── 📁 fish/                     # Fish Shell
│   │   └── 📁 go-tools/                 # Go 工具链
│   ├── 📁 standards/                    # Web 标准模块
│   │   ├── 📁 console/                  # Console API 标准
│   │   ├── 📁 dom/                      # DOM 标准
│   │   ├── 📁 encoding/                 # Encoding 标准
│   │   ├── 📁 fetch/                    # Fetch API 标准
│   │   ├── 📁 html/                     # HTML 标准
│   │   ├── 📁 url/                      # URL 标准
│   │   └── 📁 xhr/                      # XHR 标准
│   ├── 📁 syntax/                       # 语法高亮模块
│   │   ├── 📁 git/                      # Git 语法
│   │   ├── 📁 go/                       # Go 语法
│   │   ├── 📁 icons/                    # 图标语法
│   │   ├── 📁 latex/                    # LaTeX 语法
│   │   ├── 📁 lua/                      # Lua 语法
│   │   └── 📁 php/                      # PHP 语法
│   └── 📁 types/                        # 类型定义模块
│       └── 📁 DefinitelyTyped/          # TypeScript 类型定义
│
└── 📁 技能知识库/                       # Skills 知识库
    ├── 📁 Tools-A/                      # A 层工具 (Agent 核心)
    │   ├── 📁 Handlebars/               # Handlebars 模板
    │   ├── 📁 autocomplete/             # 自动补全
    │   ├── 📁 html/                     # HTML 工具
    │   └── 📁 web-history/              # Web 历史
    └── 📁 Tools-B/                      # B 层工具 (Web 标准)
        ├── 📁 dom/                      # DOM 标准
        ├── 📁 fetch/                    # Fetch 标准
        ├── 📁 html/                     # HTML 标准
        ├── 📁 storage/                  # Storage 标准
        ├── 📁 streams/                  # Streams 标准
        ├── 📁 url/                      # URL 标准
        └── 📁 xhr/                      # XHR 标准
```

---

## 九层架构体系

### 架构全景图

```
┌─────────────────────────────────────────────────────────────────────┐
│                    YYC3-Claw 九层架构体系                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  第9层 · 用户交互层                                                  │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Web UI │ CLI工具 │ VSCode插件 │ API网关 │ 移动端           │   │
│  │  (UI组件集成/)                                                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                           │                                         │
│  第8层 · AI Family层 ⬇️                                              │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  元启·天枢 (总指挥)                                          │   │
│  │  ├── 智云·守护 (安全)  ├── 格物·宗师 (质量)                  │   │
│  │  └── 创想·灵韵 (创意)                                        │   │
│  │  ┌───────────────────────────────────────────────────────┐  │   │
│  │  │ 言启·千行 │ 语枢·万物 │ 预见·先知 │ 知遇·伯乐         │  │   │
│  │  └───────────────────────────────────────────────────────┘  │   │
│  │  (docs/YYC3-AI-Family.md)                                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                           │                                         │
│  第7层 · MCP协议层 ⬇️                                                │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  MCP Client │ MCP Server │ Transport │ Protocol             │   │
│  │  (Mcp集成库/)                                                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                           │                                         │
│  第6层 · 技能系统层 ⬇️                                               │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Skills Registry │ Chain Workflows │ Quality Gates          │   │
│  │  (技能知识库/ + SKILL.md)                                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                           │                                         │
│  第5层 · 认证与安全层 ⬇️                                             │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  OpenAI Auth │ Ollama Auth │ Unified Auth Manager           │   │
│  │  (Mcp集成库/API文档/)                                        │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                           │                                         │
│  第4层 · 内容处理层 ⬇️                                               │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Emmet │ Marked │ Beautify │ Handlebars │ Ionic             │   │
│  │  (packages/content/)                                         │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                           │                                         │
│  第3层 · LSP服务层 ⬇️                                                │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Python (Pyright) │ Ruby LSP │ Rust Analyzer │ Swift        │   │
│  │  (packages/lsp/)                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                           │                                         │
│  第2层 · Web标准层 ⬇️                                                │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  HTML │ DOM │ Fetch │ URL │ Streams │ Storage │ XHR         │   │
│  │  (packages/standards/ + 技能知识库/Tools-B/)                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                           │                                         │
│  第1层 · 基础设施层 ⬇️                                               │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Docker │ TypeScript │ ICU国际化 │ Shell │ .NET             │   │
│  │  (packages/containers/ + packages/i18n/ + packages/shell/)  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 层级职责映射

| 层级 | 名称 | 核心职责 | 对应目录 |
|------|------|----------|----------|
| **L9** | 用户交互层 | 用户界面展示与交互 | `UI组件集成/` |
| **L8** | AI Family层 | 智能体协同决策 | `docs/YYC3-AI-Family.md` |
| **L7** | MCP协议层 | AI通信协议标准化 | `Mcp集成库/` |
| **L6** | 技能系统层 | 技能注册与执行 | `技能知识库/` + `SKILL.md` |
| **L5** | 认证与安全层 | 统一认证管理 | `Mcp集成库/API文档/` |
| **L4** | 内容处理层 | 文本/模板处理 | `packages/content/` |
| **L3** | LSP服务层 | 语言服务器协议 | `packages/lsp/` |
| **L2** | Web标准层 | Web API 标准实现 | `packages/standards/` |
| **L1** | 基础设施层 | 底层运行环境 | `packages/containers/` + `packages/i18n/` |

---

## 核心模块详解

### 模块一：Mcp集成库

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Mcp集成库 模块架构                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📁 Mcp集成库/                                                       │
│  │                                                                  │
│  ├── 📁 API文档/                    # 完整 API 文档库 (50+ 文档)    │
│  │   ├── 📁 MCP调用/                # MCP 调用文档                  │
│  │   │   ├── 联网搜索MCP.md         # 联网搜索能力                  │
│  │   │   └── 视觉理解MCP.md         # 视觉理解能力                  │
│  │   │                                                              │
│  │   ├── 📁 模型API/                # 模型 API 文档                 │
│  │   │   ├── 对话补全.md            # 对话补全 API                  │
│  │   │   ├── 图像生成.md            # 图像生成 API                  │
│  │   │   ├── 文本嵌入.md            # 文本嵌入 API                  │
│  │   │   └── 语音转文本.md          # 语音转文本 API                │
│  │   │                                                              │
│  │   ├── 📁 模型介绍/               # 模型介绍文档                  │
│  │   │   ├── 📁 免费模型/           # 免费模型集合                  │
│  │   │   ├── 📁 文本模型/           # 文本模型集合                  │
│  │   │   ├── 📁 视觉理解模型/       # 视觉理解模型                  │
│  │   │   └── 📁 视频生成模型/       # 视频生成模型                  │
│  │   │                                                              │
│  │   ├── 📁 知识库API/              # 知识库 API 文档               │
│  │   │   ├── 创建知识库.md          # 知识库创建                    │
│  │   │   ├── 知识库检索.md          # 知识库检索                    │
│  │   │   └── 文档列表.md            # 文档管理                      │
│  │   │                                                              │
│  │   └── 📁 YYC3-CN/                # YYC3-CN MCP 集成              │
│  │       ├── 📁 代码/               # MCP 服务器代码                │
│  │       ├── 📁 文档/               # 集成文档                      │
│  │       └── 📁 配置/               # 配置文件                      │
│  │                                                                  │
│  ├── 📁 MCP/                        # MCP 配置文件                  │
│  │   ├── mcp-docker.json            # Docker MCP 配置               │
│  │   ├── mcp-postgres.json          # PostgreSQL MCP 配置           │
│  │   ├── mcp-filesystem.json        # 文件系统 MCP 配置             │
│  │   └── mcp-yyc3-cn-assistant.json # YYC3-CN 助手配置              │
│  │                                                                  │
│  └── 📁 Zai-Coding-Plugins/         # 编程插件集成                  │
│      ├── 📁 Claude-Code/            # Claude Code 插件              │
│      └── 📁 Ralph-Loop/             # Ralph Loop 工作流             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**核心能力**：
- 📚 **50+ API 文档**：覆盖对话、图像、语音、知识库等全场景
- 🔌 **MCP 协议支持**：Docker、PostgreSQL、文件系统等
- 🛠️ **开发工具集成**：Claude Code、Cursor、Cline 等
- 🌐 **多模型支持**：免费模型、文本模型、视觉模型、视频模型

---

### 模块二：UI组件集成

```
┌─────────────────────────────────────────────────────────────────────┐
│                    UI组件集成 模块架构                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📁 UI组件集成/                                                      │
│  │                                                                  │
│  ├── 📁 ui/                         # 主 UI 组件库                  │
│  │   └── 📁 apps/v4/                # V4 版本应用                   │
│  │       │                                                          │
│  │       ├── 📁 app/                # Next.js App Router            │
│  │       │   ├── 📁 (app)/          # 主应用路由                    │
│  │       │   │   ├── 📁 (root)/     # 根页面                        │
│  │       │   │   ├── 📁 blocks/     # 区块展示                      │
│  │       │   │   ├── 📁 charts/     # 图表展示                      │
│  │       │   │   ├── 📁 colors/     # 颜色主题                      │
│  │       │   │   ├── 📁 docs/       # 文档页面                      │
│  │       │   │   ├── 📁 examples/   # 示例页面                      │
│  │       │   │   │   ├── authentication/  # 认证示例               │
│  │       │   │   │   ├── dashboard/       # 仪表盘示例             │
│  │       │   │   │   ├── playground/      # 测试场示例             │
│  │       │   │   │   └── tasks/           # 任务管理示例           │
│  │       │   │   └── 📁 themes/     # 主题展示                      │
│  │       │   └── 📁 api/            # API 路由                      │
│  │       │                                                          │
│  │       ├── 📁 components/         # React 组件库                  │
│  │       │   ├── 📁 cards/          # 卡片组件                      │
│  │       │   │   ├── chat.tsx       # ⭐ AI 聊天组件                │
│  │       │   │   ├── stats.tsx      # 统计组件                      │
│  │       │   │   ├── calendar.tsx   # 日历组件                      │
│  │       │   │   ├── forms.tsx      # 表单组件                      │
│  │       │   │   ├── payments.tsx   # 支付组件                      │
│  │       │   │   └── share.tsx      # 分享组件                      │
│  │       │   ├── 📁 lo-fi/          # Lo-Fi 风格组件                │
│  │       │   └── *.tsx              # 其他组件                      │
│  │       │                                                          │
│  │       ├── 📁 hooks/              # React Hooks                   │
│  │       │   ├── use-colors.ts      # 颜色 Hook                     │
│  │       │   ├── use-config.ts      # 配置 Hook                     │
│  │       │   ├── use-mobile.ts      # 移动端检测 Hook               │
│  │       │   └── use-mounted.ts     # 挂载 Hook                     │
│  │       │                                                          │
│  │       └── 📁 lib/                # 工具库                        │
│  │           ├── llm.ts             # ⭐ LLM 处理逻辑               │
│  │           ├── registry.ts        # 组件注册表                    │
│  │           └── utils.ts           # 工具函数                      │
│  │                                                                  │
│  ├── 📁 yyc3-components/            # YYC3 自定义组件               │
│  └── 📁 yyc3-monorepo/              # YYC3 Monorepo 配置            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**核心能力**：
- ⭐ **AI 聊天组件**：`chat.tsx` 可直接用于 Claw 对话窗口
- 📊 **仪表盘示例**：完整的 Dashboard 示例
- 🎮 **测试场示例**：Playground 模型测试
- 📋 **任务管理示例**：Tasks 任务队列
- 🎨 **主题系统**：完整的主题定制能力

---

### 模块三：packages 核心包

```
┌─────────────────────────────────────────────────────────────────────┐
│                    packages 核心包架构                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📁 packages/                                                        │
│  │                                                                  │
│  ├── 📁 containers/                 # 容器化模块                    │
│  │   └── 📁 docker/                 # Docker/Moby 集成              │
│  │       ├── hack/                  # Docker Hack 脚本              │
│  │       ├── go.mod                 # Go 模块定义                   │
│  │       └── Makefile               # 构建脚本                      │
│  │                                                                  │
│  ├── 📁 content/                    # 内容处理模块                  │
│  │   ├── 📁 emmet/                  # Emmet 语法扩展                │
│  │   │   └── src/index.ts           # Emmet 入口                    │
│  │   ├── 📁 handlebars/             # Handlebars 模板引擎           │
│  │   ├── 📁 ionic/                  # Ionic 移动框架                │
│  │   │   ├── content/               # Ionic 内容                    │
│  │   │   └── server.js              # Ionic 服务                    │
│  │   ├── 📁 js-beautify/            # JavaScript 格式化             │
│  │   └── 📁 marked/                 # Markdown 解析器               │
│  │       └── bin/main.js            # Marked CLI                    │
│  │                                                                  │
│  ├── 📁 core/                       # 核心模块                      │
│  │   └── 📁 assert/                 # 断言库                        │
│  │       └── assert.js              # 断言实现                      │
│  │                                                                  │
│  ├── 📁 lsp/                        # LSP 服务模块                  │
│  │   ├── 📁 python/                 # Python LSP (Pyright)          │
│  │   │   ├── docs/                  # 文档                          │
│  │   │   └── package.json           # 包配置                        │
│  │   ├── 📁 ruby/                   # Ruby LSP                      │
│  │   │   ├── exe/ruby-lsp           # Ruby LSP 可执行文件           │
│  │   │   └── lib/ruby-lsp.rb        # Ruby LSP 实现                 │
│  │   ├── 📁 rust/                   # Rust Analyzer                 │
│  │   │   ├── lib/                   # Rust 库                       │
│  │   │   └── Cargo.toml             # Rust 配置                     │
│  │   └── 📁 swift/                  # Swift LSP                     │
│  │       └── Package.swift          # Swift 包配置                  │
│  │                                                                  │
│  ├── 📁 standards/                  # Web 标准模块                  │
│  │   ├── 📁 console/                # Console API 标准              │
│  │   │   └── index.bs               # Bikeshed 规范                 │
│  │   ├── 📁 dom/                    # DOM 标准                      │
│  │   │   └── dom.bs                 # DOM 规范                      │
│  │   ├── 📁 fetch/                  # Fetch API 标准                │
│  │   │   └── fetch.bs               # Fetch 规范                    │
│  │   ├── 📁 html/                   # HTML 标准                     │
│  │   ├── 📁 url/                    # URL 标准                      │
│  │   │   └── url.bs                 # URL 规范                      │
│  │   └── 📁 xhr/                    # XHR 标准                      │
│  │       └── xhr.bs                 # XHR 规范                      │
│  │                                                                  │
│  ├── 📁 shell/                      # Shell 模块                    │
│  │   ├── 📁 fish/                   # Fish Shell                    │
│  │   │   ├── src/                   # Rust 源码                     │
│  │   │   └── Cargo.toml             # Rust 配置                     │
│  │   └── 📁 go-tools/               # Go 工具链                     │
│  │       └── gopls/                 # Go 语言服务器                 │
│  │                                                                  │
│  └── 📁 i18n/                       # 国际化模块                    │
│      └── 📁 icu/                    # ICU 国际化组件                │
│          ├── icu4c/                 # C/C++ ICU                     │
│          ├── icu4j/                 # Java ICU                      │
│          └── WORKSPACE              # Bazel 工作空间                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**核心能力**：
- 🐳 **容器化支持**：Docker/Moby 深度集成
- 📝 **内容处理**：Emmet、Markdown、Handlebars 等
- 🔧 **LSP 服务**：Python、Ruby、Rust、Swift 四大语言
- 🌐 **Web 标准**：DOM、Fetch、URL、XHR 等标准实现
- 🐚 **Shell 支持**：Fish Shell + Go 工具链
- 🌍 **国际化**：ICU 完整国际化支持

---

### 模块四：技能知识库

```
┌─────────────────────────────────────────────────────────────────────┐
│                    技能知识库 模块架构                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📁 技能知识库/                                                      │
│  │                                                                  │
│  ├── 📁 Tools-A/                    # A 层工具 (Agent 核心)         │
│  │   ├── 📁 Handlebars/             # Handlebars 模板引擎           │
│  │   ├── 📁 autocomplete/           # 自动补全工具                  │
│  │   ├── 📁 html/                   # HTML 工具集                   │
│  │   │   ├── dev/search.js          # 搜索功能                      │
│  │   │   ├── html-dfn.js            # HTML 定义                     │
│  │   │   └── styles.css             # 样式文件                      │
│  │   ├── 📁 web-history/            # Web 历史记录                  │
│  │   ├── License                    # 许可证                        │
│  │   └── 版权许可协议.md            # 版权协议                      │
│  │                                                                  │
│  └── 📁 Tools-B/                    # B 层工具 (Web 标准)           │
│      ├── 📁 dom/                    # DOM 标准工具                  │
│      │   └── dom.bs                 # DOM 规范                      │
│      ├── 📁 fetch/                  # Fetch 标准工具                │
│      │   └── fetch.bs               # Fetch 规范                    │
│      ├── 📁 html/                   # HTML 标准工具                 │
│      ├── 📁 storage/                # Storage 标准工具              │
│      │   └── storage.bs             # Storage 规范                  │
│      ├── 📁 streams/                # Streams 标准工具              │
│      │   └── index.bs               # Streams 规范                  │
│      ├── 📁 url/                    # URL 标准工具                  │
│      │   └── url.bs                 # URL 规范                      │
│      ├── 📁 xhr/                    # XHR 标准工具                  │
│      │   └── xhr.bs                 # XHR 规范                      │
│      ├── 📁 figures/                # 图片资源 (40+ 图片)           │
│      └── 📁 zsh/                    # Zsh Shell 工具                │
│          ├── Doc/                   # 文档                          │
│          ├── Src/                   # 源码                          │
│          └── Makefile.in            # 构建配置                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**核心能力**：
- 🤖 **Agent 核心工具**：自动补全、模板引擎、HTML 工具
- 🌐 **Web 标准工具**：DOM、Fetch、Storage、Streams、URL、XHR
- 📚 **文档资源**：40+ 图片资源、完整规范文档
- 🐚 **Shell 工具**：Zsh 完整实现

---

## 技术栈矩阵

### 前端技术栈

| 技术 | 版本 | 用途 | 对应目录 |
|------|------|------|----------|
| **Next.js** | 16.1.6 | App Router 框架 | `UI组件集成/ui/apps/v4/` |
| **React** | 19.2.3 | UI 组件库 | `UI组件集成/ui/apps/v4/components/` |
| **TypeScript** | 5.x | 类型安全 | 全项目 |
| **Tailwind CSS** | 4.x | 样式框架 | `UI组件集成/ui/` |
| **shadcn/ui** | 4.1.1 | 组件库 | `UI组件集成/ui/apps/v4/components/` |
| **Lucide Icons** | 0.474.0 | 图标库 | `UI组件集成/ui/` |
| **Recharts** | 3.8.0 | 图表库 | `UI组件集成/ui/` |
| **Jotai** | 2.15.0 | 状态管理 | `UI组件集成/ui/` |
| **React Hook Form** | 7.62.0 | 表单管理 | `UI组件集成/ui/` |
| **Zod** | 3.25.76 | 数据验证 | `UI组件集成/ui/` |

### 后端技术栈

| 技术 | 版本 | 用途 | 对应目录 |
|------|------|------|----------|
| **Node.js** | 20+ | 运行时 | `packages/` |
| **Go** | 1.21+ | 工具链 | `packages/shell/go-tools/` |
| **Rust** | 1.75+ | Shell 实现 | `packages/shell/fish/` |
| **Python** | 3.11+ | LSP 服务 | `packages/lsp/python/` |
| **Ruby** | 3.2+ | LSP 服务 | `packages/lsp/ruby/` |
| **Swift** | 5.9+ | LSP 服务 | `packages/lsp/swift/` |

### AI 技术栈

| 技术 | 用途 | 对应目录 |
|------|------|----------|
| **MCP 协议** | AI 通信协议 | `Mcp集成库/` |
| **OpenAI API** | 云端 AI 服务 | `Mcp集成库/API文档/` |
| **Ollama** | 本地 AI 服务 | `Mcp集成库/API文档/` |
| **AI Family** | 8 智能体协同 | `docs/YYC3-AI-Family.md` |

### 基础设施技术栈

| 技术 | 用途 | 对应目录 |
|------|------|----------|
| **Docker** | 容器化 | `packages/containers/docker/` |
| **Kubernetes** | 容器编排 | `.github/` CI/CD |
| **PostgreSQL** | 数据库 | `Mcp集成库/MCP/mcp-postgres.json` |
| **Redis** | 缓存 | `UI组件集成/ui/` LRU Cache |
| **ICU** | 国际化 | `packages/i18n/icu/` |

---

## 开发路线图

### 阶段一：基础整合 (第1-2周) ✅ 已完成

```yaml
任务清单:
  1. UI 组件整合 ✅
     - ✅ 创建 ClawChat 组件
     - ✅ 创建 ProviderSelector 组件
     - ✅ 创建 ClawProvider 上下文
     - ✅ 创建 React Hooks (useClawAuth, useClawChat, useClawSkills)
  
  2. 认证系统整合 ✅
     - ✅ OpenAI API 认证 (openai-provider.ts)
     - ✅ Ollama 本地检测 (ollama-provider.ts)
     - ✅ 统一认证管理器 (unified-auth.ts)
  
  3. MCP 协议整合 ✅
     - ✅ MCP Client 实现 (client.ts)
     - ✅ Transport 层实现 (transport.ts)
     - ✅ MCP 类型定义 (types.ts)

交付物:
  - ✅ @yyc3/core 核心包
  - ✅ @yyc3/web-ui Web UI 包
  - ✅ 统一认证系统
  - ✅ MCP 协议层
  - ✅ 技能系统基础
```

### 阶段二：核心功能 (第3-4周) ✅ 已完成

```yaml
任务清单:
  1. AI Family 集成 ✅
     - ✅ 8 智能体实现 (MetaOracle, Sentinel, Master, Creative, Navigator, Thinker, Prophet, Bolero)
     - ✅ 智能体协同机制 (顺序/并行/层级/共识)
     - ✅ 智能体状态管理
  
  2. Skills 系统实现 ✅
     - ✅ 技能注册表
     - ✅ 技能执行引擎
     - ✅ 技能链编排
  
  3. 多模态支持 ✅
     - ✅ 图像处理 (分析/OCR/分类/检测)
     - ✅ 音频处理 (转录/语音合成)
     - ✅ 文档解析 (提取/摘要/对比)

交付物:
  - ✅ AI Family 完整实现
  - ✅ Skills 系统
  - ✅ 多模态 API
  - ✅ 阶段二实现报告 (PHASE2_REPORT.md)
```

### 阶段三：NPM 包发布 (第5-6周)

```yaml
任务清单:
  1. 打包优化
     - 代码分割
     - Tree-shaking
     - 压缩优化
  
  2. 文档完善
     - API 文档
     - 使用示例
     - 最佳实践
  
  3. 发布准备
     - NPM 发布
     - GitHub Release
     - 示例项目

交付物:
  - @yyc3/web-ui@1.0.0
  - 完整文档站
  - 示例项目
```

---

## 附录：核心文件索引

### 文档文件

| 文件 | 路径 | 描述 |
|------|------|------|
| **AI Family 架构** | `docs/YYC3-AI-Family.md` | 8 智能体架构定义 |
| **DDD 架构** | `docs/YYC3-CLAW_DDD.md` | 领域驱动设计文档 |
| **UI 报告** | `docs/YYC3-CLAW_UI报告.md` | UI 实现报告 |
| **深入规划** | `docs/YYC3-Claw-深入规划设计方案.md` | 项目规划方案 |
| **核心机制** | `docs/YYC3-五高五标五化五维核心机制.md` | 五高五标五化定义 |
| **技能定义** | `SKILL.md` | 技能系统核心定义 |

### 配置文件

| 文件 | 路径 | 描述 |
|------|------|------|
| **TypeScript 配置** | `.github/tsconfig.json` | TypeScript 编译配置 |
| **Vite 配置** | `.github/vite.config.ts` | Vite 构建配置 |
| **ESLint 配置** | `.github/.eslintrc.cjs` | ESLint 规则配置 |
| **Prettier 配置** | `.github/.prettierrc` | Prettier 格式化配置 |

### MCP 配置

| 文件 | 路径 | 描述 |
|------|------|------|
| **Docker MCP** | `Mcp集成库/MCP/mcp-docker.json` | Docker MCP 配置 |
| **PostgreSQL MCP** | `Mcp集成库/MCP/mcp-postgres.json` | PostgreSQL MCP 配置 |
| **YYC3-CN MCP** | `Mcp集成库/MCP/mcp-yyc3-cn-assistant.json` | YYC3-CN 助手配置 |

---

**🌹 以上为 YYC3-Claw 项目完整架构展示文档，祝开发顺利！**
