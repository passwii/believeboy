# 部署指南

## 部署方式

本项目使用 **Next.js 静态导出** 方式生成静态网站，可直接部署到任何静态托管平台。

## 支持的托管平台

### 推荐平台

| 平台 | 特点 | 部署难度 |
|------|------|----------|
| [Vercel](https://vercel.com) | Next.js 官方推荐，自动部署 | ⭐ 最简单 |
| [Netlify](https://netlify.com) | 全球 CDN，拖拽部署 | ⭐ 简单 |
| [Cloudflare Pages](https://pages.cloudflare.com) | 全球边缘网络，免费 SSL | ⭐ 简单 |
| [GitHub Pages](https://pages.github.com) | 与 GitHub 仓库集成 | ⭐⭐ 中等 |

### 国内平台

| 平台 | 特点 | 部署难度 |
|------|------|----------|
| [阿里云 OSS](https://www.aliyun.com/product/oss) | 对象存储 + CDN | ⭐⭐ 中等 |
| [腾讯云 COS](https://cloud.tencent.com/product/cos) | 对象存储 + CDN | ⭐⭐ 中等 |
| [又拍云](https://www.upyun.com) | 国内 CDN 加速 | ⭐⭐ 中等 |

## 部署步骤

### 方式一：Vercel（推荐）

1. 推送代码到 GitHub/GitLab/Bitbucket
2. 访问 [vercel.com](https://vercel.com) 登录
3. 点击 "Add New Project"
4. 选择你的代码仓库
5. 框架预设选择 "Next.js"
6. 点击 "Deploy"
7. 等待自动构建部署完成

> Vercel 会自动识别 `next.config.ts` 中的静态导出配置，无需额外设置。

### 方式二：Netlify

#### 方法一：拖拽部署（最简单）

1. 本地执行构建：
   ```bash
   npm run build
   ```
2. 将 `dist/` 文件夹压缩为 zip
3. 访问 [netlify.com](https://netlify.com) 登录
4. 将 zip 文件拖拽到部署区域

#### 方法二：Git 集成部署

1. 推送代码到 Git 仓库
2. 在 Netlify 中连接 Git 仓库
3. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 点击 "Deploy site"

### 方式三：Cloudflare Pages

1. 登录 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 进入 Pages > Create a project
3. 连接 Git 仓库
4. 构建设置：
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 点击 "Save and Deploy"

### 方式四：GitHub Pages

1. 在 GitHub 仓库设置中启用 Pages
2. 选择 GitHub Actions 作为部署源
3. 创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 方式五：阿里云 OSS + CDN

1. 创建 OSS Bucket，开启静态网站托管
2. 本地构建：
   ```bash
   npm run build
   ```
3. 使用 OSS 工具上传 `dist/` 目录：
   ```bash
   ossutil cp -r ./dist oss://your-bucket-name/
   ```
4. 配置 CDN 加速域名（可选但推荐）

## 构建配置

项目已配置为静态导出模式，详见 [`next.config.ts`](next.config.ts):

```typescript
const nextConfig: NextConfig = {
  output: 'export',      // 启用静态导出
  distDir: 'dist',       // 输出目录
  images: {
    unoptimized: true,   // 静态导出时关闭图片优化
  },
}
```

## 环境要求

- Node.js 20+
- npm 10+

## 本地构建测试

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build

# 预览构建结果
npx serve dist
```

## 常见问题

### Q: 构建后的网站刷新 404？
A: 需要在托管平台配置重定向规则，将所有路由指向 `index.html`，或确保平台支持 SPA 路由。

### Q: 图片不显示？
A: 检查 `next.config.ts` 中已设置 `images.unoptimized: true`，静态导出时 Next.js 图片优化不可用。

### Q: 如何配置自定义域名？
A: 各平台均支持自定义域名，在平台控制台添加域名并配置 DNS 解析即可。

## 域名配置建议

1. **主域名**：`believeboy.com`
2. **CDN 加速**：全球用户使用 Cloudflare，国内用户使用阿里云/腾讯云
3. **HTTPS**：所有平台均支持免费 SSL 证书

---

**构建时间**: 2026-01-30
**部署版本**: v1.0.0
