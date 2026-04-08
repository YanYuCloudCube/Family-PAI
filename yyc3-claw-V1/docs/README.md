# 📚 文档中心

> **YYC³ Claw AI 完整文档索引**

---

## 🚀 快速导航

### 新手入门

| 文档 | 说明 | 阅读时间 |
|------|------|----------|
| [README](../README.md) | 项目概览和快速开始 | 5 分钟 |
| [快速开始](QUICK_START.md) | 5 分钟快速上手指南 | 5 分钟 |
| [项目结构](PROJECT_STRUCTURE.md) | 了解项目目录结构 | 3 分钟 |

### 开发文档

| 文档 | 说明 | 阅读时间 |
|------|------|----------|
| [开发者指南](DEVELOPER_GUIDE.md) | 完整的开发指南 | 15 分钟 |
| [API 参考](API_REFERENCE.md) | 详细的 API 文档 | 参考 |
| [贡献指南](CONTRIBUTING.md) | 如何参与项目贡献 | 10 分钟 |
| [发布指南](RELEASE.md) | NPM 发布流程说明 | 8 分钟 |

### 架构文档

| 文档 | 说明 | 阅读时间 |
|------|------|----------|
| [架构设计](YYC3-CLAW-ARCHITECTURE.md) | 系统架构设计文档 | 20 分钟 |
| [AI Family 设计](YYC3-AI-Family.md) | 智能体系统设计 | 15 分钟 |
| [DDD 设计](YYC3-CLAW_DDD.md) | 领域驱动设计文档 | 15 分钟 |
| [深入规划设计](YYC3-Claw-深入规划设计方案.md) | 详细设计方案 | 25 分钟 |

### 报告文档

| 文档 | 说明 | 阅读时间 |
|------|------|----------|
| [阶段二报告](PHASE2_REPORT.md) | 第二阶段开发报告 | 10 分钟 |
| [UI 报告](YYC3-CLAW_UI报告.md) | UI 设计报告 | 8 分钟 |
| [技能系统](SKILL.md) | 技能系统设计文档 | 10 分钟 |

---

## 📖 按模块查看

### 🔐 认证模块 (Auth)

```typescript
import { UnifiedAuthManager } from '@claw-ai/core/auth'
```

**相关文档:**
- [API 参考 - 认证模块](API_REFERENCE.md#认证模块-auth)
- [开发者指南 - 添加新提供商](DEVELOPER_GUIDE.md#q-如何添加新的-ai-提供商)

**主要功能:**
- 多平台自动检测
- OpenAI / Ollama 支持
- 统一认证接口

---

### 🤖 AI Family 智能体

```typescript
import { AIFamilyManager } from '@claw-ai/core/ai-family'
```

**相关文档:**
- [AI Family 设计](YYC3-AI-Family.md)
- [API 参考 - AI Family](API_REFERENCE.md#ai-family-智能体)
- [开发者指南 - 添加新智能体](DEVELOPER_GUIDE.md#q-如何添加新的智能体)

**主要功能:**
- 8 个专业智能体
- 任务调度与协同
- 智能推荐

---

### 🎯 技能系统 (Skills)

```typescript
import { SkillManager } from '@claw-ai/core/skills'
```

**相关文档:**
- [技能系统设计](SKILL.md)
- [API 参考 - 技能系统](API_REFERENCE.md#技能系统-skills)
- [开发者指南 - 添加新技能](DEVELOPER_GUIDE.md#q-如何添加新的技能)

**主要功能:**
- 可扩展技能框架
- 内置实用技能
- 智能推荐

---

### 🔗 MCP 协议

```typescript
import { MCPClient } from '@claw-ai/core/mcp'
```

**相关文档:**
- [API 参考 - MCP 协议](API_REFERENCE.md#mcp-协议)
- [架构设计](YYC3-CLAW-ARCHITECTURE.md)

**主要功能:**
- MCP 协议实现
- 工具调用
- 资源管理

---

### 🎨 多模态处理

```typescript
import { MultimodalManager } from '@claw-ai/core/multimodal'
```

**相关文档:**
- [API 参考 - 多模态处理](API_REFERENCE.md#多模态处理-multimodal)

**主要功能:**
- 图像分析
- 音频处理
- 文档解析

---

## 🔍 按场景查看

### 场景 1: 快速集成

```bash
# 1. 安装依赖
pnpm install @claw-ai/core

# 2. 初始化认证
# 3. 开始使用
```

**推荐阅读:**
- [快速开始](QUICK_START.md)
- [API 参考](API_REFERENCE.md)

---

### 场景 2: 开发新功能

```bash
# 1. Fork 项目
# 2. 创建功能分支
# 3. 开发测试
# 4. 提交 PR
```

**推荐阅读:**
- [开发者指南](DEVELOPER_GUIDE.md)
- [贡献指南](CONTRIBUTING.md)

---

### 场景 3: 理解架构

```bash
# 1. 阅读架构文档
# 2. 了解模块设计
# 3. 查看源码
```

**推荐阅读:**
- [架构设计](YYC3-CLAW-ARCHITECTURE.md)
- [DDD 设计](YYC3-CLAW_DDD.md)
- [项目结构](PROJECT_STRUCTURE.md)

---

### 场景 4: 扩展系统

```bash
# 1. 添加新提供商
# 2. 添加新智能体
# 3. 添加新技能
```

**推荐阅读:**
- [开发者指南 - 常见问题](DEVELOPER_GUIDE.md#常见问题)
- [API 参考](API_REFERENCE.md)

---

## 📝 文档贡献

### 改进文档

如果您发现文档有误或需要改进：

1. Fork 项目
2. 修改文档
3. 提交 Pull Request

### 文档规范

- 使用 Markdown 格式
- 保持简洁清晰
- 添加代码示例
- 更新目录索引

---

## 🔗 外部资源

- [TypeScript 文档](https://www.typescriptlang.org/docs/)
- [Node.js 文档](https://nodejs.org/docs/)
- [Vitest 文档](https://vitest.dev/)
- [MCP 协议规范](https://modelcontextprotocol.io/)

---

## 💬 获取帮助

- **GitHub Issues**: [提交问题](https://github.com/YYC-Cube/yyc3-claw/issues)
- **GitHub Discussions**: [参与讨论](https://github.com/YYC-Cube/yyc3-claw/discussions)

---

**文档持续更新中！** 🌹
