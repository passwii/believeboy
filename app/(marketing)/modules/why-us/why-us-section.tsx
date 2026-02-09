"use client";

import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { advantages, type Advantage } from "./data";
import { motion } from "framer-motion";

// 颜色映射 - 修复动态类名问题
const colorMap: Record<string, { bg: string; bgLight: string; text: string; border: string; gradient: string; glow: string }> = {
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    gradient: "from-blue-500 to-blue-600",
    glow: "group-hover:shadow-blue-500/25",
  },
  cyan: {
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-200",
    gradient: "from-cyan-500 to-cyan-600",
    glow: "group-hover:shadow-cyan-500/25",
  },
  indigo: {
    bg: "bg-indigo-500",
    bgLight: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    gradient: "from-indigo-500 to-indigo-600",
    glow: "group-hover:shadow-indigo-500/25",
  },
  violet: {
    bg: "bg-violet-500",
    bgLight: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    gradient: "from-violet-500 to-violet-600",
    glow: "group-hover:shadow-violet-500/25",
  },
};

function AdvantageCard({ item, index }: { item: Advantage; index: number }) {
  const colors = colorMap[item.color] || colorMap.blue;
  const isEven = index % 2 === 0;

  return (
    <StaggerItem>
      <motion.div
        className="group relative h-full"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* 背景光晕 */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
        
        {/* 卡片主体 */}
        <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg shadow-slate-200/50 group-hover:shadow-2xl ${colors.glow} transition-all duration-500 overflow-hidden">
          {/* 顶部渐变装饰条 */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`} />
          
          {/* 背景装饰图案 */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-slate-100 to-transparent opacity-50 group-hover:scale-150 transition-transform duration-700" />
          
          {/* 编号标记 */}
          <div className={`absolute -right-2 -top-2 w-12 h-12 rounded-full ${colors.bgLight} ${colors.border} border-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-4`}>
            <span className={`${colors.text} font-bold text-lg`}>0{index + 1}</span>
          </div>

          {/* 图标容器 */}
          <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <item.icon className="w-8 h-8 text-white" />
            {/* 图标脉冲效果 */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-50 group-hover:animate-ping`} />
          </div>

          {/* 内容 */}
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
            {item.description}
          </p>

          {/* 底部装饰线 */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* 多层渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/30" />
      
      {/* 装饰性光晕 */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-400/5 rounded-full blur-[80px]" />
      
      {/* 网格背景图案 */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* 标题区域 */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200/50 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">核心优势</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            为什么选择
            <span className="relative inline-block mx-2">
              <span className="text-gradient">彼励扶</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            专业团队 + AI赋能 = 全方位助力您的全球业务拓展
          </p>
        </FadeIn>

        {/* 优势卡片网格 */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.1}>
          {advantages.map((item, index) => (
            <AdvantageCard key={index} item={item} index={index} />
          ))}
        </StaggerContainer>

        {/* 底部装饰 */}
        <FadeIn delay={0.6} className="mt-16 flex justify-center">
          <div className="flex items-center gap-3 text-slate-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300" />
            <span className="text-sm">携手共创，共赢未来</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
