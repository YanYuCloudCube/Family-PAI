/**
 * @file FAmily π³ 核心类型定义
 * @description 定义 FAmily π³ 系统的核心类型接口
 * @module @family-pai/core
 * @author FAmily PAI Team
 */

import { z } from 'zod'

/**
 * AI 提供商类型
 */
export type AIProviderType = 'openai' | 'ollama' | 'anthropic' | 'azure' | 'custom'

/**
 * 认证配置 Schema
 */
export const AuthConfigSchema = z.object({
  provider: z.enum(['openai', 'ollama', 'anthropic', 'custom']),
  apiKey: z.string().optional(),
  baseUrl: z.string().url().optional(),
  model: z.string().optional(),
})

export type AuthConfig = z.infer<typeof AuthConfigSchema>

/**
 * 消息角色
 */
export type MessageRole = 'system' | 'user' | 'assistant' | 'tool'

/**
 * 聊天消息
 */
export interface ChatMessage {
  role: MessageRole
  content: string
  name?: string
  toolCallId?: string
}

/**
 * 聊天完成响应
 */
export interface ChatCompletionResponse {
  id: string
  object: string
  created: number
  model: string
  choices: Array<{
    index: number
    message: ChatMessage
    finishReason: string
  }>
  usage?: {
    promptTokens: number
    completionTokens: number
    totalTokens: number
  }
}

/**
 * MCP 传输配置
 */
export interface MCPTransportConfig {
  type: 'stdio' | 'http' | 'websocket'
  endpoint?: string
  command?: string
  args?: string[]
  env?: Record<string, string>
}

/**
 * MCP 服务器配置
 */
export const MCPServerConfigSchema = z.object({
  name: z.string(),
  transport: z.custom<MCPTransportConfig>(),
  capabilities: z.object({
    tools: z.boolean().optional(),
    resources: z.boolean().optional(),
    prompts: z.boolean().optional(),
  }).optional(),
})

export type MCPServerConfig = z.infer<typeof MCPServerConfigSchema>

/**
 * 技能定义
 */
export const SkillDefinitionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  version: z.string(),
  category: z.enum(['reasoning', 'generation', 'analysis', 'automation', 'integration']),
  inputSchema: z.record(z.any()).optional(),
  outputSchema: z.record(z.any()).optional(),
  handler: z.function().optional(),
  metadata: z.record(z.any()).optional(),
})

export type SkillDefinition = z.infer<typeof SkillDefinitionSchema>

/**
 * 技能执行上下文
 */
export interface ExecutionContext {
  sessionId: string
  userId?: string
  provider: AIProviderType
  model?: string
  messages: ChatMessage[]
  variables: Record<string, unknown>
  metadata: Record<string, unknown>
}

/**
 * 技能执行结果
 */
export interface SkillExecutionResult {
  success: boolean
  output?: unknown
  error?: string
  duration: number
  tokens?: {
    input: number
    output: number
  }
}

/**
 * AI Family 智能体类型
 */
export type AIFamilyAgent = 
  | 'meta-oracle'
  | 'navigator'
  | 'thinker'
  | 'prophet'
  | 'recommender'
  | 'guardian'
  | 'master'
  | 'creator'

/**
 * AI Family 智能体配置
 */
export interface AIFamilyAgentConfig {
  id: AIFamilyAgent
  name: string
  role: string
  description: string
  systemPrompt: string
  capabilities: string[]
  priority: number
}

/**
 * FAmily π³ 配置
 */
export interface FamilyPAIConfig {
  auth: AuthConfig
  mcp?: MCPServerConfig[]
  skills?: SkillDefinition[]
  agents?: AIFamilyAgentConfig[]
}
