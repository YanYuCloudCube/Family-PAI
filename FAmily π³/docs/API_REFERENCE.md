# 📚 API 参考文档

> **FAmily π³ 完整 API 参考**

---

## 📋 目录

- [认证模块 (Auth)](#认证模块-auth)
- [AI Family 智能体](#ai-family-智能体)
- [技能系统 (Skills)](#技能系统-skills)
- [MCP 协议](#mcp-协议)
- [多模态处理 (Multimodal)](#多模态处理-multimodal)
- [类型定义](#类型定义)

---

## 认证模块 (Auth)

### UnifiedAuthManager

统一认证管理器，自动检测和管理 AI 提供商认证。

#### 构造函数

```typescript
import { UnifiedAuthManager } from '@yyc3/core/auth'

const auth = new UnifiedAuthManager(config?)
```

**参数:**

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| config.preferLocal | boolean | 否 | false | 优先使用本地提供商 |
| config.autoDetect | boolean | 否 | true | 自动检测提供商 |
| config.openai | object | 否 | - | OpenAI 配置 |
| config.ollama | object | 否 | - | Ollama 配置 |

#### 方法

##### autoDetect()

自动检测可用的 AI 提供商。

```typescript
const providers = await auth.autoDetect()
// 返回: AuthProviderInfo[]
```

##### getActiveProvider()

获取当前活跃的提供商。

```typescript
const provider = auth.getActiveProvider()
// 返回: AuthProvider | null
```

##### switchProvider(name)

切换提供商。

```typescript
await auth.switchProvider('openai')
```

**参数:**
- `name`: 'openai' | 'ollama' - 提供商名称

##### chat(messages, options?)

发送聊天消息。

```typescript
const response = await auth.chat([
  { role: 'user', content: '你好' }
], {
  model: 'gpt-4',
  temperature: 0.7,
  maxTokens: 1000
})
```

**参数:**
- `messages`: ChatMessage[] - 消息数组
- `options`: ChatOptions - 聊天选项

**返回:**
```typescript
interface ChatCompletionResponse {
  choices: Array<{
    message: { content: string }
    finish_reason: string
  }>
  usage: {
    promptTokens: number
    completionTokens: number
    totalTokens: number
  }
}
```

##### stream(messages, options?)

流式聊天。

```typescript
for await (const chunk of auth.stream(messages)) {
  console.log(chunk.choices[0]?.message?.content)
}
```

##### getStatus()

获取认证状态。

```typescript
const status = auth.getStatus()
```

**返回:**
```typescript
interface AuthStatus {
  activeProvider: AIProviderType | null
  providers: AuthProviderInfo[]
  lastChecked: Date
  errors: Array<{ provider: AIProviderType; error: string }>
}
```

##### dispose()

清理资源。

```typescript
await auth.dispose()
```

---

### OpenAIProvider

OpenAI 提供商实现。

```typescript
import { OpenAIProvider } from '@yyc3/core/auth'

const provider = new OpenAIProvider({
  apiKey: 'sk-xxx',
  baseUrl: 'https://api.openai.com/v1',
  defaultModel: 'gpt-4'
})
```

---

### OllamaProvider

Ollama 本地提供商实现。

```typescript
import { OllamaProvider } from '@yyc3/core/auth'

const provider = new OllamaProvider({
  baseUrl: 'http://localhost:11434',
  defaultModel: 'llama2'
})
```

---

## AI Family 智能体

### AIFamilyManager

AI Family 管理器，管理和协调所有智能体。

#### 构造函数

```typescript
import { AIFamilyManager } from '@yyc3/core/ai-family'

const manager = new AIFamilyManager({
  authManager,
  maxQueueSize: 100,
  taskTimeout: 60000,
  enableCollaboration: true
})
```

**参数:**
- `authManager`: UnifiedAuthManager - 认证管理器（必填）
- `maxQueueSize`: number - 最大队列大小
- `taskTimeout`: number - 任务超时时间（毫秒）
- `enableCollaboration`: boolean - 启用协同功能

#### 方法

##### getAgent(role)

获取指定智能体。

```typescript
const agent = manager.getAgent('meta-oracle')
```

**参数:**
- `role`: AgentRole - 智能体角色

**智能体角色:**
- `'meta-oracle'` - 元启·天枢（总指挥）
- `'sentinel'` - 智云·守护（安全官）
- `'master'` - 格物·宗师（质量官）
- `'creative'` - 创想·灵韵（创意官）
- `'navigator'` - 言启·千行（导航员）
- `'thinker'` - 语枢·万物（思考者）
- `'prophet'` - 预见·先知（预言家）
- `'bolero'` - 知遇·伯乐（推荐官）

##### getAllAgents()

获取所有智能体。

```typescript
const agents = manager.getAllAgents()
// 返回: Map<AgentRole, BaseAgent>
```

##### createTask(type, input, context?, priority?)

创建任务。

```typescript
const task = manager.createTask(
  'code-analysis',
  { code: 'const x = 1' },
  { sessionId: 'session-123' },
  'high'
)
```

**参数:**
- `type`: string - 任务类型
- `input`: unknown - 任务输入
- `context`: Partial<TaskContext> - 任务上下文
- `priority`: 'low' | 'medium' | 'high' | 'critical' - 优先级

##### submitTask(task)

提交任务。

```typescript
const result = await manager.submitTask(task)
```

**返回:**
```typescript
interface TaskResult {
  success: boolean
  output?: unknown
  error?: string
  duration: number
  tokens?: { input: number; output: number }
}
```

##### recommendAgents(task)

推荐智能体。

```typescript
const recommendations = manager.recommendAgents(task)
// 返回: AgentRecommendation[]
```

##### collaborate(collaboration)

协同执行任务。

```typescript
const results = await manager.collaborate({
  id: 'collab-1',
  mode: 'parallel',
  tasks: [task1, task2],
  aggregationStrategy: 'merge'
})
```

**协同模式:**
- `'sequential'` - 顺序执行
- `'parallel'` - 并行执行
- `'hierarchical'` - 层级执行
- `'consensus'` - 共识执行

##### getQueueStatus()

获取队列状态。

```typescript
const status = manager.getQueueStatus()
// 返回: { queueLength, runningTasks, maxQueueSize }
```

##### dispose()

清理资源。

```typescript
manager.dispose()
```

---

### BaseAgent

智能体基类。

#### 属性

```typescript
agent.getId()      // 获取智能体ID
agent.getName()    // 获取智能体名称
agent.getState()   // 获取智能体状态
agent.getStats()   // 获取统计信息
```

#### 方法

##### canAcceptTask()

是否可以接受新任务。

```typescript
if (agent.canAcceptTask()) {
  // 可以分配任务
}
```

##### execute(task)

执行任务。

```typescript
const result = await agent.execute(task)
```

---

## 技能系统 (Skills)

### SkillManager

技能管理器。

#### 构造函数

```typescript
import { SkillManager } from '@yyc3/core/skills'

const manager = new SkillManager({
  maxConcurrent: 5,
  timeout: 60000
})
```

#### 方法

##### register(definition, handler)

注册技能。

```typescript
manager.register(
  {
    id: 'custom.skill',
    name: '自定义技能',
    description: '技能描述',
    version: '1.0.0',
    category: 'custom'
  },
  async (input, context) => {
    return {
      success: true,
      output: { result: 'done' },
      duration: 100
    }
  }
)
```

##### unregister(skillId)

注销技能。

```typescript
manager.unregister('custom.skill')
```

##### get(skillId)

获取技能。

```typescript
const skill = manager.get('custom.skill')
```

##### getAll()

获取所有技能。

```typescript
const skills = manager.getAll()
// 返回: SkillRegistryItem[]
```

##### execute(skillId, input, context)

执行技能。

```typescript
const result = await manager.execute('custom.skill', { data: 'test' }, {
  sessionId: 'session-123'
})
```

##### recommend(task)

推荐技能。

```typescript
const recommendations = manager.recommend('代码审查')
```

##### getByCategory(category)

按类别获取技能。

```typescript
const analysisSkills = manager.getByCategory('analysis')
```

---

### 内置技能

#### ReasoningSkill (CAGEERF 推理框架)

```typescript
import { ReasoningSkill, reasoningHandler } from '@yyc3/core/skills'

manager.register(ReasoningSkill, reasoningHandler)
```

#### GenerationSkill (内容生成器)

```typescript
import { GenerationSkill, generationHandler } from '@yyc3/core/skills'

manager.register(GenerationSkill, generationHandler)
```

#### AnalysisSkill (代码分析器)

```typescript
import { AnalysisSkill, analysisHandler } from '@yyc3/core/skills'

manager.register(AnalysisSkill, analysisHandler)
```

---

## MCP 协议

### MCPClient

MCP 协议客户端。

#### 构造函数

```typescript
import { MCPClient } from '@yyc3/core/mcp'

const client = new MCPClient({
  transport: myTransport,
  name: 'my-client',
  version: '1.0.0',
  capabilities: {
    tools: true,
    resources: true,
    prompts: false
  }
})
```

#### 方法

##### connect()

连接到 MCP 服务器。

```typescript
await client.connect()
```

##### close()

关闭连接。

```typescript
await client.close()
```

##### callTool(name, args)

调用工具。

```typescript
const result = await client.callTool('read_file', { path: '/test.txt' })
```

##### readResource(uri)

读取资源。

```typescript
const content = await client.readResource('file:///test.txt')
```

#### 属性

```typescript
client.connected    // 连接状态
client.tools        // 工具列表
client.resources    // 资源列表
client.capabilities // 服务器能力
```

---

## 多模态处理 (Multimodal)

### MultimodalManager

多模态管理器。

#### 构造函数

```typescript
import { MultimodalManager } from '@yyc3/core/multimodal'

const manager = new MultimodalManager(authManager)
```

#### 方法

##### getImageProcessor()

获取图像处理器。

```typescript
const imageProcessor = manager.getImageProcessor()
```

##### getAudioProcessor()

获取音频处理器。

```typescript
const audioProcessor = manager.getAudioProcessor()
```

##### getDocumentProcessor()

获取文档处理器。

```typescript
const docProcessor = manager.getDocumentProcessor()
```

---

### ImageProcessor

图像处理器。

#### analyze(image, options?)

分析图像。

```typescript
const result = await imageProcessor.analyze(
  {
    type: 'image',
    format: 'png',
    data: imageBuffer
  },
  {
    tasks: ['describe', 'ocr', 'classify'],
    detail: 'high'
  }
)
```

**分析任务:**
- `'describe'` - 描述图像内容
- `'ocr'` - 文字识别
- `'classify'` - 分类
- `'detect'` - 目标检测
- `'caption'` - 生成标题

#### analyzeBatch(images, options?)

批量分析图像。

```typescript
const results = await imageProcessor.analyzeBatch([img1, img2])
```

---

### AudioProcessor

音频处理器。

#### transcribe(audio, options?)

转录音频。

```typescript
const result = await audioProcessor.transcribe(
  {
    type: 'audio',
    format: 'mp3',
    data: audioBuffer
  },
  {
    language: 'zh',
    model: 'whisper-1'
  }
)
```

#### synthesize(text, options?)

语音合成。

```typescript
const result = await audioProcessor.synthesize('你好世界', {
  voice: 'alloy',
  speed: 1.0
})
```

---

### DocumentProcessor

文档处理器。

#### parse(document, options?)

解析文档。

```typescript
const result = await docProcessor.parse(
  {
    type: 'document',
    format: 'pdf',
    data: docBuffer
  },
  {
    extractText: true,
    extractMetadata: true
  }
)
```

#### summarize(document, maxLength?)

摘要文档。

```typescript
const summary = await docProcessor.summarize(document, 500)
```

#### extractKeyInfo(document, keys)

提取关键信息。

```typescript
const info = await docProcessor.extractKeyInfo(document, ['标题', '作者', '日期'])
```

#### compare(doc1, doc2)

对比文档。

```typescript
const diff = await docProcessor.compare(doc1, doc2)
// 返回: { similarities, differences, summary }
```

---

## 类型定义

### ChatMessage

```typescript
interface ChatMessage {
  role: 'system' | 'user' | 'assistant' | 'tool'
  content: string
  name?: string
}
```

### AgentRole

```typescript
type AgentRole =
  | 'meta-oracle'
  | 'sentinel'
  | 'master'
  | 'creative'
  | 'navigator'
  | 'thinker'
  | 'prophet'
  | 'bolero'
```

### TaskPriority

```typescript
type TaskPriority = 'low' | 'medium' | 'high' | 'critical'
```

### SkillCategory

```typescript
type SkillCategory =
  | 'reasoning'
  | 'generation'
  | 'analysis'
  | 'transformation'
  | 'integration'
  | 'custom'
```

### ImageFormat

```typescript
type ImageFormat = 'png' | 'jpeg' | 'gif' | 'webp' | 'bmp'
```

### AudioFormat

```typescript
type AudioFormat = 'mp3' | 'wav' | 'ogg' | 'flac' | 'aac' | 'm4a'
```

### DocumentFormat

```typescript
type DocumentFormat = 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'txt' | 'md' | 'html'
```

---

**API 文档持续更新中！** 🌹
