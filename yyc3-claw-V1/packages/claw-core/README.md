# 🦀 Claw AI Core

> **亦师亦友亦伯乐；一言一语一华章**

Claw AI Core 是一个强大的 AI 编程助手核心库，提供统一的认证管理、MCP 协议支持、技能系统、AI Family 智能体和多模态处理能力。

---

## ✨ 核心特性

### 🔐 统一认证 (Auth)
- 多平台自动检测 (Claude Code、Cursor、Windsurf、VSCode)
- API Key 和 OAuth 双模式支持
- 统一的认证接口

### 🔗 MCP 协议 (Model Context Protocol)
- 完整的 MCP 协议实现
- 工具调用和资源管理
- Prompt 模板系统

### 🎯 技能系统 (Skills)
- 可扩展的技能框架
- 内置多种实用技能
- 自定义技能支持

### 🤖 AI Family 智能体
8 个专业智能体协同工作：

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

### 🎨 多模态处理
- **图像**: 分析、OCR、分类、检测
- **音频**: 转录、语音合成
- **文档**: 解析、摘要、对比

---

## 📦 安装

```bash
# pnpm
pnpm add @claw-ai/core

# npm
npm install @claw-ai/core

# yarn
yarn add @claw-ai/core
```

---

## 🚀 快速开始

### 基础使用

```typescript
import { ClawCore, UnifiedAuthManager } from '@claw-ai/core'

// 初始化认证
const auth = new UnifiedAuthManager()
await auth.autoDetect()

// 创建 Claw 实例
const claw = new ClawCore({
  authManager: auth,
  debug: true,
})

// 发送消息
const response = await claw.chat([
  { role: 'user', content: '你好，请介绍一下你自己' }
])

console.log(response.choices[0]?.message?.content)
```

### AI Family 使用

```typescript
import { AIFamilyManager } from '@claw-ai/core/ai-family'

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
import { MultimodalManager } from '@claw-ai/core/multimodal'

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
@claw-ai/core
├── auth/           # 认证模块
├── mcp/            # MCP 协议
├── skills/         # 技能系统
├── ai-family/      # AI Family 智能体
└── multimodal/     # 多模态处理
```

### 按需导入

```typescript
// 认证模块
import { UnifiedAuthManager } from '@claw-ai/core/auth'

// MCP 模块
import { MCPManager } from '@claw-ai/core/mcp'

// 技能模块
import { SkillManager } from '@claw-ai/core/skills'

// AI Family
import { AIFamilyManager } from '@claw-ai/core/ai-family'

// 多模态
import { MultimodalManager } from '@claw-ai/core/multimodal'
```

---

## 🔧 配置选项

```typescript
interface ClawCoreConfig {
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
```

---

## 📄 License

MIT License

---

**保持代码健康，稳步前行！** 🌹
