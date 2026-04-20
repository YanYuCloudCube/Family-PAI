import OpenAI from 'openai';
import { ChildProcess } from 'child_process';
export { FAMILY_PERSONAS, FamilyCompass, createFamilyCompass, getAllPersonas, getNextDutyMember, getPersona, getPersonaByHour } from './family-compass/index.js';
export { C as CallMessage, a as CompassState, D as DutyRosterEntry, F as FamilyMemberId, b as FamilyPersona, G as GrowthMilestone, M as MemoryEntry, P as PhoneCallSession } from './types-C_cQ_nrJ.js';
export { A as ActivityFeedItem, a as Attachment, C as CollaborationMemberState, b as CollaborationMessage, c as CollaborationMode, d as CollaborationSession, e as Comment, F as FamilyMemberWorkProfile, f as FamilyWorkSystem, T as Task, g as TaskCategory, h as TaskPriority, i as TaskStatus, j as TrustEvent, k as TrustLevel, l as TrustRecord, W as WorkDashboardData, m as WorkLogEntry, n as WorkStatus, o as createFamilyWorkSystem } from './index-C2D_jJtD.js';

/**
 * @file YYC³ AI Hub 类型定义
 * @description 核心类型定义文件
 * @module @yyc3/ai-hub/types
 * @author YYC³ AI Team
 * @version 1.0.0
 */
interface HubConfig {
    authType?: 'openai' | 'ollama' | 'anthropic' | 'auto';
    apiKey?: string;
    ollamaHost?: string;
    anthropicApiKey?: string;
    modelMapping?: {
        opus?: string;
        sonnet?: string;
        haiku?: string;
    };
}
interface TaskContext {
    task: string;
    agent?: string;
    skills?: string[];
    context?: Record<string, any>;
    priority?: 'high' | 'medium' | 'low';
}
interface TaskResult {
    success: boolean;
    output: string;
    artifacts?: string[];
    metrics?: {
        tokensUsed: number;
        duration: number;
        agentCalls: number;
    };
    errors?: string[];
}
interface AgentDefinition {
    id: string;
    name: string;
    description: string;
    model: 'opus' | 'sonnet' | 'haiku';
    systemPrompt: string;
    tools?: string[];
    skills?: string[];
    category?: string;
    priority?: number;
}
interface SkillDefinition {
    id: string;
    name: string;
    description: string;
    trigger: string | RegExp;
    prompt: string;
    examples?: string[];
    category?: string;
}
interface MCPServerConfig {
    command: string;
    args?: string[];
    env?: Record<string, string>;
    metadata?: {
        displayName?: string;
        category?: string;
        description?: string;
        vendor?: string;
        repository?: string;
    };
}
interface ExecutionContext {
    taskId: string;
    userId?: string;
    sessionId?: string;
    timestamp: Date;
    metadata?: Record<string, any>;
}
interface AgentExecutionResult {
    success: boolean;
    output: string;
    tokensUsed?: number;
    duration?: number;
    errors?: string[];
}

/**
 * @file YYC³ 统一认证系统
 * @description 支持 OpenAI、Ollama、Anthropic 多提供商认证
 * @module @yyc3/ai-hub/auth
 * @author YYC³ AI Team
 * @version 1.0.0
 */

type AuthType = 'openai' | 'ollama' | 'anthropic' | 'auto';
interface AuthProvider {
    type: 'openai' | 'ollama' | 'anthropic';
    client: OpenAI | null;
    host?: string;
    modelMapping: {
        opus: string;
        sonnet: string;
        haiku: string;
    };
}
declare class YYC3Auth {
    private config;
    private provider;
    constructor(config?: HubConfig);
    initialize(): Promise<AuthProvider>;
    private autoDetect;
    private initOpenAI;
    private initAnthropic;
    private initOllama;
    getProvider(): AuthProvider;
    getModel(tier: 'opus' | 'sonnet' | 'haiku'): string;
}

/**
 * @file YYC³ Agent 管理器
 * @description 管理 112+ 专业 AI Agent
 * @module @yyc3/ai-hub/agents
 * @author YYC³ AI Team
 * @version 1.0.0
 */

interface Agent {
    id: string;
    definition: AgentDefinition;
    execute(task: string, context?: TaskContext): Promise<AgentExecutionResult>;
}
declare class AgentManager {
    private agents;
    private auth;
    constructor(auth: YYC3Auth);
    load(paths: string[]): Promise<void>;
    private loadFromPath;
    register(definition: AgentDefinition): void;
    get(id: string): Agent | undefined;
    list(): string[];
    getByCategory(category: string): Agent[];
    count(): number;
}

/**
 * @file YYC³ 技能管理器
 * @description 管理 146+ 专业技能
 * @module @yyc3/ai-hub/skills
 * @author YYC³ AI Team
 * @version 1.0.0
 */

interface Skill {
    id: string;
    definition: SkillDefinition;
    apply(context: string): Promise<string>;
    matches(input: string): boolean;
}
declare class SkillManager {
    private skills;
    load(paths: string[]): Promise<void>;
    private loadFromPath;
    private parseSkillMarkdown;
    register(definition: SkillDefinition): void;
    get(id: string): Skill | undefined;
    list(): string[];
    findMatching(input: string): Skill[];
    count(): number;
}

/**
 * @file YYC³ MCP 服务器管理器
 * @description 管理 4500+ MCP 服务器配置
 * @module @yyc3/ai-hub/mcp
 * @author YYC³ AI Team
 * @version 1.0.0
 */

interface MCPServer {
    id: string;
    config: MCPServerConfig;
    process?: ChildProcess;
    status: 'stopped' | 'running' | 'error';
    start(): Promise<void>;
    stop(): Promise<void>;
}
declare class MCPManager {
    private servers;
    load(paths: string[]): Promise<void>;
    private loadFromPath;
    register(id: string, config: MCPServerConfig): void;
    get(id: string): MCPServer | undefined;
    list(): string[];
    startServer(id: string): Promise<void>;
    stopServer(id: string): Promise<void>;
    startAll(): Promise<void>;
    stopAll(): Promise<void>;
    count(): number;
    getByCategory(category: string): MCPServer[];
}

/**
 * @file YYC³ AI Hub 核心
 * @description 基于「五高五标五化」理念的AI「五维」多Agent应用核心中枢
 * @module @yyc3/ai-hub
 * @author YYC³ AI Team
 * @version 1.0.0
 */

declare class YYC3AIHub {
    private config;
    private auth;
    private agents;
    private skills;
    private mcp;
    private initialized;
    constructor(config?: HubConfig);
    initialize(): Promise<void>;
    execute(task: string, options?: TaskContext): Promise<TaskResult>;
    private analyzeContext;
    private suggestAgents;
    private createPlan;
    private executePlan;
    getAgents(): string[];
    getSkills(): string[];
    getMCPServers(): string[];
    getAgentManager(): AgentManager;
    getSkillManager(): SkillManager;
    getMCPManager(): MCPManager;
    getAuth(): YYC3Auth;
}

declare enum YYC3ErrorCode {
    AUTH_NO_PROVIDER = "AUTH_1001",
    AUTH_OPENAI_KEY_MISSING = "AUTH_1002",
    AUTH_ANTHROPIC_KEY_MISSING = "AUTH_1003",
    AUTH_NOT_INITIALIZED = "AUTH_1004",
    AUTH_INIT_FAILED = "AGENT_1005",
    AGENT_NOT_FOUND = "AGENT_2001",
    AGENT_INVALID_DEFINITION = "AGENT_2002",
    AGENT_EXECUTION_FAILED = "AGENT_2003",
    AGENT_LOAD_FAILED = "AGENT_2004",
    AGENT_TIMEOUT = "AGENT_2005",
    SKILL_NOT_FOUND = "SKILL_3001",
    SKILL_INVALID_DEFINITION = "SKILL_3002",
    SKILL_APPLY_FAILED = "SKILL_3003",
    SKILL_LOAD_FAILED = "SKILL_3004",
    SKILL_NO_MATCH = "SKILL_3005",
    MCP_SERVER_NOT_FOUND = "MCP_4001",
    MCP_INVALID_CONFIG = "MCP_4002",
    MCP_START_FAILED = "MCP_4003",
    MCP_STOP_FAILED = "MCP_4004",
    MCP_LOAD_FAILED = "MCP_4005",
    HUB_NOT_INITIALIZED = "HUB_5001",
    HUB_EXECUTE_FAILED = "HUB_5002",
    HUB_INVALID_CONFIG = "HUB_5003",
    HUB_TASK_CONTEXT_INVALID = "HUB_5004",
    SCHEMA_VALIDATION_FAILED = "SCHEMA_6001",
    SCHEMA_PARSE_ERROR = "SCHEMA_6002",
    FAMILY_MEMBER_NOT_FOUND = "FAMILY_7001",
    FAMILY_PROFILE_NOT_FOUND = "FAMILY_7002"
}
declare const YYC3_ERROR_DOMAINS: Record<string, string>;
declare const YYC3_ERROR_DOMAINS_EN: Record<string, string>;

interface YYC3ErrorContext {
    [key: string]: unknown;
}

type Locale = 'zh' | 'en';
declare function setLocale(locale: Locale): void;
declare function getLocale(): Locale;
declare class YYC3Error extends Error {
    readonly code: YYC3ErrorCode;
    readonly context: YYC3ErrorContext;
    readonly domain: string;
    readonly cause?: Error;
    constructor(code: YYC3ErrorCode, context?: YYC3ErrorContext, cause?: Error);
    get messageZh(): string;
    get messageEn(): string;
    toJSON(): {
        name: string;
        code: string;
        domain: string;
        message: string;
        messageZh: string;
        messageEn: string;
        context: YYC3ErrorContext;
    };
    static isYYC3Error(error: unknown): error is YYC3Error;
    static fromError(error: unknown, fallbackCode?: YYC3ErrorCode): YYC3Error;
}

declare class ValidationError extends Error {
    readonly code = "SCHEMA_6001";
    readonly issues: Array<{
        path: string;
        message: string;
    }>;
    constructor(issues: Array<{
        path: string;
        message: string;
    }>);
}

export { type Agent, type AgentDefinition, type AgentExecutionResult, AgentManager, type AuthProvider, type AuthType, type ExecutionContext, type HubConfig, MCPManager, type MCPServer, type MCPServerConfig, type Skill, type SkillDefinition, SkillManager, type TaskContext, type TaskResult, ValidationError, YYC3AIHub, YYC3Auth, YYC3Error, YYC3ErrorCode, YYC3_ERROR_DOMAINS, YYC3_ERROR_DOMAINS_EN, getLocale, setLocale };
