import React from 'react'
import { useClaw } from './ClawProvider'

interface ClawChatProps {
  className?: string
  placeholder?: string
  showProvider?: boolean
  showSkills?: boolean
}

export function ClawChat({
  className = '',
  placeholder,
  showProvider = true,
  showSkills = true,
}: ClawChatProps) {
  const { messages, isLoading, sendMessage, config } = useClaw()

  const [input, setInput] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      sendMessage(input.trim())
      setInput('')
    }
  }

  return (
    <div className={`claw-chat ${className}`}>
      <div className="claw-messages">
        {messages.length === 0 && (
          <div className="claw-welcome">
            <h3>🏠 FAmily π³</h3>
            <p>{placeholder || config.ui?.placeholder || '输入消息开始对话...'}</p>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`claw-message claw-message-${msg.role}`}>
            <div className="message-content">{msg.content}</div>
            <div className="message-time">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="claw-message claw-message-assistant">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="claw-input-form">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder || '输入消息...'}
          rows={1}
          disabled={isLoading}
        />
        <button type="submit" disabled={!input.trim() || isLoading}>
          发送
        </button>
      </form>

      {showProvider && (
        <div className="claw-provider-info">
          <span>FAmily π³ · 信任如π，始终如一</span>
        </div>
      )}
    </div>
  )
}
