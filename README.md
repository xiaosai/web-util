# web-util

PC 端常用工具集，包含 JSON 解析、时间戳转换、ASCII 表等实用工具。

## 技术栈

- **前端框架**: React 18.x + React Router v6
- **构建工具**: Vite 4.x
- **UI库**: Ant Design 5.x
- **样式**: SCSS (Dart Sass)
- **语言**: TypeScript 4.9+
- **包管理工具**: pnpm
- **代码质量**: ESLint + Prettier
- **测试**: Jest + React Testing Library (计划中)

## 项目结构

```
src/
├── components/        # 通用组件
├── pages/            # 页面组件
│   ├── JsonBeautifier/     # JSON 格式化工具
│   ├── TimestampConverter/ # 时间戳转换工具
│   └── AsciiTable/         # ASCII 表工具
├── utils/            # 工具函数
├── hooks/            # 自定义 hooks
├── styles/           # 全局样式
├── routes/           # 路由配置
└── App.tsx
```

## 功能介绍

### 1. JSON 格式化工具
- 左右布局设计，左侧为输入框，右侧为格式化结果展示区
- 支持 JSON 字符串的格式化和美化显示
- 提供语法校验和错误提示功能

### 2. 时间戳转换工具
- 双向转换功能：
  - 日期时间转时间戳
  - 时间戳转日期时间
- 支持多种日期时间格式
- 实时转换显示

### 3. ASCII 表查看器
- 完整展示 ASCII 字符集 (0-127)
- 友好美观的表格展示形式
- 显示字符、十进制值、十六进制值和描述信息

## 开发指南

### 环境要求
- Node.js >= 16
- pnpm >= 8

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm dev
```

### 构建生产版本
```bash
pnpm build
```

## 扩展性设计

项目采用模块化设计，便于后续添加新工具：

1. 在 `src/pages/` 目录下创建新的工具页面组件
2. 在路由配置中添加新页面的路由信息
3. 在顶部导航栏配置中添加新工具的菜单项

每个工具页面相对独立，互不影响，确保了项目的可维护性和可扩展性。