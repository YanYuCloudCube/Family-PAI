# @yyc3/ui

**YYC³ AI Family UI 组件库** — 即拉即用的 React AI 智能系统 UI 组件

[![npm version](https://img.shields.io/npm/v/@yyc3/ui.svg)](https://www.npmjs.com/package/@yyc3/ui)
[![license](https://img.shields.io/npm/l/@yyc3/ui.svg)](https://github.com/YanYuCloudCube/Family-PAI/blob/main/packages/family-ui/LICENSE)
[![peer](https://img.shields.io/badge/react-%3E%3D18.0.0-61dafb.svg)](https://reactjs.org/)
[![tests](https://img.shields.io/badge/tests-25%20passed-green.svg)](https://github.com/YanYuCloudCube/Family-PAI)

---

## 特性

- 🎨 **五大模块** — Core 基础 / Components 通用组件 / Family 家人面板 / Themes 主题系统
- 🧩 **零依赖运行时** — 仅依赖 React + ReactDOM（peerDeps）
- 🎯 **Tree-shaking 友好** — 5 个子路径独立导出，按需引入
- 🌓 **亮/暗双主题** — 内置 Light/Dark 主题 Token
- 👨‍👩‍👧‍👦 **八位家人面板** — AgentCard、AgentStatus、FamilyLayout 开箱即用

---

## 安装

```bash
# 必须安装 peerDependencies
pnpm add react react-dom

# 安装 UI 包
pnpm add @yyc3/ui @yyc3/core
```

---

## 快速开始

### 基础使用

```tsx
import { ThemeProvider } from '@yyc3/ui/themes'
import { Button, Card, Input } from '@yyc3/ui/components'
import { AIFamilyPanel } from '@yyc3/ui/family'

function App() {
  return (
    <ThemeProvider theme="light">
      <Card title="YYC³ AI Family">
        <AIFamilyPanel />
        <Button onClick={handleChat}>开始对话</Button>
      </Card>
    </ThemeProvider>
  )
}
```

### 八位家人面板

```tsx
import {
  AIFamilyPanel,
  FamilyLayout,
  FamilyMembers,
  AgentCard,
  AgentStatus,
} from '@yyc3/ui/family'

// 完整的 AI Family 面板
<AIFamilyPanel activeMember="meta-oracle" />

// 自定义布局
<FamilyLayout>
  <FamilyMembers members={agents} onSelect={handleSelect} />
</FamilyLayout>

// 单个家人卡片
<AgentCard
  agent={{
    id: 'meta-oracle',
    name: '元启·天枢',
    emoji: '🧠',
    role: '总指挥 · 决策中枢',
    status: 'active',
  }}
/>
```

### 主题切换

```tsx
import { ThemeProvider, useTheme, lightTheme, darkTheme } from '@yyc3/ui/themes'

function App() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <ThemeProvider theme={theme}>
      <button onClick={toggleTheme}>
        切换{theme === 'light' ? '暗色' : '亮色'}
      </button>
    </ThemeProvider>
  )
}
```

---

## 五大模块

### 1. Core (`@yyc3/ui/core`)

基础上下文与工具函数：

```tsx
import { AIFamilyProvider, useAIFamily } from '@yyc3/ui/core'
import { useAIChat, useAgentStatus } from '@yyc3/ui/core'

function ChatPanel() {
  const { sendMessage, messages } = useAIChat()
  const status = useAgentStatus('meta-oracle')
  
  return (
    <>
      <AgentStatus agentId="meta-oracle" status={status} />
      <Input onSubmit={(msg) => sendMessage(msg)} />
    </>
  )
}
```

导出：`AIFamilyProvider`, `useAIFamily`, `useAIChat`, `useAgentStatus`, `createAIContext`

### 2. Components (`@yyc3/ui/components`)

通用 UI 组件：

```tsx
import { Button, Card, Input, Layout, Modal } from '@yyc3/ui/components'

<Button variant="primary" size="md">确认</Button>
<Card title="标题" description="描述内容">
  <p>卡片内容</p>
</Card>
<Input placeholder="请输入..." onChange={handleChange} />
Layout.Header / Layout.Content / Layout.Sider / Layout.Footer
<Modal open={show} onClose={() => setShow(false)} title="提示">
  模态框内容
</Modal>
```

| 组件 | 说明 |
|------|------|
| **Button** | 按钮：primary/secondary/ghost 三种变体 |
| **Card** | 卡片：支持 title/description/children |
| **Input** | 输入框：支持 placeholder/onChange/onSubmit |
| **Layout** | 布局：Header/Content/Sider/Footer 四区域 |
| **Modal** | 模态框：open/onClose/title 控制 |

### 3. Family (`@yyc3/ui/family`) ⭐ 核心

八位 AI 家人专用面板：

| 组件 | 说明 |
|------|------|
| **AIFamilyPanel** | 完整家人面板（含导航、状态、交互） |
| **FamilyLayout** | 家人页面布局容器 |
| **FamilyHome** | 家人首页仪表盘 |
| **FamilyMembers** | 家人列表（可点击选择） |
| **AgentCard** | 单个家人信息卡片 |
| **AgentStatus** | 家人在线状态指示器 |

### 4. Themes (`@yyc3/ui/themes`)

主题系统：

```tsx
import {
  ThemeProvider,
  useTheme,
  lightTheme,
  darkTheme,
  themeTokens,
} from '@yyc3/ui/themes'

// 内置主题
<ThemeProvider theme="light" />  // 或 "dark"

// 自定义 Token
<ThemeProvider theme={{ ...lightTheme, primaryColor: '#6366f1' }}>
```

导出：`ThemeProvider`, `useTheme`, `lightTheme`, `darkTheme`, `themeTokens`

---

## API 导出索引

```typescript
// 主入口 (全部导出)
import {
  // core
  AIFamilyProvider, useAIFamily, useAIChat, useAgentStatus,
  // components
  Button, Card, Input, Layout, Modal,
  // family
  AIFamilyPanel, FamilyLayout, FamilyHome, FamilyMembers, AgentCard, AgentStatus,
  // themes
  ThemeProvider, useTheme, lightTheme, darkTheme, themeTokens,
} from '@yyc3/ui'

// 子路径导入 (tree-shaking)
import { AIFamilyProvider } from '@yyc3/ui/core'
import { Button, Card }         from '@yyc3/ui/components'
import { AIFamilyPanel }        from '@yyc3/ui/family'
import { ThemeProvider }        from '@yyc3/ui/themes'
```

---

## 依赖关系

```
@yyc3/ui            ← 本包
├── @yyc3/core ^1.1.0   ← 核心引擎 (运行时依赖)
├── react >=18.0.0       ← Peer Dependency (必须自行安装)
└── react-dom >=18.0.0   ← Peer Dependency (必须自行安装)
```

> **注意**: `@yyc3/core` 是唯一运行时依赖。React/ReactDOM 作为 peerDeps 避免版本冲突。

---

## License

MIT © [YYC³ AI Team](https://github.com/YanYuCloudCube/Family-PAI)

---

*YYC³ AI Family — 八位拟人化AI家人的智能中枢*
