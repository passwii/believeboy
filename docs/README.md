# Believeboy 官网

> AI 驱动的数字化转型专家

企业级官网项目，展示 AI 赋能服务、成功案例、定价方案及公司信息。

## 项目简介

Believeboy 是一家专注于 AI 赋能的数字化转型公司，帮助企业通过人工智能技术提升业务效率、优化运营流程、创造商业价值。

本项目是企业官网，包含以下功能模块：

- 🏠 **首页** - 品牌展示与核心服务介绍
- 👥 **关于我们** - 公司介绍、团队展示、企业文化
- 🛠️ **服务介绍** - AI 咨询、智能应用开发、培训等核心服务
- 🤖 **AI 赋能** - AI 技术能力与解决方案展示
- 📊 **案例展示** - 成功案例与客户评价
- 💰 **定价方案** - 灵活的定价策略
- 📧 **联系我们** - 联系方式与表单
- 📝 **博客中心** - 技术文章与行业洞察

## 技术栈

### 核心框架

| 技术 | 版本 | 说明 |
|------|------|------|
| [Next.js](https://nextjs.org) | 16.1.6 | React 全栈框架，静态导出 |
| [React](https://react.dev) | 19.0.0 | UI 组件库 |
| [TypeScript](https://www.typescriptlang.org) | 5.7.3 | 类型安全的 JavaScript |
| [Tailwind CSS](https://tailwindcss.com) | 4.0.1 | 实用优先的 CSS 框架 |

### UI 组件

| 技术 | 说明 |
|------|------|
| [shadcn/ui](https://ui.shadcn.com) | 现代化的 React 组件库 |
| [Radix UI](https://www.radix-ui.com) | 无头 UI 组件基础 |
| [Lucide Icons](https://lucide.dev) | 现代化图标库 |

### 动画效果

| 技术 | 说明 |
|------|------|
| Framer Motion | React 动画库 |
| CSS Animations | 原生 CSS 动画 |

## 项目结构

```
├── app/                      # Next.js App Router
│   ├── (marketing)/          # 营销页面路由组
│   │   ├── about/            # 关于我们
│   │   ├── ai-empowerment/   # AI 赋能
│   │   ├── cases/            # 案例展示
│   │   ├── contact/          # 联系我们
│   │   ├── pricing/          # 定价方案
│   │   └── services/         # 服务介绍
│   ├── blog/                 # 博客模块
│   │   ├── page.tsx          # 博客列表
│   │   └── [slug]/           # 博客详情（动态路由）
│   ├── globals.css           # 全局样式
│   ├── layout.tsx            # 根布局
│   ├── not-found.tsx         # 404 页面
│   └── page.tsx              # 首页
├── components/               # React 组件
│   ├── effects/              # 动画效果组件
│   ├── forms/                # 表单组件
│   ├── layout/               # 布局组件
│   ├── sections/             # 页面区块组件
│   └── ui/                   # shadcn/ui 组件
├── lib/                      # 工具库
│   ├── blog.ts               # 博客数据处理
│   ├── site-config.ts        # 站点配置
│   └── utils.ts              # 通用工具函数
├── public/                   # 静态资源
│   └── images/               # 图片资源
├── content/                  # 内容数据
├── types/                    # TypeScript 类型定义
├── next.config.ts            # Next.js 配置
├── tailwind.config.ts        # Tailwind 配置
└── package.json              # 项目依赖
```

## 页面清单

| 路由 | 页面 | 状态 |
|------|------|------|
| `/` | 首页 | ✅ 已完成 |
| `/about` | 关于我们 | ✅ 已完成 |
| `/services` | 服务介绍 | ✅ 已完成 |
| `/ai-empowerment` | AI 赋能 | ✅ 已完成 |
| `/cases` | 案例展示 | ✅ 已完成 |
| `/pricing` | 定价方案 | ✅ 已完成 |
| `/contact` | 联系我们 | ✅ 已完成 |
| `/blog` | 博客列表 | ✅ 已完成 |
| `/blog/ai-scenes` | 博客详情 | ✅ 已完成 |
| `/blog/cosmo-algorithm-2025` | 博客详情 | ✅ 已完成 |
| `/404` | 404 页面 | ✅ 已完成 |

## 开发和构建

### 环境要求

- Node.js 20+
- npm 10+

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 生产构建

```bash
npm run build
```

构建输出到 `dist/` 目录。

### 代码检查

```bash
npm run lint
```

## 部署

本项目支持静态导出，可部署到任意静态托管平台。

### 支持的托管平台

- [Vercel](https://vercel.com) - 官方推荐，自动部署
- [Netlify](https://netlify.com) - 拖拽部署，全球 CDN
- [Cloudflare Pages](https://pages.cloudflare.com) - 边缘网络
- [GitHub Pages](https://pages.github.com) - 与 GitHub 集成
- [阿里云 OSS](https://www.aliyun.com/product/oss) - 国内加速

详细部署说明请查看 [DEPLOY.md](./DEPLOY.md)

### 快速部署到 Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

## 项目配置

### 站点配置

编辑 [`lib/site-config.ts`](lib/site-config.ts) 修改站点信息：

```typescript
export const siteConfig = {
  name: "Believeboy",
  slogan: "AI驱动的数字化转型专家",
  // ...
}
```

### 构建配置

编辑 [`next.config.ts`](next.config.ts) 修改构建选项：

```typescript
const nextConfig = {
  output: 'export',    // 静态导出
  distDir: 'dist',     // 输出目录
}
```

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

私有项目，未经许可不得使用。

## 联系方式

- 邮箱：contact@believeboy.com
- 地址：北京市朝阳区建国路88号

---

**版本**: v1.0.0  
**构建时间**: 2026-01-30  
**技术栈**: Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4
