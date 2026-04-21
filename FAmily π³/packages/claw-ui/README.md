# @yyc3/web-ui

> **FAmily π³ Web UI - AI Family 智能聊天界面组件库**

[![npm version](https://img.shields.io/npm/v/@yyc3/web-ui.svg)](https://www.npmjs.com/package/@yyc3/web-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

## ✨ 特性

- 🎨 **精美设计** - 现代化 UI，支持亮色/暗色/系统主题
- 🔌 **即插即用** - 零配置启动，自动检测环境
- ⚡ **高性能** - 基于 React 18，支持流式响应
- 🎯 **类型安全** - 完整的 TypeScript 类型定义
- 🧩 **模块化** - 可单独使用组件或完整套件
- 📱 **响应式** - 支持桌面和移动端

## 🚀 快速开始

### 安装

```bash
npm install @yyc3/web-ui @yyc3/core
# 或
pnpm add @yyc3/web-ui @yyc3/core
```

### 基础用法

```tsx
import { ClawProvider, ClawChat } from '@yyc3/web-ui'

function App() {
  return (
    <ClawProvider config={{
      auth: {
        openai: {
          apiKey: process.env.OPENAI_API_KEY,
        },
      },
    }}>
      <ClawChat 
        placeholder="输入消息开始对话..."
        showSkills={true}
        theme="system"
      />
    </ClawProvider>
  )
}
```

### 使用 Hooks

```tsx
import { useClaw, useChat, useSkills } from '@yyc3/web-ui'

function CustomComponent() {
  const { sendMessage, messages, isLoading } = useChat()
  const skills = useSkills()

  return (
    <div>
      <button onClick={() => sendMessage('你好')}>
        发送消息
      </button>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

## 📦 组件列表

| 组件 | 描述 |
|------|------|
| `ClawProvider` | 全局配置提供者 |
| `ClawChat` | 主聊天窗口 |
| `ChatMessage` | 单条消息组件 |
| `MessageInput` | 输入框组件 |

## 🪝 Hooks

| Hook | 描述 |
|------|------|
| `useClaw()` | 获取全局上下文 |
| `useChat()` | 聊天相关状态和方法 |
| `useAuth()` | 认证信息 |
| `useSkills()` | 技能列表 |
| `useAgents()` | 智能体列表 |

## 🎨 主题

```tsx
import { defaultTheme, darkTheme, lightTheme } from '@yyc3/web-ui/themes'

// 自定义主题
const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#your-color',
  },
}
```

## 🔗 相关包

- [@yyc3/core](https://www.npmjs.com/package/@yyc3/core) - FAmily π³ 核心引擎

## 📄 License

MIT © 2026 FAmily PAI Team

---

<div align="center">

> **「FAmily π³ · 信任如π，始终如一」**

</div>
