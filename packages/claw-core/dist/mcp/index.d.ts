import EventEmitter from 'eventemitter3';

/**
 * MCP 消息
 */
interface MCPMessage {
    jsonrpc: '2.0';
    id?: string | number;
    method?: string;
    params?: Record<string, unknown>;
    result?: unknown;
    error?: {
        code: number;
        message: string;
        data?: unknown;
    };
}
/**
 * MCP 工具定义
 */
interface MCPTool {
    name: string;
    description: string;
    inputSchema: {
        type: 'object';
        properties: Record<string, {
            type: string;
            description?: string;
            enum?: string[];
        }>;
        required?: string[];
    };
}
/**
 * MCP 资源
 */
interface MCPResource {
    uri: string;
    name: string;
    description?: string;
    mimeType?: string;
}
/**
 * MCP 服务器能力
 */
interface MCPServerCapabilities {
    tools?: {
        listChanged?: boolean;
    };
    resources?: {
        subscribe?: boolean;
        listChanged?: boolean;
    };
    prompts?: {
        listChanged?: boolean;
    };
    logging?: object;
}
/**
 * MCP 传输接口
 */
interface MCPTransport {
    connected: boolean;
    connect(): Promise<void>;
    send(message: MCPMessage): Promise<void>;
    onMessage(handler: (message: MCPMessage) => void): void;
    close(): Promise<void>;
}
/**
 * MCP 客户端配置
 */
interface MCPClientConfig {
    name: string;
    version: string;
    transport: MCPTransport;
    capabilities?: {
        tools?: boolean;
        resources?: boolean;
        prompts?: boolean;
    };
}
/**
 * MCP 工具调用结果
 */
interface MCPToolResult {
    content: Array<{
        type: 'text' | 'image' | 'resource';
        text?: string;
        data?: string;
        mimeType?: string;
    }>;
    isError?: boolean;
}

/**
 * @file MCP 客户端实现
 * @description 实现 MCP 协议客户端
 * @module @claw-ai/core/mcp
 * @author YYC
 */

/**
 * MCP 客户端事件
 */
interface MCPClientEvents {
    connected: () => void;
    disconnected: () => void;
    error: (error: Error) => void;
    toolListChanged: (tools: MCPTool[]) => void;
    resourceListChanged: (resources: MCPResource[]) => void;
}
/**
 * MCP 客户端
 * 实现 Model Context Protocol 客户端
 */
declare class MCPClient extends EventEmitter<MCPClientEvents> {
    private config;
    private transport;
    private messageId;
    private pendingRequests;
    private _tools;
    private _resources;
    private _capabilities?;
    constructor(config: MCPClientConfig);
    get connected(): boolean;
    get tools(): MCPTool[];
    get resources(): MCPResource[];
    get capabilities(): MCPServerCapabilities | undefined;
    /**
     * 连接到 MCP 服务器
     */
    connect(): Promise<void>;
    /**
     * 刷新工具列表
     */
    refreshTools(): Promise<MCPTool[]>;
    /**
     * 刷新资源列表
     */
    refreshResources(): Promise<MCPResource[]>;
    /**
     * 调用工具
     */
    callTool(name: string, args: Record<string, unknown>): Promise<MCPToolResult>;
    /**
     * 读取资源
     */
    readResource(uri: string): Promise<unknown>;
    /**
     * 发送请求
     */
    private request;
    /**
     * 发送通知
     */
    private notify;
    /**
     * 设置传输层消息处理
     */
    private setupTransport;
    /**
     * 处理通知
     */
    private handleNotification;
    /**
     * 关闭连接
     */
    close(): Promise<void>;
}

/**
 * @file MCP 传输层实现
 * @description 实现 Stdio 和 HTTP 传输
 * @module @claw-ai/core/mcp
 * @author YYC
 */

/**
 * Stdio 传输配置
 */
interface StdioTransportConfig {
    command: string;
    args?: string[];
    env?: Record<string, string>;
}
/**
 * HTTP 传输配置
 */
interface HTTPTransportConfig {
    url: string;
    headers?: Record<string, string>;
}
/**
 * Stdio 传输实现
 * 通过标准输入输出与 MCP 服务器通信
 */
declare class StdioTransport implements MCPTransport {
    private config;
    private _connected;
    private messageHandler?;
    private process?;
    constructor(config: StdioTransportConfig);
    get connected(): boolean;
    connect(): Promise<void>;
    send(message: MCPMessage): Promise<void>;
    onMessage(handler: (message: MCPMessage) => void): void;
    close(): Promise<void>;
}
/**
 * HTTP 传输实现
 * 通过 HTTP/WebSocket 与 MCP 服务器通信
 */
declare class HTTPTransport implements MCPTransport {
    private config;
    private _connected;
    private messageHandler?;
    private ws?;
    constructor(config: HTTPTransportConfig);
    get connected(): boolean;
    connect(): Promise<void>;
    send(message: MCPMessage): Promise<void>;
    onMessage(handler: (message: MCPMessage) => void): void;
    close(): Promise<void>;
}

export { HTTPTransport, MCPClient, type MCPMessage, type MCPResource, type MCPTool, type MCPTransport, StdioTransport };
