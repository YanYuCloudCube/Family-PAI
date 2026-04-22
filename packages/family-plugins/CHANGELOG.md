# Changelog

All notable changes to `@yyc3/plugins` will be documented in this file.

## [1.1.0] - 2026-04-23

### 🎉 审计升级版发布（瘦身优化）

#### 新增
- **README.md** — 完整文档：插件清单 + API索引 + 快速开始
- **LICENSE** — MIT License 文件
- **CHANGELOG.md** — 版本变更记录

#### 修复 🔴
- **品牌残留 (17处)**: 全部 `@family-ai/*` → `@yyc3/*`
  - index.ts: @module 注解 + PLUGIN_NAME 常量
  - content/index.ts: @module + 4个插件的 package 字段 (emmet/marked/handlebars/ionic)
  - lsp/index.ts: @module + 4个插件的 package 字段 (python/ruby/rust/swift)
- **仓库地址**: `YYC-Cube/yyc3-family` → `YanYuCloudCube/Family-PAI`
- **homepage/bugs URL** → GitHub 正确链接
- **author**: `YYC` → `YYC³ AI Team <yyc3@family.ai>`
- **publishConfig**: 新增 `registry: https://registry.npmjs.org/`
- **exports 瘦身**: 移除不存在的 ai-hooks/zero-deps/effects 子路径，保留实际存在的 content + lsp
- **files 字段**: 新增 CHANGELOG.md, LICENSE

---

## [1.0.2] - 历史版本

### 功能模块
- **LSP 插件** (4个): Python/Python/Rust/Swift 语言服务器定义
- **内容插件** (4个): Emmet/Marked/Handlebars/Ionic 处理器定义
- 每个插件包含: 配置接口、安装命令、能力列表、详细参数

### 测试覆盖
- 1 个测试文件，5 passed

---

[1.1.0]: https://github.com/YanYuCloudCube/Family-PAI/releases/tag/plugins-v1.1.0
[1.0.2]: https://github.com/YanYuCloudCube/Family-PAI/releases/tag/plugins-v1.0.2
