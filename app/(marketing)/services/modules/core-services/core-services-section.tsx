"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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

function ServiceScene({ service, index, isActive }: { 
  service: CoreService; 
  index: number;
  isActive: boolean;
}) {
  const colors = colorVariants[service.color] || colorVariants.blue;
  const Icon = service.icon;
  const SecondaryIcon = service.secondaryIcon;

  // 只显示当前和相邻页面，其他隐藏
  const shouldRender = Math.abs(index - (isActive ? index : -1)) <= 1;
  
  if (!shouldRender && !isActive) {
    return <div className="w-screen h-screen flex-shrink-0" />;
  }

  return (
    <div className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-30",
        colors.gradient,
        isActive ? "opacity-30" : "opacity-0"
      )} />
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center">
        <div 
          className="relative flex items-center justify-center"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'scale(1) translateX(0)' : 'scale(0.8) translateX(-50px)',
            transition: isActive ? 'opacity 0.3s ease-out, transform 0.3s ease-out' : 'none'
          }}
        >
          <div className={cn(
            "absolute w-[400px] h-[400px] rounded-full blur-3xl",
            colors.bg,
            isActive ? "opacity-60" : "opacity-0"
          )} />
          
          <div className="relative">
            <Icon className={cn(
              "w-48 h-48",
              colors.text
            )} strokeWidth={1} />
            
            <div
              className={cn(
                "absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center",
                "bg-white/10 backdrop-blur-xl border border-white/20",
                colors.glow
              )}
            >
              <SecondaryIcon className={cn("w-10 h-10", colors.text)} />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateX(0)' : 'translateX(50px)',
              transition: isActive ? 'opacity 0.3s 0.1s ease-out, transform 0.3s 0.1s ease-out' : 'none'
            }}
          >
            <span className={cn(
              "text-8xl font-bold tracking-tighter",
              colors.text,
              "opacity-20"
            )}>
              0{index + 1}
            </span>
          </div>

          <h3
            className="text-5xl font-bold text-white leading-tight"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(30px)',
              transition: isActive ? 'opacity 0.3s 0.2s ease-out, transform 0.3s 0.2s ease-out' : 'none'
            }}
          >
            {service.title}
          </h3>

          <p
            className="text-xl text-white/60 leading-relaxed max-w-lg"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(30px)',
              transition: isActive ? 'opacity 0.3s 0.3s ease-out, transform 0.3s 0.3s ease-out' : 'none'
            }}
          >
            {service.description}
          </p>

          <div
            className="flex flex-wrap gap-3"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(30px)',
              transition: isActive ? 'opacity 0.3s 0.4s ease-out, transform 0.3s 0.4s ease-out' : 'none'
            }}
          >
            {service.features.map((feature, idx) => (
              <span
                key={idx}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium",
                  "bg-white/5 border border-white/10 text-white/70",
                  "backdrop-blur-sm"
                )}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {coreServices.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "h-1 rounded-full",
              idx === index 
                ? cn("w-8", colors.accent) 
                : "w-2 bg-white/20"
            )}
            style={{
              opacity: idx === index ? 1 : 0.5
            }}
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
      <div 
        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
        style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
      />
    </div>
  );
}

// 主组件
export function CoreServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  // 使用 useScroll 监听滚动
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // 监听滚动进度，直接跳转到对应页面
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const targetPage = Math.round(latest * (serviceCount - 1));
    const clampedPage = Math.max(0, Math.min(targetPage, serviceCount - 1));
    if (clampedPage !== currentPage) {
      setCurrentPage(clampedPage);
    }
  });
  
  // 计算进度百分比
  const progress = (currentPage / (serviceCount - 1)) * 100;
  
  // 处理导航点击
  const handleNavClick = (index: number) => {
    if (!containerRef.current) return;
    
    const sectionTop = containerRef.current.offsetTop;
    const targetProgress = index / (serviceCount - 1);
    const totalScrollHeight = containerRef.current.scrollHeight - window.innerHeight;
    const targetScrollY = sectionTop + targetProgress * totalScrollHeight;
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };
  
  // 计算横向位移
  const x = `-${currentPage * 100}%`;
  
  return (
    <section 
      id="core-services" 
      ref={containerRef}
      className="relative bg-slate-950"
      style={{ height: `${(serviceCount + 1) * 100}vh` }}
    >
      {/* 粘性容器 */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 背景效果 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-purple-950/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        {/* 顶部进度条 */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <ProgressBar progress={progress} />
        </div>
        
        {/* 横向滑动容器 */}
        <div 
          className="relative h-full flex will-change-transform"
          style={{ transform: `translateX(${x})` }}
        >
          {coreServices.map((service, index) => (
            <ServiceScene
              key={index}
              service={service}
              index={index}
              isActive={index === currentPage}
            />
          ))}
        </div>
        
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
