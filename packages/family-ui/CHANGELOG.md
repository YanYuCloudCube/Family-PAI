# Changelog

All notable changes to `@yyc3/ui` will be documented in this file.

## [1.1.0] - 2026-04-23

### 🎉 审计升级版发布

#### 新增
- **README.md** — 完整文档：五大模块说明、API索引、快速开始示例
- **LICENSE** — MIT License 文件
- **CHANGELOG.md** — 版本变更记录

#### 修复 🔴
- **仓库地址**: `YanYuCloud/Family-AI` → `YanYuCloudCube/Family-PAI`（修复404）
- **homepage**: `api.yyccube.com` → GitHub README URL
- **bugs URL**: 对齐到正确仓库 issues 页面
- **author**: `YYC` → `YYC³ AI Team <yyc3@family.ai>`
- **品牌残留**: 3处 `@module @family-ai` 注解 → `@module @yyc3/ui/*`
- **publishConfig**: 新增 `registry: https://registry.npmjs.org/`
- **files 字段**: 新增 CHANGELOG.md, LICENSE

---

## [1.0.2] - 历史版本

### 功能模块
- **Core** — AIFamilyProvider Context、useAIChat/useAgentStatus Hooks
- **Components** — Button/Card/Input/Layout/Modal 五大通用组件
- **Family** — AIFamilyPanel/FamilyLayout/AgentCard/AgentStatus 六大家人组件
- **Themes** — ThemeProvider + light/dark 双主题 + Token 系统

### 测试覆盖
- 2 个测试文件，25 passed

---

[1.1.0]: https://github.com/YanYuCloudCube/Family-PAI/releases/tag/ui-v1.1.0
[1.0.2]: https://github.com/YanYuCloudCube/Family-PAI/releases/tag/ui-v1.0.2
