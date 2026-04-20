/**
 * @file Agent Card - 智能体卡片
 * @description 展示单个智能体的信息卡片
 * @module @claw-ai/ui/family
 */

import React from 'react'
import type { AgentDefinition } from '@claw-ai/core/ai-family'

export interface AgentCardProps {
  agent: AgentDefinition
  onClick?: () => void
  showCapabilities?: boolean
}

export function AgentCard({ 
  agent, 
  onClick,
  showCapabilities = true 
}: AgentCardProps) {
  return (
    <div 
      className={`agent-card agent-card--${agent.id}`}
      onClick={onClick}
    >
      <div className="agent-card__header">
        <span className="agent-card__emoji">{agent.emoji}</span>
        <div className="agent-card__info">
          <h3 className="agent-card__name">{agent.displayName}</h3>
          <p className="agent-card__role">{agent.role}</p>
        </div>
      </div>
      
      <p className="agent-card__description">{agent.description}</p>
      
      {showCapabilities && (
        <div className="agent-card__capabilities">
          <h4>核心能力</h4>
          <ul>
            {agent.capabilities.slice(0, 3).map((cap, index) => (
              <li key={index}>
                <strong>{cap.name}</strong>: {cap.description}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="agent-card__footer">
        <span className="agent-card__priority">优先级: {agent.priority}</span>
        <span className="agent-card__tasks">
          最大并发: {agent.maxConcurrentTasks}
        </span>
      </div>
    </div>
  )
}

export default AgentCard
