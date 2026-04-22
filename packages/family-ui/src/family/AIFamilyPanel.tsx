/**
 * @file AI Family Panel - 入口组件
 * @description AI Family的主入口面板，包含8个智能体的可视化界面
 * @module @yyc3/ui/family
 */

import { FamilyLayout } from './FamilyLayout'

export interface AIFamilyPanelProps {
  className?: string
  showHeader?: boolean
  defaultView?: 'home' | 'members' | 'settings'
}

export function AIFamilyPanel({ 
  className = '', 
  showHeader = true,
  defaultView = 'home' 
}: AIFamilyPanelProps) {
  return (
    <div className={`ai-family-panel ${className}`}>
      <FamilyLayout showHeader={showHeader} defaultView={defaultView} />
    </div>
  )
}

export default AIFamilyPanel
