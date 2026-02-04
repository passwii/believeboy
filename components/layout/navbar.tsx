"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/services", label: "跨境优服" },
  { href: "/cases", label: "店铺案例" },
  { href: "/about", label: "关于我们" },
  { href: "/ai-empowerment", label: "AI 赋能" },
  { href: "/pricing", label: "服务定价" },
];

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
            <Link
              key={item.href}
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
