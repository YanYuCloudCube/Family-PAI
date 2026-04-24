#!/usr/bin/env node
/**
 * YYC³ 团队规范标头统一脚本
 * 按照 YYC3-团队规范-开发标准.md §2.1 代码文件标头格式 统一所有源码文件
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, extname, relative } from 'path'

const ROOT = '/Users/my/yyc3-FAmily-π/packages'
const AUTHOR = 'YanYuCloudCube Team <admin@0379.email>'
const TODAY = '2026-04-24'

const PACKAGES = [
  { dir: 'core', module: '@yyc3/core', version: '1.3.0', desc: 'YYC³ AI Family 核心包 — 统一认证、MCP协议、技能系统、八位AI家人智能体、多模态处理' },
  { dir: 'ai-hub', module: '@yyc3/ai-hub', version: '1.0.0', desc: 'YYC³ AI Hub · 八位拟人化AI家人的智能中枢 — Family Compass时钟罗盘 + 多Agent协作引擎' },
  { dir: 'ui', module: '@yyc3/ui', version: '1.1.1', desc: 'YYC³ AI Family UI 组件库 — 即拉即用的 React AI 智能系统 UI 组件' },
  { dir: 'plugins', module: '@yyc3/plugins', version: '1.1.0', desc: 'YYC³ AI Family 插件集合 — LSP语言服务器插件、内容处理插件' },
  { dir: 'i18n-core', module: '@yyc3/i18n-core', version: '2.3.0', desc: 'YYC³ Production-Ready i18n Framework — 高性能、插件化、零依赖的国际化解决方案' },
]

function walkDir(dir, exts) {
  let results = []
  try {
    const entries = readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue
        results = results.concat(walkDir(fullPath, exts))
      } else if (exts.includes(extname(entry.name))) {
        results.push(fullPath)
      }
    }
  } catch (e) {}
  return results
}

function inferTags(relPath) {
  const tags = []
  if (relPath.includes('__tests__') || relPath.includes('.test.')) {
    tags.push('[test]')
  } else if (relPath.includes('index.ts') || relPath.includes('index.tsx')) {
    tags.push('[config]')
  } else {
    tags.push('[module]')
  }

  if (relPath.includes('auth')) tags.push('[auth]')
  else if (relPath.includes('mcp')) tags.push('[mcp]')
  else if (relPath.includes('skill')) tags.push('[ai]')
  else if (relPath.includes('family') || relPath.includes('member') || relPath.includes('compass')) tags.push('[ai-family]')
  else if (relPath.includes('multimodal')) tags.push('[multimodal]')
  else if (relPath.includes('i18n') || relPath.includes('icu') || relPath.includes('locale')) tags.push('[i18n]')
  else if (relPath.includes('component') || relPath.includes('.tsx')) tags.push('[ui]')
  else if (relPath.includes('theme')) tags.push('[theme]')
  else if (relPath.includes('plugin')) tags.push('[plugin]')
  else if (relPath.includes('security')) tags.push('[security]')
  else if (relPath.includes('infra')) tags.push('[infra]')
  else if (relPath.includes('lsp')) tags.push('[lsp]')
  else if (relPath.includes('content')) tags.push('[content]')
  else if (relPath.includes('setup')) tags.push('[setup]')
  else if (relPath.includes('hook')) tags.push('[hook]')

  if (relPath.includes('__tests__') || relPath.includes('.test.')) {
    if (!tags.includes('[unit]')) tags.push('[unit]')
  }

  return tags.slice(0, 4).join(',')
}

function inferBrief(pkg, relPath, fileName) {
  const isTest = relPath.includes('__tests__') || relPath.includes('.test.')
  if (isTest) {
    const testTarget = fileName.replace('.test.', '.')
    return `${pkg.module} ${testTarget} 单元测试`
  }

  const nameMap = {
    'index.ts': `${pkg.module} 模块入口`,
    'index.tsx': `${pkg.module} 模块入口`,
    'types.ts': `${pkg.module} 类型定义`,
    'engine.ts': 'i18n 核心引擎实现',
    'cache.ts': 'LRU 缓存系统',
    'parser.ts': 'ICU MessageFormat 解析器',
    'compiler.ts': 'ICU MessageFormat 编译器',
    'provider.ts': 'AI 翻译提供者管理',
    'server.ts': 'MCP 服务端实现',
    'formatter.ts': '翻译格式化器',
    'detector.ts': '语言自动检测',
    'hub.ts': 'AI Hub 核心实现',
    'auth.ts': '认证管理模块',
    'mcp.ts': 'MCP 协议实现',
    'skills.ts': '技能系统实现',
    'agents.ts': 'Agent 管理实现',
    'logger.ts': '日志系统',
    'manager.ts': '管理器核心',
    'base-agent.ts': 'Agent 基类',
    'base-member.ts': 'AI 家人基类',
    'members.ts': 'AI 家人定义',
    'orchestrator.ts': 'AI 家人调度器',
    'emotional-intelligence.ts': '情感智能系统',
    'growth-system.ts': '成长系统',
    'family-compass.ts': 'Family Compass 时钟罗盘',
    'personas.ts': 'AI 家人人设定义',
    'task-manager.ts': '任务管理器',
    'trust-system.ts': '信任系统',
    'collaboration-engine.ts': '协作引擎',
    'unified-auth.ts': '统一认证管理器',
    'openai-provider.ts': 'OpenAI 认证提供者',
    'ollama-provider.ts': 'Ollama 认证提供者',
    'auth-monitor.ts': '认证监控器',
    'auth-switcher.ts': '认证切换器',
    'button.tsx': 'Button 按钮组件',
    'card.tsx': 'Card 卡片组件',
    'input.tsx': 'Input 输入框组件',
    'modal.tsx': 'Modal 弹窗组件',
    'layout.tsx': 'Layout 布局组件',
    'hooks.ts': 'React Hooks 工具集',
    'context.tsx': 'React Context 上下文',
    'utils.ts': '工具函数集',
    'theme-provider.tsx': '主题提供者',
    'theme-tokens.ts': '主题 Token 定义',
    'light-theme.ts': '亮色主题配置',
    'dark-theme.ts': '暗色主题配置',
    'AIFamilyPanel.tsx': 'AI Family 面板组件',
    'AgentCard.tsx': 'Agent 卡片组件',
    'AgentStatus.tsx': 'Agent 状态组件',
    'FamilyHome.tsx': 'Family 首页组件',
    'FamilyLayout.tsx': 'Family 布局组件',
    'FamilyMembers.tsx': 'Family 成员组件',
    'safe-regex.ts': 'ReDoS 防护安全正则',
    'secret-equal.ts': '时序攻击防护比较',
    'dangerous-operations.ts': '注入检测',
    'rate-limit.ts': '速率限制器',
    'backoff.ts': '指数退避重试',
    'secure-random.ts': '安全随机数',
    'rtl-utils.ts': 'RTL 语言工具',
    'local-storage.ts': '本地存储持久化',
    'lit-controller.ts': 'Lit 响应式控制器',
    'i18n-audit.ts': '翻译审计系统',
    'chinese-detector.ts': '中文检测器',
    'quality-estimator.ts': 'AI 翻译质量评估',
    'i18n-tools.ts': 'MCP i18n 工具集',
    'stdio-transport.ts': 'MCP 标准传输层',
    'path-guards.ts': '路径安全守卫',
    'json-file.ts': 'JSON 文件读写',
    'format-time.ts': '时间格式化工具',
    'missing-key-reporter.ts': '缺失 Key 上报插件',
    'performance-tracker.ts': '性能追踪插件',
    'console-logger.ts': '控制台日志插件',
    'quick-starter.ts': '快速启动器',
    'smart-selector.ts': '智能选择器',
    'auto-detector.ts': '自动检测器',
    'image-processor.ts': '图像处理器',
    'audio-processor.ts': '音频处理器',
    'document-processor.ts': '文档处理器',
    'agent-router.ts': 'Agent 路由器',
    'agent-collaboration.ts': 'Agent 协作系统',
    'agent-layers.ts': 'Agent 层级定义',
    'agent-quality-gates.ts': 'Agent 质量门控',
    'definitions.ts': '定义常量',
    'extended-definitions.ts': '扩展定义',
    'skill-composer.ts': '技能编排器',
    'skill-learner.ts': '技能学习器',
    'skill-recommender.ts': '技能推荐器',
    'skill-quality-gates.ts': '技能质量门控',
    'builtin.ts': '内置技能定义',
    'industry-skills.ts': '行业技能库',
    'transport.ts': 'MCP 传输层',
    'client.ts': 'MCP 客户端',
    'codes.ts': '错误码定义',
    'messages.ts': '错误消息定义',
    'hub.schema.ts': 'Hub Schema 定义',
    'mcp.schema.ts': 'MCP Schema 定义',
    'skill.schema.ts': 'Skill Schema 定义',
    'task-agent.schema.ts': 'Task Agent Schema 定义',
    'setup.ts': '测试环境配置',
  }

  return nameMap[fileName] || `${pkg.module} ${relPath} 模块`
}

function stripOldHeader(content) {
  return content.replace(/^\/\*\*[\s\S]*?\*\/\s*\n*/, '')
}

function generateHeader(pkg, filePath) {
  const relPath = relative(join(ROOT, pkg.dir, 'src'), filePath)
  const fileName = relPath.split('/').pop()
  const isTest = relPath.includes('__tests__') || relPath.includes('.test.')
  const tags = inferTags(relPath)
  const brief = inferBrief(pkg, relPath, fileName)
  const status = isTest ? 'active' : 'active'

  return `/**
 * file ${fileName}
 * description ${brief}
 * module ${pkg.module}
 * author ${AUTHOR}
 * version ${pkg.version}
 * created ${TODAY}
 * updated ${TODAY}
 * status ${status}
 * tags ${tags}
 *
 * copyright YanYuCloudCube Team
 * license MIT
 *
 * brief ${brief}
 */\n`
}

let processed = 0
let skipped = 0

for (const pkg of PACKAGES) {
  const srcDir = join(ROOT, pkg.dir, 'src')
  const files = walkDir(srcDir, ['.ts', '.tsx'])

  for (const filePath of files) {
    try {
      let content = readFileSync(filePath, 'utf-8')
      const newHeader = generateHeader(pkg, filePath)
      const cleaned = stripOldHeader(content)

      if (cleaned.trim().length === 0) {
        skipped++
        continue
      }

      writeFileSync(filePath, newHeader + cleaned, 'utf-8')
      processed++
    } catch (e) {
      console.error(`Error processing ${filePath}:`, e.message)
    }
  }
}

console.log(`✅ Processed: ${processed} files`)
console.log(`⏭️ Skipped: ${skipped} files (empty)`)
