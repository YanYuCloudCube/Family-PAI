/**
 * @file Claw 核心类型定义
 * @description 定义 Claw 系统的核心类型接口
 * @module @claw-ai/core
 * @author YYC
 */

/**
 * AI 提供商类型
 */
type AIProviderType = 'openai' | 'ollama' | 'anthropic' | 'azure' | 'custom';
/**
 * 消息角色
 */
type MessageRole = 'system' | 'user' | 'assistant' | 'tool';
/**
 * 聊天消息
 */
interface ChatMessage {
    role: MessageRole;
    content: string;
    name?: string;
    toolCallId?: string;
}
/**
 * 聊天完成响应
 */
interface ChatCompletionResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{
        index: number;
        message: ChatMessage;
        finishReason: string;
    }>;
    usage?: {
        promptTokens: number;
        completionTokens: number;
        totalTokens: number;
    };
}

export type { AIProviderType as A, ChatMessage as C, ChatCompletionResponse as a };
