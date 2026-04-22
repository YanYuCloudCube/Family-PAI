/**
 * @file Family UI Context
 * @description 提供全局上下文
 * @module @yyc3/ui/core
 */

import React, { createContext, useContext } from 'react'

export interface FamilyUIConfig {
  auth?: Record<string, unknown>
  theme?: 'light' | 'dark' | 'auto'
  locale?: string
}

const FamilyUIContext = createContext<FamilyUIConfig | null>(null)

export interface FamilyProviderProps {
  config: FamilyUIConfig
  children: React.ReactNode
}

export function FamilyProvider({ config, children }: FamilyProviderProps) {
  return (
    <FamilyUIContext.Provider value={config}>
      {children}
    </FamilyUIContext.Provider>
  )
}

export function useFamilyConfig() {
  const context = useContext(FamilyUIContext)
  if (!context) {
    throw new Error('useFamilyConfig must be used within FamilyProvider')
  }
  return context
}

export default FamilyProvider
