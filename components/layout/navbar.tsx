"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

// 导航项配置，包含下拉菜单
const navItems = [
  {
    href: "/",
    label: "首页",
    dropdown: [
      { href: "/#why-us", label: "核心优势", description: "为什么选择彼励扶" },
      { href: "/#services", label: "服务概览", description: "全方位跨境服务" },
      { href: "/#ai-showcase", label: "AI赋能", description: "智能运营工具" },
      { href: "/#cases", label: "成功案例", description: "真实客户见证" },
    ],
  },
  {
    href: "/services",
    label: "跨境优服",
    dropdown: [
      { href: "/services#advantages", label: "核心优势", description: "专业团队与丰富经验" },
      { href: "/services#core-services", label: "四大服务", description: "从市场进入品牌建设" },
      { href: "/services#capabilities", label: "细分能力", description: "30+项专业运营能力" },
      { href: "/services#process", label: "服务流程", description: "标准化五步流程" },
    ],
  },
  {
    href: "/cases",
    label: "店铺案例",
    dropdown: [
      { href: "/cases#case-01", label: "Gas Grill 烧烤炉", description: "美国站成功运营案例" },
      { href: "/cases#case-02", label: "Glass Food Pan", description: "厨房用品类目突破" },
      { href: "/cases#case-03", label: "Memory Foam Mattress", description: "大件家具成功运营" },
      { href: "/cases#testimonials", label: "客户评价", description: "真实客户反馈" },
    ],
  },
  {
    href: "/ai-empowerment",
    label: "AI 赋能",
    dropdown: [
      { href: "/ai-empowerment#vision", label: "AI愿景", description: "AI驱动的电商运营" },
      { href: "/ai-empowerment#ai-pillars", label: "四大智能支柱", description: "视觉/数据/决策/协同" },
      { href: "/ai-empowerment#scenarios", label: "实战场景", description: "Listing优化与广告投放" },
      { href: "/ai-empowerment#pricing", label: "订阅方案", description: "AI-Suite订阅服务" },
    ],
  },
  {
    href: "/pricing",
    label: "服务定价",
    dropdown: [
      { href: "/pricing#pricing-plans", label: "合作模式", description: "代运营/合伙人/咨询" },
      { href: "/pricing#x-package", label: "跨境合伙人", description: "联合运营品牌出海" },
      { href: "/pricing#ai-suite", label: "AI-套件", description: "智能工具套件" },
      { href: "/pricing#faq", label: "常见问题", description: "价格与服务FAQ" },
    ],
  },
  { href: "/about", label: "关于我们" },
];

// 下拉菜单动画配置
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// 导航链接组件（带下拉菜单）
function NavLink({
  item,
  scrolled,
}: {
  item: (typeof navItems)[0];
  scrolled: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = item.dropdown && item.dropdown.length > 0;

  // 关闭下拉菜单的回调
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  // 处理点击外部关闭
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeDropdown]);

  // 处理链接点击
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (!hasDropdown) {
    return (
      <Link
        href={item.href}
        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-white/10 group ${
          scrolled
            ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            : "text-white/80 hover:text-white"
        }`}
      >
        {item.label}
        <span
          className={`absolute bottom-1 left-4 right-4 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            scrolled ? "bg-blue-600" : "bg-cyan-400"
          }`}
        />
      </Link>
    );
  }

  return (
    <div
      className="dropdown-container relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* 触发器 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-white/10 group ${
          isOpen
            ? scrolled
              ? "text-blue-600"
              : "text-cyan-400"
            : scrolled
              ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              : "text-white/80 hover:text-white"
        }`}
      >
        {item.label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-1"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
        <span
          className={`absolute bottom-1 left-4 right-10 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            scrolled ? "bg-blue-600" : "bg-cyan-400"
          }`}
        />
      </button>

      {/* 下拉菜单 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute top-full left-0 mt-2 w-72 rounded-xl shadow-xl border overflow-hidden z-50 ${
              scrolled
                ? "bg-white border-slate-200/50"
                : "bg-slate-900/95 backdrop-blur-md border-slate-700/50"
            }`}
          >
            <div className="py-2">
              {item.dropdown?.map((dropdownItem, index) => (
                <motion.div key={dropdownItem.href} variants={menuItemVariants}>
                  <Link
                    href={dropdownItem.href}
                    onClick={handleLinkClick}
                    className={`flex flex-col px-4 py-3 mx-2 rounded-lg transition-all duration-200 group ${
                      scrolled
                        ? "hover:bg-blue-50 hover:text-blue-600"
                        : "hover:bg-white/10 hover:text-cyan-400"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        scrolled
                          ? "text-slate-900 group-hover:text-blue-600"
                          : "text-slate-200 group-hover:text-cyan-400"
                      }`}
                    >
                      {dropdownItem.label}
                    </span>
                    {dropdownItem.description && (
                      <span
                        className={`text-xs mt-0.5 ${
                          scrolled
                            ? "text-slate-500 group-hover:text-blue-500"
                            : "text-slate-400 group-hover:text-cyan-500"
                        }`}
                      >
                        {dropdownItem.description}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 md:h-[72px] items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.span
            className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            彼励扶
          </motion.span>
          <span
            className={`text-xs md:text-sm font-medium transition-colors duration-300 hidden sm:inline ${
              scrolled ? "text-slate-500" : "text-white/70"
            }`}
          >
            BelieveBoy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <NavLink key={item.href} item={item} scrolled={scrolled} />
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button
            asChild
            className={`font-medium transition-all duration-300 group ${
              scrolled
                ? "bg-blue-800 hover:bg-blue-700 text-white"
                : "bg-white text-blue-900 hover:bg-white/90"
            }`}
          >
            <Link href="/contact">
              联系我们
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={scrolled ? "text-slate-900" : "text-white"}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">打开菜单</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-slate-900 border-slate-800">
            <div className="flex flex-col h-full">
              {/* Mobile Logo */}
              <div className="flex items-center justify-between py-4 border-b border-slate-800">
                <span className="text-xl font-bold text-white">彼励扶</span>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex-1 py-8">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center py-3 px-4 text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                      {/* Mobile dropdown items */}
                      {item.dropdown && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <motion.li
                              key={dropdownItem.href}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + dropIndex * 0.05 }}
                            >
                              <Link
                                href={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center py-2 px-4 text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded-lg transition-colors"
                              >
                                {dropdownItem.label}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="py-6 border-t border-slate-800">
                <Button
                  asChild
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium py-6"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    联系我们
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                {/* Contact Info */}
                <div className="mt-6 space-y-2 text-sm text-slate-400">
                  <p>business@believeboy.com</p>
                  <p>苏州市高新区</p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
