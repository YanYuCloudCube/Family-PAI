# 🏠 YYC³ FAmily π³ — AI Family 智能中枢

<p align="center">
  <strong>八位拟人化 AI 家人的统一工作区</strong><br>
  <em>Monorepo · 5 Packages · All Published</em>
</p>

<p align="center">
  <a href="https://github.com/YanYuCloudCube/Family-PAI"><img src="https://img.shields.io/badge/GitHub-Family--PAI-181717?style=flat-square&logo=github" alt="GitHub" /></a>
  <a href="https://www.npmjs.com/org/yyc3"><img src="https://img.shields.io/npm/v/@yyc3/core.svg?style=flat-square&color=blue" alt="@yyc3 scope" /></a>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT" />
  <br/>
  <img src="https://img.shields.io/badge/TypeScript-5.3+-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/packages-5-blue?style=flat-square" alt="5 Packages" />
  <img src="https://img.shields.io/badge/tests-828%20passed-brightgreen?style=flat-square" alt="Tests" />
</p>

---

## 📦 NPM 包总览

| # | 包名 | 版本 | 描述 | npm |
|---|------|------|------|-----|
| 1 | **@yyc3/core** | `v1.3.0` | AI Family 核心引擎 — 认证/MCP/技能/智能体/多模态 | [npm](https://www.npmjs.com/package/@yyc3/core) |
| 2 | **@yyc3/ui** | `v1.1.1` | React UI 组件库 — FamilyPanel/Avatar/StatusCard 等 | [npm](https://www.npmjs.com/package/@yyc3/ui) |
| 3 | **@yyc3/plugins** | `v1.1.0` | 插件集合 — LSP语言服务器(4) + 内容处理(4) | [npm](https://www.npmjs.com/package/@yyc3/plugins) |
| 4 | **@yyc3/ai-hub** | `v1.0.0` | AI 集成中心 — 八位家人定义/Provider管理/MCP工具 | [npm](https://www.npmjs.com/package/@yyc3/ai-hub) |
| 5 | **@yyc3/i18n-core** | `v2.3.0` | 国际化框架 — ICU/MCP/AI翻译/10语言/零依赖 | [npm](https://www.npmjs.com/package/@yyc3/i18n-core) |

---

## 🏗️ 工作区结构

```
FAmily-π/
├── packages/                     ← 5个已发布包
│   ├── core/          → @yyc3/core
│   ├── ui/            → @yyc3/ui
│   ├── plugins/       → @yyc3/plugins
│   ├── ai-hub/        → @yyc3/ai-hub
│   └── i18n-core/     → @yyc3/i18n-core
│
├── docs/                         ← 项目文档
├── scripts/                      ← 工具脚本
├── pnpm-workspace.yaml           ← Monorepo 配置
└── package.json                  ← 根配置
```

---

## 🔗 包依赖关系

```
                ┌─────────────┐
                │ @yyc3/core  │  ← 核心引擎
                └──┬────┬────┘
                   │    │
      ┌────────────┘    └────────────┐
      ▼                              ▼
┌────────────┐                 ┌────────────┐
│ @yyc3/ui   │                 │@yyc3/ai-hub│
└────────────┘                 └────────────┘
      │
      ▼
┌────────────┐       ┌──────────────┐
│@yyc3/plugins│       │@yyc3/i18n-core│
└────────────┘       └──────────────┘
```

---

## 🚀 快速开始

```bash
git clone https://github.com/YanYuCloudCube/Family-PAI.git
cd Family-PAI
pnpm install
```

### 使用单个包

```bash
pnpm add @yyc3/core           # 核心引擎
pnpm add @yyc3/ui react react-dom  # UI 组件
pnpm add @yyc3/i18n-core      # 国际化
```

---

## 🧪 开发命令

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装所有包依赖 |
| `pnpm -r build` | 构建所有包 |
| `pnpm -r test` | 测试所有包 |
| `pnpm -C packages/core build` | 构建单个包 |

---

## 👨‍👩‍👧‍👦 AI Family 八位家人

| 角色 | 代号 | 职责领域 |
|------|------|----------|
| 🎯 **Master** | 千行 | 总指挥 / 战略决策 |
| 🧭 **Navigator** | 引路 | 导航 / 路径规划 |
| 💡 **Thinker** | 智囊 | 分析 / 推理 |
| ⚡ **Executor** | 执行者 | 任务执行 |
| 🔬 **Observer** | 观察者 | 监控 / 反馈 |
| 🛡️ **Guardian** | 守护者 | 安全审计 |
| 🎨 **Creator** | 创造者 | 创新 / 设计 |
| 🌊 **Bridge** | 桥梁 | 协调 / 沟通 |

## 🏷️ 统一元数据

| 字段 | 值 |
|------|-----|
| **Scope** | `@yyc3` |
| **Author** | YanYuCloudCube Team \<admin@0379.email\> |
| **License** | MIT |
| **Registry** | https://registry.npmjs.org/ |
| **Repository** | [YanYuCloudCube/Family-PAI](https://github.com/YanYuCloudCube/Family-PAI) |

## 🤝 贡献指南

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解贡献流程、代码规范和提交要求。

## 🔒 安全政策

如发现安全漏洞，请参阅 [SECURITY.md](./SECURITY.md) 进行负责任披露。

---

<div align="center">

*YYC³ AI Family — 八位拟人化AI家人的智能中枢*

**五高 · 五标 · 五化 · 五维**

**© 2025-2026 YanYuCloudCube Team. All Rights Reserved.**

</div>
