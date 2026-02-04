import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出配置
  output: 'export',
  distDir: 'dist',
  
  // 图片优化（静态导出时）
  images: {
    unoptimized: true,
  },
  
  // 压缩
  compress: true,
  
  // 生产环境SourceMap
  productionBrowserSourceMaps: false,
  
  // 实验性功能
  experimental: {
    // 优化包体积
    optimizePackageImports: ['lucide-react', '@radix-ui'],
  },
};

export default nextConfig;
