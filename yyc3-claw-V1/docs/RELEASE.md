# 🚀 发布指南

> **YYC³ Claw AI 发布流程说明**

---

## 📋 发布方式

### 方式一：自动发布（推荐）

当推送 tag 时自动触发发布：

```bash
# 1. 更新版本号
cd packages/claw-core
npm version patch  # 或 minor / major

# 2. 推送 tag
git push --follow-tags origin main
```

这将自动：
- ✅ 运行测试
- ✅ 构建项目
- ✅ 发布到 NPM
- ✅ 创建 GitHub Release

### 方式二：手动发布

在 GitHub Actions 页面手动触发：

1. 进入 Actions 页面
2. 选择 "Publish to NPM" workflow
3. 点击 "Run workflow"
4. 选择版本类型（patch/minor/major）
5. 点击 "Run workflow"

---

## 🔐 环境配置

### GitHub Secrets

在仓库设置中添加以下 Secrets：

| Secret | 说明 | 获取方式 |
|--------|------|----------|
| `NPM_TOKEN` | NPM 发布令牌 | [NPM Access Tokens](https://www.npmjs.com/settings/tokens) |

### 创建 NPM Token

1. 登录 [NPM](https://www.npmjs.com/)
2. 进入 Access Tokens 页面
3. 点击 "Generate New Token"
4. 选择 "Automation" 类型
5. 复制 Token 并添加到 GitHub Secrets

---

## 📦 版本规范

### 版本号格式

```
MAJOR.MINOR.PATCH
```

- **MAJOR**: 不兼容的 API 变更
- **MINOR**: 向后兼容的功能新增
- **PATCH**: 向后兼容的问题修复

### 版本更新命令

```bash
# 修复 Bug (1.0.0 -> 1.0.1)
npm version patch

# 新功能 (1.0.0 -> 1.1.0)
npm version minor

# 重大更新 (1.0.0 -> 2.0.0)
npm version major
```

---

## 📝 发布检查清单

发布前请确认：

- [ ] 所有测试通过
- [ ] 类型检查通过
- [ ] 代码检查通过
- [ ] 更新 CHANGELOG.md
- [ ] 更新文档
- [ ] 版本号已更新
- [ ] Git 工作区干净

---

## 🔄 发布流程

### 1. 准备发布

```bash
# 确保在 main 分支
git checkout main
git pull origin main

# 运行测试
pnpm test

# 类型检查
pnpm typecheck

# 代码检查
pnpm lint
```

### 2. 更新版本

```bash
# 更新 CHANGELOG
# 编辑 packages/claw-core/CHANGELOG.md

# 更新版本号
cd packages/claw-core
npm version patch
```

### 3. 推送发布

```bash
# 推送代码和 tag
git push --follow-tags origin main
```

### 4. 验证发布

- 检查 [NPM](https://www.npmjs.com/package/@claw-ai/core)
- 检查 [GitHub Releases](https://github.com/YYC-Cube/yyc3-claw/releases)

---

## 🛠️ 本地发布（不推荐）

如果需要本地发布：

```bash
# 1. 登录 NPM
npm login

# 2. 构建
pnpm build

# 3. 发布
cd packages/claw-core
npm publish --access public
```

---

## ❌ 回滚发布

如果发布出现问题：

### NPM 回滚

```bash
# 取消发布特定版本
npm unpublish @claw-ai/core@1.0.1

# 取消发布整个包（谨慎使用）
npm unpublish @claw-ai/core --force
```

### GitHub Release 删除

1. 进入 [Releases](https://github.com/YYC-Cube/yyc3-claw/releases)
2. 找到对应的 Release
3. 点击 "Delete"

---

## 📊 发布后验证

### 自动验证

发布后自动执行：

```bash
# 验证包是否可用
npm info @claw-ai/core

# 安装测试
npm install @claw-ai/core@latest
```

### 手动验证

```typescript
// test-install.ts
import { ClawCore, UnifiedAuthManager } from '@claw-ai/core'

console.log('Package imported successfully!')
console.log('Version:', require('@claw-ai/core/package.json').version)
```

---

## 🔔 通知

发布成功后：

1. 更新 [CHANGELOG.md](../CHANGELOG.md)
2. 发布公告到 GitHub Discussions
3. 更新文档（如需要）

---

**安全发布，稳步前行！** 🌹
