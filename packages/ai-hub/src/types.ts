/**
 * @file YYC³ AI Hub 类型定义
 * @description 核心类型定义文件
 * @module @yyc3/ai-hub/types
 * @author YYC³ AI Team
 * @version 1.0.0
 */

export interface HubConfig {
  authType?: 'openai' | 'ollama' | 'anthropic' | 'auto';
  apiKey?: string;
  ollamaHost?: string;
  anthropicApiKey?: string;
  modelMapping?: {
    opus?: string;
    sonnet?: string;
    haiku?: string;
  };
}

export interface TaskContext {
  task: string;
  agent?: string;
  skills?: string[];
  context?: Record<string, any>;
  priority?: 'high' | 'medium' | 'low';
}

export interface TaskResult {
  success: boolean;
  output: string;
  artifacts?: string[];
  metrics?: {
    tokensUsed: number;
    duration: number;
    agentCalls: number;
  };
  errors?: string[];
}

export interface AgentDefinition {
  id: string;
  name: string;
  description: string;
  model: 'opus' | 'sonnet' | 'haiku';
  systemPrompt: string;
  tools?: string[];
  skills?: string[];
  category?: string;
  priority?: number;
}

export interface SkillDefinition {
  id: string;
  name: string;
  description: string;
  trigger: string | RegExp;
  prompt: string;
  examples?: string[];
  category?: string;
}

export interface MCPServerConfig {
  command: string;
  args?: string[];
  env?: Record<string, string>;
  metadata?: {
    displayName?: string;
    category?: string;
    description?: string;
    vendor?: string;
    repository?: string;
  };
}

export interface ExecutionContext {
  taskId: string;
  userId?: string;
  sessionId?: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface AgentExecutionResult {
  success: boolean;
  output: string;
  tokensUsed?: number;
  duration?: number;
  errors?: string[];
}
