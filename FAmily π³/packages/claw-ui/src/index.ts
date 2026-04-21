export { ClawProvider } from './components/ClawProvider'
export { ClawChat } from './components/ClawChat'
export { ChatMessage } from './components/ChatMessage'
export { MessageInput } from './components/MessageInput'

export type {
  WebUIConfig,
  ChatMessage as ChatMessageType,
  AgentInfo,
  SkillInfo,
  ClawUIContextType,
} from './types/index'

export { useClaw, useChat, useAuth, useSkills } from './hooks'

export { defaultTheme, darkTheme, lightTheme } from './themes'

import '@yyc3/web-ui/styles.css'