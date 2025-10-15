# Next.js SEO 配置指南

## 基础SEO配置

### 1. Metadata API 配置

在 `app/layout.tsx` 中设置全局元数据：

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Believe Boy - 专业数字解决方案',
    template: '%s | Believe Boy'
  },
  description: 'Believe Boy提供专业的数字解决方案，包括网站开发、移动应用、SEO优化等服务',
  keywords: ['网站开发', '移动应用', 'SEO优化', '数字解决方案'],
  authors: [{ name: 'Believe Boy Team' }],
  creator: 'Believe Boy',
  publisher: 'Believe Boy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://believeboy.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'zh-CN': '/zh-CN',
    },
  },
  openGraph: {
    title: 'Believe Boy - 专业数字解决方案',
    description: 'Believe Boy提供专业的数字解决方案，包括网站开发、移动应用、SEO优化等服务',
    url: 'https://believeboy.com',
    siteName: 'Believe Boy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Believe Boy Logo',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}
```

### 2. 页面特定SEO

每个页面可以设置自己的元数据，例如 `app/services/page.tsx`：

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我们的服务',
  description: 'Believe Boy提供全方位的数字服务，包括网站开发、移动应用、SEO优化等',
  openGraph: {
    title: '我们的服务 - Believe Boy',
    description: 'Believe Boy提供全方位的数字服务，包括网站开发、移动应用、SEO优化等',
    url: 'https://believeboy.com/services',
  },
}
```

### 3. 结构化数据 (JSON-LD)

创建 `lib/structured-data.ts`：

```typescript
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Believe Boy',
    url: 'https://believeboy.com',
    logo: 'https://believeboy.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-xxx-xxxx-xxxx',
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/believeboy',
      'https://facebook.com/believeboy',
      'https://linkedin.com/company/believeboy',
    ],
  }
}

export function generateServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '网站开发服务',
    description: '专业的网站开发服务，提供响应式设计、SEO优化等',
    provider: {
      '@type': 'Organization',
      name: 'Believe Boy',
    },
    serviceType: '网站开发',
    areaServed: '中国',
  }
}
```

### 4. Sitemap 生成

创建 `app/sitemap.ts`：

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://believeboy.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://believeboy.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://believeboy.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://believeboy.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://believeboy.com/careers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://believeboy.com/seo',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
```

### 5. Robots.txt

创建 `app/robots.ts`：

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://believeboy.com/sitemap.xml',
  }
}
```

## SEO 服务页面内容规划

SEO服务页面应包含以下部分：

1. **SEO服务介绍**
   - 什么是SEO
   - 为什么SEO对业务重要
   - 我们的SEO方法论

2. **我们的SEO服务**
   - 关键词研究与分析
   - 站内优化
   - 技术SEO
   - 内容优化
   - 链接建设
   - 本地SEO

3. **SEO流程**
   - 网站审计
   - 策略制定
   - 执行优化
   - 监控与报告

4. **案例展示**
   - 成功案例
   - 客户评价
   - 业绩数据

5. **常见问题**
   - SEO需要多长时间见效
   - SEO的成本
   - 如何衡量SEO效果

## SEO最佳实践

1. **页面性能优化**
   - 图片优化
   - 代码分割
   - 懒加载
   - 缓存策略

2. **内容优化**
   - 高质量原创内容
   - 关键词合理布局
   - 元标签优化
   - 内链结构

3. **技术SEO**
   - 移动友好设计
   - 安全(HTTPS)
   - 结构化数据
   - 网站速度

4. **本地SEO**
   - Google My Business
   - 本地 citation
   - 本地关键词
   - 客户评价