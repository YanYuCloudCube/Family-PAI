# 🌹 FAmily π³ Core | @yyc3/core

> **亦师亦友亦伯乐 · 一言一语一华章**
>
> **AI Family 极致信任核心引擎 | 万象归元于云枢**

[![npm version](https://img.shields.io/npm/v/@yyc3/core.svg)](https://www.npmjs.com/package/@yyc3/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

---

## ✨ 核心特性

### 🔐 统一认证 - 信任基石
- 多平台自动检测 (Claude Code、Cursor、Windsurf、VSCode)
- OpenAI / Ollama / Anthropic 多提供商支持
- 统一认证接口 + 安全脱敏 + 自动故障恢复

### 🔗 MCP 协议 - 连接枢纽
- 完整 MCP 协议实现 (Model Context Protocol)
- 工具调用和资源管理
- JSON-RPC 2.0 通信 + Prompt 模板系统

### 🎯 技能系统 - 能力矩阵
- 可扩展技能框架 + 内置实用技能
- 智能推荐 + 学习 + 组合编排
- 质量门控 + 性能追踪优化

### 🤖 AI Family 智能体 - 家庭核心
8 位专业 AI 家人协同工作：

| 智能体 | 角色 | 核心能力 |
|--------|------|----------|
| 元启·天枢 | 🧠 总指挥 | 全局编排、资源调度、自我进化 |
| 智云·守护 | 🛡️ 安全官 | 行为分析、威胁检测、自动修复 |
| 格物·宗师 | 📚 质量官 | 代码分析、性能监控、标准建议 |
| 创想·灵韵 | 🎨 创意官 | 创意生成、内容创作、设计辅助 |
| 言启·千行 | 🧭 导航员 | 意图识别、上下文管理、任务路由 |
| 语枢·万物 | 🤔 思考者 | 数据洞察、文档分析、假设推演 |
| 预见·先知 | 🔮 预言家 | 趋势预测、异常检测、前瞻建议 |
| 知遇·伯乐 | 🎯 推荐官 | 用户画像、个性化推荐、潜能发掘 |

### 🎨 多模态处理 - 感知延伸
- **图像**: 分析、OCR、分类、检测、批量处理
- **音频**: 转录、语音合成、多语言支持
- **文档**: 解析、摘要、对比、关键信息提取

---

## 📦 安装

```bash
# pnpm (推荐)
pnpm add @yyc3/core

# npm
npm install @yyc3/core

# yarn
yarn add @yyc3/core
```

---

## 🚀 快速开始

### 基础使用 - 5分钟上手

```typescript
import { FamilyCore, UnifiedAuthManager } from '@yyc3/core'

// 1️⃣ 初始化认证（信任基石）
const auth = new UnifiedAuthManager()
await auth.autoDetect()

// 2️⃣ 创建 FAmily π³ 实例
const pai = new FamilyCore({
  authManager: auth,
  debug: true,
})

// 3️⃣ 发送消息
const response = await pai.chat([
  { role: 'user', content: '你好，请介绍一下你自己' }
])

console.log(response.choices[0]?.message?.content)
```

### 使用 AI Family

```typescript
import { AIFamilyManager } from '@yyc3/core/ai-family'

const family = new AIFamilyManager({ authManager: auth })

// 创建任务
const task = family.createTask(
  'code-analysis',
  { code: 'function hello() { return "world" }' },
  { sessionId: 'session-1' }
)

// 提交任务（自动路由到合适的智能体）
const result = await family.submitTask(task)

// 查看推荐智能体
const recommendations = family.recommendAgents(task)

// 协同执行
const collabResult = await family.collaborate({
  id: 'collab-1',
  mode: 'parallel',
  agents: ['master', 'sentinel'],
  tasks: [task1, task2],
})
```

### 技能系统使用

```typescript
import { SkillManager } from '@yyc3/core/skills'

const skills = new SkillManager()

// 注册自定义技能
skills.register({
  id: 'custom.code-review',
  name: '代码审查',
  description: '审查代码质量',
  version: '1.0.0',
  category: 'analysis',
}, async (input, context) => {
  return {
    success: true,
    output: { score: 95 },
    duration: 100,
  }
})

// 执行技能
const result = await skills.execute('custom.code-review', {
  code: 'function hello() { return "world" }'
})
```

### 多模态处理

```typescript
import { MultimodalManager } from '@yyc3/core/multimodal'

const multimodal = new MultimodalManager(auth, {
  openai: { apiKey: process.env.OPENAI_API_KEY }
})

// 图像分析
const imageResult = await multimodal.analyzeImage({
  type: 'image', format: 'png', data: imageBase64
}, { tasks: ['describe', 'ocr'] })

// 音频转录
const audioResult = await multimodal.transcribeAudio({
  type: 'audio', format: 'mp3', data: audioBuffer
}, { language: 'zh' })

// 文档解析
const docResult = await multimodal.parseDocument({
  type: 'document', format: 'pdf', data: pdfBuffer
})
```

---

## 📁 模块结构

```
@yyc3/core
├── auth/           # 认证模块（信任基石）
├── mcp/            # MCP 协议（连接枢纽）
├── skills/         # 技能系统（能力矩阵）
├── ai-family/      # AI Family 智能体（家庭核心）
└── multimodal/     # 多模态处理（感知延伸）
```

### 按需导入

```typescript
// 认证模块
import { UnifiedAuthManager } from '@yyc3/core/auth'

// MCP 模块
import { MCPManager } from '@yyc3/core/mcp'

// 技能模块
import { SkillManager } from '@yyc3/core/skills'

// AI Family
import { AIFamilyManager } from '@yyc3/core/ai-family'

// 多模态
import { MultimodalManager } from '@yyc3/core/multimodal'
```

---

## 🔧 配置选项

```typescript
interface FamilyPAIConfig {
  authManager: UnifiedAuthManager
  debug?: boolean
  defaultModel?: string
  maxTokens?: number
  temperature?: number
}
```

---

## 📚 API 文档

### UnifiedAuthManager

| 方法 | 描述 |
|------|------|
| `autoDetect()` | 自动检测平台并配置认证 |
| `setApiKey(key)` | 设置 API Key |
| `chat(messages, options)` | 发送聊天请求 |
| `getInfo()` | 获取认证信息 |

### AIFamilyManager

| 方法 | 描述 |
|------|------|
| `createTask(type, input, options)` | 创建任务 |
| `submitTask(task)` | 提交任务 |
| `recommendAgents(task)` | 推荐智能体 |
| `collaborate(config)` | 协同执行 |
| `getAgent(role)` | 获取智能体实例 |

### SkillManager

| 方法 | 描述 |
|------|------|
| `register(skill, handler)` | 注册技能 |
| `execute(id, input)` | 执行技能 |
| `recommend(task)` | 智能推荐技能 |
| `compose(ids, strategy)` | 组合技能 |

### MultimodalManager

| 方法 | 描述 |
|------|------|
| `analyzeImage(image, options)` | 图像分析 |
| `transcribeAudio(audio, options)` | 音频转录 |
| `synthesizeSpeech(text, options)` | 语音合成 |
| `parseDocument(document, options)` | 文档解析 |

---

## 🛠️ 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 类型检查
pnpm typecheck

# 代码检查
pnpm lint

# 运行测试
pnpm test

# 生成文档
pnpm docs
```

---

## 🧪 测试覆盖

```
 Test Files  10 passed (10)
      Tests  207 passed | 5 skipped (212)
   Duration  466ms
```

---

## 🎯 品牌理念

```
╔═══════════════════════════════════════════════════╗
║                                                    ║
║                FAmily π³ Core                      ║
║                                                    ║
║   🔵 π (Pi) - 圆周率                              ║
║      ├─ 无限不循环 → 无限信任                     ║
║      ├─ 恒定不变   → 始终如一                     ║
║      └─ 数学之美   → 精准智能                     ║
║                                                    ║
║   🔷 ³ (Cubed) - 立方                             ║
║      ├─ 三维立体   → 完整体验                     ║
║      ├─ 全面覆盖   → 多维能力                     ║
║      └─ 稳固基础   → 可靠架构                     ║
║                                                    ║
╚═══════════════════════════════════════════════════╝
```

**💬 口号：信任如π，始终如一**  
**🌹 理念：亦师亦友亦伯乐；一言一语一华章**

---

## 📄 许可证

MIT License © 2026 [YanYuCloudCube](https://github.com/YanYuCloudCube)

---

<div align="center">

## 🌹 携手共进，智慧同行

> ***YanYuCloudCube***
> *言启象限 | 语枢未来*
>
> **📦 NPM**: [`@yyc3/core`](https://www.npmjs.com/package/@yyc3/core)  
> **🏢 GitHub**: [YanYuCloudCube](https://github.com/YanYuCloudCube)  
> **🌐 文档**: [yyccube.com](https://yyccube.com)

</div>
