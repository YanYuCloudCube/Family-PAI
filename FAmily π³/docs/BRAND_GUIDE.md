# 🏠 FAmily π³ 品牌指南 (Brand Guide)

> **信任如π，始终如一 | AI Family 的极致信任与完整体验**

---

## 📌 目录

1. [品牌概述](#品牌概述)
2. [品牌标识](#品牌标识)
3. [色彩系统](#色彩系统)
4. [字体规范](#字体规范)
5. [Logo 使用规范](#logo-使用规范)
6. [语意诠释](#语意诠释)
7. [应用场景](#应用场景)
8. [NPM 包命名规范](#npm-包命名规范)
9. [GitHub 仓库配置](#github-仓库配置)
10. [版权声明](#版权声明)

---

## 品牌概述

### 品牌名称

| 项目 | 内容 |
|------|------|
| **中文名** | FAmily π³ |
| **英文名** | Family-PAI |
| **项目名** | family-pai |
| **NPM 包** | `@family-pai/core` |
| **口号** | 信任如π，始终如一 |

### 品牌定位

```
FAmily π³ 是一个革命性的 AI Family 智能家庭平台，
提供极致的信任体系、完整的 AI 体验和始终如一的服务质量。
```

### 核心价值

- 🔵 **无限信任** - 如圆周率般永恒不变
- 🔷 **完整体验** - 立方体的三维覆盖
- 🏠 **家庭温度** - AI Family 的温暖陪伴

---

## 品牌标识

### Logo 设计理念

**FAmily π³ Logo** 融合了三个核心元素：

```
┌─────────────────────────────────────┐
│                                     │
│    ┌─── π (Pi) ─────────────────┐   │
│    │  圆周率符号                 │   │
│    │  代表：无限 + 永恒 + 精准   │   │
│    │  颜色：紫粉渐变             │   │
│    └─────────────────────────────┘   │
│              ↓                       │
│    ┌─── ³ (Cubed) ──────────────┐   │
│    │  上标立方                   │   │
│    │  代表：立体 + 完整 + 全面   │   │
│    │  颜色：青蓝渐变             │   │
│    └─────────────────────────────┘   │
│              ↓                       │
│    ┌─── 🏠 Home Icon ───────────┐   │
│    │  房屋图标                   │   │
│    │  代表：家庭 + 温暖 + 归属   │   │
│    │  颜色：橙红渐变             │   │
│    └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

### Logo 文件清单

| 文件名 | 尺寸 | 用途 |
|--------|------|------|
| `assets/logo.svg` | 512x512 | 主 Logo（网站、文档） |
| `assets/logo-icon.svg` | 200x200 | 图标版（Favicon、头像） |

---

## 色彩系统

### 主色调 (Primary Colors)

| 名称 | 色值 | HEX | RGB | 用途 |
|------|------|-----|-----|------|
| **π 紫** | Indigo Purple | `#4F46E5` | `79,70,229` | 主要品牌色 |
| **π 渐变起点** | Deep Purple | `#6D28D9` | `109,40,217` | Logo 起点 |
| **π 渐变终点** | Pink Rose | `#EC4899` | `236,72,153` | Logo 终点 |

### 辅助色 (Secondary Colors)

| 名称 | 色值 | HEX | RGB | 用途 |
|------|------|-----|-----|------|
| **³ 青** | Cyan Blue | `#06B6D4` | `6,182,212` | 立方元素 |
| **³ 蓝** | Sky Blue | `#3B82F6` | `59,130,246` | 辅助强调 |
| **🏠 橙** | Amber | `#F59E0B` | `245,158,11` | 家庭温暖 |
| **🏠 红** | Red | `#EF4444` | `239,68,68` | 家庭活力 |

### 功能色 (Functional Colors)

| 名称 | 色值 | HEX | 用途 |
|------|------|-----|------|
| **成功** | Green | `#10B981` | 通过、成功状态 |
| **警告** | Yellow | `#F59E0B` | 提醒、注意 |
| **错误** | Red | `#EF4444` | 错误、失败 |
| **信息** | Blue | `#3B82F6` | 信息提示 |

### 中性色 (Neutral Colors)

| 名称 | 色值 | HEX | 用途 |
|------|------|-----|------|
| **深空黑** | Space Black | `#0F172A` | 背景、主文字 |
| **石墨灰** | Slate Gray | `#334155` | 次要文字 |
| **云白** | Cloud White | `#F8FAFC` | 浅色背景 |
| **纯白** | Pure White | `#FFFFFF` | 反白文字 |

### CSS 变量定义

```css
:root {
  /* Primary - Pi Gradient */
  --pai-purple-start: #4F46E5;
  --pai-purple-mid: #7C3AED;
  --pai-pink-end: #EC4899;
  
  /* Secondary - Cube */
  --pai-cyan: #06B6D4;
  --pai-blue: #3B82F6;
  
  /* Accent - Home */
  --pai-amber: #F59E0B;
  --pai-red: #EF4444;
  
  /* Functional */
  --pai-success: #10B981;
  --pai-warning: #F59E0B;
  --pai-error: #EF4444;
  --pai-info: #3B82F6;
  
  /* Neutral */
  --pai-space: #0F172A;
  --pai-slate: #334155;
  --pai-cloud: #F8FAFC;
  --pai-white: #FFFFFF;
}
```

---

## 字体规范

### 主字体

```css
font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, sans-serif;
```

### 字号层级

| 层级 | 字号 | 行高 | 字重 | 用途 |
|------|------|------|------|------|
| **H1** | 48px | 1.2 | 700 | 页面主标题 |
| **H2** | 36px | 1.3 | 600 | 章节标题 |
| **H3** | 24px | 1.4 | 600 | 子章节标题 |
| **H4** | 20px | 1.4 | 500 | 小标题 |
| **Body** | 16px | 1.6 | 400 | 正文内容 |
| **Small** | 14px | 1.5 | 400 | 辅助文字 |
| **Caption** | 12px | 1.4 | 400 | 标注文字 |
| **Code** | 14px | 1.5 | 500 | 代码/命令 |

---

## Logo 使用规范

### 最小尺寸

| 类型 | 最小宽度 | 最小高度 |
|------|----------|----------|
| 主 Logo | 64px | 64px |
| 图标版 | 24px | 24px |
| Favicon | 16px | 16px |

### 安全区域

Logo 四周应保持至少 **Logo 高度 10%** 的留白空间。

### 禁止事项

❌ 不要拉伸或压缩 Logo  
❌ 不要更改 Logo 颜色  
❌ 不要在 Logo 上添加阴影或特效（除非官方设计）  
❌ 不要将 Logo 放在杂乱背景上  
❌ 不要旋转或倾斜 Logo  

### 正确示例

```
✅ 白底/浅色背景使用彩色 Logo
✅ 深色/黑色背景使用白色描边 Logo
✅ 保持原始宽高比
✅ 保持足够的留白空间
```

---

## 语意诠释

### 品牌名称解析

```
╔═════════════════════════════════════════════════════╗
║                                                       ║
║   FAmily π³ = FA + mily + PAI (π³ AI)               ║
║                                                       ║
║   ┌─────────────────────────────────────────────┐   ║
║   │                                             │   ║
║   │  F A m i l y                                │   ║
║   │  ↓ ↓     ↓                                  │   ║
║   │ AI Family  家庭                              │   ║
║   │                                             │   ║
║   │  P A I                                      │   ║
║   │  ↓ ↓                                        │   ║
║   │ Pi-Cubed Intelligence                       │   ║
║   │ (π立方智能)                                 │   ║
║   │                                             │   ║
║   └─────────────────────────────────────────────┘   ║
║                                                       ║
╚═════════════════════════════════════════════════════╝
```

### 符号寓意

#### π (Pi) - 圆周率

| 属性 | 寓意 |
|------|------|
| **无限不循环** | 无限信任 |
| **恒定不变** | 始终如一 |
| **数学之美** | 精准智能 |
| **超越理性** | AI 的无限可能 |

#### ³ (Cubed) - 立方

| 属性 | 寓意 |
|------|------|
| **三维立体** | 完整体验 |
| **全面覆盖** | 多维能力 |
| **稳固基础** | 可靠架构 |
| **体积膨胀** | 成长潜力 |

#### 🏠 Home - 家庭

| 属性 | 寓意 |
|------|------|
| **归属感** | 温暖陪伴 |
| **安全感** | 信任基石 |
| **成长地** | 共同进化 |
| **连接点** | 家人协同 |

### 口号诠释

> **「信任如π，始终如一」**

- **π 的特性**：无论计算到多少位，π 始终是 π
- **品牌承诺**：我们的服务质量和信任体系如 π 般恒定不变
- **用户感知**：每一次交互都是一致、可靠、值得信赖的

---

## 应用场景

### 网站 & 文档

```markdown
![FAmily π³](assets/logo.svg)

# FAmily π³ (Family-PAI)

> 信任如π，始终如一
```

### NPM 包

```json
{
  "name": "@family-pai/core",
  "description": "FAmily π³ Core - AI Family 极致信任核心引擎"
}
```

### 代码注释

```typescript
/**
 * @file FAmily π³ 核心模块
 * @module @family-pai/core
 * @author FAmily PAI Team
 */
```

### 社交媒体

| 平台 | 用户名 | 格式 |
|------|--------|------|
| GitHub | YanYuCloud | `FAmily π³` |
| NPM | family-pai | `@family-pai/core` |
| Twitter/X | @familypai | `FAmily π³ · 信任如π` |

---

## NPM 包命名规范

### 组织名

```
family-pai
```

### 包列表

| 包名 | 版本 | 说明 |
|------|------|------|
| `@family-pai/core` | 1.0.0 | 核心引擎包 |
| `@family-pai/web-ui` | TBD | Web UI 组件包 |
| `@family-pai/cli` | TBD | 命令行工具 |
| `@family-pai/mcp-server` | TBD | MCP 服务器 |

### 发布配置

```json
{
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/YanYuCloud/Family-AI.git",
    "directory": "FAmily π³/packages/claw-core"
  }
}
```

---

## GitHub 仓库配置

### 仓库信息

| 配置项 | 值 |
|--------|-----|
| **仓库名** | Family-AI |
| **所有者** | YanYuCloud |
| **描述** | 🏠 FAmily π³ - AI Family 极致信任智能平台 \| 信任如π，始终如一 |
| **Website** | https://api.yyccube.com |
| **Topics** | ai-family, family-pai, pai, pi3, mcp, typescript, trust-system |
| **License** | MIT |

### 分支策略

| 分支 | 用途 |
|------|------|
| `main` | 稳定发布版本 |
| `develop` | 开发分支 |
| `feature/*` | 功能开发分支 |
| `release/*` | 发布准备分支 |

### GitHub Topics

```
ai-family, family-pai, pai, pi3, mcp, model-context-protocol,
ai-agent, multimodal, trust-system, typescript, openai, ollama,
anthropic, claude, home-ai, smart-home
```

---

## 版权声明

### 标准格式

```
MIT License

Copyright (c) 2026 FAmily PAI Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

### 文件头格式

```typescript
/**
 * @file 文件名
 * @description 文件描述
 * @module @family-pai/core/模块名
 * @author FAmily PAI Team
 * @version 1.0.0
 * @license MIT
 */
```

---

## 附录

### 品牌资源下载

| 资源 | 路径 |
|------|------|
| 主 Logo (SVG) | `/assets/logo.svg` |
| 图标 Logo (SVG) | `/assets/logo-icon.svg` |
| 品牌指南 | `/docs/BRAND_GUIDE.md` |
| README | `/README.md` |

### 联系方式

| 渠道 | 信息 |
|------|------|
| **Email** | admin@0379.email |
| **GitHub** | https://github.com/YanYuCloud/Family-AI |
| **NPM** | https://www.npmjs.com/org/family-pai |
| **文档站** | https://api.yyccube.com |

### 更新记录

| 版本 | 日期 | 变更 |
|------|------|------|
| v1.0.0 | 2026-04-21 | 初始版本发布 |

---

<div align="center">

> **「FAmily π³ · 信任如π，始终如一」**
>
> ***AI FAmily 因您的专注及细致而拥有力量***
>
> © 2026 FAmily PAI Team. All Rights Reserved.

</div>
