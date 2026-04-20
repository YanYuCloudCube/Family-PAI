# Family-AI 文档站点部署指南

> **目标**: 将项目文档部署到 `https://api.yyccube.com`
> 
> **更新时间**: 2026-04-20

---

## 🎯 部署目标

```
用户访问 https://api.yyccube.com
    ↓
自动展示 YYC³ Claw AI 完整文档
    ↓
包含: README + ARCHITECTURE + API 参考 + 贡献指南
```

---

## 📋 方案对比

| 方案 | 工具栈 | 复杂度 | 成本 | 自定义域名 | 推荐度 |
|------|--------|--------|------|------------|--------|
| **A. VitePress** | Vue + Markdown | ⭐⭐ 中等 | 免费 | ✅ 支持 | ⭐⭐⭐⭐⭐ 强烈推荐 |
| B. Docusaurus | React + Markdown | ⭐⭐⭐ 较高 | 免费 | ✅ 支持 | ⭐⭐⭐⭐ 推荐 |
| C. GitHub Pages | Jekyll | ⭐ 简单 | 免费 | ✅ 支持 | ⭐⭐⭐ 可用 |
| D. Netlify Drop | 拖拽部署 | ⭐ 最简单 | 免费 | ✅ 支持 | ⭐⭐ 快速原型 |

---

## 🏆 **推荐方案 A: VitePress (最适合同构项目)**

### 为什么选择 VitePress?

✅ **与项目技术栈一致** - Vue 生态，Monorepo 友好  
✅ **Markdown 原生支持** - 直接使用现有 .md 文件  
✅ **构建速度快** - 基于 Vite，毫秒级 HMR  
✅ **SEO 优化内置** - 自动生成 sitemap、meta 标签  
✅ **自定义域名简单** - DNS 配置即可  
✅ **中文支持优秀** - 完整的 i18n 方案  

### 架构图

```
┌─────────────────────────────────────────────┐
│           api.yyccube.com                    │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │         VitePress Site              │    │
│  │                                     │    │
│  │  / → README.md (首页)               │    │
│  │  /guide → 使用指南                  │    │
│  │  /architecture → 架构设计            │    │
│  │  /api → API 参考                    │    │
│  │  /contributing → 贡献指南            │    │
│  │  /changelog → 版本历史              │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  部署平台: Vercel / Netlify / Cloudflare    │
└─────────────────────────────────────────────┘
         ↑
         │ git push 自动触发 CI/CD
         │
┌─────────────────────────────────────────────┐
│     github.com/YanYuCloud/Family-AI        │
│     branch: feature/yyc3-claw-v1           │
└─────────────────────────────────────────────┘
```

---

## 🚀 快速开始 (5分钟部署)

### **前置条件**

- [x] Node.js >= 18
- [x] pnpm >= 8
- [x] GitHub 仓库已就绪 ✅
- [ ] Vercel/Netlify 账号 (二选一)

### **步骤 1: 初始化 VitePress 项目**

```bash
# 在项目根目录创建 docs-site 目录
mkdir -p docs-site && cd docs-site

# 初始化 VitePress
pnpm init
pnpm add -D vitepress vue

# 创建基础结构
mkdir -p .vitepress/public guide api
```

### **步骤 2: 配置文件**

#### `.vitepress/config.ts`

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'YYC³ Claw AI',
  description: 'AI Family 智能体框架 - 完整文档',
  
  // 自定义域名
  base: '/',
  
  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Family AI',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '架构设计', link: '/guide/architecture' },
      { text: 'API 参考', link: '/api/' },
      { text: '贡献指南', link: '/contributing' },
      {
        text: 'GitHub',
        link: 'https://github.com/YanYuCloud/Family-AI'
      }
    ],
    
    // 侧边栏
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装', link: '/guide/installation' }
        ]
      },
      {
        text: '核心概念',
        items: [
          { text: '架构设计', link: '/guide/architecture' },
          { text: 'AI Family 系统', link: '/guide/ai-family' },
          { text: 'Family Compass', link: '/guide/family-compass' }
        ]
      },
      {
        text: 'API 参考',
        items: [
          { text: '@yyc3/ai-hub', link: '/api/ai-hub' },
          { text: '@family-ai/core', link: '/api/core' },
          { text: '@family-ai/ui', link: '/api/ui' }
        ]
      },
      {
        text: '更多',
        items: [
          { text: '贡献指南', link: '/contributing' },
          { text: '变更日志', link: '/changelog' }
        ]
      }
    ],
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YanYuCloud/Family-AI' }
    ],
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '© 2026 YanYuCloud Team'
    }
  },
  
  // 构建配置
  build: {
    // 确保所有 markdown 都被处理
    includeMarkdown: ['../README.md', '../packages/*/README.md']
  }
})
```

### **步骤 3: 创建首页**

#### `index.md`

```markdown
---
layout: home
hero:
  name: "YYC³ Claw AI"
  text: "AI Family 智能体框架"
  tagline: 八位拟人化家人 · 统一认证 · MCP协议 · 多模态处理
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/YanYuCloud/Family-AI

features:
  - icon: 🤖
    title: AI Family 智能体
    details: 八位拟人化AI家人，Family Compass时钟罗盘引擎驱动
  - icon: 🔐
    title: 统一认证系统
    details: OpenAI/Ollama/Anthropic 多模型支持，API Key安全管理
  - icon: 🔗
    title: MCP 协议集成
    details: Model Context Protocol 完整实现，工具调用标准化
  - icon: 🎯
    title: 技能系统
    details: 行业技能库 + 自定义技能，可组合、可学习、可推荐
  - icon: 🎨
    title: UI 组件库
    details: React 组件库，即拉即用，完整主题系统
  - icon: 📚
    title: 完整文档
    details: 96/100 A+级文档规范，11个生产级文档，100%链接有效
---
```

### **步骤 4: 复制现有文档**

```bash
# 从项目各处复制现有文档到 docs-site
cp ../README.md ./index-backup.md  # 参考用
cp ../CONTRIBUTING.md ./contributing.md
cp ../CHANGELOG.md ./changelog.md
cp ../packages/ai-hub/ARCHITECTURE.md ./guide/architecture.md
cp ../packages/ai-hub/README.md ./api/ai-hub.md
cp ../packages/claw-core/README.md ./api/core.md
cp ../packages/claw-ui/README.md ./api/ui.md
```

### **步骤 5: 添加构建脚本**

#### `package.json`

```json
{
  "name": "family-ai-docs",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "viteport dev",
    "build": "viteport build",
    "preview": "viteport preview"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "viteport": "^1.0.0"
  }
}
```

### **步骤 6: 本地预览**

```bash
cd /Users/my/yyc3-FAmily-π/docs-site
pnpm install
pnpm dev
# 访问 http://localhost:5173
```

---

## 🌐 部署到生产环境

### **方案 A: Vercel (推荐)**

#### 优点:
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS
- ✅ 自定义域名一键配置
- ✅ 免费额度充足 (100GB/月)

#### 部署步骤:

**1. 安装 Vercel CLI**
```bash
npm i -g vercel
```

**2. 登录并部署**
```bash
cd /Users/my/yyc3-FAmily-π/docs-site
vercel login
vercel --prod
```

**3. 配置自定义域名**
```bash
vercel domains add api.yyccube.com
```

**4. DNS 配置** (在域名管理面板添加)
```
类型: CNAME
名称: api
值: cname.vercel-dns.com
TTL: 3600
```

**5. 自动部署配置** (可选)
创建 `.vercel/project.json`:
```json
{
  "framework": "viteport",
  "buildCommand": "pnpm build",
  "outputDirectory": ".vitepress/dist",
  "installCommand": "pnpm install"
}
```

---

### **方案 B: Netlify (备选)**

#### 部署步骤:

**1. 创建 netlify.toml**
```toml
[build]
  command = "pnpm build"
  publish = ".vitepress/dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**2. 通过 Netlify CLI 部署**
```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod --dir=.vitepress/dist
```

**3. 配置自定义域名**
```bash
netlify domains:add api.yyccube.com
```

---

## 🔄 CI/CD 自动化 (GitHub Actions)

创建 `.github/workflows/docs-deploy.yml`:

```yaml
name: Deploy Docs to Production

on:
  push:
    branches: [main, feature/yyc3-claw-v1]
    paths:
      - 'docs-site/**'
      - 'docs/**'

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
          
      - name: Install dependencies
        run: cd docs-site && pnpm install
        
      - name: Build
        run: cd docs-site && pnpm build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./docs-site
```

---

## 📊 预期效果

### **访问体验**

```
用户打开 https://api.yyccube.com
    ↓
[0.5s] CDN 响应（全球节点）
    ↓
渲染完整的文档站点：
┌──────────────────────────────────────┐
│ 🏠 YYC³ Claw AI                      │
│ ─────────────────────────────────── │
│ [首页] [指南] [架构] [API] [贡献] [GH]│
│                                      │
│  🤖 AI Family 智能体框架             │
│  八位拟人化家人 · 统一认证 · MCP协议  │
│                                      │
│  [🚀 快速开始]  [📖 查看文档]        │
│                                      │
│  ┌────────┐ ┌────────┐ ┌────────┐   │
│  │ 🤖 AI  │ │ 🔐 Auth│ │ 🔗 MCP │   │
│  │ Family │ │ System │ │ Proto  │   │
│  └────────┘ └────────┘ └────────┘   │
│                                      │
│  质量评分: 94.2/100 (A+级)          │
│  测试覆盖: 392 tests | TS错误: 0     │
│                                      │
│  © 2026 YanYuCloud Team             │
└──────────────────────────────────────┘
```

---

## ✅ 部署检查清单

### **部署前**
- [ ] VitePress 本地构建成功 (`pnpm build` 无报错)
- [ ] 所有文档页面可正常访问 (`pnpm dev` 验证)
- [ ] 自定义域名 DNS 已配置 (CNAME → Vercel/Netlify)
- [ ] HTTPS 证书自动签发（Vercel/Netlify 自动处理）

### **部署后**
- [ ] `https://api.yyccube.com` 可访问
- [ ] 所有导航链接工作正常
- [ ] 移动端响应式布局正常
- [ ] SEO meta 标签正确
- [ ] Google Analytics / 统计代码已添加（如需要）

---

## 🛠️ 维护和更新

### **日常更新流程**

```bash
# 1. 更新文档内容
vim packages/ai-hub/README.md

# 2. 同步到 docs-site
cp packages/ai-hub/README.md docs-site/api/ai-hub.md

# 3. 提交并推送
git add .
git commit -m "docs: update ai-hub API reference"
git push origin feature/yyc3-claw-v1

# 4. 自动部署触发（CI/CD）
# 或手动触发: vercel --prod
```

---

## 📞 技术支持

遇到问题？查看：

- **VitePress 官方文档**: https://viteport.dev
- **Vercel 部署指南**: https://vercel.com/docs
- **本项目 Issue**: https://github.com/YanYuCloud/Family-AI/issues

---

## 🎉 下一步行动

**立即执行** (按顺序):

1. ✅ **确认**: 文档站点是否需要立即搭建？
2. 📝 **选择**: Vercel 还是 Netlify？
3. 🚀 **执行**: 运行初始化命令
4. 🌐 **配置**: DNS 解析指向部署平台
5. ✅ **验证**: 访问 `https://api.yyccube.com`

---

**💬 请告诉我您希望采用哪种部署方案？我可以立即帮您实施！**

