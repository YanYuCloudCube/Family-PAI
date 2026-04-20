import { EventEmitter } from 'eventemitter3';
import { U as UnifiedAuthManager } from '../unified-auth-CN6Pd7De.js';
import { C as ChatMessage } from '../types-tS0VMa53.js';

/**
 * @file AI Family 类型定义
 * @description 定义 AI Family 智能体系统的核心类型
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * 智能体角色类型
 */
type AgentRole = 'meta-oracle' | 'sentinel' | 'master' | 'creative' | 'navigator' | 'thinker' | 'prophet' | 'bolero' | 'commander' | 'coder' | 'multimodal' | 'predictor' | 'matcher' | 'security' | 'quality';
/**
 * 智能体状态
 */
type AgentStatus = 'idle' | 'busy' | 'error' | 'offline';
/**
 * 推理类型
 */
type ReasoningType = 'planning' | 'logical' | 'probabilistic' | 'creative' | 'analytical' | 'predictive' | 'evaluative';
/**
 * 智能体能力定义
 */
interface AgentCapability {
    name: string;
    description: string;
    inputSchema?: Record<string, unknown>;
    outputSchema?: Record<string, unknown>;
}
/**
 * 智能体定义
 */
interface AgentDefinition {
    id: AgentRole;
    name: string;
    displayName: string;
    emoji: string;
    role: string;
    description: string;
    reasoningTypes: ReasoningType[];
    capabilities: AgentCapability[];
    systemPrompt: string;
    priority: number;
    maxConcurrentTasks: number;
}
/**
 * 智能体状态信息
 */
interface AgentState {
    status: AgentStatus;
    currentTask?: string;
    lastActiveTime?: Date;
    totalTasksCompleted: number;
    averageResponseTime: number;
    errorCount: number;
}
/**
 * 任务优先级
 */
type TaskPriority = 'critical' | 'high' | 'medium' | 'low';
/**
 * 任务状态
 */
type TaskStatus = 'pending' | 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
/**
 * 智能体任务
 */
interface AgentTask {
    id: string;
    type: string;
    priority: TaskPriority;
    input: unknown;
    context: TaskContext;
    assignedAgent?: AgentRole;
    status: TaskStatus;
    createdAt: Date;
    startedAt?: Date;
    completedAt?: Date;
    result?: unknown;
    error?: string;
}
/**
 * 任务上下文
 */
interface TaskContext {
    sessionId: string;
    userId?: string;
    conversationHistory: ChatMessage[];
    metadata: Record<string, unknown>;
    parentTaskId?: string;
}
/**
 * 任务结果
 */
interface TaskResult {
    success: boolean;
    output?: unknown;
    data?: unknown;
    error?: string;
    duration: number;
    tokens?: {
        input: number;
        output: number;
    };
    recommendations?: AgentRecommendation[];
    metadata?: Record<string, unknown>;
    agentId?: AgentRole;
}
/**
 * 智能体推荐
 */
interface AgentRecommendation {
    agentId: AgentRole;
    confidence: number;
    reason: string;
}
/**
 * 协同模式
 */
type CollaborationMode = 'sequential' | 'parallel' | 'hierarchical' | 'consensus';
/**
 * 协同任务
 */
interface CollaborationTask {
    id: string;
    mode: CollaborationMode;
    agents: AgentRole[];
    participants?: AgentRole[];
    leader?: AgentRole;
    tasks: AgentTask[];
    subtasks?: AgentTask[];
    aggregationStrategy?: 'first' | 'best' | 'merge' | 'vote';
    timeout?: number;
}

/**
 * @file 基础智能体类
 * @description 所有智能体的基类实现
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * 智能体事件类型
 */
interface AgentEvents {
    status_changed: {
        status: AgentStatus;
    };
    task_started: {
        taskId: string;
    };
    task_completed: {
        taskId: string;
        result: TaskResult;
    };
    task_failed: {
        taskId: string;
        error: string;
    };
    error: {
        error: Error;
    };
}
/**
 * 智能体配置
 */
interface BaseAgentConfig {
    definition: AgentDefinition;
    authManager: UnifiedAuthManager;
}
/**
 * 基础智能体类
 */
declare abstract class BaseAgent extends EventEmitter<AgentEvents> {
    protected definition: AgentDefinition;
    protected authManager: UnifiedAuthManager;
    protected state: AgentState;
    protected currentTasks: Map<string, AgentTask>;
    constructor(config: BaseAgentConfig);
    /**
     * 获取智能体定义
     */
    getDefinition(): AgentDefinition;
    /**
     * 获取智能体状态
     */
    getState(): AgentState;
    /**
     * 获取智能体ID
     */
    getId(): string;
    /**
     * 获取智能体名称
     */
    getName(): string;
    /**
     * 是否可以接受新任务
     */
    canAcceptTask(): boolean;
    /**
     * 执行任务
     */
    execute(task: AgentTask): Promise<TaskResult>;
    /**
     * 执行具体任务（子类实现）
     */
    protected abstract executeTask(task: AgentTask): Promise<TaskResult>;
    /**
     * 估算能力匹配度
     */
    estimateCapability(task: AgentTask, _context: TaskContext): Promise<{
        score: number;
    }>;
    /**
     * 构建系统提示
     */
    protected buildSystemPrompt(): string;
    /**
     * 构建消息
     */
    protected buildMessages(task: AgentTask): Array<{
        role: 'system' | 'user' | 'assistant';
        content: string;
    }>;
    /**
     * 格式化任务输入
     */
    protected formatTaskInput(task: AgentTask): string;
    /**
     * 更新平均响应时间
     */
    private updateAverageResponseTime;
    /**
     * 设置状态
     */
    setStatus(status: AgentStatus): void;
    /**
     * 获取统计信息
     */
    getStats(): {
        totalTasks: number;
        averageResponseTime: number;
        errorRate: number;
    };
}

/**
 * @file 具体智能体实现
 * @description 实现 8 个专业智能体
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * 元启·天枢 - 总指挥智能体
 */
declare class MetaOracleAgent extends BaseAgent {
    constructor(config: Omit<BaseAgentConfig, 'definition'>);
    protected executeTask(task: AgentTask): Promise<TaskResult>;
    private parseOrchestration;
}
/**
 * 智云·守护 - 安全官智能体
 */
declare class SentinelAgent extends BaseAgent {
    constructor(config: Omit<BaseAgentConfig, 'definition'>);
    protected executeTask(task: AgentTask): Promise<TaskResult>;
    private extractThreats;
    private extractRecommendations;
}
/**
 * 格物·宗师 - 质量官智能体
 */
declare class MasterAgent extends BaseAgent {
    constructor(config: Omit<BaseAgentConfig, 'definition'>);
    protected executeTask(task: AgentTask): Promise<TaskResult>;
    private extractQualityScore;
    private extractIssues;
    private extractSuggestions;
}
/**
 * 创想·灵韵 - 创意官智能体
 */
declare class CreativeAgent extends BaseAgent {
    constructor(config: Omit<BaseAgentConfig, 'definition'>);
    protected executeTask(task: AgentTask): Promise<TaskResult>;
    private extractIdeas;
    private extractAlternatives;
}
/**
 * 言启·千行 - 导航员智能体
 */
declare class NavigatorAgent extends BaseAgent {
    constructor(config: Omit<BaseAgentConfig, 'definition'>);
    protected executeTask(task: AgentTask): Promise<TaskResult>;
    private detectIntent;
    private suggestRouting;
}
/**
 * 语枢·万物 - 思考者智能体
 */
declare class ThinkerAgent extends BaseAgent {
    constructor(config: Omit<BaseAgentConfig, 'definition'>);
    protected executeTask(task: AgentTask): Promise<TaskResult>;
    private extractInsights;
    private extractConclusions;
}
/**
 * 预见·先知 - 预言家智能体
 */
declare class ProphetAgent extends BaseAgent {
    constructor(config: Omit<BaseAgentConfig, 'definition'>);
    protected executeTask(task: AgentTask): Promise<TaskResult>;
    private extractTrends;
    private extractRisks;
    private extractOpportunities;
}
/**
 * 知遇·伯乐 - 推荐官智能体
 */
declare class BoleroAgent extends BaseAgent {
    constructor(config: Omit<BaseAgentConfig, 'definition'>);
    protected executeTask(task: AgentTask): Promise<TaskResult>;
    private extractMatches;
    private extractReasons;
}

/**
 * @file AI Family 管理器
 * @description 管理和协调所有智能体
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * AI Family 管理器事件
 */
interface AIFamilyEvents {
    agent_registered: {
        agentId: AgentRole;
    };
    agent_status_changed: {
        agentId: AgentRole;
        status: string;
    };
    task_queued: {
        taskId: string;
    };
    task_started: {
        taskId: string;
        agentId: AgentRole;
    };
    task_completed: {
        taskId: string;
        agentId: AgentRole;
        result: TaskResult;
    };
    task_failed: {
        taskId: string;
        agentId: AgentRole;
        error: string;
    };
    collaboration_started: {
        collaborationId: string;
    };
    collaboration_completed: {
        collaborationId: string;
        results: TaskResult[];
    };
}
/**
 * AI Family 管理器配置
 */
interface AIFamilyConfig {
    authManager: UnifiedAuthManager;
    maxQueueSize?: number;
    taskTimeout?: number;
    enableCollaboration?: boolean;
}
/**
 * AI Family 管理器
 */
declare class AIFamilyManager extends EventEmitter<AIFamilyEvents> {
    private agents;
    private taskQueue;
    private runningTasks;
    private config;
    constructor(config: AIFamilyConfig);
    /**
     * 初始化所有智能体
     */
    private initializeAgents;
    /**
     * 获取智能体
     */
    getAgent(role: AgentRole): BaseAgent | undefined;
    /**
     * 获取所有智能体
     */
    getAllAgents(): Map<AgentRole, BaseAgent>;
    /**
     * 获取智能体状态
     */
    getAgentStatus(role: AgentRole): string;
    /**
     * 创建任务
     */
    createTask(type: string, input: unknown, context: Partial<TaskContext>, priority?: TaskPriority): AgentTask;
    /**
     * 提交任务
     */
    submitTask(task: AgentTask): Promise<TaskResult>;
    /**
     * 处理任务
     */
    private processTask;
    /**
     * 推荐智能体
     */
    recommendAgents(task: AgentTask): AgentRecommendation[];
    /**
     * 协同执行任务
     */
    collaborate(collaboration: CollaborationTask): Promise<TaskResult[]>;
    /**
     * 获取队列状态
     */
    getQueueStatus(): {
        queueLength: number;
        runningTasks: number;
        maxQueueSize: number;
    };
    /**
     * 获取所有智能体统计
     */
    getAgentsStats(): Map<AgentRole, ReturnType<BaseAgent['getStats']>>;
    /**
     * 清理资源
     */
    dispose(): void;
}

/**
 * @file Agent三层架构
 * @description 实现指挥层、执行层、支持层的多层协同架构
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * Agent层级
 */
type AgentLayer = 'commander' | 'executor' | 'supporter';
/**
 * 层级配置
 */
interface LayerConfig {
    name: string;
    description: string;
    agents: AgentRole[];
    responsibilities: string[];
    maxConcurrency: number;
}
/**
 * 三层架构配置
 */
interface ThreeLayerArchitectureConfig {
    authManager: UnifiedAuthManager;
    enableAutoRouting?: boolean;
    enableQualityGates?: boolean;
    maxTaskQueueSize?: number;
}
/**
 * 层级架构事件
 */
interface ArchitectureEvents {
    layer_activated: {
        layer: AgentLayer;
        agents: AgentRole[];
    };
    layer_deactivated: {
        layer: AgentLayer;
    };
    task_routed: {
        taskId: string;
        from: AgentRole;
        to: AgentRole;
    };
    quality_gate_passed: {
        taskId: string;
        layer: AgentLayer;
    };
    quality_gate_failed: {
        taskId: string;
        layer: AgentLayer;
        reason: string;
    };
}
/**
 * Agent三层架构
 * 实现指挥层、执行层、支持层的多层协同架构
 */
declare class AgentLayers extends EventEmitter<ArchitectureEvents> {
    private layers;
    private agents;
    private activeLayer;
    private config;
    constructor(config: ThreeLayerArchitectureConfig);
    /**
     * 初始化三层架构
     */
    private initializeLayers;
    /**
     * 注册Agent
     */
    registerAgent(role: AgentRole, agent: BaseAgent): void;
    /**
     * 获取Agent所在层级
     */
    private getLayerByRole;
    /**
     * 获取层级配置
     */
    getLayerConfig(layer: AgentLayer): LayerConfig | undefined;
    /**
     * 获取层级中的所有Agent
     */
    getLayerAgents(layer: AgentLayer): BaseAgent[];
    /**
     * 激活层级
     */
    activateLayer(layer: AgentLayer): void;
    /**
     * 获取当前活跃层级
     */
    getActiveLayer(): AgentLayer;
    /**
     * 按层级执行任务
     */
    executeByLayer(layer: AgentLayer, task: AgentTask, _context: TaskContext): Promise<TaskResult[]>;
    /**
     * 三层协同执行
     */
    collaborativeExecute(task: AgentTask, context: TaskContext): Promise<TaskResult>;
    /**
     * 聚合结果
     */
    private aggregateResults;
    /**
     * 质量门检查
     */
    private checkQualityGate;
    /**
     * 获取架构统计
     */
    getStats(): {
        layers: number;
        totalAgents: number;
        activeAgents: number;
        layerStats: Map<AgentLayer, {
            agents: number;
            active: boolean;
        }>;
    };
}

/**
 * @file Agent协同系统
 * @description 实现智能体间的协同通信和协作
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * 协同消息类型
 */
type CollaborationMessageType = 'request' | 'response' | 'notification' | 'broadcast' | 'delegation';
/**
 * 协同消息
 */
interface CollaborationMessage {
    id: string;
    type: CollaborationMessageType;
    from: AgentRole;
    to: AgentRole | AgentRole[];
    content: unknown;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    timestamp: Date;
    requiresResponse: boolean;
    timeout?: number;
}
/**
 * 协同会话
 */
interface CollaborationSession {
    id: string;
    participants: AgentRole[];
    leader: AgentRole;
    task: CollaborationTask;
    messages: CollaborationMessage[];
    status: 'active' | 'paused' | 'completed' | 'failed';
    startTime: Date;
    endTime?: Date;
}
/**
 * 协同策略
 */
type CollaborationStrategy = 'sequential' | 'parallel' | 'hierarchical' | 'consensus' | 'auction';
/**
 * 协同配置
 */
interface CollaborationConfig {
    maxConcurrentSessions: number;
    messageTimeout: number;
    retryAttempts: number;
    enableLogging: boolean;
}
/**
 * 协同事件
 */
interface CollaborationEvents {
    session_started: {
        sessionId: string;
        participants: AgentRole[];
    };
    session_completed: {
        sessionId: string;
        result: TaskResult;
    };
    message_sent: {
        message: CollaborationMessage;
    };
    message_received: {
        message: CollaborationMessage;
    };
    agent_joined: {
        sessionId: string;
        agent: AgentRole;
    };
    agent_left: {
        sessionId: string;
        agent: AgentRole;
    };
}
/**
 * Agent协同系统
 * 实现智能体间的协同通信和协作
 */
declare class AgentCollaboration extends EventEmitter<CollaborationEvents> {
    private agents;
    private sessions;
    private messageQueue;
    private config;
    constructor(config?: Partial<CollaborationConfig>);
    /**
     * 注册Agent
     */
    registerAgent(role: AgentRole, agent: BaseAgent): void;
    /**
     * 创建协同会话
     */
    createSession(participants: AgentRole[], leader: AgentRole, task: CollaborationTask): CollaborationSession;
    /**
     * 发送消息
     */
    sendMessage(message: CollaborationMessage): Promise<void>;
    /**
     * 接收消息
     */
    receiveMessage(agentRole: AgentRole): CollaborationMessage | undefined;
    /**
     * 等待响应
     */
    private waitForResponse;
    /**
     * 协同执行任务
     */
    collaborate(task: CollaborationTask, strategy: CollaborationStrategy, context: TaskContext): Promise<TaskResult[]>;
    /**
     * 顺序执行
     */
    private executeSequential;
    /**
     * 并行执行
     */
    private executeParallel;
    /**
     * 层级执行
     */
    private executeHierarchical;
    /**
     * 共识执行
     */
    private executeConsensus;
    /**
     * 拍卖执行
     */
    private executeAuction;
    /**
     * 聚合结果
     */
    private aggregateResults;
    /**
     * 查找Agent所在会话
     */
    private findSessionByAgent;
    /**
     * 获取活跃会话
     */
    getActiveSessions(): CollaborationSession[];
    /**
     * 获取会话
     */
    getSession(sessionId: string): CollaborationSession | undefined;
    /**
     * 获取统计信息
     */
    getStats(): {
        totalSessions: number;
        activeSessions: number;
        totalMessages: number;
        agentParticipation: Map<AgentRole, number>;
    };
}

/**
 * @file Agent智能路由器
 * @description 实现任务到Agent的智能路由和分配
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * 路由策略
 */
type RoutingStrategy = 'capability-based' | 'load-balanced' | 'performance-based' | 'cost-optimized' | 'hybrid';
/**
 * 路由决策
 */
interface RoutingDecision {
    taskId: string;
    selectedAgent: AgentRole;
    score: number;
    reasons: string[];
    alternatives: {
        agent: AgentRole;
        score: number;
    }[];
    timestamp: Date;
}
/**
 * Agent负载信息
 */
interface AgentLoad {
    role: AgentRole;
    currentTasks: number;
    avgExecutionTime: number;
    successRate: number;
    lastActive: Date;
}
/**
 * 路由规则
 */
interface RoutingRule {
    id: string;
    name: string;
    condition: (task: AgentTask, context: TaskContext) => boolean;
    targetAgent: AgentRole;
    priority: number;
}
/**
 * 路由配置
 */
interface RouterConfig {
    strategy: RoutingStrategy;
    enableCaching: boolean;
    enableLearning: boolean;
    maxAlternatives: number;
}
/**
 * Agent智能路由器
 * 实现任务到Agent的智能路由和分配
 */
declare class AgentRouter {
    private agents;
    private loads;
    private rules;
    private config;
    private routingHistory;
    constructor(config?: Partial<RouterConfig>);
    /**
     * 初始化默认路由规则
     */
    private initializeDefaultRules;
    /**
     * 注册Agent
     */
    registerAgent(role: AgentRole, agent: BaseAgent): void;
    /**
     * 添加路由规则
     */
    addRule(rule: RoutingRule): void;
    /**
     * 路由任务
     */
    route(task: AgentTask, context: TaskContext): Promise<RoutingDecision>;
    /**
     * 评估所有Agent
     */
    private evaluateAgents;
    /**
     * 评估单个Agent
     */
    private evaluateAgent;
    /**
     * 基于能力评分
     */
    private scoreByCapability;
    /**
     * 基于负载评分
     */
    private scoreByLoad;
    /**
     * 基于性能评分
     */
    private scoreByPerformance;
    /**
     * 基于规则评分
     */
    private scoreByRules;
    /**
     * 计算加权总分
     */
    private calculateWeightedScore;
    /**
     * 选择最佳Agent
     */
    private selectBestAgent;
    /**
     * 基于负载选择
     */
    private selectByLoad;
    /**
     * 基于性能选择
     */
    private selectByPerformance;
    /**
     * 基于成本选择
     */
    private selectByCost;
    /**
     * 更新学习
     */
    private updateLearning;
    /**
     * 更新Agent负载
     */
    updateLoad(role: AgentRole, delta: number): void;
    /**
     * 更新Agent性能
     */
    updatePerformance(role: AgentRole, success: boolean, duration: number): void;
    /**
     * 获取路由统计
     */
    getStats(): {
        totalRouted: number;
        avgScore: number;
        agentDistribution: Map<AgentRole, number>;
        topRoutes: {
            agent: AgentRole;
            count: number;
        }[];
    };
    /**
     * 获取路由历史
     */
    getHistory(limit?: number): RoutingDecision[];
}

/**
 * @file Agent质量门系统
 * @description 实现Agent执行的质量检查和验证
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * 质量门类型
 */
type AgentQualityGateType = 'input' | 'output' | 'performance' | 'security' | 'compliance' | 'agent-specific';
/**
 * 质量门规则
 */
interface AgentQualityRule {
    id: string;
    name: string;
    description: string;
    type: AgentQualityGateType;
    severity: 'error' | 'warning' | 'info';
    agents?: AgentRole[];
    check: (context: AgentQualityContext) => Promise<AgentQualityResult>;
}
/**
 * 质量检查上下文
 */
interface AgentQualityContext {
    agent: AgentRole;
    task: AgentTask;
    input?: unknown;
    output?: unknown;
    result?: TaskResult;
    context: TaskContext;
    metadata: Record<string, unknown>;
}
/**
 * 质量检查结果
 */
interface AgentQualityResult {
    passed: boolean;
    ruleId: string;
    message: string;
    details?: Record<string, unknown>;
    suggestions?: string[];
}
/**
 * 质量门报告
 */
interface AgentQualityReport {
    agentId: AgentRole;
    taskId: string;
    passed: boolean;
    results: AgentQualityResult[];
    score: number;
    summary: {
        errors: number;
        warnings: number;
        info: number;
    };
    recommendations: string[];
    canProceed: boolean;
}
/**
 * 质量门配置
 */
interface AgentQualityGatesConfig {
    enabled: boolean;
    strictMode: boolean;
    autoFix: boolean;
    maxRetries: number;
}
/**
 * Agent质量门系统
 * 实现Agent执行的质量检查和验证
 */
declare class AgentQualityGates {
    private rules;
    private config;
    private reports;
    constructor(config?: Partial<AgentQualityGatesConfig>);
    /**
     * 初始化默认规则
     */
    private initializeDefaultRules;
    /**
     * 获取性能阈值
     */
    private getPerformanceThreshold;
    /**
     * 添加规则
     */
    addRule(rule: AgentQualityRule): void;
    /**
     * 移除规则
     */
    removeRule(ruleId: string): boolean;
    /**
     * 执行质量检查
     */
    check(context: AgentQualityContext): Promise<AgentQualityReport>;
    /**
     * 计算质量分数
     */
    private calculateScore;
    /**
     * 快速检查输入
     */
    checkInput(agent: AgentRole, task: AgentTask, context: TaskContext): Promise<AgentQualityReport>;
    /**
     * 快速检查输出
     */
    checkOutput(agent: AgentRole, task: AgentTask, result: TaskResult, context: TaskContext): Promise<AgentQualityReport>;
    /**
     * 获取统计信息
     */
    getStats(): {
        totalChecks: number;
        passRate: number;
        avgScore: number;
        errorDistribution: Map<AgentRole, number>;
        topIssues: string[];
    };
    /**
     * 获取最近的报告
     */
    getRecentReports(limit?: number): AgentQualityReport[];
    /**
     * 启用/禁用质量门
     */
    setEnabled(enabled: boolean): void;
    /**
     * 设置严格模式
     */
    setStrictMode(strict: boolean): void;
}

/**
 * @file AI Family 智能体定义
 * @description 定义 8 个专业智能体的详细信息
 * @module @claw-ai/core/ai-family
 * @author YYC
 */

/**
 * 获取所有智能体定义
 */
declare function getAllAgentDefinitions(): AgentDefinition[];

export { AIFamilyManager, type AgentCapability, AgentCollaboration, type AgentLayer, AgentLayers, type AgentLoad, type AgentQualityContext, type AgentQualityGateType, AgentQualityGates, type AgentQualityGatesConfig, type AgentQualityReport, type AgentQualityResult, type AgentQualityRule, type AgentRecommendation, type AgentRole, AgentRouter, type AgentStatus, type AgentTask, type ArchitectureEvents, BaseAgent, BoleroAgent, type CollaborationConfig, type CollaborationEvents, type CollaborationMessage, type CollaborationMessageType, type CollaborationSession, type CollaborationStrategy, type CollaborationTask, CreativeAgent, type LayerConfig, MasterAgent, MetaOracleAgent, NavigatorAgent, ProphetAgent, type RouterConfig, type RoutingDecision, type RoutingRule, type RoutingStrategy, SentinelAgent, type TaskContext, type TaskPriority, type TaskResult, ThinkerAgent, type ThreeLayerArchitectureConfig, getAllAgentDefinitions };
