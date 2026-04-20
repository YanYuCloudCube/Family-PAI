/**
 * AIFamilyPanel.tsx — AI Family 入口
 * ====================================
 * 现在 AI Family 已升级为子路由架构。
 * 此组件保留为向后兼容，实际渲染由 FamilyLayout + 子路由处理。
 *
 * 路由结构：
 *  /ai-family           → FamilyHome（客厅）
 *  /ai-family/comm      → FamilyComm（通讯中心）
 *  /ai-family/culture   → FamilyCulture（文娱中心）
 *  /ai-family/growth    → FamilyGrowth（成长花园）
 *  /ai-family/activities→ FamilyActivities（活动中心）
 *  /ai-family/members   → FamilyMembersView（家人档案）
 *  /ai-family/settings  → FamilySettings（设置中心：模型 + 语音 + 偏好）
 *
 * 此文件保留 export 以兼容旧引用，实际由 FamilyLayout 接管。
 */

import React from "react";
import { FamilyLayout } from "./ai-family/FamilyLayout";

export function AIFamilyPanel() {
  return <FamilyLayout />;
}
