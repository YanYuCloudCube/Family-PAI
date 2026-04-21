# 📦 FAmily π³ NPM 发布指南

> **@family-pai 组织包发布流程说明**

---

## 目录

1. [组织设置](#组织设置)
2. [包列表](#包列表)
3. [发布流程](#发布流程)
4. [版本管理](#版本管理)
5. [权限管理](#权限管理)

---

## 组织设置

### 组织信息

| 项目 | 值 |
|------|-----|
| **组织名** | `family-pai` |
| **NPM URL** | https://www.npmjs.com/org/family-pai |
| **可见性** | Public |
| **创建时间** | 2026-04-21 |

### 创建组织命令

```bash
# 登录 NPM
npm login

# 创建组织（在 npmjs.com 上操作）
# 访问: https://www.npmjs.com/org/create
```

---

## 包列表

### 已发布包

| 包名 | 版本 | 状态 | 说明 |
|------|------|------|------|
| `@family-pai/core` | 1.0.0 | ✅ 待发布 | 核心引擎包 |

### 计划中包

| 包名 | 预计版本 | 状态 | 说明 |
|------|----------|------|------|
| `@family-pai/web-ui` | 1.0.0 | 🔜 开发中 | React/Vue UI 组件 |
| `@family-pai/cli` | 1.0.0 | 🔜 开发中 | 命令行工具 |
| `@family-pai/mcp-server` | 1.0.0 | 🔜 开发中 | MCP 协议服务器 |
| `@family-pai/templates` | 1.0.0 | 🔜 开发中 | 模板库 |

---

## 发布流程

### 前置条件

- [x] 已登录 NPM 账号
- [x] 已创建 `family-pai` 组织
- [x] 代码已通过所有测试
- [x] CHANGELOG 已更新
- [x] 版本号已更新

### 发布步骤

```bash
# 1. 进入核心包目录
cd packages/claw-core

# 2. 更新版本号（如需要）
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# 3. 运行完整测试
pnpm test
pnpm typecheck
pnpm build

# 4. 发布到 NPM
npm publish --access public

# 5. 验证发布
npm info @family-pai/core
```

### 自动化发布 (CI/CD)

项目已配置 GitHub Actions 自动发布：

**触发条件：**
- 推送 tag `v*.*.*`
- 手动触发 `release.yml`

**发布流程：**
```yaml
# .github/workflows/publish.yml
name: Publish to NPM

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      
      - run: pnpm install
      - run: pnpm build
      - run: pnpm test
      
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## 版本管理

### 语义化版本 (SemVer)

格式：`MAJOR.MINOR.PATCH`

| 类型 | 触发条件 | 示例 |
|------|----------|------|
| **PATCH** | Bug 修复 | 1.0.0 → 1.0.1 |
| **MINOR** | 新功能（向后兼容） | 1.0.0 → 1.1.0 |
| **MAJOR** | 破坏性变更 | 1.0.0 → 2.0.0 |

### Pre-release 版本

| 后缀 | 用途 | 示例 |
|------|------|------|
| `-alpha.*` | 内部测试 | 1.0.0-alpha.1 |
| `-beta.*` | 公开测试 | 1.0.0-beta.1 |
| `-rc.*` | 候选版本 | 1.0.0-rc.1 |

### Tag 命名规范

```bash
# 正式版
git tag v1.0.0
git push origin v1.0.0

# 预发布版
git tag v1.0.0-beta.1
git push origin v1.0.0-beta.1
```

---

## 权限管理

### 角色定义

| 角色 | 权限 | 适用人员 |
|------|------|----------|
| **Owner** | 完全控制 | 核心维护者 |
| **Admin** | 包管理、成员管理 | 高级贡献者 |
| **Developer** | 发布、下载 | 贡献者 |
| **Read-only** | 仅下载 | 所有用户 |

### 添加成员

```bash
# CLI 方式
npm org add family-pai username developer

# 或访问 https://www.npmjs.com/org/family-pai/members
```

---

## 常见问题

### Q: 如何撤销已发布的版本？

```bash
# 72小时内可以撤销
npm unpublish @family-pai/core@1.0.1

# 强制撤销（不推荐）
npm unpublish @family-pai/core@1.0.1 --force
```

### Q: 如何废弃旧版本？

```bash
npm deprecate @family-pai/core@<1.0.0 "Please upgrade to latest version"
```

### Q: 如何查看下载统计？

```bash
# 使用 npm-stat
open https://npm-stat.com/packages/@family-pai/core
```

---

## 相关链接

| 资源 | URL |
|------|-----|
| NPM 组织页 | https://www.npmjs.com/org/family-pai |
| @family-pai/core | https://www.npmjs.com/package/@family-pai/core |
| GitHub 仓库 | https://github.com/YanYuCloud/Family-AI |
| 文档站点 | https://api.yyccube.com |

---

<div align="center">

> **「FAmily π³ · 信任如π，始终如一」**
>
> © 2026 FAmily PAI Team

</div>
