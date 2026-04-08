# 🦀 YYC³ Claw AI

> **亦师亦友亦伯乐；一言一语一华章**

YYC³ Claw AI 是一个强大的 AI 编程助手核心框架，提供统一的认证管理、MCP 协议支持、技能系统、AI Family 智能体和多模态处理能力。

[![npm version](https://img.shields.io/npm/v/@claw-ai/core.svg)](https://www.npmjs.com/package/@claw-ai/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Test Coverage](https://img.shields.io/badge/Coverage-92%25-green.svg)](https://github.com/YYC-Cube/yyc3-claw)

---

## ✨ 核心特性

### 🔐 统一认证 (Auth)
- 多平台自动检测 (Claude Code、Cursor、Windsurf、VSCode)
- API Key 和 OAuth 双模式支持
- OpenAI / Ollama 双提供商
- 统一的认证接口

### 🔗 MCP 协议 (Model Context Protocol)
- 完整的 MCP 协议实现
- 工具调用和资源管理
- Prompt 模板系统
- JSON-RPC 2.0 通信

### 🎯 技能系统 (Skills)
- 可扩展的技能框架
- 内置多种实用技能
- 自定义技能支持
- 智能技能推荐

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
- **图像**: 分析、OCR、分类、检测、批量处理
- **音频**: 转录、语音合成、多语言支持
- **文档**: 解析、摘要、对比、关键信息提取

---

## 📦 项目结构

```
yyc3-claw-V1/
├── packages/
│   └── claw-core/              # 核心包
│       ├── src/
│       │   ├── __tests__/      # 测试文件 (92 tests)
│       │   ├── auth/           # 认证模块
│       │   │   ├── unified-auth.ts
│       │   │   ├── openai-provider.ts
│       │   │   └── ollama-provider.ts
│       │   ├── mcp/            # MCP 协议
│       │   │   ├── client.ts
│       │   │   ├── transport.ts
│       │   │   └── types.ts
│       │   ├── skills/         # 技能系统
│       │   │   ├── manager.ts
│       │   │   ├── builtin.ts
│       │   │   └── types.ts
│       │   ├── ai-family/      # AI Family 智能体
│       │   │   ├── manager.ts
│       │   │   ├── agents.ts
│       │   │   ├── definitions.ts
│       │   │   └── collaboration.ts
│       │   └── multimodal/     # 多模态处理
│       │       ├── manager.ts
│       │       ├── image-processor.ts
│       │       ├── audio-processor.ts
│       │       └── document-processor.ts
│       ├── dist/               # 构建输出
│       └── package.json
├── docs/                        # 项目文档
│   ├── DEVELOPER_GUIDE.md      # 开发者指南
│   ├── API_REFERENCE.md        # API 参考
│   ├── CONTRIBUTING.md         # 贡献指南
│   ├── QUICK_START.md          # 快速开始
│   └── ...                     # 其他文档
├── examples/                    # 示例代码
├── scripts/                     # 构建脚本
├── .github/                     # GitHub 配置
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

---

## 🚀 快速开始

### 安装

```bash
# 克隆项目
git clone https://github.com/YYC-Cube/yyc3-claw.git

# 进入项目目录
cd yyc3-claw

# 安装依赖
pnpm install

# 构建
pnpm build
```

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

### 使用 AI Family

```typescript
import { AIFamilyManager, UnifiedAuthManager } from '@claw-ai/core'

// 初始化
const auth = new UnifiedAuthManager()
await auth.autoDetect()

const family = new AIFamilyManager({ authManager: auth })

// 创建任务
const task = family.createTask('code-analysis', {
  code: 'const x = 1'
})

// 获取推荐智能体
const recommendations = family.recommendAgents(task)
console.log('推荐智能体:', recommendations)

// 提交任务
const result = await family.submitTask(task)
console.log('分析结果:', result)
```

### 使用技能系统

```typescript
import { SkillManager } from '@claw-ai/core'

const skills = new SkillManager()

// 注册自定义技能
skills.register(
  {
    id: 'custom.code-review',
    name: '代码审查',
    description: '审查代码质量',
    version: '1.0.0',
    category: 'analysis',
  },
  async (input, context) => {
    // 实现技能逻辑
    return {
      success: true,
      output: { score: 95 },
      duration: 100,
    }
  }
)

// 执行技能
const result = await skills.execute('custom.code-review', {
  code: 'const x = 1'
})
```

### 使用多模态

```typescript
import { MultimodalManager, UnifiedAuthManager } from '@claw-ai/core'

const auth = new UnifiedAuthManager()
await auth.autoDetect()

const multimodal = new MultimodalManager(auth)

// 图像分析
const imageResult = await multimodal.getImageProcessor().analyze({
  type: 'image',
  format: 'png',
  data: imageBuffer,
}, {
  tasks: ['describe', 'ocr']
})

// 音频转录
const audioResult = await multimodal.getAudioProcessor().transcribe({
  type: 'audio',
  format: 'mp3',
  data: audioBuffer,
})

// 文档解析
const docResult = await multimodal.getDocumentProcessor().parse({
  type: 'document',
  format: 'pdf',
  data: docBuffer,
})
```

---

## 📚 文档

### 核心文档

| 文档 | 说明 |
|------|------|
| [快速开始](docs/QUICK_START.md) | 5 分钟快速上手指南 |
| [开发者指南](docs/DEVELOPER_GUIDE.md) | 完整的开发指南 |
| [API 参考](docs/API_REFERENCE.md) | 详细的 API 文档 |
| [贡献指南](docs/CONTRIBUTING.md) | 如何参与项目贡献 |
| [发布指南](docs/RELEASE.md) | NPM 发布流程说明 |

### 架构文档

| 文档 | 说明 |
|------|------|
| [架构设计](docs/YYC3-CLAW-ARCHITECTURE.md) | 系统架构设计文档 |
| [AI Family 设计](docs/YYC3-AI-Family.md) | 智能体系统设计 |
| [DDD 设计](docs/YYC3-CLAW_DDD.md) | 领域驱动设计文档 |
| [项目结构](docs/PROJECT_STRUCTURE.md) | 项目结构说明 |

---

## 🛠️ 开发

### 常用命令

```bash
# 开发模式（监听文件变化）
pnpm dev

# 构建项目
pnpm build

# 运行测试
pnpm test

# 运行测试（监听模式）
pnpm test:watch

# 类型检查
pnpm typecheck

# 代码检查
pnpm lint

# 修复代码格式
pnpm lint --fix
```

### 测试覆盖

```
 Test Files  6 passed (6)
      Tests  92 passed | 5 skipped (97)
   Duration  292ms
```

| 模块 | 测试数 | 状态 |
|------|--------|------|
| Core | 10 | ✅ |
| Auth | 19 | ✅ |
| AI Family | 24 | ✅ |
| Multimodal | 15 | ✅ |
| MCP | 9 | ✅ |
| Skills | 20 | ✅ |

---

## 🤝 贡献

我们欢迎所有形式的贡献！

### 贡献方式

- 🐛 [报告 Bug](https://github.com/YYC-Cube/yyc3-claw/issues)
- 💡 [建议新功能](https://github.com/YYC-Cube/yyc3-claw/issues)
- 📝 改进文档
- 🔧 提交代码

### 开发流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: 添加某功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

详细说明请查看 [贡献指南](docs/CONTRIBUTING.md)。

---

## 📊 项目状态

### 技术栈

- **语言**: TypeScript 5.0+
- **运行时**: Node.js 18+
- **包管理**: pnpm 8+
- **测试**: Vitest
- **构建**: tsup
- **代码规范**: ESLint + Prettier

### 版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0.0 | 2026-03 | 初始版本发布 |

---

## 📄 License

MIT License © 2026 YYC

---

## 🙏 致谢

感谢所有贡献者的付出！

---

<div align="center">

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for Future***」
> 「***All things converge in cloud pivot; Deep stacks ignite a new era of intelligence***」

</div>
