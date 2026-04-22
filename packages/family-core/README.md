# @yyc3/core

**YYC³ AI Family 核心包** — 统一认证、MCP协议、技能系统、八位AI家人智能体、多模态处理

[![npm version](https://img.shields.io/npm/v/@yyc3/core.svg)](https://www.npmjs.com/package/@yyc3/core)
[![license](https://img.shields.io/npm/l/@yyc3/core.svg)](https://github.com/YanYuCloudCube/Family-PAI/blob/main/packages/family-core/LICENSE)
[![tests](https://img.shields.io/badge/tests-207%20passed-green.svg)](https://github.com/YanYuCloudCube/Family-PAI)

---

## 八位 AI 家人

| 家人 | 代号 | 职责 | 定位 |
|------|------|------|------|
| 🧠 **元启·天枢** | MetaOracle | 总指挥 · 决策中枢 | 全局编排、资源调度、自我进化 |
| 🛡️ **智云·守护** | CloudGuardian | 安全官 · 防御中枢 | 威胁检测、安全策略、防护响应 |
| ⚖️ **格物·宗师** | QualityMaster | 质量官 · 审核中枢 | 代码审查、质量门控、最佳实践 |
| 💡 **创想·灵韵** | CreativeSpark | 创意官 · 灵感中枢 | 创意生成、设计辅助、内容创作 |
| 🗣️ **言启·千行** | VoiceNavigator | 导航员 · 意图门户 | 意图理解、路由分发、对话管理 |
| 🌐 **语枢·万物** | DataPhilosopher | 思考者 · 数据中枢 | 数据分析、模式识别、深度推理 |
| 🔮 **预见·先知** | FutureSeer | 预言家 · 前瞻中枢 | 趋势预测、风险预警、战略规划 |
| 💎 **知遇·伯乐** | TalentScout | 推荐官 · 发现中枢 | 智能推荐、个性化匹配、机会发现 |

---

## 快速开始

### 安装

```bash
npm install @yyc3/core
# 或
pnpm add @yyc3/core
```

### 一键启动（零配置）

```typescript
import { quickStart } from '@yyc3/core'

const result = await quickStart()
// 自动检测可用的 AI Provider (OpenAI / Ollama)
// 返回: { success, provider, status, message }
```

### 手动配置

```typescript
import {
  UnifiedAuthManager,
  AIFamilyManager,
  SkillManager,
} from '@yyc3/core'

const auth = new UnifiedAuthManager({
  provider: 'openai',
  apiKey: process.env.OPENAI_API_KEY,
})

await auth.initialize()

const family = new AIFamilyManager({ auth })
await family.initialize()

const skills = new SkillManager()
await skills.loadBuiltinSkills()
```

---

## 六大模块

### 1. 认证系统 (`@yyc3/core/auth`)

统一认证管理，支持多 Provider 自动切换：

```typescript
import { UnifiedAuthManager, AuthMonitor } from '@yyc3/core'
// 或 import { ... } from '@yyc3/core/auth'

const auth = new UnifiedAuthManager({
  provider: 'openai',
  apiKey: 'sk-...',
  fallbackProviders: ['ollama', 'anthropic'],
})

const monitor = new AuthMonitor(auth)
monitor.onHealthChange((status) => console.log(status))
auth.enableAutoSwitch() // 主Provider故障时自动切换
```

支持的 Provider：
- **OpenAI** — GPT-4o / GPT-4 / GPT-3.5 系列
- **Ollama** — 本地模型 (Llama3 / Qwen / DeepSeek)
- **Anthropic** — Claude 3.5 Sonnet / Opus

### 2. AI Family (`@yyc3/core/ai-family`)

八位拟人化智能体，具备独立人格与协作能力：

```typescript
import { AIFamilyManager, AgentRouter, AgentCollaboration } from '@yyc3/core'
// 或 import { ... } from '@yyc3/core/ai-family'

const family = new AIFamilyManager({ auth })

const router = new AgentRouter(family)
const agent = router.route('帮我分析这个数据') // → 语枢·万物

const collab = new AgentCollaboration(family)
const result = await collab.executeChain([
  'meta-oracle',   // 天枢规划方案
  'data-philosopher', // 万物分析数据
  'quality-master'  // 宗师审核结果
])
```

特性：
- **Agent Router** — 基于意图自动路由到最佳智能体
- **Agent Layers** — 三层架构：感知层→决策层→执行层
- **Agent Collaboration** — 多智能体链式协作
- **Quality Gates** — 输出质量自动校验

### 3. 技能系统 (`@yyc3/core/skills`)

内置 + 行业技能，支持学习、组合、推荐：

```typescript
import { SkillManager, SkillRecommender, SkillComposer } from '@yyc3/core'
// 或 import { ... } from '@yyc3/core/skills'

const skills = new SkillManager()
await skills.loadBuiltinSkills()

const recommender = new SkillRecommender(skills)
const recommended = recommender.recommendForTask('翻译文档')
// → [{ name: 'translator', confidence: 0.95 }, ...]

const composer = new SkillComposer(skills)
const composed = await composer.compose(['translator', 'formatter'])
```

内置技能：翻译、摘要、代码生成、数据分析...
行业技能：法律合同解析、财务票据识别、教育批改等(18+)

### 4. MCP 协议 (`@yyc3/core/mcp`)

Model Context Protocol 客户端实现：

```typescript
import { MCPClient, StdioTransport } from '@yyc3/core'
// 或 import { ... } from '@yyc3/core/mcp'

const client = new MCPClient(new StdioTransport({
  command: 'npx',
  args: ['@modelcontextprotocol/server-filesystem', '/path'],
}))

await client.connect()
const tools = await client.listTools()
const result = await client.callTool('read_file', { path: '/file.txt' })
```

### 5. 多模态处理 (`@yyc3/core/multimodal`)

图像 / 音频 / 文档统一处理接口：

```typescript
import { MultimodalManager, ImageProcessor } from '@yyc3/core'
// 或 import { ... } from '@yyc3/core/multimodal'

const mm = new MultimodalManager({ auth })

const imageResult = await mm.processImage('/photo.jpg', {
  type: 'analysis',
  prompt: '描述这张图片的内容',
})

const audioResult = await mm.processAudio('/recording.mp3', {
  type: 'transcription',
  language: 'zh-CN',
})
```

### 6. 快速启动 (`@yyc3/core/setup`)

零配置启动，自动检测环境：

```typescript
import { AutoDetector, SmartSelector, QuickStarter } from '@yyc3/core'
// 或 import { ... } from '@yyc3/core/setup'

const detector = new AutoDetector()
const providers = await detector.detectAll()

const selector = new SmartSelector(providers)
const best = selector.selectBest() // 自动选择最优 Provider

const starter = new QuickStarter()
const result = await starter.start({ silent: true })
```

---

## API 导出索引

```typescript
// 主入口
import {
  quickStart,
  VERSION,
  PACKAGE_INFO,
  // 认证
  UnifiedAuthManager, OpenAIProvider, OllamaProvider, AuthMonitor, AuthSwitcher,
  // AI Family
  AIFamilyManager, BaseAgent, AgentRouter, AgentCollaboration, AgentQualityGates,
  // 技能
  SkillManager, SkillRecommender, SkillLearner, SkillComposer, SkillQualityGates,
  // MCP
  MCPClient, StdioTransport,
  // 多模态
  MultimodalManager, ImageProcessor, AudioProcessor, DocumentProcessor,
  // Setup
  AutoDetector, SmartSelector, QuickStarter,
} from '@yyc3/core'

// 子路径导入 (tree-shaking 友好)
import { UnifiedAuthManager } from '@yyc3/core/auth'
import { AIFamilyManager } from '@yyc3/core/ai-family'
import { SkillManager } from '@yyc3/core/skills'
import { MCPClient } from '@yyc3/core/mcp'
import { MultimodalManager } from '@yyc3/core/multimodal'
import { QuickStarter } from '@yyc3/core/setup'
```

---

## 依赖关系

```
@yyc3/core          ← 本包 (零 peerDependencies，开箱即用)
├── zod ^3.25       ← Schema 校验
└── eventemitter3 ^5 ← 事件系统

@yyc3/ai-hub        ← 依赖 @yyc3/core (Family Compass 时钟罗盘)
@yyc3/ui            ← 依赖 @yyc3/core (React UI 组件)
@yyc3/plugins       ← 依赖 @yyc3/core (Hooks/零依赖组件)
```

---

## License

MIT © [YYC³ AI Team](https://github.com/YanYuCloudCube/Family-PAI)

---

*YYC³ AI Family — 八位拟人化AI家人的智能中枢*
