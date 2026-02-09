"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { coreServices, type CoreService } from "./data";

// 颜色配置
const colorVariants: Record<string, { 
  bg: string; 
  text: string; 
  gradient: string;
  accent: string;
  glow: string;
}> = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    accent: "bg-blue-500",
    glow: "shadow-blue-500/30",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    gradient: "from-indigo-500 via-purple-500 to-indigo-600",
    accent: "bg-indigo-500",
    glow: "shadow-indigo-500/30",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    gradient: "from-violet-500 via-fuchsia-500 to-violet-600",
    accent: "bg-violet-500",
    glow: "shadow-violet-500/30",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    gradient: "from-cyan-500 via-teal-500 to-cyan-600",
    accent: "bg-cyan-500",
    glow: "shadow-cyan-500/30",
  },
};

// 服务场景组件
function ServiceScene({ 
  service, 
  index, 
  isActive
}: { 
  service: CoreService; 
  index: number;
  isActive: boolean;
}) {
  const colors = colorVariants[service.color] || colorVariants.blue;
  const Icon = service.icon;
  const SecondaryIcon = service.secondaryIcon;

  return (
    <div className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
      {/* 背景渐变 */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-1000",
        colors.gradient,
        isActive ? "opacity-30" : "opacity-0"
      )} />
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* 主要内容容器 */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center">
        
        {/* 左侧：图标区域 */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isActive ? 1 : 0.3, 
            scale: isActive ? 1 : 0.8,
            x: isActive ? 0 : -50
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 发光背景 */}
          <div className={cn(
            "absolute w-[400px] h-[400px] rounded-full blur-3xl transition-opacity duration-700",
            colors.bg,
            isActive ? "opacity-60" : "opacity-0"
          )} />
          
          {/* 主图标 */}
          <div className="relative">
            <motion.div
              animate={{ 
                y: isActive ? [0, -10, 0] : 0,
                rotate: isActive ? [0, 5, 0] : 0
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Icon className={cn(
                "w-48 h-48 transition-all duration-700",
                colors.text,
                isActive ? "drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" : ""
              )} strokeWidth={1} />
            </motion.div>
            
            {/* 副图标 */}
            <motion.div
              className={cn(
                "absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center",
                "bg-white/10 backdrop-blur-xl border border-white/20",
                colors.glow
              )}
              animate={{
                y: isActive ? [0, -5, 0] : 0,
                scale: isActive ? [1, 1.05, 1] : 1
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <SecondaryIcon className={cn("w-10 h-10", colors.text)} />
            </motion.div>
          </div>
        </motion.div>

        {/* 右侧：文字内容 */}
        <div className="space-y-8">
          {/* 序号 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : 50
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={cn(
              "text-8xl font-bold tracking-tighter",
              colors.text,
              "opacity-20"
            )}>
              0{index + 1}
            </span>
          </motion.div>

          {/* 标题 */}
          <motion.h3
            className="text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {service.title}
          </motion.h3>

          {/* 描述 */}
          <motion.p
            className="text-xl text-white/60 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.description}
          </motion.p>

          {/* 特性标签 */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {service.features.map((feature, idx) => (
              <motion.span
                key={idx}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium",
                  "bg-white/5 border border-white/10 text-white/70",
                  "backdrop-blur-sm",
                  "hover:bg-white/10 hover:border-white/20 hover:text-white",
                  "transition-all duration-300"
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 底部进度指示器 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {coreServices.map((_, idx) => (
          <motion.div
            key={idx}
            className={cn(
              "h-1 rounded-full transition-all duration-500",
              idx === index 
                ? cn("w-8", colors.accent) 
                : "w-2 bg-white/20"
            )}
            animate={{
              scale: idx === index ? 1 : 0.8,
              opacity: idx === index ? 1 : 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
}

// 主组件
export function CoreServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 将滚动进度映射到活跃索引
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(
        Math.floor(latest * coreServices.length),
        coreServices.length - 1
      );
      setActiveIndex(newIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section 
      id="core-services" 
      ref={containerRef}
      className="relative bg-slate-950"
      style={{ height: `${coreServices.length * 100}vh` }}
    >
      {/* 粘性容器 */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 背景效果 */}
        <div className="absolute inset-0">
          {/* 动态渐变背景 */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgb(2,6,23), rgb(15,23,42), rgb(2,6,23))",
                "linear-gradient(to bottom right, rgb(15,23,42), rgb(30,41,59), rgb(15,23,42))",
                "linear-gradient(to bottom right, rgb(2,6,23), rgb(15,23,42), rgb(2,6,23))",
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* 流动光效 */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)"
            }}
            animate={{
              x: ["-20%", "20%", "-20%"],
              y: ["-10%", "10%", "-10%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 横向滑动容器 */}
        <motion.div 
          className="relative h-full flex"
          style={{
            x: useTransform(scrollYProgress, [0, 1], ["0%", `-${(coreServices.length - 1) * 100}%`])
          }}
        >
          {coreServices.map((service, index) => (
            <ServiceScene
              key={index}
              service={service}
              index={index}
              isActive={index === activeIndex}
            />
          ))}
        </motion.div>

        {/* 左侧固定导航 */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
          {/* 连接线 */}
          <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          
          {coreServices.map((service, index) => (
            <motion.button
              key={index}
              className={cn(
                "relative w-4 h-4 rounded-full transition-all duration-500 z-10",
                index === activeIndex 
                  ? cn("scale-150", colorVariants[service.color].accent) 
                  : "bg-white/20 hover:bg-white/40"
              )}
              onClick={() => {
                const container = containerRef.current;
                if (container) {
                  const scrollTo = (index / (coreServices.length - 1)) * (container.scrollHeight - container.clientHeight);
                  container.scrollTo({ top: scrollTo, behavior: "smooth" });
                }
              }}
              whileHover={{ scale: index === activeIndex ? 1.5 : 1.2 }}
            >
              {/* 发光效果 */}
              {index === activeIndex && (
                <motion.div
                  className={cn(
                    "absolute inset-0 rounded-full blur-md",
                    colorVariants[service.color].accent
                  )}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* 顶部进度条 */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
}
