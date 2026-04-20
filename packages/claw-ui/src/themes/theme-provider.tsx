/**
 * @file Theme Provider
 * @description 主题提供者
 * @module @claw-ai/ui/themes
 */

import React, { createContext, useContext, useState, useEffect } from 'react'
import { lightTheme } from './light-theme'
import { darkTheme } from './dark-theme'

export type ThemeMode = 'light' | 'dark' | 'auto'

export interface Theme {
  name: string
  colors: {
    primary: string
    secondary: string
    background: string
    surface: string
    text: string
    textSecondary: string
    border: string
    error: string
    success: string
    warning: string
  }
}

interface ThemeContextValue {
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultMode?: ThemeMode
}

export function ThemeProvider({ children, defaultMode = 'auto' }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode)
  const [theme, setTheme] = useState<Theme>(lightTheme)

  useEffect(() => {
    const updateTheme = () => {
      if (mode === 'auto') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(isDark ? darkTheme : lightTheme)
      } else {
        setTheme(mode === 'dark' ? darkTheme : lightTheme)
      }
    }

    updateTheme()

    if (mode === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', updateTheme)
      return () => mediaQuery.removeEventListener('change', updateTheme)
    }
  }, [mode])

  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--claw-color-${key}`, value)
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export default ThemeProvider
