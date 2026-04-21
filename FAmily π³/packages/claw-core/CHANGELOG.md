# @family-pai/core Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-04-21

### 🎉 Brand Upgrade: Claw AI Core → FAmily π³ Core

#### 🏠 New Brand Identity
- **FAmily π³** (Family-PAI) - AI Family 极致信任核心引擎
- Package renamed: `@claw-ai/core` → `@family-pai/core`
- **Motto**: 信任如π，始终如一 (Trust like π, always consistent)

### Added

#### 🤖 AI Family 智能体系统
- 新增 8 个专业智能体实现
  - 元启·天枢 (Meta-Oracle) - 总指挥智能体
  - 智云·守护 (Sentinel) - 安全官智能体
  - 格物·宗师 (Master) - 质量官智能体
  - 创想·灵韵 (Creative) - 创意官智能体
  - 言启·千行 (Navigator) - 导航员智能体
  - 语枢·万物 (Thinker) - 思考者智能体
  - 预见·先知 (Prophet) - 预言家智能体
  - 知遇·伯乐 (Bolero) - 推荐官智能体
- 智能体管理器 (AIFamilyManager)
- 任务调度和路由系统
- 智能体协同执行模式 (顺序、并行、层级、共识)

#### 🎨 多模态处理系统
- 图像处理器 (ImageProcessor)
  - 图像描述、OCR、分类、目标检测
- 音频处理器 (AudioProcessor)
  - 语音转文字 (Whisper API)
  - 文字转语音 (TTS API)
- 文档处理器 (DocumentProcessor)
  - PDF、Word、Excel、PPT 解析
  - 文档摘要和对比
- 多模态管理器 (MultimodalManager)

#### 🔐 统一认证系统
- 多平台自动检测 (Claude Code、Cursor、Windsurf、VSCode)
- OpenAI 和 Ollama 提供商支持
- 统一的认证接口

#### 🔗 MCP 协议支持
- 完整的 MCP 协议实现
- 工具调用和资源管理
- Prompt 模板系统

#### 🎯 技能系统
- 可扩展的技能框架
- 内置多种实用技能
- 自定义技能支持

### Changed
- 优化构建配置，支持代码分割和 Tree-shaking
- 改进类型定义，提供完整的 TypeScript 支持

### Technical Details
- ESM 模块格式
- TypeScript 5.0+ 支持
- Node.js 18.0+ 要求
- 使用 tsup 进行打包优化

---

## 未来计划

### [1.1.0] - 计划中
- 视频处理支持
- 更多 AI 模型提供商
- 流式响应优化
- 缓存机制

### [1.2.0] - 计划中
- Web Worker 支持
- 插件系统
- 更多内置技能
- 性能监控面板

---

**保持代码健康，稳步前行！** 🌹
