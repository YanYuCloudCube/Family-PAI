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
  }
}

export const defaultTheme: Theme = {
  name: 'default',
  colors: {
    primary: '#4F46E5',
    secondary: '#7C3AED',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    textSecondary: '#94A3B8',
    border: '#334155',
    error: '#EF4444',
    success: '#10B981',
  },
}

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#4F46E5',
    secondary: '#7C3AED',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#0F172A',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    error: '#EF4444',
    success: '#10B981',
  },
}

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#6366F1',
    secondary: '#8B5CF6',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    textSecondary: '#94A3B8',
    border: '#334155',
    error: '#EF4444',
    success: '#10B981',
  },
}
