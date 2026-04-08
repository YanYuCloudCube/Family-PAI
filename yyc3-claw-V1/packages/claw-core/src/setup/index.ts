/**
 * @file Setup模块入口
 * @description 导出环境检测和快速启动功能
 * @module @claw-ai/core/setup
 * @author YYC
 */

export { AutoDetector } from './auto-detector.js'
export { SmartSelector } from './smart-selector.js'
export { QuickStarter } from './quick-starter.js'

export type {
  ProviderType,
  ProviderStatus,
  EnvironmentDetectionResult,
} from './auto-detector.js'

export type {
  SelectionFactors,
  ProviderScore,
  SelectionResult,
  ProviderPerformance,
} from './smart-selector.js'

export type {
  QuickStartConfig,
  QuickStartResult,
  SystemStatus,
} from './quick-starter.js'
