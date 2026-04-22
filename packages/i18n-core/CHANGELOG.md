# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-04-21

### Added

- ✨ **ICU MessageFormat Engine** — Full parser + compiler supporting plural, select, selectOrdinal, number, date, time, offset, `#` placeholder (12 ICU syntax types, 9 locale plural rules)
- ✨ **AI/LLM Translation Layer** — `AIProviderManager` with `OpenAIProvider` (GPT-4o-mini) and `OllamaProvider` (Qwen2.5:3b) for zero-cost local translation
- ✨ **Translation Quality Estimation** — `QualityEstimator` with 6 built-in rules (empty-translation, source-leak, placeholder-mismatch, glossary-violation, length-anomaly, html-tag-preservation) + custom rule API
- ✨ **MCP Server** — Model Context Protocol server with 7 i18n tools (search_translations, add_translation_key, translate_key, check_missing_keys, get_locale_stats, set_locale, quality_report)
- ✨ **MCP Stdio Transport** — Content-Length framed stdio transport for CLI integration
- ✨ **Chinese Detector** — AST-level hardcoded Chinese string detection for .ts/.tsx/.js/.jsx/.vue/.svelte files
- ✨ **ICU + Engine Integration** — `engine.t()` auto-detects ICU syntax and routes to ICU compiler
- ✨ **Engine.getTranslations()** — New public API for direct locale translation map access
- ✨ **ESLint Configuration** — `.eslintrc.json` with TypeScript strict rules

### Changed

- 📦 Version bumped to 2.1.0
- 📦 Package exports now include `./icu`, `./ai`, `./mcp` sub-paths
- 📦 Keywords expanded with icu-messageformat, mcp, ai-translation, quality-estimation, ast-extraction

### Tests

- 🧪 443 tests / 28 files (up from 346/21)
- 🧪 Coverage: Lines 93.12%, Functions 86.07%, Statements 93.12%, Branches 82.95%
- 🧪 New test suites: ai/providers, mcp/stdio-transport, mcp/i18n-tools, cli/chinese-detector, icu/parser-compiler

## [2.0.0] - 2026-04-14

### Added
- ✨ **LRU Cache System** - High-performance caching with TTL support and automatic eviction
- ✨ **Plugin Architecture** - Extensible system with lifecycle hooks (init, destroy)
- ✨ **Built-in Plugins**:
  - `ConsoleLogger` - Development debugging with colored output
  - `MissingKeyReporter` - Production quality monitoring with auto-export
  - `PerformanceTracker` - Performance metrics with percentile calculations
- ✨ **Batch Translation API** - `batchTranslate()` for optimizing multiple key lookups
- ✨ **Namespace Support** - `createNamespace()` for modular translation organization
- ✨ **Debug Mode** - Browser-based debug utilities (`window.__i18n_debug__`)
- ✨ **Statistics Engine** - Comprehensive metrics via `getStats()`
- ✨ **Enhanced TypeScript Types** - Strict mode, improved generics
- ✨ **Error Handling Hooks** - Custom `onError` and `missingKeyHandler`
- ✨ **Multi-instance Support** - Create multiple independent I18nEngine instances
- ✨ **Complete Documentation** - 1500+ lines of API docs and guides
- ✨ **42 Unit Tests** - 100% pass rate covering all core functionality

### Changed
- ⚡ **10x Performance Improvement** - LRU cache reduces translation time from 0.5ms to 0.05ms
- 📦 **25% Memory Reduction** - Optimized data structures and cache management
- 🔧 **Renamed Core Class** - `I18nManager` → `I18nEngine` (better reflects functionality)
- 🔄 **ESM-only Exports** - Tree-shakeable ES modules for smaller bundles
- 📝 **Improved Error Messages** - More descriptive errors with context information
- 🎯 **Stricter Type Safety** - Enhanced TypeScript strict mode compliance

### Fixed
- 🐛 **Memory Leak in Subscriptions** - Proper cleanup on unsubscribe/destroy
- 🐛 **Cache Invalidation Race Condition** - Thread-safe cache operations
- 🐛 **Plugin Context Loss** - Fixed `this` binding issues in plugin methods
- 🐛 **Missing Key Fallback** - Improved fallback chain for missing translations
- 🐛 **Locale Persistence Bug** - Fixed localStorage read/write edge cases

### Breaking Changes
- 💥 **Import Path Changes**:
  - Old: `import { i18n } from '@yyc3/i18n'`
  - New: `import { i18n } from '@yyc3/i18n-core'`
  
- 💥 **Plugin Interface Update**:
  - Renamed hooks for consistency
  - Added required `name` property
  
- 💥 **Configuration Format**:
  - Cache config moved to nested object
  - Debug mode is now a boolean flag

### Migration Guide
See [MIGRATION.md](./docs/migration-v2.md) for detailed migration instructions.

---

## [1.0.0] - 2026-04-01

### Added
- Initial release of YYC³ i18n solution
- Basic translation engine
- Locale switching support
- Parameter interpolation
- Fallback locale mechanism
- Browser localStorage persistence
- 9 foundational unit tests
- Integration with OpenClaw UI project

---

## [Unreleased]

### Planned Features
- ICU MessageFormat support (plurals, select, dates)
- React/Vue/Angular framework adapters
- SSR/Hydration support (Next.js, Nuxt)
- VS Code extension for translation key management
- CLI tool for extracting and managing translation keys
- Translation file validation and linting
- Automatic translation suggestions via AI
- Collaborative translation platform integration
- Performance monitoring dashboard
- Real-time translation updates (hot reload)

### Under Consideration
- Message compilation for better performance
- Lazy loading of translation files per namespace
- Custom interpolation syntax support
- Pluralization rules for different languages
- Gender-aware translations
- RTL layout automation tools
- Accessibility improvements for screen readers
- Offline translation caching strategies
- WebSocket-based live translation updates

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 2.0.0 | 2026-04-14 | Major release: Plugin architecture, cache system, production-ready |
| 1.0.0 | 2026-04-01 | Initial release: Basic translation functionality |

---

## Contributors

- **YYC³ Team** - Core development and architecture
- Community contributors (see GitHub contributor graph)

---

## Links

- [GitHub Releases](https://github.com/YanYuCloudCube/yyc3-i18n-core/releases)
- [npm Package](https://www.npmjs.com/package/@yyc3/i18n-core)
- [Documentation](./docs/api-documentation.md)
- [Migration Guide](./docs/migration-v2.md)

---

*For questions about changes, please open an issue on GitHub.*
