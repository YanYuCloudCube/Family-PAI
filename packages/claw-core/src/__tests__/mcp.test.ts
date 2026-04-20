/**
 * @file MCP 模块测试
 * @description 测试 MCP 协议客户端和传输层
 * @module @claw-ai/core/mcp
 * @author YYC
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { MCPClient } from '../mcp/client.js'
import type { MCPTool, MCPPrompt, MCPResource, MCPClientConfig } from '../mcp/types.js'

describe('MCPClient', () => {
  let client: MCPClient
  let mockTransport: any

  beforeEach(() => {
    mockTransport = {
      connect: vi.fn().mockResolvedValue(undefined),
      close: vi.fn().mockResolvedValue(undefined),
      send: vi.fn().mockResolvedValue(undefined),
      onMessage: vi.fn(),
      connected: false,
    }

    const config: MCPClientConfig = {
      transport: mockTransport,
      name: 'test-client',
      version: '1.0.0',
    }

    client = new MCPClient(config)
  })

  afterEach(async () => {
    try {
      await client.close()
    } catch {
      // ignore
    }
  })

  describe('构造函数', () => {
    it('应该创建客户端实例', () => {
      expect(client).toBeDefined()
      expect(client).toBeInstanceOf(MCPClient)
    })
  })

  describe('connect', () => {
    it.skip('应该连接到服务器', async () => {
      mockTransport.send = vi.fn().mockImplementation((msg: any) => {
        if (msg.method === 'initialize') {
          mockTransport.connected = true
          return Promise.resolve({
            jsonrpc: '2.0',
            id: msg.id,
            result: {
              capabilities: { tools: true, resources: true },
            },
          })
        }
        return Promise.resolve({ jsonrpc: '2.0', id: msg.id, result: {} })
      })

      await client.connect()
      expect(mockTransport.connect).toHaveBeenCalled()
    })
  })

  describe('close', () => {
    it('应该关闭连接', async () => {
      await client.close()
      expect(mockTransport.close).toHaveBeenCalled()
    })
  })

  describe('connected', () => {
    it('应该返回连接状态', () => {
      expect(typeof client.connected).toBe('boolean')
    })
  })

  describe('tools', () => {
    it('应该返回工具列表', () => {
      expect(Array.isArray(client.tools)).toBe(true)
    })
  })

  describe('resources', () => {
    it('应该返回资源列表', () => {
      expect(Array.isArray(client.resources)).toBe(true)
    })
  })
})

describe('MCP Types', () => {
  it('MCPTool 应该有正确的结构', () => {
    const tool: MCPTool = {
      name: 'test',
      description: 'Test tool',
      inputSchema: { type: 'object' },
    }

    expect(tool.name).toBe('test')
    expect(tool.description).toBe('Test tool')
    expect(tool.inputSchema).toBeDefined()
  })

  it('MCPPrompt 应该有正确的结构', () => {
    const prompt: MCPPrompt = {
      name: 'test',
      description: 'Test prompt',
    }

    expect(prompt.name).toBe('test')
    expect(prompt.description).toBe('Test prompt')
  })

  it('MCPResource 应该有正确的结构', () => {
    const resource: MCPResource = {
      uri: 'test://resource',
      name: 'Test Resource',
    }

    expect(resource.uri).toBe('test://resource')
    expect(resource.name).toBe('Test Resource')
  })
})
