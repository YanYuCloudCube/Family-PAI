# Claw AI 快速开始指南

> **亦师亦友亦伯乐；一言一语一华章**

---

## 📦 安装

```bash
# 使用 pnpm
pnpm add @claw-ai/core @claw-ai/web-ui

# 或使用 npm
npm install @claw-ai/core @claw-ai/web-ui
```

## 🚀 快速开始

### 1. 基础聊天

```typescript
import { UnifiedAuthManager } from '@claw-ai/core'

const auth = new UnifiedAuthManager()

// 自动检测 OpenAI API Key 或 Ollama 本地服务
const providers = await auth.autoDetect()
console.log('可用提供商:', providers.map(p => p.displayName))

// 发送消息
const response = await auth.chat([
  { role: 'user', content: '你好，请介绍一下你自己' }
])

console.log('AI 回复:', response.choices[0]?.message?.content)
```

### 2. 流式聊天

```typescript
import { UnifiedAuthManager } from '@claw-ai/core'

const auth = new UnifiedAuthManager()
await auth.autoDetect()

// 流式输出
for await (const chunk of auth.stream([
  { role: 'user', content: '写一首关于春天的诗' }
])) {
  const delta = chunk.choices[0]?.message?.content || ''
  process.stdout.write(delta)
}
```

### 3. React 组件

```tsx
import { ClawProvider, ClawChat } from '@claw-ai/web-ui'

function App() {
  return (
    <ClawProvider config={{
      auth: {
        openai: { apiKey: process.env.OPENAI_API_KEY },
        ollama: { baseUrl: 'http://localhost:11434' },
      }
    }}>
      <ClawChat className="h-screen" />
    </ClawProvider>
  )
}
```

### 4. 技能系统

```typescript
import { SkillManager } from '@claw-ai/core'

const skills = new SkillManager()

// 注册自定义技能
skills.register(
  {
    id: 'custom.code-review',
    name: '代码审查',
    description: '审查代码质量并提供改进建议',
    version: '1.0.0',
    category: 'analysis',
  },
  async (input, context) => {
    // 技能处理逻辑
    return {
      success: true,
      output: { review: '代码质量良好' },
      duration: 100,
    }
  }
)

// 推荐技能
const recommended = skills.recommend('审查代码')

// 执行技能
const result = await skills.execute('custom.code-review', { code: '...' }, {
  sessionId: 'test',
  provider: 'openai',
  messages: [],
  variables: {},
  metadata: {},
})
```

## ⚙️ 配置

### 环境变量

```bash
# OpenAI API Key
export OPENAI_API_KEY=sk-xxx

# 或使用 Ollama 本地服务
ollama serve
```

### Web UI 配置

```typescript
import type { WebUIConfig } from '@claw-ai/web-ui'

const config: WebUIConfig = {
  auth: {
    provider: 'openai', // 或 'ollama'
    openai: {
      apiKey: process.env.OPENAI_API_KEY,
      baseUrl: 'https://api.openai.com/v1',
    },
    ollama: {
      baseUrl: 'http://localhost:11434',
    },
  },
  mcp: {
    servers: [
      {
        name: 'filesystem',
        transport: {
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-filesystem', '/path/to/files'],
        },
      },
    ],
  },
  ui: {
    theme: 'system', // 'light' | 'dark' | 'system'
    defaultModel: 'gpt-4',
    showSkills: true,
  },
}
```

## 📚 API 文档

### @claw-ai/core

#### UnifiedAuthManager

```typescript
const auth = new UnifiedAuthManager(config?)

// 方法
await auth.autoDetect()                    // 自动检测可用提供商
await auth.chat(messages, options?)        // 发送聊天消息
await auth.stream(messages, options?)      // 流式聊天
auth.getActiveProvider()                   // 获取当前提供商
auth.getProviders()                        // 获取所有提供商
await auth.switchProvider(name)            // 切换提供商
await auth.dispose()                       // 清理资源
```

#### SkillManager

```typescript
const skills = new SkillManager(config?)

// 方法
skills.register(definition, handler)       // 注册技能
skills.unregister(skillId)                 // 注销技能
skills.get(skillId)                        // 获取技能
skills.getAll()                            // 获取所有技能
skills.getByCategory(category)             // 按类别获取
await skills.execute(skillId, input, ctx)  // 执行技能
await skills.executeChain(skills, input)   // 执行技能链
skills.recommend(task)                     // 推荐技能
```

#### MCPClient

```typescript
const client = new MCPClient(config)

// 方法
await client.connect()                     // 连接服务器
await client.close()                       // 关闭连接
client.getTools()                          // 获取工具列表
client.getResources()                      // 获取资源列表
await client.callTool(name, args)          // 调用工具
await client.readResource(uri)             // 读取资源

// 事件
client.on('connected', callback)
client.on('toolCalled', callback)
client.on('error', callback)
```

### @claw-ai/web-ui

#### 组件

```tsx
// Provider 组件
<ClawProvider config={config}>
  {children}
</ClawProvider>

// 聊天组件
<ClawChat 
  className="h-screen"
  placeholder="输入消息..."
  showProvider={true}
  onMessage={(msg) => console.log(msg)}
/>

// 提供商选择器
<ProviderSelector 
  providers={providers}
  currentProvider={current}
  onSelect={(name) => switchProvider(name)}
/>
```

#### Hooks

```tsx
// 认证 Hook
const { 
  provider, 
  providers, 
  isReady, 
  switchProvider 
} = useClawAuth()

// 聊天 Hook
const { 
  messages, 
  isLoading, 
  sendMessage, 
  clearMessages 
} = useClawChat(authManager)

// 技能 Hook
const { 
  skills, 
  executeSkill, 
  recommendSkills 
} = useClawSkills(skillManager)
```

## 🔗 相关链接

- [架构文档](./YYC3-CLAW-ARCHITECTURE.md)
- [AI Family 架构](./docs/YYC3-AI-Family.md)
- [技能系统定义](./SKILL.md)

---

**保持代码健康，稳步前行！** 🌹
