"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { services, type Service } from "./data";
import { motion } from "framer-motion";

// 服务卡片颜色配置
const serviceColors = [
  { gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  { gradient: "from-cyan-500 to-teal-500", bg: "bg-cyan-500", light: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" },
  { gradient: "from-indigo-500 to-purple-500", bg: "bg-indigo-500", light: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
  { gradient: "from-purple-500 to-pink-500", bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const colors = serviceColors[index % serviceColors.length];
  const isEven = index % 2 === 0;

  return (
    <StaggerItem>
      <motion.div
        className="group relative h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* 卡片背景 */}
        <div className={`relative h-full rounded-3xl overflow-hidden bg-white border ${colors.border} shadow-lg shadow-slate-200/30 group-hover:shadow-2xl group-hover:shadow-slate-300/40 transition-all duration-500`}>
          
          {/* 顶部渐变装饰 */}
          <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${colors.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
          
          {/* 角落装饰 */}
          <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br ${colors.gradient} opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700`} />
          
          {/* 步骤连接线 - 桌面端 */}
          {index < services.length - 1 && (
            <div className="hidden lg:block absolute -right-4 top-1/2 z-20">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-md group-hover:border-blue-300 transition-colors">
                <ArrowDownRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          )}

          {/* 卡片内容 */}
          <div className="relative p-8">
            {/* 头部：序号和图标 */}
            <div className="flex items-start justify-between mb-6">
              {/* 图标容器 */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
                {/* 光晕效果 */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`} />
              </div>
              
              {/* 步骤编号 */}
              <div className={`flex items-center gap-2 ${colors.light} px-3 py-1.5 rounded-full border ${colors.border}`}>
                <span className={`${colors.text} text-sm font-bold`}>0{index + 1}</span>
              </div>
            </div>

            {/* 标题 */}
            <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:bg-gradient-to-r group-hover:${colors.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
              {service.title}
            </h3>

            {/* 描述 */}
            <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
              {service.description}
            </p>

            {/* 特性标签 */}
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, fIndex) => (
                <motion.span
                  key={fIndex}
                  className={`relative px-3 py-1.5 ${colors.light} ${colors.text} text-sm font-medium rounded-full border ${colors.border} overflow-hidden group-hover:border-transparent transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10">{feature}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {feature}
                  </span>
                </motion.span>
              ))}
            </div>

            {/* 底部箭头指示 */}
            <div className="mt-6 flex items-center gap-2 text-slate-400 group-hover:text-blue-500 transition-colors">
              <span className="text-sm font-medium">了解更多</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 底部渐变线 */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export function ServicesSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* 多层背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      
      {/* 装饰性光晕 */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]" />
      
      {/* 点阵背景 */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* 标题区域 */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200/50 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600"></span>
            </span>
            <span className="text-cyan-700 text-sm font-semibold tracking-wide">核心服务</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            从市场进入到品牌建设
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            提供一站式跨境电商解决方案，覆盖出海全链路
          </p>
        </FadeIn>

        {/* 服务卡片网格 */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" 
          staggerDelay={0.12}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </StaggerContainer>

        {/* 底部CTA */}
        <FadeIn delay={0.5} className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group relative px-8 py-6 text-lg border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 overflow-hidden"
            >
              <Link href="/services">
                <span className="relative z-10">查看完整服务详情</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                {/* Hover背景效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </Link>
            </Button>
          </motion.div>
        </FadeIn>

        {/* 装饰性流程指示 */}
        <FadeIn delay={0.6} className="hidden lg:block mt-16">
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm">市场调研</span>
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-blue-300 to-cyan-300" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm">产品呈现</span>
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-cyan-300 to-indigo-300" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm">品牌塑造</span>
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-indigo-300 to-purple-300" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '1.5s' }} />
              <span className="text-sm">智能运营</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
