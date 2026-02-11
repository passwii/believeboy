import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 彼励扶 - 让中国品牌闪耀全球",
    default: "彼励扶 - 专业跨境电商运营 × AI智能驱动",
  },
  description: "彼励扶电子商务（苏州）有限公司，专注为中国品牌提供全链路跨境电商解决方案，亚马逊代运营、独立站搭建、AI智能营销。",
  keywords: ["跨境电商", "亚马逊运营", "AI电商", "品牌出海", "电商代运营", "独立站", "TikTok Shop"],
  authors: [{ name: "彼励扶" }],
  creator: "彼励扶电子商务（苏州）有限公司",
  metadataBase: new URL("https://believeboy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "彼励扶",
    title: "彼励扶 - 专业跨境电商运营 × AI智能驱动",
    description: "专注为中国品牌提供全链路跨境电商解决方案",
  },
  twitter: {
    card: "summary_large_image",
    title: "彼励扶 - 专业跨境电商运营 × AI智能驱动",
    description: "专注为中国品牌提供全链路跨境电商解决方案",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
