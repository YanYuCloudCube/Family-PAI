export interface WebUIConfig {
  auth: {
    openai?: {
      apiKey?: string
      baseURL?: string
      model?: string
    }
    ollama?: {
      baseUrl?: string
      model?: string
    }
    anthropic?: {
      apiKey?: string
      model?: string
    }
  }
  ui?: {
    theme?: 'light' | 'dark' | 'system'
    showSkills?: boolean
    showAgents?: boolean
    language?: 'zh' | 'en'
    placeholder?: string
  }
  features?: {
    streaming?: boolean
    markdown?: boolean
    codeHighlight?: boolean
    fileUpload?: boolean
  }
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  metadata?: Record<string, unknown>
}

export interface AgentInfo {
  id: string
  name: string
  role: string
  description: string
  icon?: string
}

export interface SkillInfo {
  id: string
  name: string
  category: string
  description: string
  version: string
}

export interface ClawUIContextType {
  config: WebUIConfig
  messages: ChatMessage[]
  isLoading: boolean
  error: Error | null
  sendMessage: (content: string) => Promise<void>
  clearMessages: () => void
}
