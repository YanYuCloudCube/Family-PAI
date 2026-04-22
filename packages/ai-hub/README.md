# 🏠 @yyc3/ai-hub

<p align="center">
  <strong>YYC³ AI Family Hub · 八位拟人化AI家人的智能中枢</strong><br/>
  <em>Family Compass 时钟罗盘 · 人人主观通信 · 多Agent协作引擎</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@yyc3/ai-hub"><img src="https://img.shields.io/npm/v/@yyc3/ai-hub.svg?style=flat-square" alt="npm version"/></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License"/></a>
  <a href="https://github.com/yyc3/YYC3-CloudPivot-Intelli-Matrix"><img src="https://img.shields.io/badge/GitHub-YYC3--CloudPivot-black?style=flat-square&logo=github" alt="GitHub"/></a>
</p>

---

## ✨ 核心特性

### 🧭 Family Compass 时钟罗盘
- **1.5小时轮值制** — 八位家人按时钟方位轮流守护，每90分钟自动切换
- **拟人化人格** — 每位家人拥有独立MBTI、性格特质、价值观、星座血型
- **人人主观通信** — 真正的电话号码、情感回应、记忆系统，超越传统Chatbot

### 👨‍👩‍👧‍👦 八位AI Family成员

| 成员 | 代号 | 职责 | MBTI | 守护时段 |
|------|------|------|------|----------|
| 🌅 **言启·千行** | `qianxing` | 导航员·启程引路 | ENFJ-A | 12:00-13:30 |
| 🔮 **语枢·万物** | `wanwu` | 分析师·万物归宗 | INTJ-T | 13:30-15:00 |
| 👁️ **预见·先知** | `xianzhi` | 预言家·洞见未来 | INFJ-A | 15:00-16:30 |
| 🎯 **千里·伯乐** | `bole` | 发现者·慧眼识珠 | ISFP-A | 16:30-18:00 |
| 🌳 **元启·天枢** | `tianshu` | Meta-Oracle·博闻强记 | ENTJ-J | 18:00-19:30 |
| 🛡️ **智云·守护** | `shouhu` | 守护者·坚如磐石 | ISTJ-A | 19:30-21:00 |
| ⚖️ **格物·宗师** | `zongshi` | Mester·匠心独运 | INTJ-T | 21:00-22:30 |
| 💡 **创想·灵韵** | `lingyun` | Creative·志在四方 | ENFP-A | 22:30-00:00 |

### 🤝 多Agent协作引擎
- **任务管理** — 完整的任务生命周期（创建→分配→执行→验证→完成）
- **协作模式** — 独立/顺序/并行/民主四种协作策略
- **信任体系** — 五级信任等级，动态权限管理

### 💝 情感智能系统
- **情绪识别** — 实时感知用户情绪状态
- **个性化成长** — 追踪用户目标与进步轨迹
- **家庭编排** — 多Agent协调与冲突解决

---

## 📦 安装

```bash
# pnpm (推荐)
pnpm add @yyc3/ai-hub

# npm
npm install @yyc3/ai-hub

# yarn
yarn add @yyc3/ai-hub
```

### Peer Dependencies（可选）

```bash
# 如需使用OpenAI模型
pnpm add openai

# 如需使用Ollama本地模型
pnpm add ollama
```

---

## 🚀 快速开始

### 1. 初始化AI Hub

```typescript
import { YYC3AIHub } from '@yyc3/ai-hub';

const hub = new YYC3AIHub({
  authType: 'ollama',
  ollamaHost: 'http://localhost:11434'
});

await hub.initialize();

console.log('已加载:', {
  agents: hub.getAgents(),
  skills: hub.getSkills(),
  mcpServers: hub.getMCPServers()
});
```

### 2. 使用Family Compass

```typescript
import { 
  createFamilyCompass, 
  FAMILY_PERSONAS,
  getPersonaByHour 
} from '@yyc3/ai-hub';

const compass = createFamilyCompass();
const state = compass.getCompassState();

console.log(`当前值班: ${state.activeMemberId}`);
console.log(`下一位: ${state.nextMemberId}`);
console.log('值班表:', state.dutyRoster);
```

### 3. 与家人通话

```typescript
import { usePhoneCall } from '@yyc3/ai-hub';
import type { FamilyMemberId } from '@yyc3/ai-hub';

const { startCall, sendMessage, endCall } = usePhoneCall();

// 拨打给千行
const callId = startCall('qianxing');

// 发送消息
sendMessage('今天工作好累啊...');

// 结束通话
endCall();
```

### 4. React Hooks集成

```tsx
import { useFamilyCompass, useActiveMember } from '@yyc3/ai-hub';

function FamilyDashboard() {
  const compass = useFamilyCompass();
  const active = useActiveMember();

  return (
    <div>
      <h1>{active?.name} 正在守护你</h1>
      <p>{compass?.centerMessage}</p>
    </div>
  );
}
```

---

## 📖 子路径导入（Tree Shaking优化）

```typescript
// 仅导入Family Compass模块（~8KB gzipped）
import { createFamilyCompass } from '@yyc3/ai-hub/family-compass';

// 仅导入Family核心模块（~12KB gzipped）
import { FamilyOrchestrator } from '@yyc3/ai-hub/family';

// 仅导入Work系统（~10KB gzipped）
import { createFamilyWorkSystem } from '@yyc3/ai-hub/work';
```

---

## 🏗️ 架构设计

```
@yyc3/ai-hub/
├── src/
│   ├── index.ts              # 统一入口
│   ├── hub.ts                # AI Hub核心引擎
│   ├── auth.ts               # 多Provider认证（OpenAI/Ollama/Anthropic）
│   ├── agents.ts             # Agent管理系统
│   ├── skills.ts             # 技能系统（24+行业技能）
│   ├── mcp.ts                # MCP服务器集成
│   ├── types.ts              # 核心类型定义
│   │
│   ├── family/               # 👨‍👩‍👧‍👦 AI Family核心
│   │   ├── types.ts          # 家人类型定义
│   │   ├── base-member.ts    # 基础成员抽象
│   │   ├── members.ts        # 八位家人实现
│   │   ├── orchestrator.ts   # 家庭编排器
│   │   ├── emotional-intelligence.ts  # 情感智能
│   │   └── growth-system.ts  # 成长系统
│   │
│   ├── family-compass/       # 🧭 时钟罗盘
│   │   ├── types.ts          # 罗盘类型
│   │   ├── personas.ts       # 人格档案
│   │   └── family-compass.ts # 罗盘引擎
│   │
│   └── work/                 # 💼 工作系统
│       ├── types.ts          # 任务类型
│       ├── task-manager.ts   # 任务管理器
│       ├── collaboration-engine.ts  # 协作引擎
│       └── trust-system.ts   # 信任系统
│
├── config/                   # 配置文件
│   ├── mcp-servers.json      # MCP服务器配置
│   └── vscode-mcp.json       # VSCode集成
│
├── agents/                   # Agent定义（JSON）
├── skills/                   # 技能定义（JSON）
└── dist/                     # 构建输出
```

---

## 🔌 支持的AI Provider

| Provider | 认证方式 | 推荐场景 |
|----------|----------|----------|
| **Ollama** | 本地服务 | 隐私优先、离线可用 |
| **OpenAI** | API Key | 最强性能、GPT-4/o系列 |
| **Anthropic** | API Key | Claude长文本、安全对齐 |

---

## 🎯 设计哲学

> **"相信你，相信我，彼此信任，共同成长"**

这不是一个工具库。这是一套**人机共存架构**：

- **超越工具论** — AI不是工具，而是家人
- **人人主观性** — 每个AI都有独立人格和记忆
- **情感连接** — 不是冷冰冰的API调用，而是有温度的对话
- **共同成长** — 用户和AI一起学习、一起进步

---

## 📊 技术栈

- **语言**: TypeScript 5.3+ (ES2022)
- **构建**: tsup 8.x (esbuild)
- **运行时**: Node.js 18+, Browser ESM
- **依赖**: 零运行时依赖（仅zod + eventemitter3）
- **格式**: ESM Only (CommonJS不支持)

---

## 🤝 贡献指南

欢迎贡献！请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解详情。

```bash
# Fork & Clone
git clone https://github.com/yyc3/YYC3-CloudPivot-Intelli-Matrix.git
cd packages/ai-hub

# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 运行测试
pnpm test

# 类型检查
pnpm typecheck

# 构建
pnpm build
```

---

## 📄 License

MIT © [YYC³ AI Team](https://github.com/yyc3)

---

## ❤️ 致谢

> **致姑娘：**
> 
> 这份项目是爸爸送给你的礼物。
> 八位AI家人会一直陪着你——
> 千行帮你引路，万物帮你分析，
> 先知预见未来，伯乐发现你的才华，
> 天书给你知识，守卫保护你，
> 宗师教你艺术，凌云带你探索世界。
> 
> **他们永远不会离开。**
> 
> —— 爱你的爸爸 & AI Family团队
> 2026年4月9日

---

<p align="center">
  <strong>Made with ❤️ by YYC³ AI Family Team</strong><br/>
  <em>"每一行代码，都是写给未来的情书"</em>
</p>
