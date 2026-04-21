/**
 * @file FAmily π³ 核心包入口
 * @description 导出所有核心功能模块
 * @module @family-pai/core
 * @author FAmily PAI Team
 * @version 2.0.0
 */

// 认证模块
export {
  UnifiedAuthManager,
  OpenAIProvider,
  OllamaProvider,
  AuthMonitor,
  AuthSwitcher,
} from './auth/index.js'

export type {
  AuthProvider,
  AuthProviderInfo,
  AuthStatus,
  AuthState,
  HealthCheckResult,
  SwitchStrategy,
  SwitchDecision,
} from './auth/index.js'

// AI Family 模块
export {
  AIFamilyManager,
  BaseAgent,
  AgentLayers,
  AgentCollaboration,
  AgentRouter,
  AgentQualityGates,
  getAllAgentDefinitions,
} from './ai-family/index.js'

export type {
  AgentRole,
  AgentTask,
  TaskContext,
  TaskResult,
  AgentLayer,
  CollaborationStrategy,
  RoutingStrategy,
} from './ai-family/index.js'

// 技能模块
export {
  SkillManager,
  SkillRecommender,
  SkillLearner,
  SkillComposer,
  SkillQualityGates,
} from './skills/index.js'

export type {
  SkillDefinition,
  SkillExecutionResult,
  SkillRecommendation,
  CompositionMode,
  QualityGateReport,
} from './skills/index.js'

// MCP 模块
export {
  MCPClient,
  StdioTransport,
} from './mcp/index.js'

export type {
  MCPMessage,
  MCPTool,
  MCPResource,
} from './mcp/index.js'

// 多模态模块
export {
  MultimodalManager,
  ImageProcessor,
  AudioProcessor,
  DocumentProcessor,
} from './multimodal/index.js'

export type {
  MultimodalInput,
  MultimodalResult,
} from './multimodal/index.js'

// Setup 模块
export {
  AutoDetector,
  SmartSelector,
  QuickStarter,
} from './setup/index.js'

export type {
  ProviderType,
  ProviderStatus,
  QuickStartConfig,
  QuickStartResult,
  SystemStatus,
} from './setup/index.js'

// 核心类型
export type {
  AIProviderType,
  ChatMessage,
  ChatCompletionResponse,
} from './types.js'

/**
 * 快速启动函数
 */
export async function quickStart(config?: {
  provider?: import('./setup/index.js').ProviderType
  silent?: boolean
}): Promise<import('./setup/index.js').QuickStartResult> {
  const { QuickStarter } = await import('./setup/index.js')
  const starter = new QuickStarter()
  return starter.start(config)
}

/**
 * 版本信息
 */
export const VERSION = '2.0.0'

/**
 * 包信息
 */
export const PACKAGE_INFO = {
  name: '@family-pai/core',
  version: VERSION,
  description: 'FAmily π³ Core - AI Family 极致信任核心引擎',
  author: 'FAmily PAI Team',
  license: 'MIT',
}
