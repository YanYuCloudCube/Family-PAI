/**
 * @file 图像处理器
 * @description 图像分析和处理
 * @module @family-pai/core/multimodal
 * @author YYC
 */

import type { 
  ImageInput, 
  ImageAnalysisOptions, 
  ImageAnalysisResult,
  ImageAnalysisTask 
} from './types.js'
import type { UnifiedAuthManager } from '../auth/unified-auth.js'

/**
 * 图像处理器
 */
export class ImageProcessor {
  private authManager: UnifiedAuthManager
  private defaultModel: string

  constructor(authManager: UnifiedAuthManager, model?: string) {
    this.authManager = authManager
    this.defaultModel = model || 'gpt-4-vision-preview'
  }

  /**
   * 分析图像
   */
  async analyze(
    image: ImageInput,
    options: ImageAnalysisOptions = {}
  ): Promise<ImageAnalysisResult> {
    const tasks = options.tasks || ['describe']
    
    try {
      const imageData = this.prepareImageData(image)
      const results: ImageAnalysisResult = {}

      for (const task of tasks) {
        const taskResult = await this.executeTask(imageData, task, options)
        Object.assign(results, taskResult)
      }

      return results
    } catch (error) {
      throw new Error(`图像分析失败: ${error instanceof Error ? error.message : String(error)}`, { cause: error })
    }
  }

  /**
   * 执行单个分析任务
   */
  private async executeTask(
    imageData: string,
    task: ImageAnalysisTask,
    options: ImageAnalysisOptions
  ): Promise<ImageAnalysisResult> {
    const prompt = this.buildPrompt(task)
    
    const messages = [
      {
        role: 'user' as const,
        content: [
          { type: 'text' as const, text: prompt },
          { 
            type: 'image_url' as const, 
            image_url: { 
              url: imageData,
              detail: options.detail || 'auto'
            } 
          }
        ]
      }
    ]

    const response = await this.authManager.chat(messages as any, {
      model: this.defaultModel,
      maxTokens: options.maxTokens || 1000,
    })

    const content = response.choices[0]?.message?.content || ''
    
    return this.parseResult(content, task)
  }

  /**
   * 构建任务提示词
   */
  private buildPrompt(task: ImageAnalysisTask): string {
    const prompts: Record<ImageAnalysisTask, string> = {
      describe: '请详细描述这张图片的内容，包括场景、物体、人物、颜色、构图等。',
      ocr: '请识别并提取图片中的所有文字内容，保持原有的格式和布局。',
      classify: '请对这张图片进行分类，说明它属于什么类型的图片。',
      detect: '请检测图片中的所有物体，列出它们的名称和位置。',
      segment: '请分析图片的主要区域和组成部分。',
      face: '请检测图片中的人脸，描述面部特征和表情。',
      caption: '请为这张图片生成一个简洁准确的标题。',
    }

    return prompts[task] || prompts.describe
  }

  /**
   * 解析分析结果
   */
  private parseResult(content: string, task: ImageAnalysisTask): ImageAnalysisResult {
    switch (task) {
      case 'describe':
        return { description: content }
      case 'ocr':
        return { text: content }
      case 'classify':
        return { 
          labels: this.extractLabels(content) 
        }
      case 'detect':
        return { 
          objects: this.extractObjects(content) 
        }
      case 'caption':
        return { caption: content }
      default:
        return { description: content }
    }
  }

  /**
   * 准备图像数据
   */
  private prepareImageData(image: ImageInput): string {
    if (typeof image.data === 'string') {
      if (image.data.startsWith('data:')) {
        return image.data
      }
      if (image.data.startsWith('http')) {
        return image.data
      }
      return `data:image/${image.format};base64,${image.data}`
    }
    
    const base64 = image.data.toString('base64')
    return `data:image/${image.format};base64,${base64}`
  }

  /**
   * 提取标签
   */
  private extractLabels(content: string): Array<{ label: string; confidence: number }> {
    const labels: Array<{ label: string; confidence: number }> = []
    const lines = content.split('\n')
    
    for (const line of lines) {
      const match = line.match(/[-•]\s*(.+?)(?:\s*[:：]\s*(\d+)%?)?/)
      if (match) {
        labels.push({
          label: match[1].trim(),
          confidence: match[2] ? parseInt(match[2]) / 100 : 0.8,
        })
      }
    }
    
    return labels.slice(0, 10)
  }

  /**
   * 提取物体
   */
  private extractObjects(content: string): Array<{ name: string; bbox: [number, number, number, number]; confidence: number }> {
    const objects: Array<{ name: string; bbox: [number, number, number, number]; confidence: number }> = []
    const lines = content.split('\n')
    
    for (const line of lines) {
      const match = line.match(/[-•]\s*(.+)/)
      if (match) {
        objects.push({
          name: match[1].trim(),
          bbox: [0, 0, 0, 0],
          confidence: 0.8,
        })
      }
    }
    
    return objects.slice(0, 10)
  }

  /**
   * 批量分析图像
   */
  async analyzeBatch(
    images: ImageInput[],
    options: ImageAnalysisOptions = {}
  ): Promise<ImageAnalysisResult[]> {
    return Promise.all(images.map(image => this.analyze(image, options)))
  }
}
