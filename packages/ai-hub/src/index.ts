/**
 * @file YYC³ AI Hub 入口
 * @description 导出认证、MCP、技能系统、AI Family核心模块
 * @module @yyc3/ai-hub
 * @author YYC³ AI Team
 * @version 1.0.0
 */

export { YYC3AIHub } from './hub.js';
export { YYC3Auth } from './auth.js';
export type { AuthProvider, AuthType } from './auth.js';
export type { Agent, AgentManager } from './agents.js';
export type { Skill, SkillManager } from './skills.ts';
export type { MCPServer, MCPManager } from './mcp.js';

export {
  YYC3Error,
  YYC3ErrorCode,
  setLocale,
  getLocale,
} from './errors/index.js';
export { YYC3_ERROR_DOMAINS, YYC3_ERROR_DOMAINS_EN } from './errors/codes.js';
export { ValidationError } from './schemas/index.js';
export {
  FamilyCompass,
  createFamilyCompass,
  FAMILY_PERSONAS,
  getPersona,
  getAllPersonas,
  getPersonaByHour,
  getNextDutyMember,
} from './family-compass/index.js';

export { createFamilyWorkSystem } from './work/index.js';
export type { FamilyWorkSystem } from './work/index.js';

export type {
  TaskContext,
  TaskResult,
  HubConfig,
  AgentDefinition,
  SkillDefinition,
  MCPServerConfig,
  ExecutionContext,
  AgentExecutionResult,
} from './types.js';

export type * from './work/types.js';
export type * from './family-compass/types.js';
