<p align="center">
  <a href="https://github.com/YanYuCloudCube/Family-PAI">
    <img src="https://github.com/YanYuCloudCube/Family-PAI/raw/main/assets/banner-i18n-core.svg" alt="@yyc3/i18n-core" width="100%" />
  </a>
</p>

<p align="center">
  <strong>自研中文国际化框架 · 开源免费 · 随心所用</strong><br>
  <em>Zero-dependency · Plugin-based · AI-Powered · MCP Integrated · Standalone</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@yyc3/i18n-core"><img src="https://img.shields.io/npm/v/@yyc3/i18n-core.svg?style=flat-square&color=blue" alt="npm" /></a>
  <a href="https://github.com/YanYuCloudCube/Family-PAI/blob/main/归档文件/yyc3-i18n/LICENSE"><img src="https://img.shields.io/npm/l/@yyc3/i18n-core.svg?style=flat-square&color=brightgreen" alt="MIT License" /></a>
  <a href="https://github.com/YanYuCloudCube/Family-PAI"><img src="https://img.shields.io/badge/docs-GitHub-blue.svg?style=flat-square" alt="Documentation" /></a>
  <br/>
  <img src="https://img.shields.io/badge/TypeScript-5.3+-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/node/v/%3E%3D16.0.0.svg?style=flat-square&color=339933" alt="Node.js" />
  <img src="https://img.shields.io/badge/dependencies-0-success?style=flat-square" alt="Zero Dependencies" />
  <br/>
  <img src="https://img.shields.io/badge/tests-443%20passed-brightgreen?style=flat-square" alt="443 Tests" />
  <img src="https://img.shields.io/badge/coverage-92.5%25-brightgreen?style=flat-square" alt="92.5% Coverage" />
  <img src="https://img.shields.io/badge/security-OWASP%20L4-blue?style=flat-square" alt="OWASP L4" />
</p>

---

**English** | [中文文档](docs/guide/getting-started.md)

## What is this?

**@yyc3/i18n-core** is an independent, zero-dependency internationalization framework. It is not tied to any specific project — use it anywhere, anytime, however you want.

### Why another i18n library?

| | @yyc3/i18n-core | react-i18next | vue-i18n | typesafe-i18n |
|---|:-:|:-:|:-:|:-:|
| Dependencies | **0** | 3+ | 2+ | 0 |
| Bundle size | **~15KB** | ~33KB | ~1.5MB | ~1KB |
| AI Translation | **Built-in** | Plugin | Plugin | None |
| MCP Protocol | **Built-in** | None | None | None |
| ICU MessageFormat | **Built-in** | Plugin | Basic | Basic |
| RTL Support | **Native** | Config | Config | None |
| Security | **OWASP L4** | Basic | Basic | None |
| Chinese Native | **10 langs** | Config | Config | Config |

## Install

```bash
npm install @yyc3/i18n-core
```

## Quick Start

```typescript
import { i18n, t } from '@yyc3/i18n-core';

// That's it. No config needed.
t('common.welcome'); // "Welcome"

// Switch language anytime
await i18n.setLocale('zh-CN');
t('common.welcome'); // "欢迎"

// Interpolation
t('greeting', { name: 'World' }); // "你好，World！"

// ICU plural rules
t('items', { count: 5 }); // "5 个项目"
```

## Core Features

### 🌍 10 Languages Out of the Box
`en` `zh-CN` `zh-TW` `ja` `ko` `fr` `de` `es` `pt-BR` `ar` (RTL)

### 🤖 AI Translation (LLM-Powered)
```typescript
import { AIProviderManager, OpenAIProvider } from '@yyc3/i18n-core';

const ai = new AIProviderManager();
ai.register(new OpenAIProvider({ apiKey: 'your-key' }));

const result = await ai.translate({
  sourceText: 'Hello World',
  sourceLocale: 'en',
  targetLocale: 'zh-CN',
});
```

### 🔌 MCP Server (Claude / Cursor / AI Tools)
```typescript
import { MCPServer, registerI18nTools, StdioTransport } from '@yyc3/i18n-core';

const server = new MCPServer({
  name: 'i18n-tools',
  version: '2.1.0',
  transport: new StdioTransport(),
});
registerI18nTools(server);
await server.start();
```

### 🛡️ Enterprise Security
- **ReDoS Protection** — Safe regex compilation
- **Timing Attack Prevention** — Constant-time comparison
- **Path Traversal Guards** — Directory escape prevention
- **Dangerous Operation Detection** — SQL/Command injection patterns
- **Cryptographic Random** — No `Math.random()` anywhere

### ⚡ High Performance
- **LRU Cache** — <0.1ms on cache hit
- **Tree-Shakeable** — ESM exports, only import what you need
- **Lazy Loading** — Translations load on demand
- **Batch API** — Translate hundreds of keys in one call

### 🔌 Plugin System
```typescript
import { createConsoleLogger, MissingKeyReporter, PerformanceTracker } from '@yyc3/i18n-core';

// Built-in plugins
i18n.plugins.register(createConsoleLogger());
i18n.plugins.register(new MissingKeyReporter().createPlugin());
i18n.plugins.register(new PerformanceTracker({ slowThreshold: 10 }).createPlugin());

// Custom plugin
i18n.plugins.register({
  name: 'my-plugin',
  beforeTranslate(key) { /* ... */ },
  afterTranslate(result, key) { /* ... */ },
  onLocaleChange(from, to) { /* ... */ },
});
```

### ↔️ RTL Support
```typescript
import { isRTL, setupDocumentDirection, flipSpacing } from '@yyc3/i18n-core';

isRTL('ar'); // true
setupDocumentDirection('ar'); // Sets <html dir="rtl">
flipSpacing({ marginLeft: 10, marginRight: 20 }, 'rtl'); // Swapped
```

## Architecture

```
Application Layer (React / Vue / Angular / Lit / Node.js)
         │
    Public API
    ┌────┴────────────────────────────────┐
    │ Core Engine  Formatter  Detector    │
    │ RTL Utils    AI Provider  MCP Server│
    │ ICU Engine   Plugin Manager         │
    └─────────────────────────────────────┘
    ┌──────────────┬──────────────────────┐
    │ Infrastructure│  Security           │
    │ Backoff/Retry│  Safe Regex          │
    │ Rate Limiter │  Timing-safe Eq      │
    │ Secure Random│  Path Guards         │
    │ Logger       │  Danger Ops Detect   │
    └──────────────┴──────────────────────┘
         │
    Data Layer
    en · zh-CN · zh-TW · ja · ko · fr · de · es · pt-BR · ar
```

## Documentation

🌐 **Full docs**: [GitHub](https://github.com/YanYuCloudCube/Family-PAI)

| | 🇨🇳 中文 | 🇺🇸 English |
|---|:---:|:---:|
| Getting Started | [快速开始](docs/guide/getting-started.md) | [Quick Start](docs/en/guide/getting-started.md) |
| API Reference | [API 参考](docs/api/index.md) | [API Reference](docs/api/index.md) |
| Examples | [示例集](docs/guide/examples.md) | [Examples](docs/guide/examples.md) |

## Development

```bash
git clone https://github.com/YanYuCloudCube/yyc3-i18n-core.git
cd i18n-core
npm install
npm test          # 443 tests
npm run build     # TypeScript compile
npm run lint      # ESLint check
```

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) — Free to use, modify, and distribute. No strings attached.

---

<div align="center">

**⭐ Star this repo if it helps you!**

Made with ❤️ by [YYC³ AI Team](https://github.com/YanYuCloudCube/Family-PAI)

</div>
