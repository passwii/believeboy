import { Metadata } from 'next'
import { SEO_CONFIG, PAGE_SEO, structuredData } from './seo-config'

export function generateMetadata(pageKey: keyof typeof PAGE_SEO): Metadata {
  const pageSeo = PAGE_SEO[pageKey]
  
  return {
    title: pageSeo.title,
    description: pageSeo.description,
    keywords: pageSeo.keywords,
    authors: [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.siteName,
    publisher: SEO_CONFIG.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    alternates: {
      canonical: `/${pageKey === 'home' ? '' : pageKey}`,
      languages: {
        'en-US': `/en-US/${pageKey === 'home' ? '' : pageKey}`,
        'zh-CN': `/zh-CN/${pageKey === 'home' ? '' : pageKey}`,
      },
    },
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      url: `${SEO_CONFIG.siteUrl}/${pageKey === 'home' ? '' : pageKey}`,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: SEO_CONFIG.defaultImage,
          width: 1200,
          height: 630,
          alt: `${SEO_CONFIG.siteName} Logo`,
        },
      ],
      locale: SEO_CONFIG.locale,
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageSeo.title,
      description: pageSeo.description,
      images: [SEO_CONFIG.defaultImage],
      creator: SEO_CONFIG.twitterHandle,
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
  }
}

export function generateStructuredData(pageKey: keyof typeof PAGE_SEO, additionalData?: any) {
  const baseStructuredData = {
    ...structuredData.organization,
    ...structuredData.website,
  }

  // 添加面包屑导航
  const breadcrumbList = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首页",
      "item": SEO_CONFIG.siteUrl
    }
  ]

  if (pageKey !== 'home') {
    breadcrumbList.push({
      "@type": "ListItem",
      "position": 2,
      "name": PAGE_SEO[pageKey].title.replace(' - Believe Boy', ''),
      "item": `${SEO_CONFIG.siteUrl}/${pageKey}`
    })
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList
  }

  // 根据页面类型添加特定的结构化数据
  let pageSpecificData = {}
  
  switch (pageKey) {
    case 'about':
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": PAGE_SEO[pageKey].title,
        "description": PAGE_SEO[pageKey].description,
        "url": `${SEO_CONFIG.siteUrl}/about`
      }
      break
    case 'contact':
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": PAGE_SEO[pageKey].title,
        "description": PAGE_SEO[pageKey].description,
        "url": `${SEO_CONFIG.siteUrl}/contact`
      }
      break
    case 'services':
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": PAGE_SEO[pageKey].title,
        "description": PAGE_SEO[pageKey].description,
        "provider": structuredData.organization,
        "url": `${SEO_CONFIG.siteUrl}/services`
      }
      break
    default:
      pageSpecificData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": PAGE_SEO[pageKey].title,
        "description": PAGE_SEO[pageKey].description,
        "url": `${SEO_CONFIG.siteUrl}/${pageKey === 'home' ? '' : pageKey}`
      }
  }

  return [
    baseStructuredData,
    breadcrumbStructuredData,
    pageSpecificData,
    ...(additionalData ? [additionalData] : [])
  ]
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}