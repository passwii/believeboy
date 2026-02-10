"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { coreServices, type CoreService } from "./data";

const serviceCount = coreServices.length;

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

function ServiceScene({ service, index, isActive, direction }: { 
  service: CoreService; 
  index: number;
  isActive: boolean;
  direction: number;
}) {
  const colors = colorVariants[service.color] || colorVariants.blue;
  const Icon = service.icon;
  const SecondaryIcon = service.secondaryIcon;

  return (
    <div 
      className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#020617' }}
    >
      {/* 动态背景 - 增加视差效果 */}
      <motion.div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-40",
          colors.gradient
        )}
        initial={false}
        animate={{
          scale: isActive ? 1 : 1.1,
          opacity: isActive ? 0.4 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      />
      
      {/* 网格背景 */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
        animate={{
          backgroundPosition: isActive ? ['0px 0px', '100px 100px'] : '0px 0px',
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center">
        {/* 左侧图标区域 - 增强动画 */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.8,
            x: isActive ? 0 : direction * -100,
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1],
            opacity: { duration: 0.4 }
          }}
        >
          {/* 发光背景 */}
          <motion.div 
            className={cn(
              "absolute w-[400px] h-[400px] rounded-full blur-3xl",
              colors.bg
            )}
            animate={{
              scale: isActive ? [1, 1.2, 1] : 1,
              opacity: isActive ? [0.6, 0.8, 0.6] : 0,
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          <div className="relative">
            {/* 主图标 - 增加弹性动画 */}
            <motion.div
              animate={{
                y: isActive ? [0, -10, 0] : 0,
                rotate: isActive ? [0, 5, -5, 0] : 0,
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Icon className={cn(
                "w-48 h-48",
                colors.text
              )} strokeWidth={1} />
            </motion.div>
            
            {/* 次要图标 */}
            <motion.div
              className={cn(
                "absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center",
                "bg-white/10 backdrop-blur-xl border border-white/20",
                colors.glow
              )}
              animate={{
                scale: isActive ? [1, 1.1, 1] : 1,
                rotate: isActive ? [0, 10, 0] : 0,
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <SecondaryIcon className={cn("w-10 h-10", colors.text)} />
            </motion.div>
          </div>
        </motion.div>

        {/* 右侧文字区域 - 增强交错动画 */}
        <div className="space-y-8">
          {/* 序号 */}
          <motion.div
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : 50,
            }}
            transition={{ 
              duration: 0.5, 
              delay: isActive ? 0.1 : 0,
              ease: [0.4, 0, 0.2, 1] 
            }}
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
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30,
            }}
            transition={{ 
              duration: 0.5, 
              delay: isActive ? 0.2 : 0,
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
            {service.title}
          </motion.h3>

          {/* 描述 */}
          <motion.p
            className="text-xl text-white/60 leading-relaxed max-w-lg"
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30,
            }}
            transition={{ 
              duration: 0.5, 
              delay: isActive ? 0.3 : 0,
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
            {service.description}
          </motion.p>

          {/* 特性标签 */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30,
            }}
            transition={{ 
              duration: 0.5, 
              delay: isActive ? 0.4 : 0,
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
            {service.features.map((feature, idx) => (
              <motion.span
                key={idx}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium",
                  "bg-white/5 border border-white/10 text-white/70",
                  "backdrop-blur-sm"
                )}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.8,
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isActive ? 0.4 + idx * 0.05 : 0,
                  ease: [0.4, 0, 0.2, 1] 
                }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 底部指示器 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {coreServices.map((_, idx) => (
          <motion.div
            key={idx}
            className={cn(
              "h-1 rounded-full",
              idx === index 
                ? cn("w-8", colors.accent) 
                : "w-2 bg-white/20"
            )}
            animate={{
              opacity: idx === index ? 1 : 0.5,
              scale: idx === index ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}

// 导航指示器
function NavigationIndicator({ 
  total, 
  current, 
  onSelect 
}: { 
  total: number; 
  current: number; 
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            index === current 
              ? 'bg-white scale-125' 
              : 'bg-white/30 hover:bg-white/50'
          }`}
        />
      ))}
    </div>
  );
}

// 进度条
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full h-0.5 bg-white/10 overflow-hidden">
      <motion.div 
        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
        style={{ width: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
}

// 主组件
export function CoreServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // 使用 useScroll 监听滚动
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // 使用弹簧动画使进度更加平滑
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // 计算当前页面 - 使用磁吸式效果
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      // 磁吸效果：四舍五入到最近的页面
      const exactPage = latest * (serviceCount - 1);
      const targetPage = Math.round(exactPage);
      const clampedPage = Math.max(0, Math.min(targetPage, serviceCount - 1));
      
      if (clampedPage !== currentPage) {
        setDirection(clampedPage > currentPage ? 1 : -1);
        setCurrentPage(clampedPage);
      }
    });
    
    return () => unsubscribe();
  }, [currentPage, smoothProgress]);
  
  // 计算进度百分比
  const progress = (currentPage / (serviceCount - 1)) * 100;
  
  // 处理导航点击
  const handleNavClick = useCallback((index: number) => {
    if (!containerRef.current) return;
    
    const sectionTop = containerRef.current.offsetTop;
    const targetProgress = index / (serviceCount - 1);
    const totalScrollHeight = containerRef.current.scrollHeight - window.innerHeight;
    const targetScrollY = sectionTop + targetProgress * totalScrollHeight;
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  }, []);
  
  // 计算横向位移 - 使用弹簧动画
  const x = useTransform(smoothProgress, [0, 1], ["0%", `-${(serviceCount - 1) * 100}%`]);
  
  return (
    <section 
      id="core-services" 
      ref={containerRef}
      className="relative bg-[#020617]"
      style={{ height: `${serviceCount * 100}vh` }}
    >
      {/* 粘性容器 */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#020617]">
        {/* 背景效果 - 增加动态效果 */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-[#020617] to-purple-950/20"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        
        {/* 顶部进度条 */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <ProgressBar progress={progress} />
        </div>
        
        {/* 横向滑动容器 - 使用弹簧动画 */}
        <motion.div 
          className="relative h-full flex will-change-transform"
          style={{ x }}
        >
          {coreServices.map((service, index) => (
            <ServiceScene
              key={index}
              service={service}
              index={index}
              isActive={index === currentPage}
              direction={direction}
            />
          ))}
        </motion.div>
        
        {/* 导航指示器 */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20">
          <NavigationIndicator 
            total={serviceCount}
            current={currentPage}
            onSelect={handleNavClick}
          />
        </div>
      </div>
    </section>
  );
}
