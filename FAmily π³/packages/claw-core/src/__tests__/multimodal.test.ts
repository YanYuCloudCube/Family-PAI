/**
 * @file Multimodal 模块测试
 * @description 测试多模态处理管理器和处理器
 * @module @family-pai/core/multimodal
 * @author YYC
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { MultimodalManager } from '../multimodal/manager.js'
import { ImageProcessor } from '../multimodal/image-processor.js'
import { AudioProcessor } from '../multimodal/audio-processor.js'
import { DocumentProcessor } from '../multimodal/document-processor.js'
import type { UnifiedAuthManager } from '../auth/unified-auth.js'
import type { ImageInput, AudioInput, DocumentInput } from '../multimodal/types.js'

describe('MultimodalManager', () => {
  let manager: MultimodalManager
  let mockAuthManager: UnifiedAuthManager

  beforeEach(() => {
    mockAuthManager = {
      chat: vi.fn().mockResolvedValue({
        choices: [{ message: { content: '{"result": "test"}' } }],
        usage: { promptTokens: 10, completionTokens: 5, totalTokens: 15 },
      }),
    } as unknown as UnifiedAuthManager

    manager = new MultimodalManager(mockAuthManager)
  })

  describe('构造函数', () => {
    it('应该创建管理器实例', () => {
      expect(manager).toBeDefined()
      expect(manager).toBeInstanceOf(MultimodalManager)
    })
  })

  describe('getImageProcessor', () => {
    it('应该返回图像处理器', () => {
      const processor = manager.getImageProcessor()
      expect(processor).toBeDefined()
      expect(processor).toBeInstanceOf(ImageProcessor)
    })
  })

  describe('getAudioProcessor', () => {
    it('应该返回音频处理器', () => {
      const processor = manager.getAudioProcessor()
      expect(processor).toBeDefined()
      expect(processor).toBeInstanceOf(AudioProcessor)
    })
  })

  describe('getDocumentProcessor', () => {
    it('应该返回文档处理器', () => {
      const processor = manager.getDocumentProcessor()
      expect(processor).toBeDefined()
      expect(processor).toBeInstanceOf(DocumentProcessor)
    })
  })
})

describe('ImageProcessor', () => {
  let processor: ImageProcessor
  let mockAuthManager: UnifiedAuthManager

  beforeEach(() => {
    mockAuthManager = {
      chat: vi.fn().mockResolvedValue({
        choices: [{ message: { content: '图像描述: 这是一张测试图片' } }],
        usage: { promptTokens: 10, completionTokens: 5, totalTokens: 15 },
      }),
    } as unknown as UnifiedAuthManager

    processor = new ImageProcessor(mockAuthManager)
  })

  describe('analyze', () => {
    it('应该分析图像', async () => {
      const image: ImageInput = {
        type: 'image',
        format: 'png',
        data: Buffer.from('test-image'),
      }

      const result = await processor.analyze(image, {
        tasks: ['describe'],
      })

      expect(result).toHaveProperty('description')
    })
  })

  describe('analyzeBatch', () => {
    it('应该批量分析图像', async () => {
      const images: ImageInput[] = [
        { type: 'image', format: 'png', data: Buffer.from('img1') },
        { type: 'image', format: 'png', data: Buffer.from('img2') },
      ]

      const results = await processor.analyzeBatch(images, {
        tasks: ['describe'],
      })

      expect(results.length).toBe(2)
    })
  })
})

describe('AudioProcessor', () => {
  let processor: AudioProcessor

  beforeEach(() => {
    processor = new AudioProcessor({
      openaiApiKey: 'test-api-key',
    })
  })

  describe('transcribe', () => {
    it.skip('应该转录音频', async () => {
      const audio: AudioInput = {
        type: 'audio',
        format: 'mp3',
        data: Buffer.from('test-audio'),
      }

      const result = await processor.transcribe(audio)

      expect(result).toHaveProperty('text')
    })
  })

  describe('synthesize', () => {
    it.skip('应该合成语音', async () => {
      const result = await processor.synthesize('Hello world')

      expect(result).toHaveProperty('audio')
      expect(result).toHaveProperty('format')
    })
  })
})

describe('DocumentProcessor', () => {
  let processor: DocumentProcessor
  let mockAuthManager: UnifiedAuthManager

  beforeEach(() => {
    mockAuthManager = {
      chat: vi.fn().mockResolvedValue({
        choices: [{ message: { content: '文档摘要内容' } }],
        usage: { promptTokens: 10, completionTokens: 5, totalTokens: 15 },
      }),
    } as unknown as UnifiedAuthManager

    processor = new DocumentProcessor(mockAuthManager)
  })

  describe('parse', () => {
    it('应该解析文档', async () => {
      const document: DocumentInput = {
        type: 'document',
        format: 'txt',
        data: Buffer.from('test document content'),
      }

      const result = await processor.parse(document)

      expect(result).toHaveProperty('text')
    })
  })

  describe('summarize', () => {
    it('应该摘要文档', async () => {
      const document: DocumentInput = {
        type: 'document',
        format: 'txt',
        data: Buffer.from('test document content for summarization'),
      }

      const result = await processor.summarize(document)

      expect(typeof result).toBe('string')
    })
  })

  describe('extractKeyInfo', () => {
    it('应该提取关键信息', async () => {
      const document: DocumentInput = {
        type: 'document',
        format: 'txt',
        data: Buffer.from('姓名: 张三, 年龄: 25'),
      }

      const result = await processor.extractKeyInfo(document, ['姓名', '年龄'])

      expect(result).toHaveProperty('姓名')
      expect(result).toHaveProperty('年龄')
    })
  })

  describe('compare', () => {
    it('应该对比文档', async () => {
      const doc1: DocumentInput = {
        type: 'document',
        format: 'txt',
        data: Buffer.from('document 1 content'),
      }

      const doc2: DocumentInput = {
        type: 'document',
        format: 'txt',
        data: Buffer.from('document 2 content'),
      }

      const result = await processor.compare(doc1, doc2)

      expect(result).toHaveProperty('similarities')
      expect(result).toHaveProperty('differences')
      expect(result).toHaveProperty('summary')
    })
  })
})

describe('Multimodal Types', () => {
  it('ImageInput 应该有正确的结构', () => {
    const image: ImageInput = {
      type: 'image',
      format: 'png',
      data: Buffer.from('test'),
      width: 100,
      height: 100,
    }

    expect(image.type).toBe('image')
    expect(image.format).toBe('png')
    expect(image.width).toBe(100)
  })

  it('AudioInput 应该有正确的结构', () => {
    const audio: AudioInput = {
      type: 'audio',
      format: 'mp3',
      data: Buffer.from('test'),
      duration: 60,
    }

    expect(audio.type).toBe('audio')
    expect(audio.format).toBe('mp3')
    expect(audio.duration).toBe(60)
  })

  it('DocumentInput 应该有正确的结构', () => {
    const doc: DocumentInput = {
      type: 'document',
      format: 'pdf',
      data: Buffer.from('test'),
      pageCount: 10,
    }

    expect(doc.type).toBe('document')
    expect(doc.format).toBe('pdf')
    expect(doc.pageCount).toBe(10)
  })
})
