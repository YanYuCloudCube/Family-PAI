# 📦 FAmily π³ — 包发布流水线

> **战略原则：一包一包做到极致 → 锁仓发布 → 进入下一个**
> 
> *"不缺源码和技能以及智能体，最适合的方式来"*

---

## 发布顺序与当前状态

```
阶段 1: @yyc3/ai-hub     ⭐ 当前攻坚目标 (beta.1 → v1.0.0)
阶段 2: @yyc3/core       ✅ 已发 v1.2.0 → 待审计升级
阶段 3: @yyc3/ui         ✅ 已发 v1.0.2 → 待精简完善
阶段 4: @yyc3/plugins    ✅ 已发 v1.0.2 → 待瘦身优化
阶段 5: @yyc3/i18n-core  ✅ 已发 v2.2.0 → 最终审计
```

---

## 每个包的完善清单

### 通用检查项（每个包必做）

- [ ] **品牌清洁度**: `grep -r "openclaw\|OpenClaw\|CLAW\|claw-ui\|@family-ai" src/`
- [ ] **README 准确性**: 与实际代码对齐（家人名/功能/API）
- [ ] **package.json**: version/license/repository/publishConfig 正确
- [ ] **构建验证**: `pnpm build` 无错误
- [ ] **类型检查**: `tsc --noEmit` 通过
- [ ] **测试通过**: `vitest run` 全绿
- [ ] **CHANGELOG**: 记录本次变更
- [ ] **exports 配置**: 子路径导出正确

### 包专属检查项

见各包独立文档。

---

## 文档架构索引

| 文档 | 内容 | 状态 |
|------|------|------|
| [PIPELINE.md](./PIPELINE.md) | 本文件 — 发布流水线总览 | ✅ |
| [01-AI-HUB-AUDIT.md](./01-AI-HUB-AUDIT.md) | ai-hub 深度审计 + 修复计划 | 🔴 进行中 |
| [02-CORE-AUDIT.md](./02-CORE-AUDIT.md) | core 审计计划 | ⏳ 待开始 |
| [03-UI-AUDIT.md](./03-UI-AUDIT.md) | ui 精简计划 | ⏳ 待开始 |
| [04-PLUGINS-AUDIT.md](./04-PLUGINS-AUDIT.md) | plugins 瘦身计划 | ⏳ 待开始 |
| [05-I18N-AUDIT.md](./05-I18N-AUDIT.md) | i18n-core 最终审计 | ⏳ 待完成 |

---

## 工作区清理记录

| 项目 | 状态 | 说明 |
|------|------|------|
| 根目录散落 png | ✅ 已清理 | 用户手动处理 |
| public/ vs FAmily AI 实际/ | ⚠️ 待决策 | 旧版17张 vs 新版18张 |
| 归档 i18n 副本 | ✅ 用户确认已处理 | yyc3-i18n/ 归档 |
| 03-团队规范(重复) | ⏳ 待清理 | 与01重叠 |
| clawdbot/moltbot | ⏳ 待决策 | YYC3-i18n 中脏包 |

---

*维护者: 导师 | 更新: 2026-04-22*
