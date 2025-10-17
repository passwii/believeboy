import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { theme } from '@/antd-theme'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Believe Boy',
    template: '%s | Believe Boy'
  },
  description: 'Believe Boy - 内容正在建设中',
  // 基础SEO框架，未来可扩展
  metadataBase: new URL('https://believeboy.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AntdRegistry>
            <ConfigProvider
              locale={zhCN}
              theme={theme}
            >
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </ConfigProvider>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}