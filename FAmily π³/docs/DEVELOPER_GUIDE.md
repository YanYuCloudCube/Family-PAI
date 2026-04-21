# 📖 开发者指南

> **FAmily π³ 开发者完整指南**

---

## 📋 目录

- [环境准备](#环境准备)
- [项目结构](#项目结构)
- [开发流程](#开发流程)
- [代码规范](#代码规范)
- [测试指南](#测试指南)
- [调试技巧](#调试技巧)
- [发布流程](#发布流程)

---

## 环境准备

### 系统要求

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0
- **操作系统**: macOS, Linux, Windows

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/YYC-Cube/yyc3-claw.git

# 进入项目目录
cd yyc3-claw

# 安装依赖
pnpm install

# 构建项目
pnpm build
```

### IDE 配置

推荐使用 VS Code，并安装以下扩展：

- ESLint
- Prettier
- TypeScript Vue Plugin (Volar)
- Error Lens

---

## 项目结构

```
yyc3-claw-V1/
├── packages/
│   └── claw-core/              # 核心包
│       ├── src/
│       │   ├── __tests__/      # 测试文件
│       │   ├── auth/           # 认证模块
│       │   ├── mcp/            # MCP 协议
│       │   ├── skills/         # 技能系统
│       │   ├── ai-family/      # AI Family 智能体
│       │   └── multimodal/     # 多模态处理
│       ├── dist/               # 构建输出
│       └── package.json
├── docs/                        # 项目文档
├── examples/                    # 示例代码
├── scripts/                     # 构建脚本
└── .github/                     # GitHub 配置
```

### 核心模块说明

| 模块 | 说明 | 主要文件 |
|------|------|----------|
| **auth** | 统一认证管理 | `unified-auth.ts`, `openai-provider.ts`, `ollama-provider.ts` |
| **mcp** | MCP 协议实现 | `client.ts`, `transport.ts` |
| **skills** | 技能系统 | `manager.ts`, `builtin.ts` |
| **ai-family** | AI 智能体 | `manager.ts`, `agents.ts`, `definitions.ts` |
| **multimodal** | 多模态处理 | `manager.ts`, `image-processor.ts`, `audio-processor.ts` |

---

## 开发流程

### 1. 创建功能分支

```bash
# 从 main 创建功能分支
git checkout -b feature/your-feature-name
```

### 2. 开发新功能

```bash
# 启动开发模式（监听文件变化）
pnpm dev

# 在另一个终端运行测试
pnpm test:watch
```

### 3. 代码检查

```bash
# 类型检查
pnpm typecheck

# 代码检查
pnpm lint

# 修复代码格式
pnpm lint --fix
```

### 4. 提交代码

```bash
# 添加修改
git add .

# 提交（使用规范提交信息）
git commit -m "feat: 添加新功能描述"

# 推送到远程
git push origin feature/your-feature-name
```

---

## 代码规范

### TypeScript 规范

```typescript
// ✅ 推荐：使用接口定义类型
interface UserService {
  getUserById(id: string): Promise<User>
}

// ✅ 推荐：使用 async/await
async function fetchData(): Promise<Data> {
  const response = await fetch(url)
  return response.json()
}

// ❌ 避免：使用 any 类型
function process(data: any) { } // 不推荐

// ✅ 推荐：使用泛型
function process<T>(data: T): T { }
```

### 文件命名规范

| 类型 | 命名规范 | 示例 |
|------|----------|------|
| 组件 | PascalCase | `UserService.ts` |
| 工具函数 | camelCase | `formatDate.ts` |
| 类型定义 | camelCase | `types.ts` |
| 测试文件 | 原文件名.test.ts | `core.test.ts` |
| 常量 | UPPER_SNAKE_CASE | `API_ENDPOINTS.ts` |

### 注释规范

```typescript
/**
 * @file 用户服务
 * @description 处理用户相关业务逻辑
 * @module services/user
 * @author YYC
 */

/**
 * 获取用户信息
 * @param userId - 用户ID
 * @returns 用户对象
 * @throws {NotFoundError} 用户不存在时抛出
 */
async function getUserById(userId: string): Promise<User> {
  // 实现逻辑
}
```

---

## 测试指南

### 测试结构

```typescript
describe('模块名称', () => {
  let service: Service

  beforeEach(() => {
    service = new Service()
  })

  afterEach(() => {
    service.dispose()
  })

  describe('功能分组', () => {
    it('应该正确执行某操作', () => {
      const result = service.doSomething()
      expect(result).toBe(expected)
    })
  })
})
```

### 运行测试

```bash
# 运行所有测试
pnpm test

# 运行测试并监听变化
pnpm test:watch

# 运行特定测试文件
pnpm test -- auth.test.ts

# 生成测试覆盖率报告
pnpm test -- --coverage
```

### Mock 示例

```typescript
import { vi } from 'vitest'

// Mock 函数
const mockFn = vi.fn().mockReturnValue('test')

// Mock 模块
vi.mock('../auth/unified-auth', () => ({
  UnifiedAuthManager: vi.fn().mockImplementation(() => ({
    chat: vi.fn().mockResolvedValue({ choices: [] }),
  })),
}))
```

---

## 调试技巧

### VS Code 调试配置

在 `.vscode/launch.json` 中添加：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Tests",
      "runtimeExecutable": "pnpm",
      "runtimeArgs": ["test:watch"],
      "console": "integratedTerminal"
    }
  ]
}
```

### 日志调试

```typescript
// 使用 console.debug
console.debug('[Debug] 变量值:', value)

// 使用条件日志
if (process.env.DEBUG === 'true') {
  console.log('调试信息:', data)
}
```

---

## 发布流程

### 1. 版本更新

```bash
# 更新版本号
pnpm version patch  # 1.0.0 -> 1.0.1
pnpm version minor  # 1.0.0 -> 1.1.0
pnpm version major  # 1.0.0 -> 2.0.0
```

### 2. 构建测试

```bash
# 完整构建
pnpm build

# 运行测试
pnpm test

# 类型检查
pnpm typecheck
```

### 3. 发布到 NPM

```bash
# 登录 NPM
npm login

# 发布
pnpm publish
```

### 4. 创建 GitHub Release

```bash
# 创建标签
git tag v1.0.0

# 推送标签
git push origin v1.0.0
```

---

## 常见问题

### Q: 如何添加新的 AI 提供商？

```typescript
// 1. 创建提供商文件
// src/auth/custom-provider.ts

import type { AuthProvider } from './types'

export class CustomProvider implements AuthProvider {
  readonly name = 'custom'
  readonly isReady = true

  async chat(messages, options) {
    // 实现聊天逻辑
  }

  // ... 其他方法
}

// 2. 注册到管理器
auth.registerProvider(new CustomProvider())
```

### Q: 如何添加新的智能体？

```typescript
// 1. 在 definitions.ts 添加定义
export const NewAgentDefinition: AgentDefinition = {
  id: 'new-agent',
  displayName: '新智能体',
  role: '新角色',
  description: '智能体描述',
  capabilities: ['capability1'],
  systemPrompt: '系统提示词',
}

// 2. 在 agents.ts 实现智能体
export class NewAgent extends BaseAgent {
  protected async executeTask(task: AgentTask): Promise<TaskResult> {
    // 实现任务执行逻辑
  }
}
```

### Q: 如何添加新的技能？

```typescript
// 1. 定义技能
const NewSkill: SkillDefinition = {
  id: 'custom.skill',
  name: '自定义技能',
  description: '技能描述',
  version: '1.0.0',
  category: 'custom',
}

// 2. 实现处理器
async function newSkillHandler(
  input: unknown,
  context: ExecutionContext
): Promise<SkillExecutionResult> {
  return {
    success: true,
    output: { result: 'done' },
    duration: 100,
  }
}

// 3. 注册技能
skillManager.register(NewSkill, newSkillHandler)
```

---

**保持代码质量，持续迭代优化！** 🌹
