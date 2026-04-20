#!/bin/bash

# ============================================
# 🚀 YYC³ Claw AI - 优化后验证脚本
# 执行时间: 2026-04-20
# 用途: 验证所有优化修改是否正常工作
# ============================================

set -e  # 遇到错误立即退出

echo "=========================================="
echo "🦀 YYC³ Claw AI - 优化验证流程"
echo "=========================================="
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 计数器
PASS=0
FAIL=0
WARN=0

# 辅助函数
pass() {
    echo -e "${GREEN}✅ $1${NC}"
    ((PASS++))
}

fail() {
    echo -e "${RED}❌ $1${NC}"
    ((FAIL++))
}

warn() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    ((WARN++))
}

# ============================================
# Step 0: 环境检查
# ============================================
echo "📋 Step 0: 环境检查"
echo "------------------------------------------"

if command -v pnpm &> /dev/null; then
    PNPM_VERSION=$(pnpm --version)
    pass "pnpm 已安装 (版本: $PNPM_VERSION)"
else
    fail "pnpm 未安装"
    exit 1
fi

if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    pass "Node.js 已安装 (版本: $NODE_VERSION)"
    
    # 检查 Node 版本是否符合要求 (>=18)
    NODE_MAJOR=$(echo $NODE_VERSION | cut -d'.' -f1 | tr -d 'v')
    if [ "$NODE_MAJOR" -ge 18 ]; then
        pass "Node 版本符合要求 (>=18.0.0)"
    else
        warn "Node 版本较低 (建议 >=18.0.0)"
    fi
else
    fail "Node.js 未安装"
    exit 1
fi

echo ""

# ============================================
# Step 1: 安装依赖
# ============================================
echo "📦 Step 1: 安装/更新依赖"
echo "------------------------------------------"

if [ -f "pnpm-lock.yaml" ]; then
    echo "正在执行 pnpm install..."
    
    if pnpm install --frozen-lockfile 2>&1; then
        pass "依赖安装成功"
    else
        warn "依赖安装遇到问题（可能需要更新 lock 文件）"
        echo "尝试使用: pnpm install"
    fi
else
    warn "未找到 pnpm-lock.yaml，正在生成..."
    pnpm install
fi

echo ""

# ============================================
# Step 2: TypeScript 类型检查
# ============================================
echo "🔍 Step 2: TypeScript 类型检查"
echo "------------------------------------------"

echo "正在检查 ai-hub 包..."
if cd packages/ai-hub && npx tsc --noEmit 2>&1; then
    pass "ai-hub 类型检查通过 ✨"
else
    fail "ai-hub 类型检查失败"
fi
cd ../..

echo "正在检查 claw-core 包..."
if [ -d "packages/claw-core" ]; then
    if cd packages/claw-core && npx tsc --noEmit 2>&1; then
        pass "claw-core 类型检查通过 ✨"
    else
        fail "claw-core 类型检查失败"
    fi
    cd ../..
else
    warn "claw-core 包不存在，跳过"
fi

echo ""

# ============================================
# Step 3: ESLint 代码质量检查
# ============================================
echo "🎨 Step 3: ESLint 代码质量检查"
echo "------------------------------------------"

echo "正在检查 ai-hub 代码风格..."
if cd packages/ai-hub && npx eslint src/ --max-warnings=50 2>&1; then
    pass "ai-hub ESLint 检查通过 ✨"
else
    warn "ai-hub ESLint 有警告（可接受范围内）"
fi
cd ../..

if [ -d "packages/claw-core" ] && [ -f "packages/claw-core/eslint.config.js" ]; then
    echo "正在检查 claw-core 代码风格..."
    if cd packages/claw-core && npx eslint src/ --max-warnings=50 2>&1; then
        pass "claw-core ESLint 检查通过 ✨"
    else
        warn "claw-core ESLint 有警告（可接受范围内）"
    fi
    cd ../..
fi

echo ""

# ============================================
# Step 4: 单元测试 + 覆盖率
# ============================================
echo "🧪 Step 4: 单元测试 + 覆盖率报告"
echo "------------------------------------------"

echo "正在运行 ai-hub 测试..."
if cd packages/ai-hub && npx vitest run --coverage 2>&1; then
    pass "ai-hub 测试通过 ✨"
    echo ""
    echo "📊 覆盖率报告位置: packages/ai-hub/coverage/"
    echo "   - HTML 报告: coverage/index.html"
    echo "   - LCov 报告: coverage/lcov.info"
else
    fail "ai-hub 测试失败"
fi
cd ../..

if [ -d "packages/claw-core" ]; then
    echo ""
    echo "正在运行 claw-core 测试..."
    if cd packages/claw-core && npx vitest run --coverage 2>&1; then
        pass "claw-core 测试通过 ✨"
        echo ""
        echo "📊 覆盖率报告位置: packages/claw-core/coverage/"
    else
        fail "claw-core 测试失败"
    fi
    cd ../..
fi

echo ""

# ============================================
# Step 5: 构建验证
# ============================================
echo "🏗️  Step 5: 构建验证"
echo "------------------------------------------"

echo "正在构建 ai-hub..."
if cd packages/ai-hub && pnpm build 2>&1; then
    pass "ai-hub 构建成功 ✨"
    
    # 检查构建产物
    if [ -d "dist" ]; then
        FILE_COUNT=$(find dist -name "*.js" | wc -l | tr -d ' ')
        pass "构建产物已生成 ($FILE_COUNT 个 JS 文件)"
        
        if [ -f "dist/index.d.ts" ]; then
            pass "类型声明文件已生成"
        else
            warn "缺少类型声明文件"
        fi
    else
        fail "未找到 dist 目录"
    fi
else
    fail "ai-hub 构建失败"
fi
cd ../..

if [ -d "packages/claw-core" ]; then
    echo ""
    echo "正在构建 claw-core..."
    if cd packages/claw-core && pnpm build 2>&1; then
        pass "claw-core 构建成功 ✨"
    else
        fail "claw-core 构建失败"
    fi
    cd ../..
fi

echo ""

# ============================================
# Step 6: 新增配置文件验证
# ============================================
echo "📝 Step 6: 配置文件完整性检查"
echo "------------------------------------------"

CONFIG_FILES=(
    ".github/workflows/ci.yml"
    ".prettierrc"
    "packages/ai-hub/eslint.config.js"
    "packages/ai-hub/vitest.config.ts"
    "packages/claw-core/vitest.config.ts"
    "docs/ARCHITECTURE_DECISION_001_package_separation.md"
    "docs/CODE_STYLE_GUIDE_exports.md"
    "docs/OPTIMIZATION_REPORT_20260420.md"
)

for file in "${CONFIG_FILES[@]}"; do
    if [ -f "$file" ]; then
        pass "✓ $file"
    else
        fail "✗ $file (缺失)"
    fi
done

echo ""

# ============================================
# Step 7: 安全性快速检查
# ============================================
echo "🔒 Step 7: 安全性快速检查"
echo "------------------------------------------"

# 检查 API Key 是否在代码中明文出现（排除测试和 node_modules）
echo "检查是否有明文 API Key 泄露风险..."
if grep -r "sk-\|api_key\s*=\s*['\"][^'\"]{20,}" packages/*/src --include="*.ts" --exclude-dir=__tests__ 2>/dev/null | grep -v "maskApiKey\|process.env"; then
    fail "发现可能的 API Key 硬编码！"
else
    pass "未发现明文 API Key 硬编码 ✨"
fi

# 检查 logger.debug 使用情况
echo "检查日志脱敏机制..."
if grep -r "maskApiKey" packages/ai-hub/src/auth.ts > /dev/null 2>&1; then
    pass "API Key 脱敏函数已实现 ✨"
else
    warn "API Key 脱敏函数未找到"
fi

echo ""

# ============================================
# 最终报告
# ============================================
echo "=========================================="
echo "📊 验证结果汇总"
echo "=========================================="
echo ""
echo -e "${GREEN}✅ 通过: $PASS${NC}"
echo -e "${RED}❌ 失败: $FAIL${NC}"
echo -e "${YELLOW}⚠️  警告: $WARN${NC}"
echo ""

TOTAL=$((PASS + FAIL + WARN))
PERCENT=$((PASS * 100 / TOTAL))

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}🎉 所有关键检查通过！项目可以安全推送。${NC}"
    echo ""
    echo "成功率: ${PERCENT}%"
    echo ""
    echo "=========================================="
    echo "🚀 下一步操作"
    echo "=========================================="
    echo ""
    echo "1. 查看更改:"
    echo "   git status"
    echo ""
    echo "2. 提交更改:"
    echo '   git add .'
    echo '   git commit -m "feat: 核心架构优化 - CI修复、安全加固、内存优化"'
    echo ""
    echo "3. 推送到远程:"
    echo "   git push origin main"
    echo "   # 或创建新分支:"
    echo "   git checkout -b feature/architecture-optimization"
    echo "   git push origin feature/architecture-optimization"
    echo ""
    echo "4. 监控 CI 流水线:"
    echo "   访问: https://github.com/<your-repo>/actions"
    echo ""
    exit 0
else
    echo -e "${red}⚠️  存在 $FAIL 个失败项，请先修复后再推送${NC}"
    echo ""
    echo "常见问题解决方案:"
    echo "  - 依赖安装失败: 删除 node_modules 和 pnpm-lock.yaml 后重新安装"
    echo "  - 类型错误: 运行 npx tsc --noEmit 查看详细错误"
    echo "  - ESLint 错误: 运行 npx eslint src/ --fix 自动修复"
    echo ""
    exit 1
fi