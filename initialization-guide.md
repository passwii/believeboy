# Next.js 项目初始化指南

## 命令行初始化步骤

```bash
# 1. 创建 Next.js 项目 (使用 TypeScript 和 Tailwind CSS)
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. 安装额外依赖 (开发阶段可能需要的包)
npm install @types/node lucide-react framer-motion

# 3. 安装Ant Design UI组件库
npm install antd @ant-design/nextjs-registry

# 4. 运行开发服务器
npm run dev
```

## 项目配置文件详情

### package.json 脚本
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### tailwind.config.js 基础配置
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### tsconfig.json 基础配置
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 开发环境设置

1. **代码编辑器推荐**: VS Code
2. **推荐扩展**:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Prettier - Code formatter

3. **浏览器开发工具**: React Developer Tools

## 开始开发流程

1. 初始化项目
2. 创建基础文件结构
3. 设置全局样式和主题
4. 创建基础组件
5. 开发主页各个区域
6. 创建其他页面
7. 优化和部署

## 注意事项

- 使用 App Router (src/app 目录)
- 所有组件使用 TypeScript
- 样式使用 Tailwind CSS
- 图片使用 Next.js Image 组件优化
- 保持代码简洁和模块化