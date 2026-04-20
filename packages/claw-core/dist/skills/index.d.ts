import { A as AIProviderType, C as ChatMessage } from '../types-tS0VMa53.js';

/**
 * @file 技能系统类型定义
 * @description 定义技能相关的类型接口
 * @module @claw-ai/core/skills
 * @author YYC
 */

/**
 * 技能类别
 */
type SkillCategory = 'reasoning' | 'generation' | 'analysis' | 'automation' | 'integration';
/**
 * 技能定义
 */
interface SkillDefinition {
    id: string;
    name: string;
    description: string;
    version: string;
    category: SkillCategory;
    inputSchema?: Record<string, unknown>;
    outputSchema?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}
/**
 * 技能执行上下文
 */
interface ExecutionContext$1 {
    sessionId: string;
    userId?: string;
    provider: AIProviderType;
    model?: string;
    messages: ChatMessage[];
    variables: Record<string, unknown>;
    metadata: Record<string, unknown>;
}
/**
 * 技能执行结果
 */
interface SkillExecutionResult {
    success: boolean;
    output?: unknown;
    error?: string;
    duration: number;
    tokens?: {
        input: number;
        output: number;
    };
}
/**
 * 技能处理器
 */
type SkillHandler = (input: unknown, context: ExecutionContext$1) => Promise<SkillExecutionResult>;
/**
 * 技能注册项
 */
interface SkillRegistryItem extends SkillDefinition {
    handler: SkillHandler;
    registeredAt: Date;
    lastExecuted?: Date;
    executionCount: number;
    successCount: number;
    totalDuration: number;
}

/**
 * @file 技能管理器
 * @description 管理技能注册、执行和编排
 * @module @claw-ai/core/skills
 * @author YYC
 */

/**
 * 技能管理器配置
 */
interface SkillManagerConfig {
    maxConcurrent?: number;
    timeout?: number;
}
/**
 * 技能管理器
 * 负责技能的注册、执行和编排
 */
declare class SkillManager {
    private registry;
    private config;
    constructor(config?: SkillManagerConfig);
    /**
     * 注册技能
     */
    register(definition: SkillDefinition, handler: SkillHandler): void;
    /**
     * 注销技能
     */
    unregister(skillId: string): boolean;
    /**
     * 获取技能
     */
    get(skillId: string): SkillRegistryItem | undefined;
    /**
     * 获取所有技能
     */
    getAll(): SkillRegistryItem[];
    /**
     * 按类别获取技能
     */
    getByCategory(category: SkillCategory): SkillRegistryItem[];
    /**
     * 执行技能
     */
    execute(skillId: string, input: unknown, context: ExecutionContext$1): Promise<SkillExecutionResult>;
    /**
     * 执行技能链
     */
    executeChain(skills: Array<{
        id: string;
        input?: unknown;
    }>, initialInput: unknown, context: ExecutionContext$1): Promise<SkillExecutionResult>;
    /**
     * 推荐技能
     */
    recommend(task: string): SkillRegistryItem[];
    /**
     * 清空注册表
     */
    clear(): void;
}

/**
 * @file 技能推荐引擎
 * @description 基于多维度推荐最优技能
 * @module @claw-ai/core/skills
 * @author YYC
 */

/**
 * 技能推荐结果
 */
interface SkillRecommendation {
    skillId: string;
    skillName: string;
    score: number;
    confidence: number;
    reasons: string[];
    context: {
        taskType: string;
        historyMatch: number;
        performanceScore: number;
        capabilityMatch: number;
    };
}
/**
 * 推荐上下文
 */
interface RecommendationContext {
    taskType: string;
    input: unknown;
    keywords: string[];
    history?: SkillExecutionHistory[];
    preferences?: UserPreferences;
}
/**
 * 技能执行历史
 */
interface SkillExecutionHistory {
    skillId: string;
    taskType: string;
    success: boolean;
    duration: number;
    timestamp: Date;
    userRating?: number;
}
/**
 * 用户偏好
 */
interface UserPreferences {
    preferredSkills: string[];
    avoidedSkills: string[];
    performanceThreshold: number;
}
/**
 * 技能推荐引擎
 * 基于多维度推荐最优技能
 */
declare class SkillRecommender {
    private history;
    private preferences;
    /**
     * 推荐技能
     */
    recommend(skills: SkillRegistryItem[], context: RecommendationContext): SkillRecommendation[];
    /**
     * 评估单个技能
     */
    private evaluateSkill;
    /**
     * 基于任务类型评分
     */
    private scoreByTaskType;
    /**
     * 基于关键词评分
     */
    private scoreByKeywords;
    /**
     * 基于历史评分
     */
    private scoreByHistory;
    /**
     * 基于性能评分
     */
    private scoreByPerformance;
    /**
     * 基于用户偏好评分
     */
    private scoreByPreference;
    /**
     * 计算加权总分
     */
    private calculateWeightedScore;
    /**
     * 计算置信度
     */
    private calculateConfidence;
    /**
     * 生成推荐理由
     */
    private generateReasons;
    /**
     * 更新执行历史
     */
    updateHistory(history: SkillExecutionHistory): void;
    /**
     * 更新用户偏好
     */
    updatePreferences(preferences: Partial<UserPreferences>): void;
    /**
     * 获取推荐统计
     */
    getStats(): {
        totalRecommendations: number;
        avgScore: number;
        topSkills: string[];
    };
}

/**
 * @file 技能学习系统
 * @description 基于执行反馈学习和优化技能
 * @module @claw-ai/core/skills
 * @author YYC
 */

/**
 * 学习数据
 */
interface LearningData {
    skillId: string;
    executionResult: SkillExecutionResult;
    userFeedback?: UserFeedback;
    context: ExecutionContext;
    timestamp: Date;
}
/**
 * 用户反馈
 */
interface UserFeedback {
    rating: number;
    comment?: string;
    tags?: string[];
    issues?: string[];
}
/**
 * 执行上下文
 */
interface ExecutionContext {
    taskType: string;
    inputSize: number;
    complexity: number;
    resourceUsage: {
        memory: number;
        cpu: number;
        time: number;
    };
}
/**
 * 技能优化建议
 */
interface SkillOptimization {
    skillId: string;
    improvements: string[];
    warnings: string[];
    performance: {
        currentScore: number;
        predictedScore: number;
        confidence: number;
    };
    recommendations: {
        parameter: string;
        currentValue: unknown;
        suggestedValue: unknown;
        reason: string;
    }[];
}
/**
 * 学习模型
 */
interface LearningModel {
    skillId: string;
    patterns: ExecutionPattern[];
    optimizations: Map<string, unknown>;
    performance: PerformanceMetrics;
    lastUpdated: Date;
}
/**
 * 执行模式
 */
interface ExecutionPattern {
    condition: string;
    action: string;
    success: boolean;
    frequency: number;
}
/**
 * 性能指标
 */
interface PerformanceMetrics {
    successRate: number;
    avgDuration: number;
    avgRating: number;
    errorRate: number;
    improvementTrend: number;
}
/**
 * 技能学习系统
 * 基于执行反馈学习和优化技能
 */
declare class SkillLearner {
    private learningData;
    private models;
    private optimizations;
    /**
     * 学习执行结果
     */
    learn(data: LearningData): SkillOptimization;
    /**
     * 更新学习模型
     */
    private updateModel;
    /**
     * 提取执行模式
     */
    private extractPatterns;
    /**
     * 提取条件
     */
    private extractCondition;
    /**
     * 提取动作
     */
    private extractAction;
    /**
     * 计算性能指标
     */
    private calculatePerformance;
    /**
     * 生成优化建议
     */
    private generateOptimization;
    /**
     * 获取优化建议
     */
    getOptimization(skillId: string): SkillOptimization | undefined;
    /**
     * 获取学习模型
     */
    getModel(skillId: string): LearningModel | undefined;
    /**
     * 获取所有学习统计
     */
    getStats(): {
        totalSkills: number;
        totalExecutions: number;
        avgSuccessRate: number;
        topPerformers: string[];
        needsImprovement: string[];
    };
    /**
     * 清理旧数据
     */
    cleanup(maxAge?: number): void;
}

/**
 * @file 技能组合编排器
 * @description 支持多技能的组合执行和编排
 * @module @claw-ai/core/skills
 * @author YYC
 */

/**
 * 编排模式
 */
type CompositionMode = 'sequential' | 'parallel' | 'conditional' | 'pipeline';
/**
 * 编排步骤
 */
interface CompositionStep {
    skillId: string;
    input?: unknown;
    condition?: string;
    onFailure?: 'skip' | 'abort' | 'retry';
    retryCount?: number;
    timeout?: number;
}
/**
 * 编排定义
 */
interface CompositionDefinition {
    id: string;
    name: string;
    description: string;
    mode: CompositionMode;
    steps: CompositionStep[];
    inputMapping?: Record<string, string>;
    outputMapping?: Record<string, string>;
    errorHandling?: {
        strategy: 'fail-fast' | 'continue' | 'rollback';
        maxErrors?: number;
    };
}
/**
 * 编排执行结果
 */
interface CompositionResult {
    success: boolean;
    results: Map<string, SkillExecutionResult>;
    finalOutput: unknown;
    duration: number;
    errors: string[];
    executedSteps: string[];
}
/**
 * 技能组合编排器
 * 支持多技能的组合执行和编排
 */
declare class SkillComposer {
    private compositions;
    /**
     * 注册编排
     */
    register(definition: CompositionDefinition): void;
    /**
     * 注销编排
     */
    unregister(compositionId: string): boolean;
    /**
     * 获取编排
     */
    get(compositionId: string): CompositionDefinition | undefined;
    /**
     * 获取所有编排
     */
    getAll(): CompositionDefinition[];
    /**
     * 执行编排
     */
    execute(compositionId: string, input: unknown, context: ExecutionContext$1, skillExecutor: (skillId: string, input: unknown, ctx: ExecutionContext$1) => Promise<SkillExecutionResult>): Promise<CompositionResult>;
    /**
     * 顺序执行
     */
    private executeSequential;
    /**
     * 并行执行
     */
    private executeParallel;
    /**
     * 条件执行
     */
    private executeConditional;
    /**
     * 管道执行
     */
    private executePipeline;
    /**
     * 执行单个步骤
     */
    private executeStep;
    /**
     * 评估条件
     */
    private evaluateCondition;
    /**
     * 创建预定义编排
     */
    createPredefinedCompositions(): void;
}

/**
 * @file 技能质量门
 * @description 技能执行的质量检查和验证
 * @module @claw-ai/core/skills
 * @author YYC
 */

/**
 * 质量门检查类型
 */
type QualityGateType = 'input' | 'output' | 'performance' | 'security' | 'compliance';
/**
 * 质量门规则
 */
interface QualityGateRule {
    id: string;
    name: string;
    description: string;
    type: QualityGateType;
    severity: 'error' | 'warning' | 'info';
    check: (context: QualityCheckContext) => Promise<QualityCheckResult>;
}
/**
 * 质量检查上下文
 */
interface QualityCheckContext {
    skill: SkillRegistryItem;
    input: unknown;
    output?: unknown;
    result?: SkillExecutionResult;
    metadata: Record<string, unknown>;
}
/**
 * 质量检查结果
 */
interface QualityCheckResult {
    passed: boolean;
    ruleId: string;
    message: string;
    details?: Record<string, unknown>;
    suggestions?: string[];
}
/**
 * 质量门报告
 */
interface QualityGateReport {
    skillId: string;
    passed: boolean;
    results: QualityCheckResult[];
    score: number;
    summary: {
        errors: number;
        warnings: number;
        info: number;
    };
    recommendations: string[];
}
/**
 * 质量门配置
 */
interface QualityGateConfig {
    enabled: boolean;
    strictMode: boolean;
    skipWarnings: boolean;
    customRules: QualityGateRule[];
}
/**
 * 技能质量门
 * 技能执行的质量检查和验证
 */
declare class SkillQualityGates {
    private rules;
    private config;
    constructor(config?: Partial<QualityGateConfig>);
    /**
     * 初始化默认规则
     */
    private initializeDefaultRules;
    /**
     * 添加规则
     */
    addRule(rule: QualityGateRule): void;
    /**
     * 移除规则
     */
    removeRule(ruleId: string): boolean;
    /**
     * 获取规则
     */
    getRule(ruleId: string): QualityGateRule | undefined;
    /**
     * 获取所有规则
     */
    getAllRules(): QualityGateRule[];
    /**
     * 执行质量检查
     */
    check(context: QualityCheckContext): Promise<QualityGateReport>;
    /**
     * 计算质量分数
     */
    private calculateScore;
    /**
     * 快速检查输入
     */
    checkInput(skill: SkillRegistryItem, input: unknown): Promise<QualityGateReport>;
    /**
     * 快速检查输出
     */
    checkOutput(skill: SkillRegistryItem, input: unknown, output: unknown, result: SkillExecutionResult): Promise<QualityGateReport>;
    /**
     * 获取统计信息
     */
    getStats(): {
        totalRules: number;
        byType: Record<QualityGateType, number>;
        bySeverity: Record<string, number>;
    };
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
 * @file 内置技能
 * @description 提供核心推理、生成、分析技能
 * @module @claw-ai/core/skills
 * @author YYC
 */

/**
 * 推理技能 - CAGEERF 框架
 */
declare const ReasoningSkill: SkillDefinition;
/**
 * 生成技能
 */
declare const GenerationSkill: SkillDefinition;
/**
 * 分析技能
 */
declare const AnalysisSkill: SkillDefinition;

export { AnalysisSkill, type CompositionDefinition, type CompositionMode, type CompositionResult, type CompositionStep, type ExecutionContext$1 as ExecutionContext, GenerationSkill, type LearningData, type LearningModel, type PerformanceMetrics, type QualityCheckContext, type QualityCheckResult, type QualityGateReport, type QualityGateRule, type QualityGateType, ReasoningSkill, type RecommendationContext, type SkillCategory, SkillComposer, type SkillDefinition, type SkillExecutionHistory, type SkillExecutionResult, type SkillHandler, SkillLearner, SkillManager, type SkillOptimization, SkillQualityGates, type SkillRecommendation, SkillRecommender, type SkillRegistryItem, type UserFeedback, type UserPreferences };
