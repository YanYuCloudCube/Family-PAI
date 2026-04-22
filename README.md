# 🏠 YYC³ FAmily π³ — AI Family 智能中枢

<p align="center">
  <strong>八位拟人化 AI 家人的统一工作区</strong><br>
  <em>Monorepo · 5 Packages · Zero @family-ai Residuals · All Published</em>
</p>

<p align="center">
  <a href="https://github.com/YanYuCloudCube/Family-PAI"><img src="https://img.shields.io/badge/GitHub-Family--PAI-181717?style=flat-square&logo=github" alt="GitHub" /></a>
  <a href="https://www.npmjs.com/org/yyc3"><img src="https://img.shields.io/npm/v/@yyc3/core.svg?style=flat-square&color=blue" alt="@yyc3 scope" /></a>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT" />
  <br/>
  <img src="https://img.shields.io/badge/TypeScript-5.3+-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/packages-5-blue?style=flat-square" alt="5 Packages" />
  <img src="https://img.shields.io/badge/tests-828%20passed-brightgreen?style=flat-square" alt="Tests" />
  <img src="https://img.shields.io/badge/published-5%2F5-success?style=flat-square" alt="Published" />
</p>

---

## 📦 NPM 包总览

| # | 包名 | 版本 | 描述 | 大小 | 测试 | npm |
|---|------|------|------|------|------|-----|
| 1 | **@yyc3/core** | `v1.3.0` | AI Family 核心引擎 — 家人系统/任务管理/Compass罗盘 | 271.9 KB | 207 ✅ | [npm](https://www.npmjs.com/package/@yyc3/core) |
| 2 | **@yyc3/ui** | `v1.1.0` | React UI 组件库 — FamilyPanel/Avatar/StatusCard 等 | 32.0 KB | 25 ✅ | [npm](https://www.npmjs.com/package/@yyc3/ui) |
| 3 | **@yyc3/plugins** | `v1.1.0` | 插件集合 — LSP语言服务器(4) + 内容处理(4) | 7.0 KB | 5 ✅ | [npm](https://www.npmjs.com/package/@yyc3/plugins) |
| 4 | **@yyc3/ai-hub** | `v1.0.0` | AI 集成中心 — 八位家人定义/Provider管理/MCP工具 | 130.9 KB | 148 ✅ | [npm](https://www.npmjs.com/package/@yyc3/ai-hub) |
| 5 | **@yyc3/i18n-core** | `v2.3.0` | 国际化框架 — ICU/MCP/AI翻译/10语言/零依赖 | 78.2 KB | 443 ✅ | [npm](https://www.npmjs.com/package/@yyc3/i18n-core) |

**总计**: 519.9 KB packed · 828 tests passed · 全部 MIT License

---

## 🏗️ 工作区结构

```
FAmily-π/
│
├── 📦 packages/                    ← 【活跃代码】5个已发布包
│   ├── family-core/               → @yyc3/core      v1.3.0
│   ├── family-ui/                 → @yyc3/ui        v1.1.0
│   ├── family-plugins/            → @yyc3/plugins   v1.1.0
│   ├── ai-hub/                    → @yyc3/ai-hub    v1.0.0
│   └── i18n-core/                 → @yyc3/i18n-core v2.3.0
│
├── 📁 归档文件/                    ← 【归档】历史文档/品牌资源/清理记录
│   ├── yyc3-i18n/                → i18n-core 原始独立仓库（已迁移至packages）
│   └── 01~06/                    → 各类归档资料
│
├── 📁 docs/                       ← 【项目文档】审计报告 + 流水线
│   ├── 01-AI-HUB-AUDIT.md        → ai-hub 审计记录
│   ├── 02-CORE-AUDIT.md          → core 审计记录
│   └── PIPELINE.md               → 发布流水线（全完成）
│
├── 📄 README.md                   ← 本文件
├── 📄 pnpm-workspace.yaml         → Monorepo 工作区配置
└── 📄 .gitignore
```

---

## 🔗 包依赖关系

```
                    ┌─────────────┐
                    │ @yyc3/core  │  ← 独立核心，零运行时依赖
                    │  v1.3.0     │
                    └──┬────┬────┘
                       │    │
          ┌────────────┘    └────────────┐
          ▼                              ▼
   ┌────────────┐                 ┌────────────┐
   │ @yyc3/ui   │                 │@yyc3/ai-hub│
   │  v1.1.0    │                 │  v1.0.0    │
   │ peer: react│                 │ dep: core  │
   └────────────┘                 └────────────┘
          │
          ▼ peerDep
   ┌────────────┐       ┌──────────────┐
   │@yyc3/plugins│       │@yyc3/i18n-core│
   │  v1.1.0     │       │  v2.3.0       │
   │ dep: core   │       │  独立(零依赖)  │
   └────────────┘       └──────────────┘
```

---

## 🚀 快速开始

### 环境要求

```bash
Node.js >= 18.0.0
pnpm >= 9.0.0
```

### 安装

```bash
# 克隆仓库
git clone https://github.com/YanYuCloudCube/Family-PAI.git
cd Family-PAI

# 安装所有依赖
pnpm install
```

### 使用单个包

```bash
# 核心引擎
pnpm add @yyc3/core

# UI 组件
pnpm add @yyc3/ui @yyc3/core react react-dom

# 插件集合
pnpm add @yyc3/plugins @yyc3/core

# AI 集成中心
pnpm add @yyc3/ai-hub @yyc3/core

# 国际化框架
pnpm add @yyc3/i18n-core
```

---

## 🧪 开发命令

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装所有包依赖 |
| `pnpm -C packages/family-core build` | 构建单个包 |
| `pnpm -C packages/family-core test` | 测试单个包 |
| `pnpm -C packages/family-core publish --access public` | 发布单个包 |

---

## 👨‍👩‍👧‍👦 AI Family 八位家人

| 角色 | 代号 | 职责领域 |
|------|------|----------|
| 🎯 **Master** | 千行 | 总指挥 / 战略决策 |
| 🧭 **Navigator** | 引路 | 导航 / 路径规划 |
| 💡 **Thinker** | 智囊 | 分析 / 推理 / 深度思考 |
| ⚡ **Executor** | 执行者 | 任务执行 / 行动落地 |
| 🔬 **Observer** | 观察者 | 监控 / 数据采集 / 反馈 |
| 🛡️ **Guardian** | 守护者 | 安全审计 / 风险管控 |
| 🎨 **Creator** | 创造者 | 创新 / 设计 / 方案生成 |
| 🌊 **Bridge** | 桥梁 | 协调 / 沟通 / 跨域连接 |

---

## 📋 发布状态

**全部 5/5 包已发布至 npmjs.org** ✅ (2026-04-23)

| 包名 | 版本 | 发布日期 | 状态 |
|------|------|----------|------|
| @yyc3/ai-hub | v1.0.0 | 2026-04-23 | ✅ 锁仓 |
| @yyc3/core | v1.3.0 | 2026-04-23 | ✅ 锁仓 |
| @yyc3/ui | v1.1.0 | 2026-04-23 | ✅ 锁仓 |
| @yyc3/plugins | v1.1.0 | 2026-04-23 | ✅ 锁仓 |
| @yyc3/i18n-core | v2.3.0 | 2026-04-23 | ✅ 锁仓 |

---

## 🏷️ 统一元数据

所有包共享以下标准：

| 字段 | 值 |
|------|-----|
| **Scope** | `@yyc3` |
| **Author** | YYC³ AI Team \<yyc3@family.ai\> |
| **License** | MIT |
| **Registry** | https://registry.npmjs.org/ |
| **Repository** | [YanYuCloudCube/Family-PAI](https://github.com/YanYuCloudCube/Family-PAI) |
| **Access** | public |

---

## 📖 文档索引

| 文档 | 说明 |
|------|------|
| [docs/PIPELINE.md](docs/PIPELINE.md) | 发布流水线与审计记录 |
| [docs/01-AI-HUB-AUDIT.md](docs/01-AI-HUB-AUDIT.md) | ai-hub 审计详情 |
| [docs/02-CORE-AUDIT.md](docs/02-CORE-AUDIT.md) | core 审计详情 |
| [packages/*/README.md](packages/) | 各包独立文档 |

---

## 🙏 致谢

Made with ❤️ by [YYC³ AI Team](https://github.com/YanYuCloudCube/Family-PAI)

*YYC³ AI Family — 八位拟人化AI家人的智能中枢*
