/**
 * @file Family Home - 家庭客厅
 * @description AI Family的主页面，展示所有智能体的概览
 * @module @claw-ai/ui/family
 */

import React from 'react'
import { AgentCard } from './AgentCard'
import { 
  MetaOracleDefinition,
  SentinelDefinition,
  MasterDefinition,
  CreativeDefinition,
  NavigatorDefinition,
  ThinkerDefinition,
  ProphetDefinition,
  RecommenderDefinition
} from '@family-ai/core/ai-family'

export function FamilyHome() {
  const agents = [
    MetaOracleDefinition,
    SentinelDefinition,
    MasterDefinition,
    CreativeDefinition,
    NavigatorDefinition,
    ThinkerDefinition,
    ProphetDefinition,
    RecommenderDefinition
  ]

  return (
    <div className="family-home">
      <div className="family-welcome">
        <h2>欢迎来到 AI Family</h2>
        <p>亦师亦友亦伯乐；一言一语一华章</p>
      </div>
      
      <div className="agents-grid">
        {agents.map((agent) => (
          <AgentCard 
            key={agent.id}
            agent={agent}
          />
        ))}
      </div>
    </div>
  )
}

export default FamilyHome
