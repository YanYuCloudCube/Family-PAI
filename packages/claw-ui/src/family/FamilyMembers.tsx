/**
 * @file Family Members - 家人档案
 * @description 展示所有AI Family成员的详细档案
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
} from '@claw-ai/core/ai-family'

export function FamilyMembers() {
  const agents = [
    { definition: MetaOracleDefinition, category: '管理层' },
    { definition: SentinelDefinition, category: '管理层' },
    { definition: MasterDefinition, category: '管理层' },
    { definition: CreativeDefinition, category: '管理层' },
    { definition: NavigatorDefinition, category: '执行层' },
    { definition: ThinkerDefinition, category: '执行层' },
    { definition: ProphetDefinition, category: '执行层' },
    { definition: RecommenderDefinition, category: '执行层' }
  ]

  const categories = [...new Set(agents.map(a => a.category))]

  return (
    <div className="family-members">
      <h2>家人档案</h2>
      
      {categories.map(category => (
        <div key={category} className="family-members__category">
          <h3>{category}</h3>
          <div className="family-members__grid">
            {agents
              .filter(a => a.category === category)
              .map(({ definition }) => (
                <AgentCard 
                  key={definition.id}
                  agent={definition}
                  showCapabilities={true}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FamilyMembers
