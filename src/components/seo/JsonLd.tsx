'use client'

import { useEffect } from 'react'

interface JsonLdProps {
  data: object
}

export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // 检查是否在浏览器环境中
    if (typeof window !== 'undefined') {
      // 查找或创建JSON-LD脚本标签
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement
      
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      
      // 设置脚本内容
      script.textContent = JSON.stringify(data)
      
      // 清理函数
      return () => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [data])

  // 这个组件不渲染任何可见内容
  return null
}