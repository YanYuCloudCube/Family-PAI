import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import type { WebUIConfig, ClawUIContextType, ChatMessage } from '../types/index'

const ClawContext = createContext<ClawUIContextType | null>(null)

interface ClawProviderProps {
  config: WebUIConfig
  children: React.ReactNode
}

export function ClawProvider({ config, children }: ClawProviderProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)
    setError(null)

    try {
      // TODO: 集成 @yyc3/core 发送消息
      // 模拟响应
      await new Promise(resolve => setTimeout(resolve, 1000))

      const assistantMessage: ChatMessage = {
        id: `msg-${Date.now()}-response`,
        role: 'assistant',
        content: `收到您的消息: "${content}"\n\nFAmily π³ 正在为您服务...`,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clearMessages = useCallback(() => {
    setMessages([])
  }, [])

  const value: ClawUIContextType = {
    config,
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
  }

  return (
    <ClawContext.Provider value={value}>
      {children}
    </ClawContext.Provider>
  )
}

export function useClaw(): ClawUIContextType {
  const context = useContext(ClawContext)
  if (!context) {
    throw new Error('useClaw must be used within a ClawProvider')
  }
  return context
}

export { ClawContext }
