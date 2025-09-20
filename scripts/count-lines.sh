#!/bin/bash

# 代码行数统计脚本
# 用于统计项目中 JavaScript/TypeScript 和 CSS/SCSS 代码行数

echo "========================================"
echo "           代码行数统计工具"
echo "========================================"
echo ""

# 获取项目根目录（向上两级目录）
PROJECT_ROOT=$(cd ../ && pwd)

echo "项目路径: $PROJECT_ROOT"
echo ""

# 统计 JavaScript 和 TypeScript 文件
echo "JavaScript/TypeScript 代码统计:"
echo "----------------------------------------"
find "$PROJECT_ROOT/src" -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | xargs wc -l
JS_TOTAL=$(find "$PROJECT_ROOT/src" -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | xargs cat 2>/dev/null | wc -l)
echo "JavaScript/TypeScript 总行数: $JS_TOTAL"
echo ""

# 统计 CSS 和 SCSS 文件
echo "CSS/SCSS 代码统计:"
echo "----------------------------------------"
find "$PROJECT_ROOT/src" -name "*.css" -o -name "*.scss" | xargs wc -l
CSS_TOTAL=$(find "$PROJECT_ROOT/src" -name "*.css" -o -name "*.scss" | xargs cat 2>/dev/null | wc -l)
echo "CSS/SCSS 总行数: $CSS_TOTAL"
echo ""

# 统计总行数
TOTAL=$((JS_TOTAL + CSS_TOTAL))
echo "========================================"
echo "总代码行数: $TOTAL"
echo "========================================"