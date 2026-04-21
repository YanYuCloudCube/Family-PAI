import { useClaw as useClawContext } from '../components/ClawProvider'
import type { ChatMessage, SkillInfo, AgentInfo } from '../types/index'

export function useClaw() {
  return useClawContext()
}

export function useChat() {
  const { messages, isLoading, error, sendMessage, clearMessages } = useClaw()

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    messageCount: messages.length,
    lastMessage: messages[messages.length - 1] || null,
  }
}

export function useAuth() {
  const { config } = useClaw()

  return {
    hasOpenAI: !!config.auth.openai?.apiKey,
    hasOllama: !!config.auth.ollama?.baseUrl,
    hasAnthropic: !!config.auth.anthropic?.apiKey,
    providers: Object.entries(config.auth)
      .filter(([key]) => ['openai', 'ollama', 'anthropic'].includes(key))
      .map(([key, value]) => ({
        name: key,
        configured: key === 'ollama' ? !!value?.baseUrl : !!value?.apiKey,
      })),
  }
}

export function useSkills(): SkillInfo[] {
  // TODO: 从 @yyc3/core 获取技能列表
  return [
    {
      id: 'code-analysis',
      name: '代码分析',
      category: 'analysis',
      description: '分析代码质量和结构',
      version: '1.0.0',
    },
    {
      id: 'document-parse',
      name: '文档解析',
      category: 'processing',
      description: '解析各种文档格式',
      version: '1.0.0',
    },
  ]
}

export function useAgents(): AgentInfo[] {
  // TODO: 从 @yyc3/core 获取智能体列表
  return [
    {
      id: 'master',
      name: '元启·天枢',
      role: '总指挥',
      description: '全局编排、资源调度、自我进化',
    },
    {
      id: 'sentinel',
      name: '智云·守护',
      role: '安全官',
      description: '行为分析、威胁检测、自动修复',
    },
  ]
}
