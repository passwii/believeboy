'use client'

import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      type="text"
      icon={theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
      onClick={toggleTheme}
      className="flex items-center justify-center"
      size="large"
      title={theme === 'light' ? '切换到暗色模式' : '切换到亮色模式'}
    />
  )
}