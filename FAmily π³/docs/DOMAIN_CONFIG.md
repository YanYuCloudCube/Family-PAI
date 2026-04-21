# FAmily π³ 域名与部署配置

## 域名信息

| 域名 | 用途 | DNS 状态 |
|------|------|----------|
| **api.yyccube.com** | API 文档站 (GitHub Pages) | ✅ DNS check successful |
| **ai.yyccube.com** | AI 应用站 (GitHub Pages) | ✅ DNS check successful |

## GitHub Pages 配置

### 自动部署触发条件
- 推送到 `main` 分支时自动部署
- 手动触发 `workflow_dispatch`

### CNAME 配置
- 文件位置: `/CNAME`
- 内容: `api.yyccube.com`

### PWA Manifest
- 文件位置: `/public/manifest.json`
- 应用名称: FAmily π³
- 主题色: `#4F46E5` (π 紫)

## Repository Variables (已配置)

| 变量名 | 用途 | 最后更新 |
|--------|------|----------|
| `YYC_GIT_HUB_TOKEN` | GitHub PAT (完整权限) | yesterday |
| `YYC_GIT_TOKEN` | GitHub PAT (基础权限) | yesterday |
| `YYC_NPM_TOKEN` | NPM 发布令牌 | yesterday |

## 访问地址

```
主文档站: https://api.yyccube.com
API 文档: https://api.yyccube.com/API_REFERENCE.html
GitHub:   https://github.com/YanYuCloud/Family-AI
NPM:      https://www.npmjs.com/org/family-pai
```

## DNS 配置说明

### api.yyccube.com
```
类型: CNAME
值:  yanyucloud.github.io.
TTL: 3600
状态: ✅ 已验证
```

### ai.yyccube.com
```
类型: CNAME
值:  yanyucloud.github.io.
TTL: 3600
状态: ✅ 已验证
```
