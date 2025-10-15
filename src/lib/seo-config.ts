export const SEO_CONFIG = {
  siteName: 'Believe Boy',
  siteUrl: 'https://believeboy.com',
  defaultTitle: 'Believe Boy - 专业数字解决方案',
  defaultDescription: 'Believe Boy提供专业的数字解决方案，包括网站开发、移动应用、SEO优化等服务',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@believeboy',
  keywords: ['网站开发', '移动应用', 'SEO优化', '数字解决方案', 'Believe Boy'],
  author: 'Believe Boy Team',
  locale: 'zh_CN',
  type: 'website',
}

export const PAGE_SEO = {
  home: {
    title: '首页 - Believe Boy',
    description: 'Believe Boy - 专业数字解决方案，为您的业务提供全方位的数字化服务',
    keywords: ['首页', '数字解决方案', '网站开发', '移动应用'],
  },
  about: {
    title: '关于我们 - Believe Boy',
    description: '了解Believe Boy的故事，我们的使命是为客户提供最优质的数字解决方案',
    keywords: ['关于我们', '公司介绍', '团队', '使命'],
  },
  services: {
    title: '服务 - Believe Boy',
    description: 'Believe Boy提供的专业服务，包括网站开发、移动应用开发等',
    keywords: ['服务', '网站开发', '移动应用'],
  },
  contact: {
    title: '联系我们 - Believe Boy',
    description: '联系Believe Boy，获取专业的数字解决方案咨询和服务',
    keywords: ['联系我们', '联系方式', '咨询', '服务咨询'],
  },
  careers: {
    title: '加入我们 - Believe Boy',
    description: '加入Believe Boy团队，一起创造卓越的数字解决方案',
    keywords: ['招聘', '职业发展', '加入我们', '团队'],
  },
}

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Believe Boy",
    "url": "https://believeboy.com",
    "logo": "https://believeboy.com/logo.png",
    "description": "专业数字解决方案提供商",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-xxx-xxxx-xxxx",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/believeboy",
      "https://facebook.com/believeboy"
    ]
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Believe Boy",
    "url": "https://believeboy.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://believeboy.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://believeboy.com"
      }
    ]
  }
}