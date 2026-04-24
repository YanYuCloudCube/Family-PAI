# YYC³ AI Family Platform - 项目规则与系统设置

> ***YanYuCloudCube***
> *言启象限 | 语枢未来*
> ***Words Initiate Quadrants, Language Serves as Core for Future***
> *万象归元于云枢 | 深栈智启新纪元*

---

## 项目概览

**项目名称**: YYC³ AI Family Platform (yyc3-FAmily-π)
**品牌标识**: @yyc3/* (NPM包命名空间)
**核心哲学**: 五高五标五化五维
**技术栈**: TypeScript + React + Node.js
**包管理器**: pnpm (>=8.0.0)
**运行环境**: Node.js (>=18.0.0)

---

## 五高架构体系 (High-Level Architecture)

### 高可用 (High Availability)
- **目标**: 99.99% SLA
- **实现**: 无状态设计、故障隔离、快速恢复(<30s)
- **度量**: MTBF、MTTR、可用性百分比

### 高性能 (High Performance)
- **目标**: CPU<70%, 延迟<100ms, QPS>10000
- **优化**: 异步非阻塞、连接池复用、内存缓存
- **AI专项**: 模型量化加速3-5倍, 向量检索<10ms

### 高安全 (High Security)
- **纵深防御**: 边界安全→应用安全→数据安全→运行时安全→供应链安全→合规审计
- **关键措施**: WAF/DDoS防护、认证授权(Zod schema)、输入验证、加密存储、依赖扫描(SBOM)

### 高扩展 (High Scalability)
- **设计原则**: 模块化、插件化、微服务就绪
- **技术手段**: Event-driven架构、水平扩展、容器化(Kubernetes)

### 高智能 (High Intelligence)
- **AI集成**: OpenAI/Anthropic/Ollama多模型支持
- **智能特性**: MCP协议、多Agent协作、情感计算、自然语言处理

---

## 五标规范体系 (Standardization)

### 标准化 (Standardization)
#### 代码规范
```typescript
// ✅ 正确示例: 使用Zod进行运行时验证
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(100),
  email: z.string().email(),
});

type User = z.infer<typeof UserSchema>;
```

#### 命名约定
- **包名**: `@yyc3/{module-name}` (kebab-case)
- **文件名**: `kebab-case.ts` 或 `PascalCase.component.tsx`
- **接口/类型**: `PascalCase` (如 `I18nConfig`, `AuthProvider`)
- **常量**: `UPPER_SNAKE_CASE` (如 `MAX_RETRY_COUNT`)
- **函数/方法**: `camelCase` (如 `translateText`, `validateInput`)

#### 目录结构标准
```
packages/{package-name}/
├── src/
│   ├── index.ts              # 主入口(导出公共API)
│   ├── lib/                  # 内部工具库
│   │   ├── utils/
│   │   ├── types/
│   │   └── constants/
│   ├── modules/              # 功能模块
│   │   ├── auth/
│   │   ├── mcp/
│   │   └── skills/
│   └── tests/                # 测试文件
├── dist/                     # 构建输出(不提交Git)
├── package.json
├── tsconfig.json
├── README.md                 # 必须包含
├── CHANGELOG.md             # 必须包含
└── LICENSE                  # MIT License
```

### 规范化 (Normalization)
#### package.json 必填字段
```json
{
  "name": "@yyc3/package-name",
  "version": "1.0.0",
  "description": "清晰描述包的功能和用途",
  "author": "YYC³ AI Team <yyc3@family.ai>",
  "license": "MIT",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": { ... },
  "files": ["dist", "README.md", "CHANGELOG.md", "LICENSE"],
  "repository": {
    "type": "git",
    "url": "https://github.com/YanYuCloudCube/Family-PAI.git",
    "directory": "packages/{package-name}"
  },
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "keywords": ["yyc3", "..."]  # ❌ 禁止使用 "family-ai", "openclaw" 等旧品牌
}
```

#### Exports 配置规范
```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./sub-module": {
      "import": "./dist/sub-module/index.js",  # 路径必须与实际构建输出匹配
      "types": "./dist/sub-module/index.d.ts"
    }
  }
}
```
**⚠️ 关键规则**: exports声明的路径必须与`dist/`目录下的实际文件完全一致

### 自动化 (Automation)
#### 构建流水线
```bash
# 标准构建命令
pnpm build          # tsup/tsc 构建
pnpm typecheck      # TypeScript类型检查
pnpm lint           # ESLint代码检查
pnpm test           # Vitest单元测试
pnpm test:coverage  # 测试覆盖率报告
```

#### 发布前验证(四步法)
1. **本地模拟安装测试**
   ```bash
   cd /tmp && npm pack /path/to/package && npm install ./package.tgz
   ```
2. **导出完整性扫描**
   ```bash
   node -e "
   const pkg = require('./package.json');
   Object.keys(pkg.exports || {}).forEach(exp => {
     const path = pkg.exports[exp].import || pkg.exports[exp];
     if (!require('fs').existsSync(path)) {
       console.error('❌ Missing export:', exp, '->', path);
       process.exit(1);
     }
   });
   console.log('✅ All exports valid');
   "
   ```
3. **npm dry-run预演**
   ```bash
   npm publish --dry-run
   ```
4. **完整测试套件**
   ```bash
   pnpm test && pnpm typecheck && pnpm lint
   ```

### 可视化 (Visualization)
#### 架构文档要求
- 使用ASCII图表展示模块关系
- 遵循团队模版配置(template_config.yaml)标准
- 包含数据流图、依赖关系图、部署拓扑图

### 智能化 (Intelligence)
#### AI辅助开发
- 集成MCP(Model Context Protocol)支持
- 支持OpenAI/Anthropic/Ollama多模型
- AI翻译质量评估系统
- 智能代码审查建议

---

## 五化转型体系 (Transformation)

### 流程化 (Process-Oriented)
#### 开发工作流
```
需求分析 → 设计评审 → 编码实现 → 单元测试 → 代码审查 → 集成测试 → 发布准备 → 版本发布
```

#### Git提交规范
```
feat: 新功能
fix: Bug修复
docs: 文档更新
style: 代码格式调整
refactor: 重构(不改变功能)
perf: 性能优化
test: 测试相关
chore: 构建/工具链变更
```

### 数字化 (Digitalization)
#### 版本管理(SemVer)
- **主版本(Major)**: 不兼容的API变更
- **次版本(Minor)**: 向后兼容的功能新增
- **修订版本(Patch)**: 向后兼容的问题修复

#### CHANGELOG格式
```markdown
## [1.1.0] - 2026-04-24

### Added
- 新增XXX功能

### Fixed
- 修复XXX问题

### Changed
- 变更XXX行为
```

### 生态化 (Ecosystem-Oriented)
#### 包依赖管理
- **dependencies**: 运行时必需依赖
- **peerDependencies**: 宿主环境提供(如React, OpenAI SDK)
- **devDependencies**: 仅开发时需要
- **optionalDependencies**: 可选功能增强

#### Peer依赖最佳实践
```json
{
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0"
  },
  "peerDependenciesMeta": {
    "react": { "optional": false },
    "react-dom": { "optional": false }
  }
}
```

### 工具化 (Tooling)
#### 开发工具链
| 工具 | 用途 | 配置 |
|------|------|------|
| TypeScript | 类型安全 | tsconfig.json (strict模式) |
| ESLint | 代码质量 | eslint.config.js |
| Prettier | 代码格式 | .prettierrc |
| Vitest | 单元测试 | vitest.config.ts |
| tsup | 打包构建 | tsup.config.ts |

### 服务化 (Service-Oriented)
#### API设计原则
- RESTful风格(或GraphQL)
- 统一错误响应格式
- 版本化API(/api/v1/)
- 完整的TypeScript类型定义

---

## 五维评估体系 (Five-Dimensional Evaluation)

### 时间维 (Time Dimension)
- **开发效率**: 功能交付周期
- **响应速度**: Issue解决时间
- **发布频率**: 版本迭代节奏
- **历史追溯**: Git commit可追踪性

### 空间维 (Space Dimension)
- **代码规模**: 行数、文件数、模块数
- **依赖深度**: 直接/间接依赖数量
- **打包体积**: dist大小(目标<500KB gzipped)
- **覆盖范围**: 测试覆盖率(目标>80%)

### 属性维 (Attribute Dimension)
- **类型安全**: any使用率(目标<5%)
- **代码复杂度**: 圈复杂度(目标<10)
- **重复率**: 代码去重(目标<3%)
- **文档完整性**: API文档覆盖度

### 事件维 (Event Dimension)
- **错误处理**: 异常捕获覆盖率
- **边界情况**: 边界值测试完备性
- **性能基准**: 关键路径响应时间
- **安全漏洞**: 已知CVE数量

### 关联维 (Relationship Dimension)
- **耦合度**: 模块间依赖强度(目标:低耦合)
- **内聚性**: 单一职责原则遵循度
- **向后兼容**: API稳定性
- **生态系统**: 与社区生态集成度

---

## 代码审核清单 (Code Review Checklist)

### 🔴 必须检查(Critical)
- [ ] **品牌一致性**: 无 `family-ai`, `openclaw` 等旧品牌残留
- [ ] **Exports匹配**: package.json exports路径与dist/实际文件完全一致
- [ ] **类型安全**: 无不必要的 `as any` 类型断言
- [ ] **敏感信息**: 无硬编码密钥、Token、密码
- [ ] **错误处理**: 所有可能失败的操作都有try-catch或错误回调

### 🟡 应该检查(Important)
- [ ] **命名规范**: 符合团队命名约定
- [ ] **文档注释**: 公共API有完整的JSDoc/TSDoc
- [ ] **测试覆盖**: 新功能有对应的单元测试
- [ ] **性能考量**: 无明显的O(n²)或更差算法
- [ ] **安全性**: 用户输入经过验证和消毒

### 🟢 建议检查(Nice-to-have)
- [ ] **代码简洁**: 无冗余逻辑或死代码
- [ ] **可读性**: 复杂逻辑有清晰注释
- [ ] **可维护性**: 魔术数字提取为命名常量
- [ ] **可扩展性**: 设计支持未来功能扩展
- [ ] **日志记录**: 关键操作有适当的日志输出

---

## 包发布标准 (Package Publishing Standards)

### 发布前最终检查
```bash
# 1. 确保工作区干净
git status

# 2. 运行完整测试
pnpm test && pnpm typecheck && pnpm lint

# 3. 验证exports
node -e "const pkg=require('./package.json');Object.keys(pkg.exports||{}).forEach(e=>{const p=pkg.exports[e].import||pkg.exports[e];if(!require('fs').existsSync(p)){console.error('MISSING:',e,'->',p);process.exit(1)}});console.log('✅ OK')"

# 4. 本地pack测试
npm pack --dry-run

# 5. 发布
npm publish --access public
```

### 质量门槛
| 指标 | 最低标准 | 目标 |
|------|----------|------|
| TypeScript strict模式 | ✅ 必须 | ✅ |
| 测试覆盖率 | >70% | >85% |
| ESLint零错误 | ✅ 必须 | ✅ |
| 类型错误 | 0 | 0 |
| 文档完整性 | README+CHANGELOG+LICENSE | +API Docs |
| 打包体积 | <1MB | <500KB(gzipped) |

---

## 团队协作文档闭环 (Team Collaboration Document Lifecycle)

### 文档标准(基于YYC3-团队规范-文档闭环.md)
1. **必须包含品牌头部**(YanYuCloudCube标识)
2. **必须包含元数据**(作者、版本、日期、状态、标签)
3. **必须包含核心理念**(五高五标五化五维)
4. **必须包含品牌底部**(版权声明)
5. **最小长度**: 500字符
6. **最大长度**: 100,000字符

### 文档版本控制
- **自动校验和**: 内容hash验证
- **版本自动递增**: 遵循SemVer
- **变更日志**: 记录所有修改
- **关联文档追踪**: 维护文档间引用关系

---

## 当前包状态总览 (2026-04-24 Ultimate Audit)

### ✅ 已审核通过的包

| 包名 | 版本 | Exports | 品牌 | 文档 | 状态 |
|------|------|---------|------|------|------|
| @yyc3/ai-hub | 1.0.0 | ✅ 4/4匹配 | ✅ 清洁 | ✅ 完整 | 🟢 Ready |
| @yyc3/core | 1.3.0 | ✅ 6/6匹配 | ✅ 已修复 | ✅ 完整 | 🟢 Ready |
| @yyc3/ui | 1.1.1 | ✅ 5/5匹配 | ✅ 已修复 | ✅ 完整 | 🟢 Published |
| @yyc3/i18n-core | 2.3.0 | ✅ 6/6匹配 | ✅ 清洁 | ✅ 完整 | 🟢 Ready |

### ⚠️ 待处理项
- **plugins包**: packages/plugins目录不存在，需确认是否需要创建或已归档

---

## 常用命令速查 (Quick Reference)

```bash
# 工作区操作
pnpm install                    # 安装所有依赖
pnpm build                      # 构建所有包
pnpm test                       # 运行所有测试
pnpm typecheck                  # 类型检查所有包
pnpm lint                       # Lint检查

# 单包操作
pnpm --filter @yyc3/core build  # 构建指定包
pnpm --filter @yyc3/core test   # 测试指定包

# 发布流程
npm publish --dry-run           # 预演发布(不实际发布)
npm publish --access public     # 正式发布到NPM

# 质量检查
pnpm test:coverage              # 生成覆盖率报告
pnpm typecheck                  # TypeScript严格检查
```

---

## 联系方式与支持

- **团队邮箱**: admin@0379.email
- **GitHub仓库**: https://github.com/YanYuCloudCube/Family-PAI
- **问题反馈**: https://github.com/YanYuCloudCube/Family-PAI/issues
- **NPM组织**: https://www.npmjs.com/org/yyc3

---

<div align="center">

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for the Future***」
> 「***All things converge in cloud pivot; Deep stacks ignite a new era of intelligence***」

**© 2025-2026 YYC³ Team. All Rights Reserved.**
**Generated: 2026-04-24 | Ultimate Audit Edition v1.0.0**

</div>
