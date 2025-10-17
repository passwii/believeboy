'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, Drawer, Menu } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { BaseComponentProps } from '@/lib/types'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Header({ className = '' }: BaseComponentProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      } ${className}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BB</span>
            </div>
            <span className="text-xl font-semibold text-secondary-900">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-primary-600 ${
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-secondary-700 dark:text-secondary-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button type="primary" size="large">
                联系我们
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={handleMobileMenuToggle}
            className="md:hidden flex items-center justify-center"
            size="large"
          />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">BB</span>
            </div>
            <span className="text-lg font-semibold">{SITE_CONFIG.name}</span>
          </div>
        }
        placement="right"
        onClose={handleCloseMobileMenu}
        open={mobileMenuOpen}
        closeIcon={<CloseOutlined />}
        width="80%"
        style={{ maxWidth: '320px' }}
      >
        <div className="flex flex-col space-y-4 mt-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 ${
                pathname === item.href
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600'
                  : 'text-secondary-700 dark:text-secondary-300'
              }`}
              onClick={handleCloseMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="pt-4 mt-4 border-t border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center justify-between py-2 px-4">
              <span className="text-secondary-700 dark:text-secondary-300 font-medium">主题模式</span>
              <ThemeToggle />
            </div>
            <Link href="/contact" onClick={handleCloseMobileMenu}>
              <Button
                type="primary"
                size="large"
                block
              >
                联系我们
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  )
}