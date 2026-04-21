# 🏠 FAmily π³ Core

> **信任如π，始终如一 | AI Family 极致信任核心引擎**

FAmily π³ Core 是一个革命性的 **AI Family 智能家庭核心引擎**，提供极致的信任体系、完整的 AI 体验和始终如一的服务质量。

**@family-pai/core** - FAmily π³ 的核心包

---

## ✨ 核心特性

### 🔐 统一认证 (Auth) - 信任基石
- 多平台自动检测 (Claude Code、Cursor、Windsurf、VSCode)
- API Key 和 OAuth 双模式支持
- OpenAI / Ollama / Anthropic 多提供商
- 统一的认证接口 + 安全脱敏

### 🔗 MCP 协议 (Model Context Protocol) - 连接枢纽
- 完整的 MCP 协议实现
- 工具调用和资源管理
- Prompt 模板系统
- JSON-RPC 2.0 通信

### 🎯 技能系统 (Skills) - 能力矩阵
- 可扩展的技能框架
- 内置多种实用技能
- 自定义技能支持
- 智能技能推荐 + 质量门控

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
- **图像**: 分析、OCR、分类、检测
- **音频**: 转录、语音合成
- **文档**: 解析、摘要、对比

---

## 📦 安装

```bash
# pnpm (推荐)
pnpm add @family-pai/core

# npm
npm install @family-pai/core

# yarn
yarn add @family-pai/core
```

---

## 🚀 快速开始

### 基础使用

```typescript
import { FamilyCore, UnifiedAuthManager } from '@family-pai/core'

// 初始化认证（信任基石）
const auth = new UnifiedAuthManager()
await auth.autoDetect()

// 创建 FAmily π³ 实例
const pai = new FamilyCore({
  authManager: auth,
  debug: true,
})

// 发送消息
const response = await pai.chat([
  { role: 'user', content: '你好，请介绍一下你自己' }
])

console.log(response.choices[0]?.message?.content)
```

### AI Family 使用

```typescript
import { AIFamilyManager } from '@family-pai/core/ai-family'

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

### 多模态使用

```typescript
import { MultimodalManager } from '@family-pai/core/multimodal'

const multimodal = new MultimodalManager(auth, {
  openai: { apiKey: process.env.OPENAI_API_KEY }
})

// 图像分析
const imageResult = await multimodal.analyzeImage({
  type: 'image',
  format: 'png',
  data: imageBase64,
}, { tasks: ['describe', 'ocr'] })

// 音频转录
const audioResult = await multimodal.transcribeAudio({
  type: 'audio',
  format: 'mp3',
  data: audioBuffer,
}, { language: 'zh' })

// 语音合成
const speech = await multimodal.synthesizeSpeech('你好世界', { voice: 'alloy' })

// 文档解析
const docResult = await multimodal.parseDocument({
  type: 'document',
  format: 'pdf',
  data: pdfBuffer,
})
```

---

## 📁 模块结构

```
@family-pai/core
├── auth/           # 认证模块（信任基石）
├── mcp/            # MCP 协议（连接枢纽）
├── skills/         # 技能系统（能力矩阵）
├── ai-family/      # AI Family 智能体（家庭核心）
└── multimodal/     # 多模态处理（感知延伸）
```

### 按需导入

```typescript
// 认证模块
import { UnifiedAuthManager } from '@family-pai/core/auth'

// MCP 模块
import { MCPManager } from '@family-pai/core/mcp'

// 技能模块
import { SkillManager } from '@family-pai/core/skills'

// AI Family
import { AIFamilyManager } from '@family-pai/core/ai-family'

// 多模态
import { MultimodalManager } from '@family-pai/core/multimodal'
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

### MultimodalManager

| 方法 | 描述 |
|------|------|
| `analyzeImage(image, options)` | 图像分析 |
| `transcribeAudio(audio, options)` | 音频转录 |
| `synthesizeSpeech(text, options)` | 语音合成 |
| `parseDocument(document, options)` | 文档解析 |
| `summarizeDocument(document)` | 文档摘要 |

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

## 🎯 品牌理念

```
FAmily π³ = FA (AI Family) + mily + PAI (π³ AI)
             ↓          ↓        ↓
         家庭智能    家庭     圆周率立方智能
                            
π (Pi)      → 无限信任 + 始终如一 + 精准智能
³ (Cubed)   → 三维立体 + 完整体验 + 全面覆盖
```

**💬 口号：信任如π，始终如一**

---

## 📄 License

MIT License © 2026 FAmily PAI Team

---

<div align="center">

> **「FAmily π³ · 信任如π，始终如一」**
>
> **📦 NPM**: [`@family-pai/core`](https://www.npmjs.com/package/@family-pai/core)
> **🌐 文档**: [api.yyccube.com](https://api.yyccube.com)

</div>
