/**
 * @file Family Layout - 家庭布局系统
 * @description AI Family的布局系统，包含导航和内容区域
 * @module @claw-ai/ui/family
 */

import React, { useState } from 'react'
import { FamilyHome } from './FamilyHome'
import { FamilyMembers } from './FamilyMembers'
import { AgentStatus } from './AgentStatus'

export interface FamilyLayoutProps {
  showHeader?: boolean
  defaultView?: 'home' | 'members' | 'settings'
}

export function FamilyLayout({ 
  showHeader = true, 
  defaultView = 'home' 
}: FamilyLayoutProps) {
  const [currentView, setCurrentView] = useState(defaultView)

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <FamilyHome />
      case 'members':
        return <FamilyMembers />
      case 'settings':
        return <div>设置中心（开发中）</div>
      default:
        return <FamilyHome />
    }
  }

  return (
    <div className="family-layout">
      {showHeader && (
        <header className="family-header">
          <h1>AI Family</h1>
          <nav className="family-nav">
            <button onClick={() => setCurrentView('home')}>客厅</button>
            <button onClick={() => setCurrentView('members')}>家人档案</button>
            <button onClick={() => setCurrentView('settings')}>设置</button>
          </nav>
        </header>
      )}
      
      <main className="family-content">
        <AgentStatus />
        {renderContent()}
      </main>
    </div>
  )
}

export default FamilyLayout
