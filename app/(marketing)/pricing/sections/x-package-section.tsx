"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Diamond,
  Target,
  TrendingUp,
  Handshake,
  Sparkles,
  ArrowRight,
  Download,
  Star,
  Award,
  Globe,
  Zap,
  Rocket,
  Building2,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// 四大核心独特价值
const coreValues = [
  {
    icon: Diamond,
    title: "资产导向",
    description: "可溢价品牌资产",
    detail: "输出可复制、可溢价、可退出的品牌资产，聚焦长期可持续增长",
  },
  {
    icon: Target,
    title: "场景适配",
    description: "有店无店皆可",
    detail: "无需现有海外店铺基础，从0搭建或升级转型，灵活适配各种场景",
  },
  {
    icon: TrendingUp,
    title: "回报可期",
    description: "短期+长期收益",
    detail: "短期溢价20-50%，长期资产增值可用于融资、授权或出售",
  },
  {
    icon: Handshake,
    title: "共创模式",
    description: "风险共担",
    detail: "25.8万/年战略投资，效果分成绑定，仅在盈利后赚取分成",
  },
];

// 八大服务模块
const serviceModules = [
  { name: "品牌DNA", desc: "联合定义", icon: Award },
  { name: "全球IP", desc: "视觉全案", icon: Globe },
  { name: "店铺矩阵", desc: "渠道布局", icon: Building2 },
  { name: "选品", desc: "产品全球化", icon: Target },
  { name: "广告营销", desc: "全域曝光", icon: Zap },
  { name: "库存履约", desc: "全球履约", icon: Rocket },
  { name: "内容增长", desc: "资产沉淀", icon: Sparkles },
  { name: "专属团队", desc: "合伙人级", icon: Users },
];

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function XPackageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#020617" }}
    >
      {/* 背景效果 */}
      <div className="absolute inset-0">
        {/* 渐变叠加 */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/10 via-transparent to-transparent" />
        
        {/* 顶部光晕 */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245, 158, 11, 0.15), transparent)"
          }}
        />
        
        {/* 底部光晕 */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 120%, rgba(6, 182, 212, 0.1), transparent)"
          }}
        />

        {/* 粒子效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? "rgba(245, 158, 11, 0.4)" : "rgba(6, 182, 212, 0.4)",
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* 头部区域 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* VIP Badge */}
          <motion.div variants={itemVariants}>
            <Badge 
              className="mb-6 px-5 py-2 text-sm font-medium bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 border border-amber-500/30 backdrop-blur-sm hover:from-amber-500/30 hover:to-amber-600/30 transition-all duration-300"
            >
              <Star className="w-4 h-4 mr-2 fill-amber-400" />
              至尊合伙人方案 · 仅限2-5席/年
            </Badge>
          </motion.div>

          {/* 主标题 */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            联合运营品牌出海计划
          </motion.h2>

          {/* 分隔线 */}
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mb-6 rounded-full"
          />

          {/* 副标题 */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 font-light"
          >
            从代运营到品牌共创，从卖货人到品牌人
          </motion.p>
        </motion.div>

        {/* 四大核心价值展示 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              四大核心独特价值
            </h3>
            <p className="text-slate-400">合伙人级共创模式，与众不同</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* 顶部装饰线 */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  {/* 图标 */}
                  <div className="relative w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  
                  {/* 内容 */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-amber-400/80 text-sm font-medium mb-3">
                    {value.description}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {value.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 八大服务模块 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              八大服务模块
            </h3>
            <p className="text-slate-400">全链路品牌出海服务，一站式解决方案</p>
          </motion.div>

          {/* 服务模块网格 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceModules.map((module, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative p-5 rounded-xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30">
                  {/* 序号 */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-cyan-400">{index + 1}</span>
                  </div>
                  
                  {/* 图标 */}
                  <div className="mb-3">
                    <module.icon className="w-6 h-6 text-cyan-400/70" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {module.name}
                  </h4>
                  <p className="text-slate-400 text-sm">{module.desc}</p>
                </div>
                
                {/* 连接线 - 除了最后一个 */}
                {index < serviceModules.length - 1 && index % 4 !== 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA 定价区域 */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="relative max-w-3xl mx-auto"
          >
            {/* 玻璃态卡片 */}
            <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden">
              {/* 背景光效 */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245, 158, 11, 0.1), transparent)"
                }}
              />
              
              {/* 内容 */}
              <div className="relative text-center">
                <Badge 
                  className="mb-6 px-4 py-1.5 text-sm bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 border border-amber-500/30"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  战略投资级服务
                </Badge>
                
                {/* 价格 */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-slate-400">¥</span>
                    <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                      258,000
                    </span>
                    <span className="text-xl md:text-2xl text-slate-400">/年</span>
                  </div>
                </div>
                
                {/* 分隔线 */}
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-6" />
                
                {/* 合作条款 */}
                <p className="text-slate-300 mb-2">
                  最低合作期 <span className="text-amber-400 font-semibold">18个月</span>
                </p>
                <p className="text-slate-400 text-sm mb-8">
                  净利润 <span className="text-amber-400">25-35%</span> 分成 · 仅限 <span className="text-amber-400">2-5席/年</span>
                </p>
                
                {/* CTA 按钮 */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 group"
                  >
                    <Link href="/contact">
                      立即预约战略咨询
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/5 text-white hover:bg-white/10 border-white/20 hover:border-white/30 font-semibold px-8 py-6 text-base transition-all duration-300 backdrop-blur-sm"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    下载方案详情
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
